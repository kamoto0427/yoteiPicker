import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * 環境変数からグーグルフォームのURLを取得する
   *
   * @return グーグルフォームURL
   */
  public googleFormUrl() {
    const url = environment.google_form_url;
    return window.open(url);
  }

}
