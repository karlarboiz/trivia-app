import { useNavigate } from "react-router-dom";
import type { QuizItemsModel } from "../../pages/QuizPageMC/quizpageMC-model";
import { collectQuestionsActions } from "../../redux/collect-questions/collect-questions";
import { useAppDispatch } from "../../redux/hook";
import styles from "./Results.module.css";

export default function Results() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const results: QuizItemsModel[] = (() => {
    try {
      return JSON.parse(localStorage.getItem("quizItems") || "[]");
    } catch {
      return [];
    }
  })();

  const correctCount = results.filter((item) => item.isCorrectAnswer).length;
  const total = results.length;
  const percentage = total ? Math.round((correctCount / total) * 100) : 0;

  const handleRestart = () => {
    localStorage.removeItem("quizItems");
    dispatch(collectQuestionsActions.resetCollection());
    navigate("/");
  };

  return (
    <div className={styles.layout}>
      
      {/* LEFT SIDE */}
      <div className={styles.sidebar}>
        <button className={styles.restartBtn} onClick={handleRestart}>
          Restart Quiz
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Quiz Results</h1>
          <p className={styles.subtitle}>Here's how you performed 🎯</p>
        </div>

        <div className={styles.summary}>
          <p className={styles.score}>
            {correctCount} / {total}
          </p>
          <p className={styles.percentage}>{percentage}% Score</p>
        </div>

        <div className={styles.list}>
          {results.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.card} ${
                item.isCorrectAnswer ? styles.correct : styles.wrong
              }`}
            >
              <h3 className={styles.question}>
                {index + 1}. {item.question}
              </h3>

              <p className={styles.answer}>
                Your Answer: <span>{item.playerAnswer}</span>
              </p>

              

              <div className={styles.status}>
                {item.isCorrectAnswer ? "✅ Correct" : "❌ Wrong"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}