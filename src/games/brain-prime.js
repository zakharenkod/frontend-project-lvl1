import getRandomInteger from '../helpers';

const correctAnswer = 'yes';
const wrongAnswer = 'no';

const isNumberPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};
const isAnswersVariantHasAnswer = (answer) => answer === correctAnswer || answer === wrongAnswer;

const getRule = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getQuestion = () => getRandomInteger(2, 100);
const getCorrectAnswer = (question) => (isNumberPrime(question) ? correctAnswer : wrongAnswer);
const isAnswerCorrect = (answer, question) => (
  isAnswersVariantHasAnswer(answer) && answer === getCorrectAnswer(question)
);

export {
  getRule,
  getQuestion,
  getCorrectAnswer,
  isAnswerCorrect,
};
