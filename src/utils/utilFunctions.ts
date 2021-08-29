export const getRandomBgColor = (array: string[]) => {
  const random = (min: number, max: number) =>
    Math.random() * (max - min) + min;
  return array[Math.floor(Math.floor(random(1, array.length)) - 1)];
};

export const checkExtensionOfCurrentUrl = (url: string) => {
  const arr = url.split("/");
  const lastItem = arr[arr.length - 1];
  return lastItem;
};
