export interface QuizItemsModel {
    category: string ,
    correctAnswer: string,
    difficulty: string,
    id: string,
    incorrectAnswers: string[],
    question:string,
    completeChoices: string[],
    isAnswered: boolean,
    isCorrectAnswer: boolean
}