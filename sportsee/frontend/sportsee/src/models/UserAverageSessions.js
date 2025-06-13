/**
 * Represents the average duration of user sessions for each day of the week.
 */
class UserAverageSessions {
  /**
   * Creates a new instance of UserAverageSessions.
   *
   * @param {Object} data - The raw data object from the API.
   * @param {number} [data.userId] - The ID of the user.
   * @param {Array<Object>} [data.sessions] - An array of session objects.
   */
  constructor(data = {}) {
    /** @type {number|null} */
    this.userId = data.userId ?? null;

    /**
     * Array of sessions with translated day labels.
     * @type {Array<{ day: string, sessionLength: number }>}
     */
    this.sessions = (data.sessions ?? []).map((session = {}) => {
      const { day = 0, sessionLength = 0 } = session;

      const dayLabels = ["L", "M", "M", "J", "V", "S", "D"];
      const label = day >= 1 && day <= 7 ? dayLabels[day - 1] : "?";

      return {
        day: label,
        sessionLength,
      };
    });
  }
}

export default UserAverageSessions;
