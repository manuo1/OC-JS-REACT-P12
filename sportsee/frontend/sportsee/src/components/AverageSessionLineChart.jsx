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

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return <div className={styles.sessionTooltip}>{payload[0].value} min</div>;
  }
  return null;
}

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
        day: PropTypes.number,
        sessionLength: PropTypes.number,
      })
    ).isRequired,
  }),
};
