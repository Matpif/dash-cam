import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClipsPageRoutingModule } from './clips-routing.module';

import { ClipsPage } from './clips.page';

import { ClipComponent } from './components/clip/clip.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClipsPageRoutingModule
  ],
  declarations: [ClipsPage, ClipComponent]
})
export class ClipsPageModule {}
