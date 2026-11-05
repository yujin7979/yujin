import { useState } from 'react';
import { QUIZ_QUESTIONS } from './data/quizData';
import type { AnswerType, UserAnswerRecord } from './types/quiz';
import { Header } from './components/Header';
import { ProgressBar } from './components/ProgressBar';
import { QuizCard } from './components/QuizCard';
import { QuizResult } from './components/QuizResult';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerType | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswerRecord[]>([]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const currentQuestion = QUIZ_QUESTIONS[currentIndex];
  const isLastQuestion = currentIndex === QUIZ_QUESTIONS.length - 1;

  // O or X 선택
  const handleSelectAnswer = (answer: AnswerType) => {
    if (selectedAnswer !== null) return; // 이미 답 선택 완료된 상태면 중복 방지

    setSelectedAnswer(answer);
    const isCorrect = answer === currentQuestion.correctAnswer;

    setUserAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selectedAnswer: answer,
        isCorrect,
      },
    ]);
  };

  // 다음 문제로 넘어가기 (또는 결과 보기)
  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setIsCompleted(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    }
  };

  // 다시 풀기
  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setUserAnswers([]);
    setIsCompleted(false);
  };

  return (
    <div className="quiz-app">
      <main className="quiz-wrapper">
        <Header />

        {!isCompleted ? (
          <>
            <ProgressBar
              current={currentIndex + 1}
              total={QUIZ_QUESTIONS.length}
            />
            <QuizCard
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              onSelectAnswer={handleSelectAnswer}
              onNextQuestion={handleNextQuestion}
              isLastQuestion={isLastQuestion}
            />
          </>
        ) : (
          <QuizResult
            questions={QUIZ_QUESTIONS}
            userAnswers={userAnswers}
            onRestart={handleRestart}
          />
        )}

        <footer className="quiz-footer">
          <p>© 2026 웹앱 & AI 퀴즈 · Vite + React + TypeScript</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
