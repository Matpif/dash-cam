import { Component, OnInit } from '@angular/core';
import { DrideService, Clip } from '../services/dride.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-clips',
  templateUrl: './clips.page.html',
  styleUrls: ['./clips.page.scss'],
})
export class ClipsPage implements OnInit {

  public clips: Clip[]

  constructor(private readonly dride: DrideService, public loadingController: LoadingController, private readonly alertController: AlertController) { }

  async ngOnInit() {
    let loader = await this.loadingController.create({
      keyboardClose: false,
      message: 'Please wait...'
    })
    loader.present()
    this.dride.getClips().pipe(
      finalize(() => {
        loader.dismiss()
      })).subscribe(clips => {
        this.clips = clips.data
      })
  }

  async deleteAllClipAlert() {
    const alert = await this.alertController.create({
      header: 'Delete all ?',
      message: 'Do you want to delete all video ?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.deleteAllClips()
          }
        }
      ]
    });

    await alert.present();
  }

  public deleteAllClips() {
    this.dride.deleteAllClips().subscribe((data) => {
      console.log(data)
    })
  }

}
