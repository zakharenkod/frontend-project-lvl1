import getRandomInteger from '../helpers';

const progressionLength = 10;

const parseProgressionString = (string) => {
  let a1 = null;
  let a2 = null;
  let a3 = null;
  let d = 0;
  let value = '';
  let hiddenElementIndex = -1;
  let index = 0;
  let i = 0;

  do {
    const current = string[i];

    if (current === ' ' || i === string.length) {
      if (value === '...') {
        hiddenElementIndex = index;
      }

      if (index === 0 && index !== hiddenElementIndex) {
        a1 = parseInt(value, 10);
      } else if (index === 1 && index !== hiddenElementIndex) {
        a2 = parseInt(value, 10);
      } else if (index === 2 && index !== hiddenElementIndex) {
        a3 = parseInt(value, 10);
      }

      value = '';
      index += 1;
    } else {
      value += current;
    }

    i += 1;
  } while (i <= string.length);

  if (a1 !== null && a2 !== null) {
    d = a2 - a1;
  } else if (a1 !== null && a3 !== null) {
    d = (a3 - a1) / 2;
  } else if (a2 !== null && a3 !== null) {
    d = a3 - a2;
    a1 = a2 - d;
  }

  return {
    a1,
    d,
    hiddenElementIndex,
  };
};

const getProgressionHiddenElement = (a1, d, hiddenElementIndex) => (
  hiddenElementIndex === 0 ? a1 : a1 + d * hiddenElementIndex
);

const getRule = () => 'What number is missing in the progression?';
const getQuestion = () => {
  const startNumber = getRandomInteger(1, 20);
  const randomIndex = getRandomInteger(0, 10);
  const progressionDifference = getRandomInteger(2, 10);
  let progressionString = '';
  let currentValue = startNumber;

  for (let i = 0; i < progressionLength; i += 1) {
    currentValue += progressionDifference;

    if (i !== 0) {
      progressionString += ' ';
    }

    if (i === randomIndex) {
      progressionString += '...';
    } else {
      progressionString += currentValue;
    }
  }

  return progressionString;
};
const getCorrectAnswer = (question) => {
  const { a1, d, hiddenElementIndex } = parseProgressionString(question);

  return getProgressionHiddenElement(a1, d, hiddenElementIndex);
};
const isAnswerCorrect = (answer, question) => parseInt(answer, 10) === getCorrectAnswer(question);

export {
  getRule,
  getQuestion,
  getCorrectAnswer,
  isAnswerCorrect,
};
