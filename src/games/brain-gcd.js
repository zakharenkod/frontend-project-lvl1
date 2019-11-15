import { cons, car, cdr } from '@hexlet/pairs';
import startGame from '../index';
import getRandomInteger from '../helpers';

const rule = 'Find the greatest common divisor of given numbers.';

const printPair = (pair) => `${car(pair)} ${cdr(pair)}`;

const getGcd = (x, y, startNumber) => {
  if (x % startNumber === 0 && y % startNumber === 0) return startNumber;

  return getGcd(x, y, startNumber - 1);
};

const getQuestion = () => cons(getRandomInteger(1, 100), getRandomInteger(1, 100));
const getAnswer = (question) => {
  const x = car(question);
  const y = cdr(question);
  const minNumber = x < y ? x : y;

  return getGcd(x, y, minNumber);
};

const getQuestionAnswer = () => {
  const question = getQuestion();
  const answer = getAnswer(question);

  return cons(printPair(question), String(answer));
};

export default () => {
  startGame(rule, getQuestionAnswer);
};
