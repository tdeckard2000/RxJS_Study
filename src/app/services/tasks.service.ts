import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  slowTaskCompleted = new Subject<boolean>();
  verySlowTaskCompleted = new Subject<boolean>();

  startSlowTask() {
    setTimeout(() => {
      return this.slowTaskCompleted.next(true);
    }, 3000);
  };

  startVerySlowTask() {
    setTimeout(()=>{
      return this.verySlowTaskCompleted.next(true);
    }, 6000)
  };

}
