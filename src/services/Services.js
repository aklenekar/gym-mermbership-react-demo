import { getAuthToken } from "../util/auth";
import { API_BASE_URL } from "../util/constants";

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
