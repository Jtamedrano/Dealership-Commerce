import { IAuto } from "../../types/global";
import { Auto } from "./Auto";

export class AutoList {
  private list: Auto[];

  constructor(list: IAuto[]) {
    this.list = this.initList(list);
  }

  private initList(list: IAuto[]): Auto[] {
    let retArray: Auto[] = [];
    for (const car of list) {
      retArray.push(new Auto(car));
    }
    return retArray;
  }

  public getAvailable() {
    return this.list;
  }
}
