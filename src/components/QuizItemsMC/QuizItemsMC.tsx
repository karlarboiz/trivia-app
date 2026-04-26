import bcrypt from "bcryptjs-react";
import { useState } from "react";
import type { QuizItemsModel } from "../../pages/QuizPageMC/quizpageMC-model";
import { collectQuestionsActions } from "../../redux/collect-questions/collect-questions";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { multipleChoiceActions } from "../../redux/multiple-choice/multiple-choice-redux";
import QuizSettings from "../QuizSettings/QuizSettings";
import type { QuizItemsMCModel } from "./quizitemsMC-model";
import styles from "./QuizItemsMC.module.css";

export default function QuizItemsMC({
  incrementValue,
  quizItems,
  isInGame,
}: QuizItemsMCModel) {
  const [selected, setSelected] = useState<string | null>(null);
  const currentQuizItem: QuizItemsModel | undefined = quizItems[incrementValue];
  const dispatch = useAppDispatch();
  const currentItemNumber = useAppSelector(state=>state.multipleChoiceSlice.value);
  
  const handleClick = async(answer: string) => {
    const quizItem = quizItems[currentItemNumber];

    const isCorrectAnswer = await bcrypt.compare(answer, quizItem.correctAnswer);
    setSelected(answer);
    dispatch(multipleChoiceActions.checkAnswer({answer,
      isCorrectAnswer
    }));

    if(!isInGame){
      localStorage.removeItem("quizItems");
      dispatch(collectQuestionsActions.resetCollection());
    }
    
  };

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