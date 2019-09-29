import readlineSync from 'readline-sync';

const correctAnswer = 'yes';
const wrongAnswer = 'no';

export const getUserName = () => readlineSync.question('\nMay I have your name? ');

const getRandomInteger = (min, max) => Math.floor(min + Math.random() * (max - min));

const isNumberEven = (number) => number % 2 === 0;

export const getNumber = () => getRandomInteger(1, 100);

export const getUserAnswer = () => readlineSync.question('Your answer: ');

export const getCorrectAnswer = (number) => (isNumberEven(number) ? correctAnswer : wrongAnswer);

export const isAnswerCorrect = (answer) => answer === correctAnswer || answer === wrongAnswer;
