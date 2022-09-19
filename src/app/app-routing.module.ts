import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pageコンポーネント
import { TopComponent } from 'src/app/component/page/top/top.component';
import { InfoComponent } from 'src/app/component/page/info/info.component';
import { PickUpComponent } from 'src/app/component/page/pick-up/pick-up.component';
import { YoteiListComponent } from 'src/app/component/page/yotei-list/yotei-list.component';

const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'pickUp', component: PickUpComponent },
  { path: 'info', component: InfoComponent },
  { path: 'yoteiList', component: YoteiListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
