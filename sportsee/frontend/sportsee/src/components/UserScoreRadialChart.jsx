import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import styles from "./UserScoreRadialChart.module.scss";

/**
 * Display a radial bar chart representing the user's progress score.
 *
 * The score is expected to be a float between 0 and 1.
 * It is converted to a percentage and displayed as a filled arc.
 *
 * @component
 * @param {Object} props
 * @param {number} props.score - Score between 0 and 1 (e.g., 0.7 for 70%)
 * @returns {JSX.Element}
 *
 * @example
 * <UserScoreRadialChart score={0.85} />
 */
function UserScoreRadialChart({ score }) {
  const scorePercentage = Math.round(score * 100);

  const startAngle = 90;
  const endAngle = startAngle + (scorePercentage * 360) / 100;

  const data = [{ value: scorePercentage }];

  return (
    <div className={styles.scoreChart}>
      <div className={styles.chartTitle}>Score</div>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="80%"
          data={data}
          startAngle={startAngle}
          endAngle={endAngle}
        >
          <RadialBar
            dataKey="value"
            cornerRadius={10}
            className={styles.scoreFill}
            clockWise
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className={styles.scoreDisplay}>
        <div className={styles.scoreValue}>{scorePercentage}%</div>
        <div className={styles.scoreLabel}>de votre objectif</div>
      </div>
    </div>
  );
}

UserScoreRadialChart.propTypes = {
  score: PropTypes.number.isRequired,
};

export default UserScoreRadialChart;
