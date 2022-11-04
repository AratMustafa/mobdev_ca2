import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarshipsDetailsPageRoutingModule } from './starships-details-routing.module';

import { StarshipsDetailsPage } from './starships-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarshipsDetailsPageRoutingModule
  ],
  declarations: [StarshipsDetailsPage]
})
export class StarshipsDetailsPageModule {}
