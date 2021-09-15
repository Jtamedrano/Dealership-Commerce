export class Auto implements CAuto {
  public auto: IAuto;
  constructor(auto: IAuto) {
    this.auto = auto;
  }

  public is(key: keyof IAuto, data: IAuto[keyof IAuto]): boolean {
    return this.auto[key] === data;
  }
}
