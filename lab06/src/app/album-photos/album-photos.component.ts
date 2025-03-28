import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IPhoto } from '../models';
import { AlbumsService } from '../albums.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  photos: IPhoto[] = [];
  albumID!: number;

  constructor(private route: ActivatedRoute, private albumsServices: AlbumsService) {}

  ngOnInit() {
    
    this.albumID = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsServices.getPhotos(this.albumID).subscribe((variable: IPhoto[]) => {
      this.photos = variable;
    })
  }
}
