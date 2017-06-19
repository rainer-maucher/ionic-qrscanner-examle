## Ionic 2 QR Code Scanner example
This is an [Ionic](http://ionicframework.com/docs/) Barcode Scanner example application, using the [Ionic Barcode Scanner plugin](https://ionicframework.com/docs/native/barcode-scanner/)

The app scans for Ean- and QR-Codes and stores/shows them as a list.
For easier ongoing of your development also a click on a stored code opens a basic detail page of the scanned code result. 

## How to use:
Start with the install of ionic:

```bash
$ sudo npm install -g ionic cordova
```

Then get the github repository and cd into it:
```bash
git clone git@github.com:honey-pot/ionic-qrscanner-examle.git
```

Now run the project:
```bash
ionic cordova run browser
```

And you should be fine.

## Good  to know:
- While testing in a browser,  the Barcode Scanner plugin is not working correctly when started with "ionic serve" so always use "ionic cordova run browser"

- For easier development, there is a config in app.component.ts to deactivate the scanner. When a new Scan would be started the application then yust creates a dummy scan entry for you.
```typescript
public static DEV_TALK_TO_SCANNER = true; // scanner is active

public static DEV_TALK_TO_SCANNER = false; // scanner is inactive
```

## gloss
If you have any problems or issues with this project and documentation,  feel free to open a ticket, so i can improve it ;)