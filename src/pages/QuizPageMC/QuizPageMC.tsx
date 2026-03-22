import { useEffect, useState } from "react";
import QuizItemsMC from "../../components/QuizItemsMC/QuizItemsMC";
import Timer from "../../components/Timer/Timer";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { multipleChoiceActions } from "../../redux/multiple-choice/multiple-choice-redux";
import type { QuizItemsModel } from "./quizpageMC-model";
import styles from "./QuizPageMC.module.css";

export default function QuizPageMC() {
  const [quizItems, setQuizItems] = useState<QuizItemsModel[]>([]);
  const dispatch = useAppDispatch();
  const itemNumber: number = useAppSelector(
    state => state.multipleChoiceSlice.value
  );

  useEffect(() => {
    const data: QuizItemsModel[] = JSON.parse(
      localStorage.getItem("quizItems") || "[]"
    );
    setQuizItems(data);
  }, []);

   const isInGame = itemNumber <= quizItems.length - 1;

  const moveItem = () => {
    if (isInGame) {
      dispatch(multipleChoiceActions.incremented());
    } else {
      console.log("Quiz finished!");
    }
  };

  if (quizItems.length === 0) return <div>Loading quiz...</div>;

 

  return (
    <section className={styles.quizContainer}>
      {/* reset timer for each new question */}
      <Timer key={itemNumber} duration={5} onTimeUp={moveItem} />

      {itemNumber < quizItems.length ? (
        <QuizItemsMC incrementValue={itemNumber} quizItems={quizItems} isInGame={isInGame}/>
      ) : (
        <div>Quiz Finished! 🎉</div>
      )}
    </section>
  );
}