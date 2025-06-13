/**
 * Class representing a user's performance metrics.
 * Transforms raw performance data by translating kind labels into French and associating values.
 */
class UserPerformance {
  /**
   * Create a UserPerformance instance.
   *
   * @param {Object} data - Raw performance data
   * @param {number} [data.userId=null] - The ID of the user
   * @param {Object.<string, string>} [data.kind={}] - Object mapping kind indices to kind keys (e.g., { "1": "cardio" })
   * @param {Array<Object>} [data.data=[]] - Array of performance entries
   * @param {number} data.data[].value - Numeric performance value
   * @param {number|string} data.data[].kind - Index of the kind (corresponds to a key in `data.kind`)
   */
  constructor(data = {}) {
    const kindTranslations = {
      cardio: "Cardio",
      energy: "Énergie",
      endurance: "Endurance",
      strength: "Force",
      speed: "Vitesse",
      intensity: "Intensité",
    };

    this.userId = data.userId ?? null;

    const rawKind = data.kind ?? {};

    this.kind = Object.fromEntries(
      Object.entries(rawKind).map(([key, value]) => [
        key,
        kindTranslations[value] || value,
      ])
    );

    this.data = Array.isArray(data.data)
      ? data.data.map((entry = {}) => ({
          kindLabel: this.kind[entry.kind] ?? entry.kind ?? "?",
          value: entry.value ?? 0,
        }))
      : [];
  }
}

export default UserPerformance;
