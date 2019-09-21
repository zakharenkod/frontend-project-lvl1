import readlineSync from 'readline-sync';

const getUserName = () => {
    return readlineSync.question('\nMay I have your name? ');
};

export default getUserName;