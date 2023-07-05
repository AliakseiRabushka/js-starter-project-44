export const random = () => Math.floor(Math.random() * 101);

export const randomAct = () => {
  const act = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * act.length);
  return act[randomIndex];
};

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const gcd = (a, b) => (!b ? a : gcd(b, a % b));
