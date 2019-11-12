import { cons } from '@hexlet/pairs';
import startGame from '../index';
import getRandomInteger from '../helpers';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const correctAnswer = 'yes';
const wrongAnswer = 'no';

const isNumberEven = (number) => number % 2 === 0;
const getQuestion = () => getRandomInteger(1, 100);
const getAnswer = (question) => (isNumberEven(question) ? correctAnswer : wrongAnswer);

const getQuestionAnswerPair = () => {
  const question = getQuestion();
  const answer = getAnswer(question);

  return cons(question, answer);
};

export default () => {
  startGame(rule, getQuestionAnswerPair);
};
