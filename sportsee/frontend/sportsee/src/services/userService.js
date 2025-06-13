import { fetchJson } from "./fetchJson";
import User from "../models/User";
import UserActivity from "../models/UserActivity";
import UserAverageSessions from "../models/UserAverageSessions";
import UserPerformance from "../models/UserPerformance";

const BASE_URL = "http://localhost:3000/user";

/**
 * Service to fetch and instantiate user-related data models from API.
 */
const userService = {
  /**
   * Fetch main user data by ID.
   * @param {number|string} userId - The user ID.
   * @returns {Promise<User>} Resolves to a User instance.
   */
  getUserMainData: async (userId) => {
    const json = await fetchJson(`${BASE_URL}/${userId}`);
    return new User(json.data);
  },

  /**
   * Fetch user activity data by ID.
   * @param {number|string} userId - The user ID.
   * @returns {Promise<UserActivity>} Resolves to a UserActivity instance.
   */
  getUserActivity: async (userId) => {
    const json = await fetchJson(`${BASE_URL}/${userId}/activity`);
    return new UserActivity(json.data);
  },

  /**
   * Fetch user average sessions data by ID.
   * @param {number|string} userId - The user ID.
   * @returns {Promise<UserAverageSessions>} Resolves to a UserAverageSessions instance.
   */
  getUserAverageSessions: async (userId) => {
    const json = await fetchJson(`${BASE_URL}/${userId}/average-sessions`);
    return new UserAverageSessions(json.data);
  },

  /**
   * Fetch user performance data by ID.
   * @param {number|string} userId - The user ID.
   * @returns {Promise<UserPerformance>} Resolves to a UserPerformance instance.
   */
  getUserPerformance: async (userId) => {
    const json = await fetchJson(`${BASE_URL}/${userId}/performance`);
    return new UserPerformance(json.data);
  },
};

export default userService;
