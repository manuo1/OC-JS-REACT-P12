import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import styles from "./UserScoreRadialChart.module.scss";

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
            fill="#FF0000"
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

export default UserScoreRadialChart;
