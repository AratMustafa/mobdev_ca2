import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarshipsDetailsPage } from './starships-details.page';

const routes: Routes = [
  {
    path: '',
    component: StarshipsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarshipsDetailsPageRoutingModule {}
