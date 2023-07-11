/* eslint-disable import/no-duplicates */
/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable import/prefer-default-export */
import { random, core } from '../index.js';

const isEven = (number) => number % 2 === 0;

const gameInstruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const gameQuestion = random();
  const gameAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  const data = {
    question: gameQuestion,
    answer: gameAnswer,
  };
  return data;
};

export const playEven = () => {
  core(gameInstruction, getGameData);
};

export default playEven;
