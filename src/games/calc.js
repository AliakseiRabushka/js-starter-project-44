/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { random, core } from '../index.js';

const randomAct = () => {
  const act = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * act.length);
  return act[randomIndex];
};

const stringGameAnswer = (partAnswer, action, secondPartAnswer) => {
  if (action === '+') {
    partAnswer += secondPartAnswer;
  } else if (action === '-') {
    partAnswer -= secondPartAnswer;
  } else if (action === '*') {
    partAnswer *= secondPartAnswer;
  }
  return partAnswer;
};
// eslint-disable-next-line import/prefer-default-export
const gameInstruction = 'What is the result of the expression?';

const getGameData = () => {
  const firstRandomInt = random();
  const secondRandomInt = random();
  const randomAction = randomAct();
  const gameQuestion = `${firstRandomInt} ${randomAction} ${secondRandomInt}`;
  const gameAnswer = String(stringGameAnswer(firstRandomInt, randomAction, secondRandomInt));
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
