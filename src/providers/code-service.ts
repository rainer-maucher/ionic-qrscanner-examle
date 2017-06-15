import {Injectable} from "@angular/core";
import {Storage} from "@ionic/storage";

export interface ICode {
  format: string;
  result: any;
}

export class Code implements ICode {
  format: string;
  result: any;

  constructor(format, result) {
    this.result = result;
    this.format = format;
  }
}

@Injectable()
export class CodeService {
  items: Code[] = [];

  constructor(public storage: Storage) {
  }

  public init() {
    // let promise: any;
    let self = this;
    return this.storage.get('codes').then(function (json) {
      if (json) {
        self.items = JSON.parse(json);
      }
    });
  }

  save() {
    this.storage.set('codes', JSON.stringify(this.items)).then(() => {}, () => {});
  }

  add(code: Code) {
    // remove code if already existing
    let index = this.items.indexOf(code, 0);
    if (index > -1) {
      this.remove(code)
    }

    this.items.push(code);
    this.save();
  }

  remove(code: Code) {
    let index = this.items.indexOf(code, 0);
    if (index > -1) {
      this.items.splice(index, 1);
    }
    this.save();
  }

  get(id) {
    return this.items[id];
  }

  getAll() {
    return this.items;
  }

  /**
   * get a uuid as a dummy scan code
   * @returns {string}
   */
  public getDummyScanResult() {
    // your favourite guid generation function could go here
    // ex: http://stackoverflow.com/a/8809472/188246
    let d = new Date().getTime();
    if (window.performance && typeof window.performance.now === "function") {
      d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }
}
