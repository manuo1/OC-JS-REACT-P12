import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
//import userService from "../mocks/userService";
import userService from "../services/userService";
import styles from "./ProfilePage.module.scss";
import DailyActivityBarChart from "../components/DailyActivityBarChart";
import AverageSessionLineChart from "../components/AverageSessionLineChart";
import UserPerformanceRadarChart from "../components/UserPerformanceRadarChart";
import UserScoreRadialChart from "../components/UserScoreRadialChart";
import NutritionCard from "../components/NutritionCard";
import Loader from "../components/Loader";

/**
 * ProfilePage component.
 *
 * Displays the user's dashboard with various data visualizations
 * such as activity charts, session duration, performance, score,
 * and nutrition cards. Handles data fetching and error states.
 *
 * @component
 * @returns {JSX.Element} Rendered profile page or loader or error message
 */
function ProfilePage() {
  const { id: userId } = useParams();
  const [user, setUser] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [averageSessionData, setAverageSessionData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // Fetch user data on mount or when userId changes, redirect to 404 if fetch fails
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userData, userActivity, userAverageSessions, userPerformance] =
          await Promise.all([
            userService.getUserMainData(parseInt(userId)),
            userService.getUserActivity(parseInt(userId)),
            userService.getUserAverageSessions(parseInt(userId)),
            userService.getUserPerformance(parseInt(userId)),
          ]);
        setUser(userData);
        setActivityData(userActivity);
        setAverageSessionData(userAverageSessions);
        setPerformanceData(userPerformance);
      } catch (err) {
        console.error(err);
        if (err.status === 404) {
          setErrorMessage("Utilisateur inconnu");
        } else {
          setErrorMessage(
            "Une erreur est survenue lors du chargement des données."
          );
        }
      }
    };

    fetchData();
  }, [userId]);

  if (errorMessage) {
    return <div className={styles.error}>{errorMessage}</div>;
  }

  if (!user || !activityData || !averageSessionData || !performanceData)
    return <Loader />;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Bonjour{" "}
          <span className={styles.firstname}>{user.userInfos.firstName}</span>
        </h1>
        <p className={styles.encouragement}>
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>

      <div className={styles.dashboard}>
        <div className={styles.leftColumn}>
          <div className={styles.leftColumn__top}>
            <DailyActivityBarChart activityData={activityData} />
          </div>
          <div className={styles.leftColumn__bottom}>
            <div className={styles.leftColumn__bottom__element}>
              <AverageSessionLineChart sessionData={averageSessionData} />
            </div>
            <div className={styles.leftColumn__bottom__element}>
              <UserPerformanceRadarChart performanceData={performanceData} />
            </div>
            <div className={styles.leftColumn__bottom__element}>
              <UserScoreRadialChart score={user.score} />
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.rightColumn__center}>
            <div className={styles.rightColumn__center__element}>
              <NutritionCard
                type="calorieCount"
                value={user.keyData.calorieCount}
              />
            </div>
            <div className={styles.rightColumn__center__element}>
              <NutritionCard
                type="proteinCount"
                value={user.keyData.proteinCount}
              />
            </div>
            <div className={styles.rightColumn__center__element}>
              <NutritionCard
                type="carbohydrateCount"
                value={user.keyData.carbohydrateCount}
              />
            </div>
            <div className={styles.rightColumn__center__element}>
              <NutritionCard
                type="lipidCount"
                value={user.keyData.lipidCount}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
