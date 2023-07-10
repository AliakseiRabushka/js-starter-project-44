/* eslint-disable import/no-extraneous-dependencies */
import { random, randomAct, core } from '../index.js';

// eslint-disable-next-line import/prefer-default-export
const gameInstruction = 'What is the result of the expression?';

const getGameData = () => {
  const randomIntFirst = random();
  const randomIntSecond = random();
  const randomAction = randomAct();
  const gameQuestion = `${randomIntFirst} ${randomAction} ${randomIntSecond}`;
  let answer = '';
  if (randomAction === '+') {
    answer = randomIntFirst + randomIntSecond;
  } else if (randomAction === '-') {
    answer = randomIntFirst - randomIntSecond;
  } else if (randomAction === '*') {
    answer = randomIntFirst * randomIntSecond;
  }
  const gameAnswer = String(answer);
  const data = {
    question: gameQuestion,
    answer: gameAnswer,
  };
  return data;
};

export const playCalc = () => {
  core(gameInstruction, getGameData);
};

export default playCalc;
