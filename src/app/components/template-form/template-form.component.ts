import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  usuario = {
    nome: null,
    email: 'icarorangel05@gmail.com',
  };
  onSubmit(form: any) {
    console.log(form.value);
  }
}
