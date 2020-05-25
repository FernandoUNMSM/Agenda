import { Component, OnInit } from '@angular/core';
import { Contador } from '../models/contador';

@Component({
  selector: 'pomodoro',
  templateUrl: './pomodoro.component.html',
  host: {'class': 'all'},
  styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent implements OnInit {
  public cont;
  public nombre: string = "jkkjh";


  constructor() {
    this.cont = Contador;
  }

  ngOnInit(): void {

    setInterval(()=> {
      this.cont++;
    }, 1000);
  }

}
