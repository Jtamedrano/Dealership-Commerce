export const toIntPrice = (n: number): string => {
  const intToString = String(n);

  let retString = "";
  let placevalue = 0;

  for (let index = intToString.length - 1; index >= 0; index--) {
    if (placevalue % 3 === 0 && placevalue !== 0) {
      retString = "," + retString;
    }
    retString = intToString[index] + retString;
    placevalue++;
  }

  return retString;
};
