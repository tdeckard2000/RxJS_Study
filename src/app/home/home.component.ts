import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private taskService:TasksService) { }

  backgroundTaskCounter: number = 0;

  onStartSlowTask() {
    this.taskService.startSlowTask();
    this.backgroundTaskCounter ++;
  }

  onStartVerySlowTask() {
    this.taskService.startVerySlowTask();
    this.backgroundTaskCounter ++;
  }

  ngOnInit(): void {
    this.taskService.slowTaskCompleted.subscribe((result)=>{
      this.backgroundTaskCounter --;
    })

    this.taskService.verySlowTaskCompleted.subscribe((result)=>{
      this.backgroundTaskCounter --;
    })
  }

}
