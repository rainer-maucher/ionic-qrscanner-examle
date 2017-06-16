import {Component} from "@angular/core";
import {NavController, Platform} from "ionic-angular";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {Code, CodeService} from "../../providers/code-service";

import {MyApp} from "../../app/app.component";
import {CodePage} from "../code/code";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [CodeService]
})

export class HomePage {
  codes: Code[] = [];

  constructor(private platform: Platform, private navCtrl: NavController, private barcodeScanner: BarcodeScanner,
              private codeService: CodeService) {
      codeService.init().then(() => {
      this.codes = codeService.getAll();
    });
  }

  scan() {
    this.platform.ready().then(() => {
      /**
       * workaround to not use scanner in dev mode, keeps things easier during development
       */
      if (MyApp.DEV_TALK_TO_SCANNER === false) {
        this.codeService.add(new Code("FAKE", this.codeService.getDummyScanResult()));
        console.log("User dummy entry instead of scan, set DEV_TALK_TO_SCANNER=true to use real scanner")
        return;
      }

      this.barcodeScanner.scan().then((barcodeData) => {
        // Success! Barcode data is here
        this.codeService.add(new Code(barcodeData.format, barcodeData.text));
      }, (err) => {
        // todo implement error handling
        // An error occurred
        console.log(err)
      });
    });
  }

  remove(code: Code) {
    this.codeService.remove(code);
  }

  itemSelected(code: Code) {
    this.navCtrl.push(CodePage, {'code': code});
  }
}