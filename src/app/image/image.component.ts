import { Component } from '@angular/core';
import {ImageService} from './image.service'
import {Image} from './image.model'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  images: Image[] = [];
  eventId : number = 0;

  imagesList: boolean = false;

  constructor(private imageService: ImageService, private route: ActivatedRoute) {}

  ngOnInit():void {
    this.eventId = Number(this.route.snapshot.paramMap.get('id'));
    this.imageService.getImageByIdEvent(this.eventId).then((data) => {
      data.length > 0 ? this.imagesList = true : this.imagesList = false;
      this.images = data;
    });
  }










}
