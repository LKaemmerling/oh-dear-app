import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ApiClient} from "../../services/ApiClient";
import {Site} from "../../models/site";

@Component({
  selector: 'page-list',
  templateUrl: 'sites.html'
})
export class ListPage {
  items: Array<Site>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api_client:ApiClient) {
    // If we navigated to this page, we will have an item available as a nav param
   this.items = this.api_client.getSites()
  }
}