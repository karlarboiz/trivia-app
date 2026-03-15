
import { useState } from "react";
import Button from "../../components/Button/Button";
import QuizSettings from "../../components/QuizSettings/QuizSettings";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { multipleChoiceActions } from "../../redux/multiple-choice/multiple-choice-redux";
import CommonUtil from "../../Util/CommonUtil";
import type { QuizItemsModel } from "./quizpageMC-model";
import styles from "./QuizPageMC.module.css";

export default function QuizPageMC(){
    const [selected, setSelected] = useState<string | null>(null);
    const dispatch = useAppDispatch();
    const itemNumber = useAppSelector(state => state.multipleChoiceSlice.value);
    const quizItems = useAppSelector(state => state.collectQuestionsSlice.value);
    const isInGame = quizItems.length > 0;
    const currentItem : QuizItemsModel = quizItems[itemNumber];
    const question : string = currentItem.question;
    const options = [...currentItem.incorrectAnswers, currentItem.correctAnswer];

    const handleClick = (option: string) => {
        setSelected(option);
    };
    
    function moveItem(){
        dispatch(multipleChoiceActions.incremented());
    }

    const topics = ["hello"];
    const difficulty = "hard";
    const timer = 5;
    return <section className={styles.quizContainer}>
         <QuizSettings totalItems={itemNumber} topics={topics} difficulty={difficulty} timer={timer} isInGame={isInGame} />
      <h2 className={styles.question}>{question}</h2>

      <div className={styles.options}>
        {options.map((option, index) => (
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

      <Button title="Next" type={CommonUtil.SECONDARY_BTN} onClick={moveItem}/>
    </section>
}