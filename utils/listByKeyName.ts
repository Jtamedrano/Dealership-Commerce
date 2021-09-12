type RetList = {
  item: string;
  count: number;
};

export const listByKeyName = <T>(list: T[], key: keyof T): RetList[] => {
  const retList: RetList[] = [];
  const listMap: { [key: string]: number } = {};

  for (let i = 0; i < list.length; i++) {
    const objKey = String(list[i][key]);

    if (typeof listMap[objKey] === "undefined") {
      listMap[objKey] = retList.length;
      retList[listMap[objKey]] = { count: 1, item: objKey };
    } else {
      retList[listMap[objKey]] = {
        ...retList[listMap[objKey]],
        count: retList[listMap[objKey]].count + 1,
      };
    }
  }

  return retList;
};
