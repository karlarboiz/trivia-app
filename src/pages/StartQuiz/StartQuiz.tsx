import { useState } from "react";
import styles from "./StartQuiz.module.css";
// const url : string = "https://the-trivia-api.com/api/questions?limit=1&categories=history&difficulty=medium";

type Difficulty = "easy" | "medium" | "hard";

const categories = [
  "General Knowledge",
  "Science",
  "History",
  "Sports",
  "Entertainment",
];

export default function StartQuiz () {
  const [amount, setAmount] = useState<number>(10);
  const [categoriesSelected, setCategoriesSelected] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // onStart({
    //   amount,
    //   category,
    //   difficulty,
    // });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🎯 Welcome to the Trivia Challenge!</h1>
      <p className={styles.subtitle}>
        Choose your settings and test your knowledge!
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="amount">Number of Questions</label>
          <select
            id="amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          >
            {[5, 10, 15, 20].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
       <div className={styles.field}>
            <label>Category</label>

            <div className={styles.checkboxGroup}>
                {categories.map((cat) => (
                <label key={cat} className={styles.checkboxLabel}>
                    <input
                    type="checkbox"
                    value={cat}
                    checked={categoriesSelected.includes(cat)}
                    onChange={(e) => {
                        const value = e.target.value;

                        if (e.target.checked) {
                        setCategoriesSelected([...categoriesSelected, value]);
                        } else {
                        setCategoriesSelected(
                            categoriesSelected.filter((c) => c !== value)
                        );
                        }
                    }}
                    />
                    {cat}
                </label>
                ))}
            </div>
        </div>

        {/* Difficulty */}
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

        <button type="submit" className={styles.button}>
          🚀 Start Quiz
        </button>
      </form>
    </div>
  );
};


