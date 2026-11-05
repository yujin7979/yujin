export type AnswerType = 'O' | 'X';

export interface QuizQuestion {
  id: number;
  category: string;
  question: string;
  correctAnswer: AnswerType;
  explanation: string;
}

export interface UserAnswerRecord {
  questionId: number;
  selectedAnswer: AnswerType;
  isCorrect: boolean;
}
