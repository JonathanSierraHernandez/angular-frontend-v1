import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  add:boolean = false;
  modify:boolean = false;
  list:boolean = false;
  delete:boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  showAdd(){
    this.modify = false;
    this.list = false;
    this.delete = false;
    this.add = true;
  }

  showModify(){
    this.add = false;
    this.list = false;
    this.delete = false;
    this.modify = true;
  }

  showList(){
      this.add = false;
      this.delete = false;
      this.modify = false;
      this.list = true;
    }

  showDelete(){
      this.add = false;
      this.list = false;
      this.modify = false;
      this.delete = true;
    }

}
