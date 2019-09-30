const correctAnswer = 'yes';
const wrongAnswer = 'no';

const isNumberEven = (number) => number % 2 === 0;
const getRandomInteger = (min, max) => Math.floor(min + Math.random() * (max - min));
const isAnswersVariantHasAnswer = (answer) => answer === correctAnswer || answer === wrongAnswer;

export const getRule = () => 'Answer "yes" if the number is even, otherwise answer "no".';
export const getQuestion = () => getRandomInteger(1, 100);
export const getCorrectAnswer = (question) => (isNumberEven(question)
  ? correctAnswer : wrongAnswer
);
export const isAnswerCorrect = (answer, question) => (isAnswersVariantHasAnswer(answer)
  && answer === getCorrectAnswer(question)
);
