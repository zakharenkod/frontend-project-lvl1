import { cons } from '@hexlet/pairs';
import startGame from '..';
import getRandomInteger from '../helpers';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const correctAnswer = 'yes';
const wrongAnswer = 'no';

const isNumberPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

const getQuestion = () => getRandomInteger(-100, 100);
const getAnswer = (question) => (isNumberPrime(question) ? correctAnswer : wrongAnswer);

const getQuestionAnswer = () => {
  const question = getQuestion();
  const answer = getAnswer(question);

  return cons(question, answer);
};

export default () => {
  startGame(rule, getQuestionAnswer);
};
