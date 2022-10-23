import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CategoryJson from 'src/assets/mock/category.json';
import { Category } from 'src/app/interface/category';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {
  public category: Category[];

  constructor(
    private router: Router
  ) {
    this.category = [];
  }

  ngOnInit(): void {
    this.category = this.getCategoryData();
  }

  /**
   * mockからデータを取得
   */
  public getCategoryData() {
    return CategoryJson.category;
  }

  /**
   * カテゴリーごとの予定リストに遷移する
   *
   * @param categoryId: number カテゴリーID
   */
  goYoteiListByCategory(categoryId: number) {
    this.router.navigate(['categoryYoteiList', categoryId]);
  }

}
