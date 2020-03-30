import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component'
import { MainComponent } from '../main/main.component'
import { ModalregComponent } from '../modalreg/modalreg.component'
import { Router } from '@angular/router'

@Component({
  selector: 'app-modallog',
  templateUrl: './modallog.component.html',
  styleUrls: ['./modallog.component.scss'],
  providers: [MainComponent]
})
export class ModallogComponent implements OnInit {

  constructor(private LoginComponent: LoginComponent, private router: Router, public mainComponent: MainComponent) { }

  regForm = new FormGroup({
    Username: new FormControl(''),
    Password: new FormControl(''),
  });


  error: boolean = false;
  main: boolean = false;
  container;
  userLogArray: any = [];

  enter() {
    this.userLogArray.forEach(element => {

      if (element.username == this.regForm.value.Username) {

        if (element.password == this.regForm.value.Password) {
          this.router.navigate(['/main'])
        }
      }
    });
    if (this.regForm.value.Username !== "" && this.regForm.value.Password !== "") {

    } else {
      this.error = true;
    }

  }

  closeModalLog() {
    this.LoginComponent.modalWindowLog = false;
    this.container = document.getElementsByClassName("container")[0];
    this.container.style.filter = "blur(0px)";
  }

  ngOnInit(): void {
    if (localStorage.getItem("array")) {
      this.userLogArray = JSON.parse(localStorage.getItem("array"));
    }
  }

}
