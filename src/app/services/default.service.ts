import { Injectable } from '@angular/core';

/**
 * Import Services
 */
import { DwelltimeService } from './dwelltime.service';
import { LanguageService } from './language.service';
import { ThemeService } from './theme.service';
import { AlertService } from '../playlist/services/alert.service';
import { PlaylistService } from '../playlist/services/playlist.service';
import { UsersService } from './users.service';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  VERSION = "";

  constructor(private dwellTimeService: DwelltimeService,
              private languageService: LanguageService,
              private themeService: ThemeService,
              private alertService: AlertService,
              private playlistService: PlaylistService,
              private usersService: UsersService,
              private http: HttpClient) {
    this.setVersion();
  }

  setVersion(){
    this.http.get("https://api.github.com/repos/AFSR/InteraactionPlayer-AFSR/releases/latest").subscribe(data => {
      this.VERSION = data["name"] + " Dev v." + data["created_at"].substring(0, 10).replace("-", ".");
    })
  }

  setToDefault(){
    this.dwellTimeService.dwellTime = false;
    this.dwellTimeService.dwellTimeValue = 1000;
    this.dwellTimeService.dwellTimeSpinnerOutsideBtn = true;
    this.dwellTimeService.diskProgress = true;
    this.alertService.doNotShowAgain = false;
    this.playlistService.playList = [];
    this.playlistService.mapPlaylist = new Map();
    this.usersService.typeUser = "";
    this.usersService.idUser = "";
  }
}
