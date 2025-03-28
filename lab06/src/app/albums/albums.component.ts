import { Component, OnInit } from '@angular/core';
import { IAlbums } from '../models';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albumList: IAlbums[] = [];

  constructor(private albumService: AlbumsService){}

  ngOnInit(){
    this.albumService.getAlbums().subscribe((variable: IAlbums[]) => {
      this.albumList = variable;
    })
  }
  deleteAlbum(id: number) {
    this.albumList = this.albumList.filter(album => album.id !== id);
  }

  prevUrl(){
    
  }
}
