import readlineSync from 'readline-sync';
import * as brainEven from './games/brain-even';

const getUserName = () => readlineSync.question('\nMay I have your name? ');

const printRule = (rule) => {
  console.log(rule);
};

const getUserAnswer = () => readlineSync.question('Your answer: ');
const getGame = (gameName) => {
  if (gameName === 'brain-even') {
    return brainEven;
  }

  return null;
};

export default (gameName = '') => {
  const game = getGame(gameName);

  console.log('Welcome to the Brain Games!');

  if (game) {
    printRule(game.getRule());
  }

  const userName = getUserName();
  console.log(`Hello, ${userName}!\n`);

  if (!game) return;

  let correctAnswerCounter = 3;

  while (correctAnswerCounter > 0) {
    const question = game.getQuestion();
    console.log('Question: ', question);

    const answer = getUserAnswer();
    const isAnswerCorrect = game.isAnswerCorrect(answer, question);
    const correctAnswer = game.getCorrectAnswer(question);

    if (!isAnswerCorrect) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n`);
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
