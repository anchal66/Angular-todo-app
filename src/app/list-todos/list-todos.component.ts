import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date
  ){}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  todos=[
    new Todo(1,"Learn Dance", false, new Date()),
    new Todo(2,"Learn Sing", true, new Date()),
    new Todo(3,"Learn Jump", false, new Date()),
    new Todo(4,"Learn Code", true, new Date())
    // {id:1, desciption: 'Learn something'},
    // {id:2, desciption: 'Learn something2'},
    // {id:3, desciption: 'Learn something3'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
