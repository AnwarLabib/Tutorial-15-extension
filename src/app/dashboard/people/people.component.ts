import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from "@angular/forms";
import { Person } from './person.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: Person[] = [
  {
    name: 'Fady Sameh',
    about: 'Loves football and coding',
    imagePath: 'assets/fady.jpg'
  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
