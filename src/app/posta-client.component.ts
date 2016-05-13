import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'posta-client-app',
  templateUrl: 'posta-client.component.html'
})
export class PostaClientAppComponent implements OnInit {
  constructor() { }
  title: string = 'Pošte Srpske';
  ngOnInit() { }

}