import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IAlbums } from '../models';
import { AlbumsService } from '../albums.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  album !: IAlbums;
  newTitle: string = '';
  constructor(private route: ActivatedRoute, private albumsServices: AlbumsService){}

  ngOnInit(){
    this.route.paramMap.subscribe((params) => {
      const albumID = Number(params.get('id'));

      this.albumsServices.getAlbum(albumID).subscribe((variable: IAlbums) => {
        this.album = variable;
      });
      // this.album = albumList.find(a => a.id === albumID) as IAlbums;
    })
  }

  saveTitle(): void {
    if (this.newTitle) {
      this.albumsServices.updateAlbumTitle(this.album.id, this.newTitle).subscribe(updatedAlbum => {
        this.album = updatedAlbum;
        alert('Название альбома обновлено!');
      });
    } else {
      alert('Название не может быть пустым!');
    }
  }
}
