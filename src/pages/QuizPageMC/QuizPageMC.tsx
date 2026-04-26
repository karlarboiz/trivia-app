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

   const isInGame = itemNumber <= quizItems.length - 1;

  const moveItem = () => {
    
    if (isInGame) {
      dispatch(multipleChoiceActions.incremented());
      return;
    }
  };

  const clickedMonitoring =()=>{
    console.log('im clicked');
  }


  if (quizItems.length === 0) return <div>Loading quiz...</div>;

  return (
    <section className={styles.quizContainer}>
      {isInGame? (
        <>
        <Timer key={itemNumber} duration={5} onTimeUp={moveItem} />
        <QuizItemsMC incrementValue={itemNumber} quizItems={quizItems} isInGame={isInGame} onClickedMonitoring={clickedMonitoring}/>
        </>
      ) : (
        <Results />
      )}
    </section>
  );
}