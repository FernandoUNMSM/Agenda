import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'agendaP',
  templateUrl: './agenda.component.html',
  host: {'class': 'all'},
  styleUrls: ['./agenda.component.css']
})

export class AgendaPComponent implements OnInit {
  public evento: any;


  @ViewChild("datepicker") datepicker: ElementRef;
  constructor() {
  }
  
  ngOnInit(): void {
  }
  
  // viewEvent() {
    
  // }
  ngAfterViewInit() {
    console.log(this.datepicker);
  }
  getDate() {
    console.log(this.datepicker.nativeElement.value);
  }
}