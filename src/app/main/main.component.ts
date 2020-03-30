import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  constructor() { }

  itemArray: any = [];
  modalWindow: boolean = false;


  editForm = new FormGroup({
    task: new FormControl(''),
    date: new FormControl(''),
    description: new FormControl(''),
  });

  addItem() {
    this.modalWindow = true;
  }

  deleteItem(i) {
    this.itemArray.splice(i, 1);
    localStorage.clear();
    localStorage.setItem("arr", JSON.stringify(this.itemArray));
  }

  editItem(i) {
    this.editForm.controls['task'].patchValue(this.itemArray[i].task);
    this.editForm.controls['date'].patchValue(this.itemArray[i].date);
    this.editForm.controls['description'].patchValue(this.itemArray[i].description);
    this.itemArray[i].edit = true;
  }

  saveItem(i) {
    this.itemArray[i].date = this.editForm.value.date;
    this.itemArray[i].description = this.editForm.value.description;
    this.itemArray[i].task = this.editForm.value.task;
    this.itemArray[i].edit = false;
    localStorage.setItem("arr", JSON.stringify(this.itemArray));
  }

  ngOnInit(): void {
    if (localStorage.getItem("arr")) {
      this.itemArray = JSON.parse(localStorage.getItem("arr"));
    }
  }

}
