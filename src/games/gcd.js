/* eslint-disable import/no-extraneous-dependencies */
import { random, core } from '../index.js';

const gcd = (a, b) => (!b ? a : gcd(b, a % b));

const gameInstruction = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const firstRandomInt = random();
  const secondRandomInt = random();
  const gameQuestion = `${firstRandomInt} ${secondRandomInt}`;
  const gameAnswer = String(gcd(firstRandomInt, secondRandomInt));
  const data = {
    question: gameQuestion,
    answer: gameAnswer,
  };
  return data;
};

export const playGcd = () => {
  core(gameInstruction, getGameData);
};

export default playGcd;
