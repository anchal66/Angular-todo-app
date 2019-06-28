import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos=[
    {id:1, desciption: 'Learn something'},
    {id:2, desciption: 'Learn something2'},
    {id:3, desciption: 'Learn something3'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
