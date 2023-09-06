import { Injectable } from '@angular/core';
import { Event } from './event.model'

@Injectable({
  providedIn: 'root'
})
export class EventService {
  event: Event[] = [];

  constructor() { }
}
