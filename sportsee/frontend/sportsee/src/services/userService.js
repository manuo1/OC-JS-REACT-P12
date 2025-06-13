import { fetchJson } from "./fetchJson";

const BASE_URL = "http://localhost:3000/user";

/**
 * Service providing user-related API calls.
 */
const userService = {
  /**
   * Fetch main user data by userId.
   * Normalizes the score field to use todayScore if available.
   *
   * @async
   * @param {number|string} userId - The ID of the user to fetch data for.
   * @returns {Promise<Object>} User main data object including normalized score.
   */
  getUserMainData: async (userId) => {
    const json = await fetchJson(`${BASE_URL}/${userId}`);
    const data = json.data;

    return {
      ...data,
      score: data.todayScore ?? data.score,
    };
  },

  /**
   * Fetch user activity data by userId.
   *
   * @async
   * @param {number|string} userId - The ID of the user.
   * @returns {Promise<Object>} User activity data.
   */
  getUserActivity: async (userId) => {
    const json = await fetchJson(`${BASE_URL}/${userId}/activity`);
    return json.data;
  },

  /**
   * Fetch user average sessions data by userId.
   *
   * @async
   * @param {number|string} userId - The ID of the user.
   * @returns {Promise<Object>} User average sessions data.
   */
  getUserAverageSessions: async (userId) => {
    const json = await fetchJson(`${BASE_URL}/${userId}/average-sessions`);
    return json.data;
  },

  /**
   * Fetch user performance data by userId.
   *
   * @async
   * @param {number|string} userId - The ID of the user.
   * @returns {Promise<Object>} User performance data.
   */
  getUserPerformance: async (userId) => {
    const json = await fetchJson(`${BASE_URL}/${userId}/performance`);
    return json.data;
  },
};

export default userService;
