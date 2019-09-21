import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('\nMay I have your name? ');

export default getUserName;
