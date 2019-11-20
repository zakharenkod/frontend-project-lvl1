import { cons } from '@hexlet/pairs';
import startGame from '../index';
import getRandomInteger from '../helpers';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const correctAnswer = 'yes';
const wrongAnswer = 'no';

const isEven = (number) => number % 2 === 0;

const getQuestionAnswer = () => {
  const question = getRandomInteger(1, 100);
  const answer = isEven(question) ? correctAnswer : wrongAnswer;

  return cons(question, answer);
};

export default () => {
  startGame(rule, getQuestionAnswer);
};
