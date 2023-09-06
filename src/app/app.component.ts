import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Instant';
  firestore: Firestore = inject(Firestore);

  ngOnInit() {
    console.log(this.firestore, 'firestore');
    
    console.log(collection(this.firestore, 'images'));

    const itemCollection = collection(this.firestore, 'images');
    const test = collectionData(itemCollection);
    console.log(test);
  }
}
