#! /usr/bin/env node
import {
  getUserName, getNumber, getUserAnswer, getCorrectAnswer, isAnswerCorrect,
} from '../index';

let rightAnswerCounter = 3;

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const userName = getUserName();
console.log(`Hello, ${userName}!\n`);

while (rightAnswerCounter > 0) {
  const number = getNumber();
  console.log('Question: ', number);

  const answer = getUserAnswer();

  if (!isAnswerCorrect(answer) || answer !== getCorrectAnswer(number)) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(number)}'.\n`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }

  console.log('Correct!');
  rightAnswerCounter -= 1;
}

if (rightAnswerCounter === 0) {
  console.log(`Congratulations, ${userName}!`);
}
