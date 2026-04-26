import { useEffect, useRef, useState } from "react";
import type { TimerProps } from "./timer-model";
import styles from "./Timer.module.css";

export default function Timer({ duration, onTimeUp }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration * 1000);
  const onTimeUpRef = useRef(onTimeUp);
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    onTimeUpRef.current = onTimeUp;
  }, [onTimeUp]);

  useEffect(() => {
    setTimeLeft(duration * 1000);
    hasCompletedRef.current = false;
  }, [duration]);

  useEffect(() => {
    if (timeLeft <= 0 || hasCompletedRef.current) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        const next = Math.max(prev - 100, 0);

        if (next === 0 && !hasCompletedRef.current) {
          hasCompletedRef.current = true;
          onTimeUpRef.current();
        }

        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [timeLeft]);

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