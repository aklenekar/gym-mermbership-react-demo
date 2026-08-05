import { getAuthToken } from "../util/auth";
import { API_BASE_URL } from "../util/constants";

async function handleResponse(response) {
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the events");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  return response.json();
}

export const profileService = {
  fetchProfile: async () => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/profile`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return handleResponse(response);
  },

  updateProfile: async (profile) => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/profile`, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(profile),
    });
    return handleResponse(response);
  },

  /** CREATE a brand‑new profile (sign‑up) */
  createProfile: async (profile) => {
    const response = await fetch(`${API_BASE_URL}/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    });

    return handleResponse(response);
  },

  upgradePlan: (plan) =>
    fetch(`${API_BASE_URL}/membership/upgrade`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getAuthToken(),
      },
      body: JSON.stringify({ plan }),
    }).then((res) => {
      if (!res.ok) throw new Error("Failed to upgrade plan");
      return res.json();
    }),
};

export const dashboardService = {
  fetchDashboard: async () => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/dashboard`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return handleResponse(response);
  },
};

export const classesService = {
  fetchClasses: async (filters) => {
    const token = getAuthToken();
    const queryParams = new URLSearchParams(filters).toString();

    const response = await fetch(`${API_BASE_URL}/classes?${queryParams}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return handleResponse(response);
  },

  bookClass: async (classId) => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/class/book/${classId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return handleResponse(response);
  },

  cancelClass: async (bookingId) => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/class/cancel/${bookingId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return handleResponse(response);
  },

  recommendedClasses: async () => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/classes/recommendations/v2`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return handleResponse(response);
  },
};

export const workoutService = {
  fetchWorkouts: async (filters) => {
    const token = getAuthToken();
    const queryParams = new URLSearchParams(filters).toString();

    const response = await fetch(`${API_BASE_URL}/workouts?${queryParams}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return handleResponse(response);
  },

  submitWorkout: async (payload) => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/workouts`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(payload),
    });
    return handleResponse(response);
  },
};

export const progressService = {
  fetchProgress: async () => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/progress`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "Application/JSON",
      },
    });
    return handleResponse(response);
  },
};

export const adminService = {
  fetchMembers: async (filters) => {
    const token = getAuthToken();
    const queryParams = new URLSearchParams(filters).toString();

    const response = await fetch(
      `${API_BASE_URL}/admin/members?${queryParams}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    );
    return handleResponse(response);
  },

  fetchTrainers: async (filters) => {
    const token = getAuthToken();
    const queryParams = new URLSearchParams(filters).toString();

    const response = await fetch(
      `${API_BASE_URL}/admin/trainers?${queryParams}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    );
    return handleResponse(response);
  },

  fetchTrainersList: async () => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/trainers/list`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return handleResponse(response);
  },

  fetchClasses: async (filters) => {
    const token = getAuthToken();
    const queryParams = new URLSearchParams(filters).toString();

    const response = await fetch(
      `${API_BASE_URL}/admin/classes?${queryParams}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    );
    return handleResponse(response);
  },

  fetchReports: async (filters) => {
    const token = getAuthToken();
    const queryParams = new URLSearchParams(filters).toString();

    const response = await fetch(
      `${API_BASE_URL}/admin/reports?${queryParams}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    );
    return handleResponse(response);
  },

  fetchDashboard: async () => {
    const token = getAuthToken();

    const response = await fetch(`${API_BASE_URL}/admin/dashboard`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return handleResponse(response);
  },

  fetchPricingPlans: async () => {
    const token = getAuthToken();

    const response = await fetch(`${API_BASE_URL}/membership/pricing`, {
      method: "GET"
    });
    return handleResponse(response);
  }
};

class AiAccessDeniedError extends Error {
  constructor() {
    super("AI_ACCESS_DENIED");
    this.name = "AiAccessDeniedError";
  }
}

async function aiFetch(url, options = {}) {
  const res = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (res.status === 403) {
    throw new AiAccessDeniedError();
  }
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }
  return res.json();
}

