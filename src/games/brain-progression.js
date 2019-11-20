import { cons } from '@hexlet/pairs';
import startGame from '../index';
import getRandomInteger from '../helpers';

const rule = 'What number is missing in the progression?';

const getProgression = (progressionLength = 10, startNumber = 1, progressionDiff = 2, index = 0) => {
  let progression = '';
  let currentValue = startNumber;

  for (let i = 0; i < progressionLength; i += 1) {
    currentValue += progressionDiff;

    if (i !== 0) {
      progression = `${progression} `;
    }

    if (i === index) {
      progression = `${progression}...`;
    } else {
      progression = `${progression}${currentValue}`;
    }
  }

  return progression;
};

const getQuestionAnswer = () => {
  const progressionLength = 10;
  const startNumber = getRandomInteger(1, 20);
  const randomIndex = getRandomInteger(0, progressionLength - 1);
  const progressionDiff = getRandomInteger(2, 10);
  const question = getProgression(progressionLength, startNumber, progressionDiff, randomIndex);
  const answer = String(startNumber + (randomIndex + 1) * progressionDiff);

  return cons(question, answer);
};

export default () => {
  startGame(rule, getQuestionAnswer);
};
