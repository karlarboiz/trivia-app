import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const quizItems = useAppSelector(state => state.collectQuestionsSlice.value);
  const isInGame = quizItems.length > 0;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const next= () => setStep((prev) => prev + 1);
  const currentStep = steps[step];

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const baseUrl = "https://the-trivia-api.com/api/questions?limit=";
    const topicPart = "&categories=";
    const difficultyPart = "&difficulties=";

    const fixTopics = topics.map(topic=>topic.toLowerCase().replace(" ","_")).join(",");
    
    try{
      const fetchQuizResults = await fetch(baseUrl+totalItems+topicPart+fixTopics+difficultyPart+difficulty);
      console.log(baseUrl+totalItems+topicPart+fixTopics+difficultyPart+difficulty)
      const result = (await fetchQuizResults).json();
      const resultJson = await result;
      dispatch(collectQuestionsActions.collect(resultJson));
      navigate("/quiz-page/multiple-choice")
    }catch(error){

    }

  };

  // const 

  return (
    <>
      <QuizSettings totalItems={totalItems} topics={topics} difficulty={difficulty} timer={timer} isInGame={isInGame}/>
       <div className={styles.container}>
      <h1 className={styles.title}>🎯 Swipe to Configure</h1>

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
                      key={num}
                      onClick={() => {
                        setTotalItems(num as TotalItems);
                        next();
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

                <button className={styles.nextBtn} onClick={next}>
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
                      key={d}
                      onClick={() => {
                        setDifficulty(d as Difficulty);
                        next();
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


