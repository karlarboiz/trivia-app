export interface TimerProps {
  duration: number; // duration in milliseconds
  onTimeUp: () => void;
}