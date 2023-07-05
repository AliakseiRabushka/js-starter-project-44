/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

const random = () => Math.floor(Math.random() * 101);

export const playEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let count = 0;
  while (count <= 2) {
    const randomInt = random();
    console.log(`Question: ${randomInt}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'yes' && randomInt % 2 === 0) {
      console.log('Correct!');
      count += 1;
      if (count === 3) {
        console.log(`Congratulations, ${userName}!`);
        break;
      }
    } else if (answer === 'no' && randomInt % 2 !== 0) {
      console.log('Correct!');
      count += 1;
      if (count === 3) {
        console.log(`Congratulations, ${userName}!`);
        break;
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${randomInt % 2 === 0 ? 'yes' : 'no'}'.Let's try again, ${userName}!`);
      break;
    }
  }
};
