import { cons } from '@hexlet/pairs';
import startGame from '..';
import getRandomInteger from '../helpers';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const correctAnswer = 'yes';
const wrongAnswer = 'no';

const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

const getQuestionAnswer = () => {
  const question = getRandomInteger(-100, 100);
  const answer = isPrime(question) ? correctAnswer : wrongAnswer;

  return cons(question, answer);
};

export default () => {
  startGame(rule, getQuestionAnswer);
};
