import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

/**
 * startGame function
 * @param rule
 * @param getQuestionAnswer
 */
export default (rule = '', getQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');

  if (rule) {
    console.log(rule);
  }

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  if (!getQuestionAnswer) return;

  const answersCount = 3;

  for (let i = 0; i < answersCount; i += 1) {
    const questionAnswer = getQuestionAnswer();
    const question = car(questionAnswer);
    const answer = cdr(questionAnswer);
    console.log('Question: ', question);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\n`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
