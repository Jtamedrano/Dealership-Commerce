export const wordSorterAid = (a: string, b: string): number => {
  if (a === b) {
    return 0;
  }

  let letter = 0;

  while (a[letter] === b[letter] && letter < a.length && letter < b.length) {
    console.log(a[letter], b[letter]);
    letter++;
  }

  return a[letter].charCodeAt(0) - b[letter].charCodeAt(0);
};
