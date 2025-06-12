import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import styles from "./UserPerformanceRadarChart.module.scss";

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
          <PolarGrid stroke="#FFFFFF" radialLines={false} />
          <PolarAngleAxis
            dataKey="kindLabel"
            stroke="#FFFFFF"
            tickLine={false}
            className={styles.angleAxisTick}
          />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar
            dataKey="value"
            stroke="#FF0101B2"
            fill="#FF0101B2"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserPerformanceRadarChart;
