type Difficulty = "easy" | "medium" | "hard";

export interface StartQuizProps {
  onStart: (settings: {
    amount: number;
    categories: string[];
    difficulty: Difficulty;
  }) => void;
}