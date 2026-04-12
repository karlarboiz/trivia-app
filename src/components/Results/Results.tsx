import type { QuizItemsModel } from "../../pages/QuizPageMC/quizpageMC-model";
import styles from "./Results.module.css";


type ResultsProps = {
  results: QuizItemsModel[];
};

export default function Results() {

    const results: QuizItemsModel[] = JSON.parse(
      localStorage.getItem("quizItems") || "[]"
    );

  
    const correctCount = results.filter(item => item.isCorrectAnswer).length;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quiz Results</h1>

      <div className={styles.summary}>
        <p>
          Score: <span>{correctCount}</span> / {results.length}
        </p>
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
  );
}