export const aiService = {
  recommendedWorkout: (payload) =>
    aiFetch(`${API_BASE_URL}/ai/workout/plan`, {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  recommendedNutrition: (payload) =>
    aiFetch(`${API_BASE_URL}/ai/nutrition/plan`, {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  recommendedClasses: () =>
    aiFetch(`${API_BASE_URL}/ai/recommend/classes`, { method: "POST" }),

  chat: (payload) => {
    // streaming endpoint - keep raw fetch, but still check status
    return fetch(`${API_BASE_URL}/ai/chat`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => {
      if (res.status === 403) throw new AiAccessDeniedError();
      return res;
    });
  },
};

export { AiAccessDeniedError };

export const trainerService = {
  fetchCandidates: async () => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/trainers/candidates`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return handleResponse(response);
  },

  fetchTrainerClasses: async () => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/trainers/classes`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return handleResponse(response);
  },
};

export const equipmentService = {
  // Equipment Endpoints
  fetchEquipment: async (filters = {}, page = 0, size = 10) => {
    const token = getAuthToken();
    const params = new URLSearchParams();

    if (filters.category && filters.category !== "ALL")
      params.append("category", filters.category);
    if (filters.status && filters.status !== "ALL")
      params.append("status", filters.status);
    if (filters.location) params.append("location", filters.location);
    if (filters.search) params.append("search", filters.search);
    params.append("page", page);
    params.append("size", size);

    const response = await fetch(
      `${API_BASE_URL}/admin/equipment?${params.toString()}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    );
    return handleResponse(response);
  },

  getEquipmentById: async (id) => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/admin/equipment/${id}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return handleResponse(response);
  },

  createEquipment: async (data) => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/admin/equipment`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  updateEquipment: async (id, data) => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/admin/equipment/${id}`, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  updateStatus: async (id, status) => {
    const token = getAuthToken();
    const response = await fetch(
      `${API_BASE_URL}/admin/equipment/${id}/status?status=${encodeURIComponent(status)}`,
      {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    );
    return handleResponse(response);
  },

  deleteEquipment: async (id) => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/admin/equipment/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return handleResponse(response);
  },

  fetchStats: async () => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/admin/equipment/stats`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return handleResponse(response);
  },

  // Maintenance Endpoints
  fetchMaintenanceRecords: async (equipmentId = null) => {
    const token = getAuthToken();
    const url = equipmentId
      ? `${API_BASE_URL}/admin/equipment/maintenance?equipmentId=${equipmentId}`
      : `${API_BASE_URL}/admin/equipment/maintenance`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return handleResponse(response);
  },

  scheduleMaintenance: async (data) => {
    const token = getAuthToken();
    const response = await fetch(
      `${API_BASE_URL}/admin/equipment/maintenance/schedule`,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    return handleResponse(response);
  },

  completeMaintenance: async (id, data) => {
    const token = getAuthToken();
    const response = await fetch(
      `${API_BASE_URL}/admin/equipment/maintenance/${id}/complete`,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    return handleResponse(response);
  },

  cancelMaintenance: async (id) => {
    const token = getAuthToken();
    const response = await fetch(
      `${API_BASE_URL}/admin/equipment/maintenance/${id}/cancel`,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    );
    return handleResponse(response);
  },

  fetchMaintenanceCalendar: async (startDate, endDate) => {
    const token = getAuthToken();
    const response = await fetch(
      `${API_BASE_URL}/admin/equipment/maintenance/calendar?startDate=${startDate}&endDate=${endDate}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    );
    return handleResponse(response);
  },

  fetchOverdueMaintenance: async () => {
    const token = getAuthToken();
    const response = await fetch(
      `${API_BASE_URL}/admin/equipment/maintenance/overdue`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    );
    return handleResponse(response);
  },
};

export const payrollService = {
  fetchSummary: async () => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/payroll/summary`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return handleResponse(response);
  },

  fetchAllRuns: async () => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/payroll/runs`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return handleResponse(response);
  },

  fetchMyPayroll: async () => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/payroll/me`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return handleResponse(response);
  },

  fetchConfig: async (trainerId) => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/payroll/config/${trainerId}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return handleResponse(response);
  },

  saveConfig: async (trainerId, configData) => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/payroll/config/${trainerId}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(configData),
    });
    return handleResponse(response);
  },

  generateRun: async (requestData) => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/payroll/generate`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });
    return handleResponse(response);
  },

  updateStatus: async (runId, status) => {
    const token = getAuthToken();
    const response = await fetch(
      `${API_BASE_URL}/payroll/runs/${runId}/status?status=${encodeURIComponent(status)}`,
      {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    );
    return handleResponse(response);
  },

  logCommission: async (commissionData) => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/payroll/commissions`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commissionData),
    });
    return handleResponse(response);
  },
};

export const chatService = {
  fetchConversations: async () => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/messages/conversations`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return handleResponse(response);
  },

  startConversation: async (targetUserId) => {
    const token = getAuthToken();
    const response = await fetch(
      `${API_BASE_URL}/messages/conversations/start`,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ targetUserId }),
      },
    );
    return handleResponse(response);
  },

  fetchMessageHistory: async (conversationId, page = 0, size = 30) => {
    const token = getAuthToken();
    const response = await fetch(
      `${API_BASE_URL}/messages/conversations/${conversationId}/messages?page=${page}&size=${size}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    );
    return handleResponse(response);
  },

  markAsRead: async (conversationId) => {
    const token = getAuthToken();
    const response = await fetch(
      `${API_BASE_URL}/messages/conversations/${conversationId}/read`,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    );
    if (!response.ok) {
      const error = new Error("Failed to mark conversation as read");
      error.code = response.status;
      throw error;
    }
    return true;
  },

  fetchUnreadCount: async () => {
    const token = getAuthToken();
    const response = await fetch(
      `${API_BASE_URL}/messages/conversations/unread-count`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    );
    return handleResponse(response);
  },
};
