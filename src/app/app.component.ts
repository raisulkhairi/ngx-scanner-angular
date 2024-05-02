import { Component, ViewChild } from '@angular/core';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-scanner-angular';
  @ViewChild('action') scanner!: NgxScannerQrcodeComponent;

  contraint = {
    video: {
      facingMode: {
        exact: 'environment'
      }
    }
  }

  ngAfterViewInit() {
    this.scanner.start();
    this.scanner.constraints = this.contraint;
  }

}
