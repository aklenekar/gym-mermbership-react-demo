import { getAuthToken } from "../util/auth";
import { API_BASE_URL } from "../util/constants";

export const profileService = {
  fetchProfile: async () => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/profile`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!response.ok) {
      const error = new Error("An error occurred while fetching the events");
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
    return response.json();
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
    if (!response.ok) {
      const error = new Error("An error occurred while submitting the workout");
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
    return response.json();
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

    if (!response.ok) {
      const error = new Error("Failed to create profile");
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
    return response.json();
  },
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
    if (!response.ok) {
      const error = new Error("An error occurred while fetching the events");
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
    return response.json();
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
    if (!response.ok) {
      const error = new Error("An error occurred while fetching the events");
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
    return response.json();
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
    if (!response.ok) {
      const error = new Error("An error occurred while fetching the events");
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
    return response.json();
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
    if (!response.ok) {
      const error = new Error("An error occurred while fetching the events");
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
    return response.json();
  },

  recommendedClasses: async () => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/classes/recommendations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (!response.ok) {
      const error = new Error("An error occurred while fetching the events");
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
    return response.json();
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
    if (!response.ok) {
      const error = new Error("An error occurred while fetching the events");
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
    return response.json();
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
    if (!response.ok) {
      const error = new Error("An error occurred while submitting the workout");
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
    return response.json();
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
    if (!response.ok) {
      const error = new Error("An error occurred while submitting the workout");
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
    return response.json();
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
    if (!response.ok) {
      const error = new Error("An error occurred while fetching the events");
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
    return response.json();
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
    if (!response.ok) {
      const error = new Error("An error occurred while fetching the events");
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
    return response.json();
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
    if (!response.ok) {
      const error = new Error("An error occurred while fetching the events");
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
    return response.json();
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
    if (!response.ok) {
      const error = new Error("An error occurred while fetching the events");
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
    return response.json();
  },

  fetchDashboard: async () => {
    const token = getAuthToken();

    const response = await fetch(
      `${API_BASE_URL}/admin/dashboard`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    );
    if (!response.ok) {
      const error = new Error("An error occurred while fetching the events");
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
    return response.json();
  },
};
