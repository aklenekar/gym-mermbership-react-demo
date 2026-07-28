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
};

export const aiService = {
  recommendedClasses: async () => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/ai/recommend/classes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return handleResponse(response);
  },
  recommendedWorkout: async (plan) => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/ai/workout/plan`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(plan),
    });
    return handleResponse(response);
  },
  recommendedNutrition: async (plan) => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/ai/nutrition/plan`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(plan),
    });
    return handleResponse(response);
  },
  chat: async (payload) => {
    const token = localStorage.getItem("token"); // Get your JWT
    return await fetch(`${API_BASE_URL}/ai/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });
  },
};

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
  }
}

export const equipmentService = {
  // Equipment Endpoints
  fetchEquipment: async (filters = {}, page = 0, size = 10) => {
    const token = getAuthToken();
    const params = new URLSearchParams();

    if (filters.category && filters.category !== "ALL") params.append("category", filters.category);
    if (filters.status && filters.status !== "ALL") params.append("status", filters.status);
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
    );
    return handleResponse(response);
  },
};