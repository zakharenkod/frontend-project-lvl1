import { cons } from '@hexlet/pairs';
import startGame from '../index';
import getRandomInteger from '../helpers';

const rule = 'What number is missing in the progression?';
const progressionLength = 10;
let progressionHiddenElement = null;

const getQuestion = () => {
  const startNumber = getRandomInteger(1, 20);
  const randomIndex = getRandomInteger(0, progressionLength - 1);
  const progressionDifference = getRandomInteger(2, 10);
  let progressionString = '';
  let currentValue = startNumber;

  for (let i = 0; i < progressionLength; i += 1) {
    currentValue += progressionDifference;

    if (i !== 0) {
      progressionString = `${progressionString} `;
    }

    if (i === randomIndex) {
      progressionHiddenElement = currentValue;
      progressionString = `${progressionString}...`;
    } else {
      progressionString = `${progressionString}${currentValue}`;
    }
  }

  return progressionString;
};

const getQuestionAnswer = () => {
  const question = getQuestion();
  const answer = String(progressionHiddenElement);

  return cons(question, answer);
};

export default () => {
  startGame(rule, getQuestionAnswer);
};
