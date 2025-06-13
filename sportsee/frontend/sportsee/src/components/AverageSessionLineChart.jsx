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

/**
 * Custom tooltip for the average session chart.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.active - Tooltip visibility.
 * @param {Array} props.payload - Data payload.
 * @returns {JSX.Element|null} The custom tooltip component.
 */
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return <div className={styles.sessionTooltip}>{payload[0].value} min</div>;
  }
  return null;
}

/**
 * Custom cursor for the line chart (highlighting hovered area).
 *
 * @param {Object} props - Component props.
 * @param {Array<{x: number, y: number}>} props.points - Points where the cursor is rendered.
 * @param {number} props.width - Width of the rectangle.
 * @returns {JSX.Element} The custom cursor component.
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
 * Renders a line chart showing the average duration of user sessions over the week.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.sessionData - Data for the chart.
 * @param {Array<{ day: string, sessionLength: number }>} props.sessionData.sessions - Session data per day.
 * @returns {JSX.Element} The line chart component.
 */
export default function AverageSessionLineChart({ sessionData }) {
  return (
    <div className={styles.averageSessionChart}>
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={sessionData.sessions}
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
        day: PropTypes.string.isRequired,
        sessionLength: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
