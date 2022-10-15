import { Component, OnInit } from '@angular/core';
import CategoryJson from 'src/assets/mock/category.json';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {
  public category: any;

  constructor() { }

  ngOnInit(): void {
    this.category = this.getCategoryData();
  }

  /**
   * mockからデータを取得
   */
     public getCategoryData() {
      return CategoryJson.category;
    }

}
