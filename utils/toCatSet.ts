export const countObjListByKey = (data: Auto[], key: string) => {
  if (data.length === 0 || !key) {
    return [];
  }

  const count: { [key: string]: number } = {};
  for (const el of data) {
    if (Object.prototype.hasOwnProperty.call(count, el[key])) {
      count[el[key]] = count[el[key]] + 1;
    } else {
      count[el[key]] = 1;
    }
  }

  return Object.entries(count);
};
