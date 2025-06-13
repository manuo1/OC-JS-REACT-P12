import { mockData } from "./mockData";
// import { mockData } from "./mockData";
import User from "../models/User";
import UserActivity from "../models/UserActivity";
import UserAverageSessions from "../models/UserAverageSessions";
import UserPerformance from "../models/UserPerformance";

/**
 * Simulate a delay to mimic async calls (e.g., network latency).
 * @param {number} ms - Delay in milliseconds.
 * @returns {Promise<void>}
 */
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Retrieve mock data from the dataset by section and userId.
 * Throws an error if data is missing.
 * @param {string} key - The data section key (e.g., "users").
 * @param {number|string} userId - The user ID.
 * @returns {object} The corresponding mock data.
 * @throws {Error} If no data found for given userId in the section.
 */
function getMockedData(key, userId) {
  const sectionData = mockData[key];
  const userData = sectionData?.[userId];

  if (!userData) {
    throw new Error(`No mock data found in "${key}" for user ID ${userId}`);
  }
  console.warn("Development Mocked Data");
  return userData;
}

/**
 * Mock service to fetch user data and instantiate model classes.
 */
const userService = {
  /**
   * Get main user data by ID.
   * @param {number|string} userId - The user ID.
   * @returns {Promise<User>} Resolves with a User instance.
   */
  getUserMainData: async (userId) => {
    await delay(500);
    const data = getMockedData("users", userId);
    return new User(data);
  },

  /**
   * Get user activity data by ID.
   * @param {number|string} userId - The user ID.
   * @returns {Promise<UserActivity>} Resolves with a UserActivity instance.
   */
  getUserActivity: async (userId) => {
    const data = getMockedData("activities", userId);
    return new UserActivity(data);
  },

  /**
   * Get user average sessions data by ID.
   * @param {number|string} userId - The user ID.
   * @returns {Promise<UserAverageSessions>} Resolves with a UserAverageSessions instance.
   */
  getUserAverageSessions: async (userId) => {
    const data = getMockedData("averageSessions", userId);
    return new UserAverageSessions(data);
  },

  /**
   * Get user performance data by ID.
   * @param {number|string} userId - The user ID.
   * @returns {Promise<UserPerformance>} Resolves with a UserPerformance instance.
   */
  getUserPerformance: async (userId) => {
    const data = getMockedData("performances", userId);
    return new UserPerformance(data);
  },
};

export default userService;
