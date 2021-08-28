export const getRandomBgColor = (array: string[]) => {
  const random = (min: number, max: number) =>
    Math.random() * (max - min) + min;
  return array[Math.floor(Math.floor(random(1, array.length)) - 1)];
};
