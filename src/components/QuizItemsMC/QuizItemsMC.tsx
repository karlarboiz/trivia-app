import { useState } from "react";
import type { QuizItemsModel } from "../../pages/QuizPageMC/quizpageMC-model";
import QuizSettings from "../QuizSettings/QuizSettings";
import type { QuizItemsMCModel } from "./quizitemsMC-model";
import styles from "./QuizItemsMC.module.css";

export default function QuizItemsMC({ incrementValue, quizItems, isInGame }: QuizItemsMCModel) {
  const [selected, setSelected] = useState<string | null>(null);
    console.log(incrementValue)
  // ✅ currentQuizItem is derived from props
  const currentQuizItem: QuizItemsModel | undefined = quizItems[incrementValue];

  const handleClick = (option: string) => {
    setSelected(option);
  };

  // ✅ Guard for undefined
  if (!currentQuizItem) {
    return <div>Loading question...</div>;
  }

  return (
    <>
      <QuizSettings 
        totalItems={quizItems.length} 
        topics={[currentQuizItem.category]} 
        difficulty={currentQuizItem.difficulty.toUpperCase()} 
        timer={5} 
        isInGame={isInGame} 
      />

      <h2 className={styles.question}>
        {currentQuizItem.question}
      </h2>

      <div className={styles.options}>
        {currentQuizItem.completeChoices.map((option, index) => (
          <button
            key={index}
            className={`${styles.optionBtn} ${
              selected === option ? styles.selected : ""
            }`}
            onClick={() => handleClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
}