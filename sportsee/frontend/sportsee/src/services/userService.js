import { fetchJson } from "./fetchJson";

const BASE_URL = "http://localhost:3000/user";

const userService = {
  getUserMainData: async (userId) => {
    const json = await fetchJson(`${BASE_URL}/${userId}`);
    const data = json.data;

    return {
      ...data,
      score: data.todayScore ?? data.score,
    };
  },

  getUserActivity: async (userId) => {
    const json = await fetchJson(`${BASE_URL}/${userId}/activity`);
    return json.data;
  },

  getUserAverageSessions: async (userId) => {
    const json = await fetchJson(`${BASE_URL}/${userId}/average-sessions`);
    return json.data;
  },

  getUserPerformance: async (userId) => {
    const json = await fetchJson(`${BASE_URL}/${userId}/performance`);
    return json.data;
  },
};

export default userService;
