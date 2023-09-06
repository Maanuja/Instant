import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc , getFirestore} from '@angular/fire/firestore';
import  { firebaseConfig } from 'src/environements/environement';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private app:any;
  private db:any;
  
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
    console.log(this.db);
  }

  // getImages(){
  //     let imagesCollection = collection(this.db, 'image');
  //     console.log(imagesCollection);
  //     return collectionData(imagesCollection, {idField: 'id'});
  // }

  // addImage(image:string){
  //   let data = {image:image};
  //   let imagesCollection = collection(this.db, 'image');

  //   return addDoc(imagesCollection,data);
  // }

  // deleteImage(id:string){
  //   let docRef = doc(this.db, 'image/'+id);
  //   return deleteDoc(docRef);
  // }
}




