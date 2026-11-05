import type { QuizQuestion } from '../types/quiz';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    category: '웹 기초',
    question: '웹 브라우저 화면의 뼈대와 구조를 잡는 언어는 HTML이다.',
    correctAnswer: 'O',
    explanation: 'HTML(HyperText Markup Language)은 웹 페이지의 제목, 본문, 이미지 등 구조와 뼈대를 만드는 기본 마크업 언어입니다.',
  },
  {
    id: 2,
    category: '프론트엔드',
    question: 'React는 데이터베이스(DB)를 직접 관리하고 서버를 구축하는 백엔드 프레임워크이다.',
    correctAnswer: 'X',
    explanation: 'React는 사용자가 보는 웹 화면(UI)을 컴포넌트 단위로 만들기 위한 대표적인 프론트엔드 자바스크립트 라이브러리입니다.',
  },
  {
    id: 3,
    category: '생성형 AI',
    question: '생성형 AI(Generative AI)는 사용자의 질문(프롬프트)에 맞춰 글, 그림, 코드 등을 새로 만들어낼 수 있다.',
    correctAnswer: 'O',
    explanation: 'ChatGPT나 Gemini 같은 생성형 AI는 대규모 데이터를 학습하여 새로운 텍스트, 이미지, 오디오, 소스코드 등을 창작해냅니다.',
  },
  {
    id: 4,
    category: 'AI 상식 & 안전',
    question: 'AI는 모든 분야에서 100% 진실만 말하므로, 답변의 사실 관계나 출처를 확인할 필요가 전혀 없다.',
    correctAnswer: 'X',
    explanation: 'AI는 그럴듯한 거짓말을 진짜처럼 지어내는 \'환각(Hallucination)\' 현상이 발생할 수 있어, 중요한 정보는 반드시 교차 검증해야 합니다.',
  },
  {
    id: 5,
    category: '웹 배포',
    question: 'Vercel을 사용하면 GitHub에 코드를 올리는 것만으로 웹사이트를 인터넷에 무료로 쉽게 배포할 수 있다.',
    correctAnswer: 'O',
    explanation: 'Vercel은 GitHub 저장소를 연결해두면 코드를 푸시할 때마다 자동으로 빌드하고 전 세계에 빠르게 배포해 주는 현대적인 클라우드 플랫폼입니다.',
  },
];
