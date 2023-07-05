/* eslint-disable import/no-extraneous-dependencies */
import readlineSync from 'readline-sync';
import { random, greeting, gcd } from '../src/index.js';

// eslint-disable-next-line import/prefer-default-export
export const playGcd = () => {
  greeting();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let count = 0;
  let result = 0;
  while (count <= 2) {
    const randomIntFirst = random();
    const randomIntSecond = random();
    console.log(`Question: ${randomIntFirst}  ${randomIntSecond}`);
    const answer = readlineSync.question('Your answer: ');
    result = gcd(randomIntFirst, randomIntSecond);
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
