import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavegacaoTrabalhosPage } from './navegacao-trabalhos';

@NgModule({
  declarations: [
    NavegacaoTrabalhosPage,
  ],
  imports: [
    IonicPageModule.forChild(NavegacaoTrabalhosPage),
  ]
})
export class NavegacaoTrabalhosPageModule {}
