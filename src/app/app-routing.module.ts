import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pageコンポーネント
import { TopComponent } from 'src/app/component/page/top/top.component';
import { InfoComponent } from 'src/app/component/page/info/info.component';
import { PickUpComponent } from 'src/app/component/page/pick-up/pick-up.component';
import { YoteiListComponent } from 'src/app/component/page/yotei-list/yotei-list.component';
import { CategoryListComponent } from 'src/app/component/page/category-list/category-list.component';
import { CategoryYoteiListComponent } from 'src/app/component/page/category-yotei-list/category-yotei-list.component';
import { RequestComponent } from 'src/app/component/page/request/request.component';
import { AddHomeComponent } from 'src/app/component/page/add-home/add-home.component';

const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'pickUp', component: PickUpComponent },
  { path: 'info', component: InfoComponent },
  { path: 'yoteiList', component: YoteiListComponent },
  { path: 'categoryList', component: CategoryListComponent },
  { path: 'categoryYoteiList/:category_id', component: CategoryYoteiListComponent },
  { path: 'request', component: RequestComponent },
  { path: 'addHome', component: AddHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
