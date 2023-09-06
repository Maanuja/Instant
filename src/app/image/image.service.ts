import { Injectable } from '@angular/core';
import { Image } from './image.model';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  images = [
    {
      id: 1,
      eventId: 1,
      url: 'https://images.unsplash.com/photo-1682685797886-79020b7462a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    },
    {
      id: 2,
      eventId: 1,
      url: 'https://images.unsplash.com/photo-1693939009746-01f5047702f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2958&q=80',
    },
  ];

  constructor() {}

  async getImages(): Promise<Image[]> {
    return this.images;
  }

  async getImageByIdEvent(id: number): Promise<Image[]> {
    let list: { id: number; eventId: number; url: string }[] = [];
    this.images.map((image) => {
      if (image.eventId === id) {
        list.push(image);
      }
    });
    return list;
  }
}
