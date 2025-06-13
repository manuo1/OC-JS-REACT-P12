import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import styles from "./DailyActivityBarChart.module.scss";

/**
 * Custom tooltip component for the daily activity bar chart.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.active - Whether the tooltip is active (visible).
 * @param {Array} props.payload - The data payload for the tooltip.
 * @returns {JSX.Element|null} Rendered tooltip or null if inactive.
 */
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <p className={styles.tooltip_data}>{`${payload[0].value}kg`}</p>
        <p className={styles.tooltip_data}>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
  return null;
}

/**
 * Displays a bar chart representing the user's daily activity (weight and calories).
 *
 * @param {Object} props - Component props.
 * @param {Object} props.activityData - User activity data.
 * @param {Array<Object>} props.activityData.sessions - Array of activity sessions.
 * @param {string} props.activityData.sessions[].day - Date string representing the day of the session.
 * @param {number} props.activityData.sessions[].kilogram - Weight in kilograms.
 * @param {number} props.activityData.sessions[].calories - Calories burned.
 * @returns {JSX.Element} Rendered bar chart component.
 */
function DailyActivityBarChart({ activityData }) {
  const transformedData = activityData.sessions.map((session) => ({
    day: session.day ? new Date(session.day).getDate() : "?",
    kilogram: session.kilogram,
    calories: session.calories,
  }));

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Activité quotidienne</h2>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={styles.legendIconKg}></span>
            <span>Poids (kg)</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.legendIconCalories}></span>
            <span>Calories brûlées (kCal)</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="65%">
        <BarChart
          data={transformedData}
          margin={{ top: 5, right: 2, left: 5, bottom: 5 }}
          barCategoryGap="35%"
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#DEDEDE"
            vertical={false}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 14, fill: "#9B9EAC", dy: 15 }}
          />
          <YAxis
            yAxisId="kg"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 14, fill: "#9B9EAC" }}
            domain={["dataMin - 1", "dataMax + 1"]}
            allowDecimals={false}
          />
          <YAxis
            yAxisId="calories"
            orientation="left"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 14, fill: "#9B9EAC" }}
            allowDecimals={false}
            hide
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
            barSize={7}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#E60000"
            radius={[3, 3, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

DailyActivityBarChart.propTypes = {
  activityData: PropTypes.shape({
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string.isRequired,
        kilogram: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default DailyActivityBarChart;
