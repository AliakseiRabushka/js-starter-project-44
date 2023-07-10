import { core, random } from '../index.js';

const isPrime = (number) => {
  if ((number % 2 === 0 && number !== 2) || number <= 1) {
    return false;
  }
  const limit = Math.floor(Math.sqrt(number));
  for (let index = 3; index <= limit; index += 2) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
};

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const gameQuestion = random();
  const gameAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
  const data = {
    question: gameQuestion,
    answer: gameAnswer,
  };
  return data;
};

export const playPrime = () => {
  core(gameInstruction, getGameData);
};

export default playPrime;
