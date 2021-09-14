export class CounterList<T> {
  list: T[];

  constructor(list: T[]) {
    this.list = list;
  }

  public keys = (key: keyof T) => {
    const retKeys: any[] = [];
    for (let i = 0; i < this.list.length; i++) {
      retKeys.push(this.list[i][key]);
    }
    return retKeys;
  };
}
