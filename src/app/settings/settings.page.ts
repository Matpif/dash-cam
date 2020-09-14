import { Component, OnInit } from '@angular/core';
import { DrideService, GlobalSettings } from '../services/dride.service';
import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public globalSettings: GlobalSettings

  constructor(private readonly dride: DrideService, public loadingController: LoadingController) { }

  async ngOnInit() {
    let loader = await this.loadingController.create({
      keyboardClose: false,
      message: 'Please wait...'
    })
    loader.present()
    this.dride.getSettings().pipe(
      finalize(() => {
        loader.dismiss()
      })).subscribe(settings => {
        this.globalSettings = settings
      })
  }

  save() {
    this.globalSettings.settings.network = {
      ssid: 'dride',
      password: 'ilovedride'
    }
    this.dride.saveSettings(this.globalSettings.settings)
  }
}
