/**
 * Class representing the user's activity data.
 */
class UserActivity {
  /**
   * Creates an instance of UserActivity.
   *
   * @param {Object} data - Raw user activity data.
   * @param {number} [data.userId] - The ID of the user.
   * @param {Array<Object>} [data.sessions] - Array of session objects.
   */
  constructor(data = {}) {
    const { userId = null, sessions = [] } = data;

    this.userId = userId;

    this.sessions = sessions.map((session = {}) => {
      const { day = null, kilogram = 0, calories = 0 } = session;

      return {
        day: day ? new Date(day) : null,
        kilogram,
        calories,
      };
    });
  }
}

export default UserActivity;
