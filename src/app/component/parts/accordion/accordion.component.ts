import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  // アコーディオンのタイトルリスト
  public items = [
    '気になった予定はどうすればいいですか？',
    'pickした予定はどこから確認すればいいですか？',
    '管理者に予定をリクエストしたい場合はどうすればいいですか？',
  ];

  public expandedIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
