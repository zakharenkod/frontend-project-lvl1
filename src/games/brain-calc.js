import { cons, car, cdr } from '@hexlet/pairs';
import getRandomInteger from '../helpers';
import startGame from '../index';

const rule = 'What is the result of the expression?';
const signs = '+-*';

const makeExpression = (x, sign, y) => cons(x, cons(sign, y));
const getX = (expression) => car(expression);
const getSign = (expression) => car(cdr(expression));
const getY = (expression) => cdr(cdr(expression));
const printExpression = (expression) => `${getX(expression)} ${getSign(expression)} ${getY(expression)}`;

const getRandomSign = () => {
  const randomIndex = getRandomInteger(0, signs.length);
  return signs[randomIndex];
};

const calculateExpression = (triple) => {
  const x = getX(triple);
  const y = getY(triple);
  const sign = getSign(triple);

  switch (sign) {
    case '+':
      return x + y;

    case '-':
      return x - y;

    case '*':
      return x * y;

    default:
      return NaN;
  }
};

const getQuestion = () => makeExpression(
  getRandomInteger(1, 100),
  getRandomSign(),
  getRandomInteger(1, 100),
);

const getAnswer = (expression) => calculateExpression(expression);

const getQuestionAnswerPair = () => {
  const question = getQuestion();
  const answer = getAnswer(question);
  const questionString = printExpression(question);
  const answerString = String(answer);

  return cons(questionString, answerString);
};

export default () => {
  startGame(rule, getQuestionAnswerPair);
};
