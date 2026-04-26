import { useState } from "react";
import QuizItemsMC from "../../components/QuizItemsMC/QuizItemsMC";
import Results from "../../components/Results/Results";
import Timer from "../../components/Timer/Timer";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { multipleChoiceActions } from "../../redux/multiple-choice/multiple-choice-redux";
import type { QuizItemsModel } from "./quizpageMC-model";
import styles from "./QuizPageMC.module.css";
export default function QuizPageMC() {
  const [quizItems] = useState<QuizItemsModel[]>(() =>
    JSON.parse(localStorage.getItem("quizItems") || "[]")
  );
  const dispatch = useAppDispatch();
  const itemNumber: number = useAppSelector(
    state => state.multipleChoiceSlice.value
  );
  const settings = useAppSelector(state => state.settingsCollectionSlice);

  const isInGame = itemNumber <= quizItems.length - 1;

  const moveItem = () => {
    if (isInGame) {
      dispatch(multipleChoiceActions.incremented());
    }
  };

  if (quizItems.length === 0) return <div>Loading quiz...</div>;

  return (
    <section className={styles.quizContainer}>
      {isInGame ? (
        <div key={itemNumber} className={styles.questionTransition}>
          <Timer key={itemNumber} duration={settings.timer} onTimeUp={moveItem} />
          <QuizItemsMC
            incrementValue={itemNumber}
            quizItems={quizItems}
            isInGame={isInGame}
          />
        </div>
      ) : (
        <Results />
      )}
    </section>
  );
}