/* eslint-disable import/no-extraneous-dependencies */
import readlineSync from 'readline-sync';

export const random = () => Math.floor(Math.random() * 101);

export const randomAct = () => {
  const act = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * act.length);
  return act[randomIndex];
};

export const randomSize = () => {
  const min = 5;
  const max = 10;
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export const randomIndex = (size) => {
  const min = 0;
  const max = size;
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export const gcd = (a, b) => (!b ? a : gcd(b, a % b));

export const core = (instruction, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(instruction);
  let count = 0;
  while (count <= 2) {
    const data = getGameData();
    console.log(`Question: ${data.question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (data.answer === answerUser) {
      console.log('Correct!');
      count += 1;
      if (count === 3) {
        console.log(`Congratulations, ${userName}!`);
        break;
      }
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${data.answer}'.Let's try again, ${userName}!`);
      break;
    }
  }
};

export default core;
