import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles["nav"]}>
      <div className={styles["logo"]}><Link to="/" className={styles["link"]}>Trivia</Link></div>
      <ul className={styles["navLinks"]}>
        <li><Link to="/about" className={styles["link"]}>About</Link></li>
        <li><Link to="/start-quiz" className={styles["link"]}>Start Quiz</Link></li>
      </ul>
    </nav>
  );
}
