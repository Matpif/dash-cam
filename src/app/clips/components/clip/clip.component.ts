import { Component, OnInit, Input } from '@angular/core';
import { Clip, DrideService } from '../../../services/dride.service';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.scss'],
})
export class ClipComponent implements OnInit {

  @Input() clip: Clip

  constructor(private readonly dride: DrideService, private videoPlayer: VideoPlayer) { }

  ngOnInit() { }

  public getUrlThumb(): string {
    return this.dride.getUrlThumb(this.clip)
  }

  public getDate(): string {
    let date = new Date(this.clip.timestamp)
    return date.getFullYear() + '/' + ((date.getMonth() < 10) ? '0' : '') + date.getMonth() + '/' + ((date.getDate() < 10) ? '0' : '') + date.getDate() + ' ' + ((date.getHours() < 10) ? '0' : '') + date.getHours() + ':' + ((date.getMinutes() < 10) ? '0' : '') + date.getMinutes() + ':' + ((date.getSeconds() < 10) ? '0' : '') + date.getSeconds();
  }

  public trash() {
    this.dride.deleteClip(this.clip.key).subscribe((data) => {
      console.log(data)
    })
  }

  public play() {
    this.videoPlayer.play(this.dride.getUrlVideo(this.clip)).then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });

  }

}
