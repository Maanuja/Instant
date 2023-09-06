import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Instant';

  ngOninit(){}


  constructor(private service:SharedService){}

  images:any = [];

  // refreshImage(){
  //   this.service.getImages().subscribe((response) =>{
  //     this.images=response;
  //   });
  // }

  // ngOninit(){
  //   this.refreshImage();
  // }
}
