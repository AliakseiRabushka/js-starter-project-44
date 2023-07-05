/* eslint-disable import/no-extraneous-dependencies */
import readlineSync from 'readline-sync';
import { random, randomAct, greeting } from '../src/index.js';

// eslint-disable-next-line import/prefer-default-export
export const playCalc = () => {
  greeting();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  let count = 0;
  let result = 0;
  while (count <= 2) {
    const randomIntFirst = random();
    const randomIntSecond = random();
    const randomAction = randomAct();
    console.log(`Question: ${randomIntFirst} ${randomAction} ${randomIntSecond}`);
    const answer = readlineSync.question('Your answer: ');
    if (randomAction === '+') {
      result = randomIntFirst + randomIntSecond;
    } else if (randomAction === '-') {
      result = randomIntFirst - randomIntSecond;
    } else if (randomAction === '*') {
      result = randomIntFirst * randomIntSecond;
    }
    if (result === Number(answer)) {
      console.log('Correct!');
      count += 1;
      if (count === 3) {
        console.log(`Congratulations, ${userName}!`);
        break;
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.Let's try again, ${userName}!`);
      break;
    }
  }
};
