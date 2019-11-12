import { cons } from '@hexlet/pairs';
import startGame from '../index';
import getRandomInteger from '../helpers';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const correctAnswer = 'yes';
const wrongAnswer = 'no';

const isNumberPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

const getQuestion = () => getRandomInteger(2, 100);
const getAnswer = (question) => (isNumberPrime(question) ? correctAnswer : wrongAnswer);

const getQuestionAnswerPair = () => {
  const question = getQuestion();
  const answer = getAnswer(question);

  return cons(question, answer);
};

export default () => {
  startGame(rule, getQuestionAnswerPair);
};
