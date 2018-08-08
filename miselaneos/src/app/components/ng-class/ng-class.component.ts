import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  alerta: string = 'alert-danger';

  propiedades: object = {
    danger: false
  };

  loading: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  ejecutar() {
    this.loading = true;

    setTimeout(() => this.loading = false, 5000)
  }
}
