import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  host: {'class': 'all'},
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public variable: string="hola";


  constructor() { }
  
  ngOnInit(): void {
    var spans:any = document.querySelectorAll('.cabecera .info span');
    var i =0;
    if(spans.length >1) {
      setInterval(()=> {
          spans[i].style.display = 'none';
          i = (i+1)%spans.length;
          spans[i].style.display = 'initial'
      },1500);
    }
  }

}
