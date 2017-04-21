import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null, // 'Jhosef Marks',
    email: null // 'jhosef@marks.com'
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log('Form: ', form.value);

    console.log('Objeto: ', this.usuario);
  }

}
