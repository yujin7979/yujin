import React from 'react';
import type { QuizQuestion, UserAnswerRecord } from '../types/quiz';

interface QuizResultProps {
  questions: QuizQuestion[];
  userAnswers: UserAnswerRecord[];
  onRestart: () => void;
}

export const QuizResult: React.FC<QuizResultProps> = ({
  questions,
  userAnswers,
  onRestart,
}) => {
  const correctCount = userAnswers.filter((a) => a.isCorrect).length;
  const totalCount = questions.length;
  const scorePercent = Math.round((correctCount / totalCount) * 100);

  // 점수에 따른 피드백 메시지
  const getFeedbackMessage = () => {
    if (correctCount === totalCount) {
      return {
        badge: '🏆 마스터 달성',
        title: '완벽합니다! 만점이에요!',
        description: '웹 개발과 최신 AI에 대한 기본기가 아주 탄탄하시네요!',
      };
    }
    if (correctCount >= 3) {
      return {
        badge: '✨ 훌륭한 실력',
        title: '대단해요! 아주 잘하셨어요!',
        description: '웹과 AI 분야의 기초 지식을 충분히 잘 이해하고 계십니다.',
      };
    }
    return {
      badge: '🌱 성장형 꿈나무',
      title: '수고하셨습니다!',
      description: '문제를 다시 한 번 풀어보며 웹과 AI 상식을 내 것으로 만들어보세요!',
    };
  };

  const feedback = getFeedbackMessage();

  return (
    <section className="result-container">
      <div className="result-card">
        <div className="result-badge">{feedback.badge}</div>
        <h2 className="result-title">{feedback.title}</h2>
        <p className="result-description">{feedback.description}</p>

        <div className="score-display">
          <div className="score-circle">
            <span className="score-number">{scorePercent}</span>
            <span className="score-unit">점</span>
          </div>
          <div className="score-detail">
            총 <strong>{totalCount}</strong>문제 중 <strong>{correctCount}</strong>문제를 맞혔습니다!
          </div>
        </div>

        {/* 다시 풀기 버튼 */}
        <div className="result-actions">
          <button type="button" className="restart-btn" onClick={onRestart}>
            🔄 처음부터 다시 풀기
          </button>
        </div>
      </div>

      {/* 문제별 복습 리스트 */}
      <div className="review-section">
        <h3 className="review-heading">📋 문제별 정답 & 해설 다시보기</h3>
        <div className="review-list">
          {questions.map((q, idx) => {
            const userAns = userAnswers.find((a) => a.questionId === q.id);
            const isCorrect = userAns?.isCorrect;

            return (
              <div
                key={q.id}
                className={`review-item ${isCorrect ? 'correct' : 'wrong'}`}
              >
                <div className="review-item-header">
                  <span className="review-index">문제 {idx + 1} ({q.category})</span>
                  <span className={`review-status-tag ${isCorrect ? 'correct' : 'wrong'}`}>
                    {isCorrect ? '✓ 정답' : '✕ 오답'}
                  </span>
                </div>
                <p className="review-question">{q.question}</p>
                <div className="review-answer-compare">
                  <span>
                    내가 고른 답: <strong>{userAns?.selectedAnswer ?? '-'}</strong>
                  </span>
                  <span>
                    실제 정답: <strong className="highlight-answer">{q.correctAnswer}</strong>
                  </span>
                </div>
                <p className="review-explanation">{q.explanation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
