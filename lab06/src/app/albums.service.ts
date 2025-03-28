import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlbums, IPhoto } from './models';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private client: HttpClient) {}

  getAlbums(): Observable<IAlbums[]> {
    return this.client.get<IAlbums[]>(this.apiUrl);
  }

  getAlbum(id: number): Observable<IAlbums> {
    return this.client.get<IAlbums>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  getPhotos(id: number): Observable<IPhoto[]>{
    return this.client.get<IPhoto[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
  }

  updateAlbumTitle(id: number, newTitle: string): Observable<IAlbums>{
    return this.client.put<IAlbums>(`https://jsonplaceholder.typicode.com/albums/${id}`, {title: newTitle});
  }

  delelteAlbum(id: number)
  {
    return this.client.delete<IAlbums>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
}
