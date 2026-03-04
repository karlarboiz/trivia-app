import { useState } from "react";
import styles from "./StartQuiz.module.css";
// const url : string = "https://the-trivia-api.com/api/questions?limit=1&topics=history&difficulty=medium";
import QuizSettings from "../../components/QuizSettings/QuizSettings";
type Difficulty = "easy" | "medium" | "hard";
type Timer = 5 | 10 | 15;
const topics = [
  "General Knowledge",
  "Science",
  "History",
  "Sports",
  "Entertainment",
];

export default function StartQuiz () {
  const [totalItems, setTotalITems] = useState<number>(10);
  const [topics, setTopics] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [timer, setTimer] = useState<Timer>(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // onStart({
    //   amount,
    //   category,
    //   difficulty,
    // });
  };

  // const 

  return (
    <>
      <QuizSettings/>
      <div className={styles.container}>
      <h1 className={styles.title}>🎯 Welcome to the Trivia Challenge!</h1>
      <p className={styles.subtitle}>
        Choose your settings and test your knowledge!
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="totalItems">Number of Questions</label>
          <select
            id="totalItems"
            value={totalItems}
            onChange={(e) => setTotalITems(Number(e.target.value))}
          >
            {[5, 10, 15, 20].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
       <div className={styles.field}>
            <label>Topics</label>

            <div className={styles.checkboxGroup}>
                {topics.map((cat) => (
                <label key={cat} className={styles.checkboxLabel}>
                    <input
                    type="checkbox"
                    value={cat}
                    checked={topics.includes(cat)}
                    onChange={(e) => {
                        const value = e.target.value;

                        if (e.target.checked) {
                        setTopics([...topics, value]);
                        } else {
                        setTopics(
                            topics.filter((c) => c !== value)
                        );
                        }
                    }}
                    />
                    {cat}
                </label>
                ))}
            </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="difficulty">Difficulty</label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={(e) =>
              setDifficulty(e.target.value as Difficulty)
            }
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="timer">Timer</label>
          <select
            id="timer"
            value={difficulty}
            onChange={(e) =>
              setTimer(Number(e.target.value) as Timer)
            }
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">10</option>
          </select>
        </div>

        <button type="submit" className={styles.button}>
          🚀 Start Quiz
        </button>
      </form>
    </div>
    </>
  );
};


