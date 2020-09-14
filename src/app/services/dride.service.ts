import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Network {
  ssid: string;
  password: string;
}

export interface GlobalSettings {
  name: string;
  settings: Settings;
  version: string;
}

export interface Settings {
  clipLength: number;
  debug: boolean;
  flipVideo: boolean;
  fps: number;
  gSensorSensitivity: string;
  gps: boolean;
  indicator: boolean;
  mic: boolean;
  network: Network;
  resolution: string;
  speaker: boolean;
  videoRecord: boolean;
}

export interface Clip {
  clip: string;
  key: string;
  thumb: string;
  timestamp: number;
}

export interface Clips {
  data: Clip[];
}

@Injectable({
  providedIn: 'root'
})
export class DrideService {

  private static BASE_URL = 'http://192.168.42.1:9000/'
  private static URL = DrideService.BASE_URL + 'api/'

  constructor(private readonly http: HttpClient) { }

  public getClips(): Observable<Clips> {
    let url = DrideService.URL + 'getClips'
    return this.http.get<Clips>(url)
  }

  getSettings(): Observable<GlobalSettings> {
    let url = DrideService.URL + 'getSettings'
    return this.http.get<GlobalSettings>(url)
  }

  saveSettings(settings: Settings) {
    for (let key of Object.keys(settings)) {
      if (key == 'network') {
        let ssid = settings[key]['ssid'];
        let password = settings[key]['password'];
        this.setSetting('netwrokSSID', ssid).subscribe()
        this.setSetting('netwrokPassword', password).subscribe()
      } else {
        let value = settings[key];
        this.setSetting(key, value).subscribe()
      }
    }
  }

  setSetting(fieldName: String, fieldValue: String): Observable<any> {
    let url = DrideService.URL + 'setSetting?fieldName=' + fieldName + '&fieldValue=' + fieldValue
    return this.http.get<any>(url)
  }

  deleteClip(videoId: String): Observable<any> {
    let url = DrideService.URL + 'deleteClip?videoId=' + videoId
    return this.http.get<any>(url)
  }

  deleteAllClips(): Observable<any> {
    let url = DrideService.URL + 'deleteAllClips'
    return this.http.get<any>(url)
  }

  updateFirmware(): Observable<any> {
    let url = DrideService.URL + 'updateFirmware'
    return this.http.get<any>(url)
  }

  isOnline(): Observable<any> {
    let url = DrideService.URL + 'isOnline'
    return this.http.get<any>(url)
  }

  getSerialNumber(): Observable<any> {
    let url = DrideService.URL + 'getSerialNumber'
    return this.http.get<any>(url)
  }

  indicator(action: String) {
    let url = DrideService.URL + 'indicator'
  }

  setLiveMode(mode: number) {
    let url = DrideService.URL + 'setLiveMode'
  }

  getUrlThumb(clip: Clip): string {
    return DrideService.BASE_URL + clip.thumb
  }

  getUrlVideo(clip: Clip): string {
    return DrideService.BASE_URL + clip.clip
  }
}
