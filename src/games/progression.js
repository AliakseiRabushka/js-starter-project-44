// eslint-disable-next-line object-curly-newline
import { core, random } from '../index.js';

const randomSize = () => {
  const min = 5;
  const max = 10;
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const randomIndex = (size) => {
  const min = 0;
  const max = size;
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const gameInstruction = 'What number is missing in the progression?';

const getGameData = () => {
  const size = randomSize();
  const step = random();
  const index = randomIndex(size);
  const startProgression = randomSize();
  // eslint-disable-next-line prefer-const
  let progression = [startProgression];
  for (let i = 0; progression.length <= size; i += 1) {
    progression.push(progression[i] + step);
  }
  const answer = progression[index];
  progression[index] = '..';
  const gameQuestion = (progression.join(' '));
  const gameAnswer = String(answer);

  const data = {
    question: gameQuestion,
    answer: gameAnswer,
  };
  return data;
};

export const playProgression = () => {
  core(gameInstruction, getGameData);
};

export default playProgression;
