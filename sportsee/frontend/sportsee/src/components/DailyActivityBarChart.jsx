/**
 * DailyActivityBarChart.jsx
 *
 * Displays a bar chart showing the user's daily activity:
 * weight (kg) and calories burned (kCal) for each day.
 */

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
 * Custom tooltip for the daily activity chart.
 *
 * @param {Object} props
 * @param {boolean} props.active - Whether the tooltip is visible.
 * @param {Array} props.payload - The data payload for the hovered bars.
 * @returns {JSX.Element|null} Tooltip content or null if inactive.
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
 * Renders a bar chart displaying the user's daily weight and calorie burn.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.activityData - User activity data.
 * @param {number} props.activityData.userId - ID of the user.
 * @param {Array<{ day: string, kilogram: number, calories: number }>} props.activityData.sessions - Daily session data.
 * @returns {JSX.Element} The rendered bar chart component.
 */
function DailyActivityBarChart({ activityData }) {
  const transformedData = activityData.sessions.map((session) => ({
    day: new Date(session.day).getDate(),
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
