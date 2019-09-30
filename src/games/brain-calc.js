import getRandomInteger from '../helpers';

const getRandomSign = () => {
  const signs = '+-*';
  const randomIndex = getRandomInteger(0, 3);
  return signs[randomIndex];
};

const getRule = () => 'What is the result of the expression?';
const getQuestion = () => `${getRandomInteger(1, 100)} ${getRandomSign()} ${getRandomInteger(1, 100)}`;
const getCorrectAnswer = (question) => {
  const func = new Function(`return ${question}`);
  return func();
};
const isAnswerCorrect = (answer, question) => (
  parseInt(answer, 10) === parseInt(getCorrectAnswer(question), 10)
);

export {
  getRule,
  getQuestion,
  getCorrectAnswer,
  isAnswerCorrect,
};
