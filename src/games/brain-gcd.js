import { cons } from '@hexlet/pairs';
import startGame from '../index';
import getRandomInteger from '../helpers';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => {
  const startNumber = x < y ? x : y;

  for (let i = startNumber; i > 1; i -= 1) {
    if (x % i === 0 && y % i === 0) return i;
  }

  return 1;
};

const getQuestionAnswer = () => {
  const x = getRandomInteger(1, 100);
  const y = getRandomInteger(1, 100);

  const question = `${x} ${y}`;
  const answer = getGcd(x, y);

  return cons(question, String(answer));
};

export default () => {
  startGame(rule, getQuestionAnswer);
};
