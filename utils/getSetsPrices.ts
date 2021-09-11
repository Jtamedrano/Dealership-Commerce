const getMinMax = (set: Auto[]): [number, number] => {
  if (!set) {
    return [0, 0];
  }
  const price: [number, number] = [set[0].msrp, set[0].msrp];

  const compare = (item: Auto) => {
    if (item.msrp < price[0]) {
      price[0] = item.msrp;
    }
    if (item.msrp > price[1]) {
      price[1] = item.msrp;
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

  return price;
};

export { getMinMax };
