import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private dbPath = '/images';

  imagesRef: AngularFirestoreCollection<Image>;

  constructor(private db: AngularFirestore) {
    this.imagesRef = db.collection(this.dbPath);
    console.log(this.imagesRef);
  }

  getAll(): AngularFirestoreCollection<Image> {
    return this.imagesRef;
  }

  create(tutorial: Image): any {
    return this.imagesRef.add({ ...tutorial });
  }

  update(id: string, data: any): Promise<void> {
    return this.imagesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.imagesRef.doc(id).delete();
  }
}