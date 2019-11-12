import { cons, car, cdr } from '@hexlet/pairs';
import startGame from '../index';
import getRandomInteger from '../helpers';

const rule = 'Find the greatest common divisor of given numbers.';

const printPair = (pair) => `${car(pair)} ${cdr(pair)}`;

const getGcd = (x, y, startNumber) => {
  if (x % startNumber === 0 && y % startNumber === 0) return startNumber;

  return getGcd(x, y, startNumber - 1);
};

const getQuestion = () => cons(getRandomInteger(1, 101), getRandomInteger(1, 101));
const getAnswer = (question) => {
  const x = car(question);
  const y = cdr(question);
  const minNumber = x < y ? x : y;

  return getGcd(x, y, minNumber);
};

const getQuestionAnswerPair = () => {
  const question = getQuestion();
  const answer = getAnswer(question);
  const questionString = printPair(question);
  const answerString = String(answer);

  return cons(questionString, answerString);
};

export default () => {
  startGame(rule, getQuestionAnswerPair);
};
