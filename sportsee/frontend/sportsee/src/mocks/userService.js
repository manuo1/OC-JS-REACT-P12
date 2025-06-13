import { mockData } from "./mockData";

/**
 * Helper to simulate network delay.
 * @param {number} ms Milliseconds to wait
 * @returns {Promise<void>}
 */
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Retrieve mocked data section for a user by ID.
 * Throws if no data found.
 *
 * @param {string} key - Section key in mockData (e.g. "users", "activities")
 * @param {number} userId - User ID
 * @returns {object} The user-specific data from the mock
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

const userService = {
  /**
   * Get main user data including key statistics.
   * Resolves after a short delay to simulate API response time.
   *
   * @param {number} userId
   * @returns {Promise<object>} User data with `score` normalized (todayScore or score)
   */
  getUserMainData: async (userId) => {
    await delay(500);
    const data = getMockedData("users", userId);
    return {
      ...data,
      score: data.todayScore ?? data.score,
    };
  },

  /**
   * Get user's daily activity data (sessions).
   *
   * @param {number} userId
   * @returns {Promise<object>} Activity data object with sessions array
   */
  getUserActivity: async (userId) => {
    return getMockedData("activities", userId);
  },

  /**
   * Get user's average session lengths per day.
   *
   * @param {number} userId
   * @returns {Promise<object>} Average sessions data
   */
  getUserAverageSessions: async (userId) => {
    return getMockedData("averageSessions", userId);
  },

  /**
   * Get user's performance data.
   *
   * @param {number} userId
   * @returns {Promise<object>} Performance data including kind mapping and values
   */
  getUserPerformance: async (userId) => {
    return getMockedData("performances", userId);
  },
};

export default userService;
