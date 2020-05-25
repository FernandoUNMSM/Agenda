import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { faLock} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  host: {'class': 'all2'},
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  
  @ViewChild("login") login: ElementRef;
  @ViewChild("register") register: ElementRef;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.login.nativeElement);
  }
  ngAfterViewInit() {
    console.log(this.login.nativeElement);
  }
  registerOn() {
    this.login.nativeElement.classList.toggle("off");
    this.register.nativeElement.classList.toggle("on");
  }
  loginOn() {
    this.login.nativeElement.classList.toggle("off");
    this.register.nativeElement.classList.toggle("on");
  }

  faUser = faUser;
  faLock = faLock;
}
