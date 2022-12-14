import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import YoteiJson from 'src/assets/mock/yotei.json';
import { Yotei } from 'src/app/interface/yotei';

@Component({
  selector: 'app-category-yotei-list',
  templateUrl: './category-yotei-list.component.html',
  styleUrls: ['./category-yotei-list.component.css']
})
export class CategoryYoteiListComponent implements OnInit {
  public yotei: Yotei[];

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.yotei = [];
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const categoryId = params.get('category_id');
      this.getYoteiData(categoryId);
    });
  }

  /**
   * mockからデータを取得
   *
   * @param categoryId カテゴリーID
   */
  public getYoteiData(categoryId: string | null) {
    this.yotei = [];
    const yoteiData = YoteiJson.yotei;
    this.yotei = yoteiData.filter(yotei => {
      return String(yotei.category_id) === categoryId;
    });
  }

}
