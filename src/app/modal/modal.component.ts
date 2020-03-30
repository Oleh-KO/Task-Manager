import { Component, OnInit, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MainComponent } from '../main/main.component'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChildren('dateInput') dateInput: HTMLElement;

  addedItems = [];
  error: boolean = false;

  constructor(public MainComponent: MainComponent) { }

  patternDate = "(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"

  itemForm = new FormGroup({
    Task: new FormControl(''),
    Date: new FormControl('', [Validators.required, Validators.pattern(this.patternDate)]),
    Description: new FormControl(''),
  });

  getItems() {
    if (this.itemForm.value.Task !== "" && this.itemForm.value.Date !== "" && this.itemForm.value.Description !== "" && this.itemForm.valid) {
      this.error = false;
      let itemObj = {
        "task": this.itemForm.value.Task,
        "date": this.itemForm.value.Date,
        "description": this.itemForm.value.Description,
        "edit": false
      };

      this.addedItems = this.addedItems || [];
      this.addedItems.push(itemObj);
      localStorage.setItem("arr", JSON.stringify(this.addedItems));
      this.itemForm.reset();
      this.MainComponent.modalWindow = false;
      this.MainComponent.itemArray = JSON.parse(localStorage.getItem("arr"));
    } else {
      this.error = true;
    }
  }

  closeModal() {
    this.MainComponent.modalWindow = false;
  }

  ngOnInit(): void {
    this.addedItems = JSON.parse(localStorage.getItem("arr"));
  }

}
