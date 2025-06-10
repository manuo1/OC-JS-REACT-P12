import { mockData } from "./mockData";

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
  getUserMainData: async (userId) => {
    const data = getMockedData("users", userId);
    return {
      ...data,
      todayScore: data.todayScore ?? data.score,
    };
  },

  getUserActivity: async (userId) => {
    return getMockedData("activities", userId);
  },

  getUserAverageSessions: async (userId) => {
    return getMockedData("averageSessions", userId);
  },

  getUserPerformance: async (userId) => {
    return getMockedData("performances", userId);
  },
};

export default userService;
