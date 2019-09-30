import { cons, car, cdr } from '@hexlet/pairs';
import getRandomInteger from '../helpers';

const makeExpression = (x, sign, y) => cons(x, cons(sign, y));
const getX = (expression) => car(expression);
const getSign = (expression) => car(cdr(expression));
const getY = (expression) => cdr(cdr(expression));

const getRandomSign = () => {
  const signs = '+-*';
  const randomIndex = getRandomInteger(0, 3);
  return signs[randomIndex];
};

const parseExpressionString = (string) => {
  let x = 0;
  let y = 0;
  let sign = '';
  let separatorCounter = 0;
  let value = '';

  for (let i = 0; i < string.length; i += 1) {
    const current = string[i];

    if (current === ' ') {
      if (separatorCounter === 0) {
        x = parseInt(value, 10);
      } else if (separatorCounter === 1) {
        sign = value;
      }

      separatorCounter += 1;
      value = '';
    } else if (i === string.length - 1) {
      value += current;
      y = parseInt(value, 10);
    } else {
      value += current;
    }
  }

  return { x, sign, y };
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

const getRule = () => 'What is the result of the expression?';
const getQuestion = () => `${getRandomInteger(1, 100)} ${getRandomSign()} ${getRandomInteger(1, 100)}`;
const getCorrectAnswer = (question) => {
  const { x, sign, y } = parseExpressionString(question);
  const tripleExpression = makeExpression(x, sign, y);

  return calculateExpression(tripleExpression);
};
const isAnswerCorrect = (answer, question) => (
  parseInt(answer, 10) === parseInt(getCorrectAnswer(question), 10)
);

export {
  getRule,
  getQuestion,
  getCorrectAnswer,
  isAnswerCorrect,
};
