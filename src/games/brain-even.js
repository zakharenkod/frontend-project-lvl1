import getRandomInteger from '../helpers';

const correctAnswer = 'yes';
const wrongAnswer = 'no';

const isNumberEven = (number) => number % 2 === 0;
const isAnswersVariantHasAnswer = (answer) => answer === correctAnswer || answer === wrongAnswer;

const getRule = () => 'Answer "yes" if the number is even, otherwise answer "no".';
const getQuestion = () => getRandomInteger(1, 100);
const getCorrectAnswer = (question) => (isNumberEven(question) ? correctAnswer : wrongAnswer);
const isAnswerCorrect = (answer, question) => (
  isAnswersVariantHasAnswer(answer) && answer === getCorrectAnswer(question)
);

export {
  getRule,
  getQuestion,
  getCorrectAnswer,
  isAnswerCorrect,
};
