const getMinMax = (
  set: Auto[],
  filterType: "year" | "msrp"
): [number, number] => {
  if (!set) {
    return [0, 0];
  }
  if (!set[0]) {
    return [0, 0];
  }

  const comp: [number, number] = [set[0][filterType], set[0][filterType]];

  const compare = (item: Auto) => {
    if (item[filterType] < comp[0]) {
      comp[0] = item[filterType];
    }
    if (item[filterType] > comp[1]) {
      comp[1] = item[filterType];
    }
  };

  if (set.length > 1) {
    let left = 1;
    let right = set.length - 1;

    while (left <= right) {
      if (left < right) {
        compare(set[left]);
        compare(set[right]);
      } else if (left === right) {
        compare(set[left]);
        break;
      }

      left++;
      right--;
    }
  }

  return comp;
};

export { getMinMax };
