import { cons } from '@hexlet/pairs';
import getRandomInteger from '../helpers';
import startGame from '..';

const rule = 'What is the result of the expression?';
const signs = '+-*';

const getRandomSign = () => {
  const randomIndex = getRandomInteger(0, signs.length - 1);
  return signs[randomIndex];
};

const calculateExpression = (x, y, sign) => {
  switch (sign) {
    case '+':
      return x + y;

    case '-':
      return x - y;

    case '*':
      return x * y;

    default:
      return null;
  }
};

const getQuestionAnswer = () => {
  const x = getRandomInteger(1, 100);
  const sign = getRandomSign();
  const y = getRandomInteger(1, 100);
  const question = `${x} ${sign} ${y}`;
  const answer = calculateExpression(x, y, sign);

  return cons(question, String(answer));
};

export default () => {
  startGame(rule, getQuestionAnswer);
};
