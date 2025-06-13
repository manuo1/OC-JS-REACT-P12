/**
 * AverageSessionLineChart.jsx
 *
 * Displays the average duration of user sessions over a week as a line chart.
 */

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import PropTypes from "prop-types";
import styles from "./AverageSessionLineChart.module.scss";

const dayLabels = ["L", "M", "M", "J", "V", "S", "D"];

/**
 * Custom tooltip component for the session chart.
 *
 * @param {Object} props
 * @param {boolean} props.active - Whether the tooltip is active.
 * @param {Array} props.payload - Data payload from Recharts.
 * @returns {JSX.Element|null} Tooltip content or null.
 */
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return <div className={styles.sessionTooltip}>{payload[0].value} min</div>;
  }
  return null;
}

/**
 * Custom cursor component that renders a rectangle overlay on hover.
 *
 * @param {Object} props
 * @param {Array} props.points - The hover point coordinates.
 * @param {number} props.width - The width of the cursor rectangle.
 * @returns {JSX.Element} Rectangle overlay.
 */
function CustomCursor({ points, width }) {
  return (
    <Rectangle
      fill="rgba(0, 0, 0, 0.1)"
      x={points[0].x}
      y={0}
      width={width}
      height={400}
    />
  );
}

/**
 * Renders the average session line chart.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.sessionData - Object containing session data.
 * @param {Array<{ day: number, sessionLength: number }>} props.sessionData.sessions - List of session entries.
 * @returns {JSX.Element} The rendered line chart component.
 */
export default function AverageSessionLineChart({ sessionData }) {
  const formattedData = sessionData.sessions.map((session) => ({
    day: dayLabels[session.day - 1],
    sessionLength: session.sessionLength,
  }));

  return (
    <div className={styles.averageSessionChart}>
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedData}
          margin={{ top: 60, right: 0, left: 0, bottom: 13 }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="rgba(255,255,255,1)" />
              <stop offset="80%" stopColor="rgba(255,255,255,0.4)" />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#ffffffa0", fontSize: 12 }}
            padding={{ left: 10, right: 10 }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={<CustomCursor width={400} />}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#lineGradient)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 2.5,
              stroke: "#FFF",
              strokeWidth: 10,
              fill: "#FFF",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

AverageSessionLineChart.propTypes = {
  sessionData: PropTypes.shape({
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number.isRequired,
        sessionLength: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
