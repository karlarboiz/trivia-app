import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hook";
import { multipleChoiceActions } from "../../redux/multiple-choice/multiple-choice-redux";
import styles from "./Timer.module.css";
multipleChoiceActions
interface TimerProps {
  duration: number; // duration in milliseconds
  onTimeUp: () => void;
}

export default function Timer({ duration, onTimeUp }: TimerProps) {
    
  const [timeLeft, setTimeLeft] = useState(duration * 1000);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 100);
    }, 100);
    dispatch(multipleChoiceActions.incremented());

    return () => clearInterval(interval);
  }, [timeLeft, onTimeUp]);

  const seconds = Math.floor(timeLeft / 1000);
  const milliseconds = Math.floor((timeLeft % 1000) / 10);

  return (
    <div className={styles.timer}>
      <span className={styles.seconds}>{seconds}</span>
      <span className={styles.separator}>.</span>
      <span className={styles.milliseconds}>
        {milliseconds.toString().padStart(2, "0")}
      </span>
    </div>
  );
}