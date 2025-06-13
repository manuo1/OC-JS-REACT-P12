import PropTypes from "prop-types";
import styles from "./NutritionCard.module.scss";
import calorieCountIcon from "../assets/nutrition_icons/calorieCount.png";
import carbohydrateCountIcon from "../assets/nutrition_icons/carbohydrateCount.png";
import lipidCountIcon from "../assets/nutrition_icons/lipidCount.png";
import proteinCountIcon from "../assets/nutrition_icons/proteinCount.png";

/**
 * Display a nutrition data card (calories, proteins, carbohydrates, lipids).
 *
 * Depending on the `type` prop, it shows the corresponding icon, label and unit.
 *
 * @component
 * @param {Object} props
 * @param {"calorieCount" | "proteinCount" | "carbohydrateCount" | "lipidCount"} props.type - Type of nutrition data to display
 * @param {number} props.value - Numerical value to display
 * @returns {JSX.Element|null} Rendered nutrition card or `null` if type is invalid
 *
 * @example
 * <NutritionCard type="calorieCount" value={1930} />
 */
function NutritionCard({ type, value }) {
  const nutritionConfig = {
    calorieCount: {
      icon: calorieCountIcon,
      label: "Calories",
      unit: "kCal",
    },
    proteinCount: {
      icon: proteinCountIcon,
      label: "Protéines",
      unit: "g",
    },
    carbohydrateCount: {
      icon: carbohydrateCountIcon,
      label: "Glucides",
      unit: "g",
    },
    lipidCount: {
      icon: lipidCountIcon,
      label: "Lipides",
      unit: "g",
    },
  };

  const config = nutritionConfig[type];

  if (!config) return null;

  const formattedValue = value.toLocaleString("en-GB");

  return (
    <div className={styles.nutritionCard}>
      <div className={styles.iconContainer}>
        <img src={config.icon} alt={config.label} className={styles.icon} />
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.value}>
          {formattedValue}
          {config.unit}
        </div>
        <div className={styles.label}>{config.label}</div>
      </div>
    </div>
  );
}

NutritionCard.propTypes = {
  type: PropTypes.oneOf([
    "calorieCount",
    "proteinCount",
    "carbohydrateCount",
    "lipidCount",
  ]).isRequired,
  value: PropTypes.number.isRequired,
};

export default NutritionCard;
