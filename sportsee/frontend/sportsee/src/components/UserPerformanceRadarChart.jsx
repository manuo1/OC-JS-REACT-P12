/**
 * Radar chart component to display user performance data.
 * The data is sorted according to a custom order for better readability.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.performanceData - The user's performance data
 * @param {Array<Object>} props.performanceData.data - Array of performance metrics
 * @param {string} props.performanceData.data[].kindLabel - Label of the performance kind (e.g. "Cardio")
 * @param {number} props.performanceData.data[].value - Associated performance value
 *
 * @returns {JSX.Element} A radar chart component
 */

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

function UserPerformanceRadarChart({ performanceData }) {
  const customOrder = [
    "Intensité",
    "Vitesse",
    "Force",
    "Endurance",
    "Énergie",
    "Cardio",
  ];

  const sortedData = [...performanceData.data].sort(
    (a, b) =>
      customOrder.indexOf(a.kindLabel) - customOrder.indexOf(b.kindLabel)
  );

  return (
    <div className={styles.performanceChart}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={sortedData} outerRadius="71%">
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
    data: PropTypes.arrayOf(
      PropTypes.shape({
        kindLabel: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default UserPerformanceRadarChart;
