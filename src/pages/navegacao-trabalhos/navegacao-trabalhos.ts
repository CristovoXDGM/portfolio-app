import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the NavegacaoTrabalhosPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-navegacao-trabalhos',
  templateUrl: 'navegacao-trabalhos.html'
})
export class NavegacaoTrabalhosPage {

  oQueEuFacoRoot = 'OQueEuFacoPage';
  linguagensRoot = 'LinguagensPage';
  contatosRoot = 'ContatosPage';
  redesSociaisRoot = 'RedesSociaisPage';


  constructor(public navCtrl: NavController) {}

}
