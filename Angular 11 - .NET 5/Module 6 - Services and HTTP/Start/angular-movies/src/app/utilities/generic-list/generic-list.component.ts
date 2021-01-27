import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styles: [
  ]
})
export class GenericListComponent implements OnInit {

  @Input()
  list;
  constructor() { }

  ngOnInit(): void {
  }

}
