import { cons } from '@hexlet/pairs';
import startGame from '../index';
import getRandomInteger from '../helpers';

const rule = 'What number is missing in the progression?';

const getProgression = (startNumber, randomIndex, progressionDifference, progressionLength) => {
  let progression = '';
  let currentValue = startNumber;

  for (let i = 0; i < progressionLength; i += 1) {
    currentValue += progressionDifference;

    if (i !== 0) {
      progression = `${progression} `;
    }

    if (i === randomIndex) {
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
  const progressionDifference = getRandomInteger(2, 10);
  const question = getProgression(startNumber, randomIndex, progressionDifference, progressionLength);
  const answer = String(startNumber + (randomIndex + 1) * progressionDifference);

  return cons(question, answer);
};

export default () => {
  startGame(rule, getQuestionAnswer);
};
