import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';
import {Code} from "../../providers/code-service";


@Component({
  selector: 'page-code',
  templateUrl: 'code.html',
})
export class CodePage {
  code: Code;

  constructor(private navParams: NavParams) {
    this.code = navParams.get('code')
  }
}
