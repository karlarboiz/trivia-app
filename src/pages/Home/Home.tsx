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
      <section className={styles.hero}>
        <p className={styles.badge}>Interactive learning made fun</p>
        <h1 className={styles.title}>Test Your Knowledge 🚀</h1>
        <p className={styles.subtitle}>
          Take fast, exciting trivia quizzes, challenge yourself, and improve every round.
        </p>

        <div className={styles.buttons}>
          <Link to="/start-quiz" className={styles.primaryBtn}>
            <Button title="Start Quiz" type="primaryBtn"/>
          </Link>
          <CustomLink href="/about">About</CustomLink>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.card}>
          <h3>🎯 Multiple Categories</h3>
          <p>Pick topics and difficulty that match your pace.</p>
        </div>

        <div className={styles.card}>
          <h3>🏆 Track Your Score</h3>
          <p>See your progress and push for higher scores.</p>
        </div>

        <div className={styles.card}>
          <h3>⚡ Fast & Responsive</h3>
          <p>Enjoy smooth gameplay across desktop and mobile.</p>
        </div>
      </section>
    </div>
    )
}