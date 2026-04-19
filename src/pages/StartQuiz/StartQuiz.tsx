import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";
import QuizSettings from "../../components/QuizSettings/QuizSettings";
import { collectQuestionsActions } from "../../redux/collect-questions/collect-questions";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import CommonUtil from "../../Util/CommonUtil";
import styles from "./StartQuiz.module.css";

type Difficulty = "easy" | "medium" | "hard";
type Timer = 5 | 10 | 15;
type TotalItems = 5 | 10 | 15 |20;
const steps = ["items", "topics", "difficulty", "timer"];


export default function StartQuiz () {
  const [step, setStep] = useState(0);
  const [totalItems, setTotalItems] = useState<number>(10);
  const [topics, setTopics] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [timer, setTimer] = useState<Timer>(5);
  const [isFetch, setIsFetch] = useState(false);
  const quizItems = useAppSelector(state => state.collectQuestionsSlice.value);
  const isInGame = quizItems.length > 0;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const next= (step : string) => {
    setTimeout(()=>{
      step === "next" ? setStep((prev) => prev + 1) : setStep((prev) => prev - 1)
    },500)
  };
  const currentStep = steps[step];

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setIsFetch(true);
    const baseUrl = "https://the-trivia-api.com/api/questions?limit=";
    const topicPart = "&categories=";
    const difficultyPart = "&difficulties=";

    const fixTopics = topics.map(topic=>topic.toLowerCase().replace(" ","_")).join(",");
    
    try{
      const fetchQuizResults = await fetch(baseUrl+totalItems+topicPart+fixTopics+difficultyPart+difficulty);
      const result = (await fetchQuizResults).json();
      const resultJson = await result;
      dispatch(collectQuestionsActions.collect(resultJson));
      navigate("/quiz-page/multiple-choice")
    }catch(error){

    }

    setIsFetch(false);

  };

  return (
    <>
      <QuizSettings totalItems={totalItems} topics={topics} difficulty={difficulty} timer={timer} isInGame={isInGame}/>
      {isFetch && <Loading/>}
       <div className={styles.container}>
       {step > 0 &&  <Button title="" type={CommonUtil.ALTERNATE_BTN} onClick={(()=>next("prev"))} children={<FaArrowAltCircleLeft color="red" size="2em" />}/>}
        <div className={styles.cardWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              className={styles.card}
              initial={{ x: 300, opacity: 0, rotate: 10 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              exit={{ x: -300, opacity: 0, rotate: -10 }}
              transition={{ duration: 0.4 }}
            >
              {/* STEP 1 */}
              {currentStep === "items" && (
                <>
                  <h2>How many questions?</h2>
                  <div className={styles.options}>
                    {[5, 10, 15].map((num) => (
                      <button
                      className={num === totalItems ? styles.active : ""}
                        key={num}
                        onClick={() => {
                          setTotalItems(num as TotalItems);
                          next("next");
                        }}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* STEP 2 */}
              {currentStep === "topics" && (
                <>
                  <h2>Pick topics</h2>
                  <div className={styles.options}>
                    {CommonUtil.CATEGORY_TOPICS.map((topic) => (
                      <button
                        key={topic}
                        className={
                          topics.includes(topic) ? styles.active : ""
                        }
                        onClick={() => {
                          if (topics.includes(topic)) {
                            setTopics(topics.filter((t) => t !== topic));
                          } else {
                            setTopics([...topics, topic]);
                          }
                        }}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>

                  <button className={styles.nextBtn} onClick={()=>next("next")}>
                    Continue →
                  </button>
                </>
              )}

              {/* STEP 3 */}
              {currentStep === "difficulty" && (
                <>
                  <h2>Select difficulty</h2>
                  <div className={styles.options}>
                    {["easy", "medium", "hard"].map((d) => (
                      <button
                       className={d === difficulty ? styles.active : ""}
                        key={d}
                        onClick={() => {
                          setDifficulty(d as Difficulty);
                          next("next");
                        }}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* STEP 4 */}
              {currentStep === "timer" && (
                <>
                  <h2>Set timer</h2>
                  <div className={styles.options}>
                    {[5, 10, 15].map((t) => (
                      <button
                        className={
                          t === timer ? styles.active : ""
                        }
                        key={t}
                        onClick={() => setTimer(Number(t) as Timer)}
                      >
                        {t}s
                      </button>
                    ))}
                  </div>

                  <button className={styles.startBtn} onClick={handleSubmit}>
                    🚀 Start Quiz
                  </button>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
    </div>
    </>
  );
};


