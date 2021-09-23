import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import exportFromJSON from 'export-from-json';

/**
 * Import Services
 */
import { NotifierService } from 'angular-notifier';
import { TranslateService } from '@ngx-translate/core';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-save-dialog',
  templateUrl: './exportfile.component.html',
  styleUrls: ['./exportfile.component.css']
})
export class ExportfileComponent implements OnInit {

  playlistEmpty = false;
  defaultTitleFile = "Playlist"
  titleFile = "";

  constructor(private dialog: MatDialog,
              private notifier: NotifierService,
              private translate: TranslateService,
              private playlistService: PlaylistService) {
  }

  ngOnInit(): void {
    this.playlistEmpty = this.playlistService.playList.length == 0;
  }

  /**
   * @param event
   *
   * Allows to get the value given by the user
   */
  getTitle(event){
    this.titleFile = event.target.value;
  }

  /**
   * If the user submit, allows the user to export the Playlist
   * Then close the DialogComponent and notify that the save is done;
   */
  public submit(){
    if (this.titleFile == ""){
      this.titleFile = this.defaultTitleFile;
    }
    exportFromJSON({
      data: this.playlistService.playList,
      fields: {} ,
      fileName: this.titleFile,
      exportType: exportFromJSON.types.json
    });
    this.dialog.closeAll();
    this.notifier.notify('warning', this.translate.instant('notifier.exportPlaylist'));
  }

  /**
   * If the user cancel the save then close the DialogComponent
   */
  public goCancel(){
    this.dialog.closeAll();
  }
}
