export const wordSorterAid = (a: string, b: string): number => {
  let letter = 0;

  while (a[letter] === b[letter] && letter < a.length && letter < b.length) {
    letter++;
  }

  return a[letter].charCodeAt(0) - b[letter].charCodeAt(0);
};
