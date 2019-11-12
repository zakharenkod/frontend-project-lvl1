import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

// import * as brainEven from './games/brain-even';
// import * as brainCalc from './games/brain-calc';
// import * as brainGcd from './games/brain-gcd';
// import * as brainProgression from './games/brain-progression';
// import * as brainPrime from './games/brain-prime';

const getUserName = () => readlineSync.question('\nMay I have your name? ');

const printRule = (rule) => {
  console.log(rule);
};

const getUserAnswer = () => readlineSync.question('Your answer: ');
// const getGame = (gameName) => {
//   switch (gameName) {
//     case 'brain-even':
//       return brainEven;
//
//     case 'brain-calc':
//       return brainCalc;
//
//     case 'brain-gcd':
//       return brainGcd;
//
//     case 'brain-progression':
//       return brainProgression;
//
//     case 'brain-prime':
//       return brainPrime;
//
//     default:
//       return null;
//   }
// };

/**
 * startGame function
 * @param rule
 * @param getQuestionAnswerPair
 */
export default (rule = '', getQuestionAnswerPair) => {
  console.log('Welcome to the Brain Games!');

  if (rule) {
    printRule(rule);
  }

  const userName = getUserName();
  console.log(`Hello, ${userName}!\n`);

  if (!getQuestionAnswerPair) return;

  let correctAnswerCounter = 3;

  while (correctAnswerCounter > 0) {
    const questionAnswerPair = getQuestionAnswerPair();
    const question = car(questionAnswerPair);
    const correctAnswer = cdr(questionAnswerPair);
    console.log('Question: ', question);

    const userAnswer = getUserAnswer();

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    console.log('Correct!');
    correctAnswerCounter -= 1;
  }

  if (correctAnswerCounter === 0) {
    console.log(`Congratulations, ${userName}!`);
  }
};
