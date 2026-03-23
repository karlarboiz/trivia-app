import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import CustomLink from "../../components/Link/CustomLink";
import styles from "./Home.module.css";

export default function Home(){

    if(localStorage.getItem("quizItems")){
      localStorage.removeItem("quizItems");
    }

    return (
        <div className={styles.container}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Test Your Knowledge 🚀</h1>
        <p className={styles.subtitle}>
          Take exciting trivia quizzes, challenge yourself, and climb the leaderboard.
        </p>

        <div className={styles.buttons}>
          <Link to="/start-quiz" className={styles.primaryBtn}>
            <Button title="Start Quiz" type="primaryBtn"/>
          </Link>
          <CustomLink href="/about">About</CustomLink>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className={styles.features}>
        <div className={styles.card}>
          <h3>🎯 Multiple Categories</h3>
          <p>Choose from various topics and difficulty levels.</p>
        </div>

        <div className={styles.card}>
          <h3>🏆 Track Your Score</h3>
          <p>Monitor your progress and improve over time.</p>
        </div>

        <div className={styles.card}>
          <h3>⚡ Fast & Responsive</h3>
          <p>Enjoy smooth performance across all devices.</p>
        </div>
      </section>
    </div>
    )
}