import Button from "../../components/Button/Button";
import QuizSettings from "../../components/QuizSettings/QuizSettings";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { multipleChoiceActions } from "../../redux/multiple-choice/multiple-choice-redux";
import CommonUtil from "../../Util/CommonUtil";

export default function QuizPageMC(){
    const dispatch = useAppDispatch();
    const itemNumber = useAppSelector(state => state.multipleChoiceSlice.value);
    const quizItems = useAppSelector(state => state.collectQuestionsSlice.value);
 
    function moveItem(){
        dispatch(multipleChoiceActions.incremented());
    }

    const totalItems =  2;
    const topics = ["hello"];
    const difficulty = "hard";
    const timer = 5;
    return <section>
       <QuizSettings totalItems={totalItems} topics={topics} difficulty={difficulty} timer={timer} />
        <h1>The Quiz Page starts here</h1>
        <Button title="Next" type={CommonUtil.SECONDARY_BTN} onClick={moveItem}/>
    </section>
}