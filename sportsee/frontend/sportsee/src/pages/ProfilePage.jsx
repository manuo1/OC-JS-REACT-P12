import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import userService from "../mocks/userService";
import styles from "./ProfilePage.module.scss";

function ProfilePage() {
  const { id: userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    userService.getUserMainData(parseInt(userId)).then((data) => setUser(data));
  }, [userId]);

  if (!user) return <div>Loading...</div>;

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
          <div className={styles.leftColumn__top}>leftColumn__top</div>
          <div className={styles.leftColumn__bottom}>
            <div className={styles.leftColumn__bottom__element}>
              leftColumn__bottom__left
            </div>
            <div className={styles.leftColumn__bottom__element}>
              leftColumn__bottom__center
            </div>
            <div className={styles.leftColumn__bottom__element}>
              leftColumn__bottom__right
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.rightColumn__center}>
            <div className={styles.rightColumn__center__element}>
              leftColumn__bottom__left
            </div>
            <div className={styles.rightColumn__center__element}>
              leftColumn__bottom__center
            </div>
            <div className={styles.rightColumn__center__element}>
              leftColumn__bottom__right
            </div>
            <div className={styles.rightColumn__center__element}>
              leftColumn__bottom__right
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
