import { Component, OnInit } from '@angular/core';
import { ModallogComponent } from '../modallog/modallog.component';
import { ModalregComponent } from '../modalreg/modalreg.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  regForm = new FormGroup({
    Username: new FormControl(''),
    Password: new FormControl(''),
  });

  modalWindowReg: boolean = false;
  modalWindowLog: boolean = false;
  main: boolean = false;
  container;

  openRegModal() {
    this.modalWindowReg = true;
    this.container = document.getElementsByClassName("container")[0];
    this.container.style.filter = "blur(2px)";
  }

  closeLog() {
    this.modalWindowLog = false;
    this.container = document.getElementsByClassName("container")[0];
    this.container.style.filter = "blur(0px)";
  }

  openLogModal() {
    this.modalWindowLog = true;
    this.container = document.getElementsByClassName("container")[0];
    this.container.style.filter = "blur(2px)";
  }

  ngOnInit(): void {
  }

}
