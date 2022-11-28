import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.component.html',
  styleUrls: ['./add-home.component.css']
})
export class AddHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * PC版の別タブ
   */
  public openPcWindow() {
    const url = 'https://support.google.com/chrome/answer/188842?hl=ja&co=GENIE.Platform%3DDesktop&oco=1';

    window.open(url);
  }

  /**
   * iphone版のブックマーク保存用別タブ
   */
  public openIphoneBookmarkWindow() {
    const url = 'https://support.google.com/chrome/answer/188842?hl=ja&co=GENIE.Platform%3DiOS&oco=1';

    window.open(url);
  }

  /**
   * iphone版のホーム画面追加用別タブ
   */
  public openIphoneAddHomeWindow() {
    const url = 'https://www.softbank.jp/support/faq/view/12288';

    window.open(url);
  }

  /**
   * Android版の別タブ
   */
  public openAndroidBookmarkWindow() {
    const url = 'https://support.google.com/chrome/answer/188842?hl=ja&co=GENIE.Platform%3DAndroid&oco=1';

    window.open(url);
  }

  /**
   * Android版の別タブ
   */
  public openAndroidAddHomeWindow() {
    const url = 'https://support.google.com/chrome/answer/188842?hl=ja&co=GENIE.Platform%3DAndroid&oco=1';

    window.open(url);
  }

}
