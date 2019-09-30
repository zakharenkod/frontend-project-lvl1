import getRandomInteger from '../helpers';

const parseIntegersString = (string) => {
  let x = 0;
  let y = 0;
  let value = '';

  for (let i = 0; i < string.length; i += 1) {
    const current = string[i];

    if (current === ' ') {
      x = parseInt(value, 10);
      value = '';
    } else if (i === string.length - 1) {
      value += current;
      y = parseInt(value, 10);
    } else {
      value += current;
    }
  }

  return { x, y };
};

const getGcd = (x, y, startNumber) => {
  if (x % startNumber === 0 && y % startNumber === 0) return startNumber;

  return getGcd(x, y, startNumber - 1);
};

const getRule = () => 'Find the greatest common divisor of given numbers.';
const getQuestion = () => `${getRandomInteger(1, 101)} ${getRandomInteger(1, 101)}`;
const getCorrectAnswer = (question) => {
  const { x, y } = parseIntegersString(question);
  const minNumber = x < y ? x : y;

  return getGcd(x, y, minNumber);
};
const isAnswerCorrect = (answer, question) => parseInt(answer, 10) === getCorrectAnswer(question);

export {
  getRule,
  getQuestion,
  getCorrectAnswer,
  isAnswerCorrect,
};
