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
  // eslint-disable-next-line prefer-const
  let progression = [];
  for (let i = 0; progression.length <= size; i += 1) {
    progression[0] = size;
    progression.push(progression[i] + step);
  }
  const answer = progression[index];
  progression.splice(index, 1, '..');
  let stringQuestion = '';
  for (let j = 0; j <= progression.length - 1; j += 1) {
    stringQuestion += ` ${progression[j]}`;
  }
  const gameQuestion = (stringQuestion);
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
