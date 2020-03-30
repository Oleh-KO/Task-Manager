import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component'
import { ModallogComponent } from '../modallog/modallog.component'

@Component({
  selector: 'app-modalreg',
  templateUrl: './modalreg.component.html',
  styleUrls: ['./modalreg.component.scss'],
  providers: []
})
export class ModalregComponent implements OnInit {

  constructor(private LoginComponent: LoginComponent) { }

  regForm = new FormGroup({
    Username: new FormControl(''),
    Password: new FormControl(''),
  });

  error: boolean = false;
  container;
  userArray: any = [];

  register() {
    if (this.regForm.value.Username !== "" && this.regForm.value.Password !== "") {
      this.error = false;
      let userObj = {
        "username": this.regForm.value.Username,
        "password": this.regForm.value.Password,
      };

      this.userArray = this.userArray || [];
      this.userArray.push(userObj);
      localStorage.setItem("array", JSON.stringify(this.userArray));
      this.regForm.reset();
      this.LoginComponent.modalWindowReg = false;
      this.container = document.getElementsByClassName("container")[0];
      this.container.style.filter = "blur(0px)";
    } else {
      this.error = true;
    }
  }

  closeModalReg() {
    this.LoginComponent.modalWindowReg = false;
    this.container = document.getElementsByClassName("container")[0];
    this.container.style.filter = "blur(0px)";
  }

  ngOnInit(): void {
    if (localStorage.getItem('array')) {
      this.userArray = JSON.parse(localStorage.getItem("array"));
    }

  }
}



