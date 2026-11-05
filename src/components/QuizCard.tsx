import React from 'react';
import type { QuizQuestion, AnswerType } from '../types/quiz';

interface QuizCardProps {
  question: QuizQuestion;
  selectedAnswer: AnswerType | null;
  onSelectAnswer: (answer: AnswerType) => void;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  onNextQuestion,
  isLastQuestion,
}) => {
  const isAnswered = selectedAnswer !== null;
  const isCorrect = isAnswered && selectedAnswer === question.correctAnswer;

  return (
    <article className="quiz-card">
      <div className="card-top">
        <span className="category-pill">{question.category}</span>
        <span className="question-number">Q{question.id}.</span>
      </div>

      <h2 className="question-text">{question.question}</h2>

      {/* O / X 버튼 영역 */}
      <div className="options-grid">
        <button
          type="button"
          onClick={() => onSelectAnswer('O')}
          disabled={isAnswered}
          className={`option-btn btn-o ${selectedAnswer === 'O' ? 'selected' : ''} ${
            isAnswered && question.correctAnswer === 'O' ? 'is-correct' : ''
          } ${
            isAnswered && selectedAnswer === 'O' && !isCorrect ? 'is-wrong' : ''
          }`}
          aria-label="그렇다 (O)"
        >
          <span className="symbol">O</span>
          <span className="symbol-label">그렇다 (맞음)</span>
        </button>

        <button
          type="button"
          onClick={() => onSelectAnswer('X')}
          disabled={isAnswered}
          className={`option-btn btn-x ${selectedAnswer === 'X' ? 'selected' : ''} ${
            isAnswered && question.correctAnswer === 'X' ? 'is-correct' : ''
          } ${
            isAnswered && selectedAnswer === 'X' && !isCorrect ? 'is-wrong' : ''
          }`}
          aria-label="아니다 (X)"
        >
          <span className="symbol">✕</span>
          <span className="symbol-label">아니다 (틀림)</span>
        </button>
      </div>

      {/* 정답/오답 피드백 및 해설 박스 */}
      {isAnswered && (
        <div className={`feedback-box ${isCorrect ? 'correct' : 'wrong'}`}>
          <div className="feedback-header">
            <span className="feedback-icon">{isCorrect ? '🎉' : '💡'}</span>
            <span className="feedback-title">
              {isCorrect ? '정답입니다!' : `아쉽네요, 정답은 [ ${question.correctAnswer} ] 입니다!`}
            </span>
          </div>
          <p className="feedback-explanation">{question.explanation}</p>

          <div className="action-row">
            <button
              type="button"
              className="next-btn"
              onClick={onNextQuestion}
              autoFocus
            >
              {isLastQuestion ? '최종 결과 확인하기 📊' : '다음 문제로 이동 ➔'}
            </button>
          </div>
        </div>
      )}
    </article>
  );
};
