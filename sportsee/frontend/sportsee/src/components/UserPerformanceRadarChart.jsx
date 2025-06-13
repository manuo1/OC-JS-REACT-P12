import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import styles from "./UserPerformanceRadarChart.module.scss";

/**
 * Display a radar chart of user's performance metrics.
 *
 * The performance data contains a mapping of kind IDs to performance categories,
 * and a list of performance values for each kind.
 *
 * The chart sorts and translates these categories before displaying.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.performanceData - Data containing performance metrics
 * @param {Object.<string|number, string>} props.performanceData.kind - Mapping from numeric keys to activity types
 * @param {Array<{ kind: number, value: number }>} props.performanceData.data - List of performance values by kind
 *
 * @returns {JSX.Element}
 *
 * @example
 * <UserPerformanceRadarChart performanceData={data} />
 */
function UserPerformanceRadarChart({ performanceData }) {
  const kindTranslations = {
    cardio: "Cardio",
    energy: "Énergie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };

  const kindMap = Object.fromEntries(
    Object.entries(performanceData.kind).map(([key, value]) => [
      parseInt(key),
      kindTranslations[value] || value,
    ])
  );

  const customOrder = [6, 5, 4, 3, 2, 1];

  const sortedData = [...performanceData.data].sort(
    (a, b) => customOrder.indexOf(a.kind) - customOrder.indexOf(b.kind)
  );

  const formattedData = sortedData.map((item) => ({
    ...item,
    kindLabel: kindMap[item.kind],
  }));

  return (
    <div className={styles.performanceChart}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={formattedData} outerRadius="71%">
          <PolarGrid className={styles.polarGrid} radialLines={false} />
          <PolarAngleAxis
            dataKey="kindLabel"
            tickLine={false}
            className={styles.polarAngleAxis}
          />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar dataKey="value" className={styles.radar} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

UserPerformanceRadarChart.propTypes = {
  performanceData: PropTypes.shape({
    kind: PropTypes.objectOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        kind: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default UserPerformanceRadarChart;
