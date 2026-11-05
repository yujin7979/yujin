import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="quiz-header">
      <div className="header-badge">💡 상식 퀴즈 챌린지</div>
      <h1 className="header-title">웹앱 & AI 상식 OX 퀴즈</h1>
      <p className="header-subtitle">
        웹 개발과 인공지능의 기초 상식을 재미있는 5개의 OX 퀴즈로 풀어보세요!
      </p>
    </header>
  );
};
