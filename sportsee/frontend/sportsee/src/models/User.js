/**
 * Class representing the main user data.
 */
class User {
  /**
   * Create a User.
   * @param {Object} data - Raw user data from the API.
   * @param {number} [data.id] - User ID.
   * @param {Object} [data.userInfos] - User profile info.
   * @param {string} [data.userInfos.firstName] - User's first name.
   * @param {string} [data.userInfos.lastName] - User's last name.
   * @param {number} [data.userInfos.age] - User's age.
   * @param {number} [data.todayScore] - User's today's score.
   * @param {number} [data.score] - Fallback score key.
   * @param {Object} [data.keyData] - User's key nutritional data.
   * @param {number} [data.keyData.calorieCount] - Calories.
   * @param {number} [data.keyData.proteinCount] - Proteins.
   * @param {number} [data.keyData.carbohydrateCount] - Carbs.
   * @param {number} [data.keyData.lipidCount] - Lipids.
   */
  constructor(data = {}) {
    const { id = null, userInfos = {}, todayScore, score } = data;

    const { firstName = "", lastName = "", age = null } = userInfos;

    const safeKeyData =
      data.keyData && typeof data.keyData === "object" ? data.keyData : {};

    const {
      calorieCount = 0,
      proteinCount = 0,
      carbohydrateCount = 0,
      lipidCount = 0,
    } = safeKeyData;

    this.id = id;

    this.userInfos = {
      firstName,
      lastName,
      age,
    };

    this.score = todayScore ?? score ?? 0;

    this.keyData = {
      calorieCount,
      proteinCount,
      carbohydrateCount,
      lipidCount,
    };
  }
}

export default User;
