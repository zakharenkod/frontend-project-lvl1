import { cons } from '@hexlet/pairs';
import startGame from '..';
import getRandomInteger from '../helpers';

const rule = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (start, diff, hiddenElementIndex, length) => {
  let progression = '';

  for (let i = 0; i < length; i += 1) {
    const currentValue = start + diff * i;
    progression = (i !== hiddenElementIndex) ? `${progression}${currentValue} ` : `${progression}... `;
  }

  return progression;
};

const getQuestionAnswer = () => {
  const start = getRandomInteger(1, 20);
  const hiddenElementIndex = getRandomInteger(0, progressionLength - 1);
  const progressionDiff = getRandomInteger(2, 10);
  const question = getProgression(start, progressionDiff, hiddenElementIndex, progressionLength);
  const answer = String(start + progressionDiff * hiddenElementIndex);

  return cons(question, answer);
};

export default () => {
  startGame(rule, getQuestionAnswer);
};
