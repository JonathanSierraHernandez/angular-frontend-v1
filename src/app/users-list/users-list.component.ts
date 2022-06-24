import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { UserDeleteComponent } from '../user-delete/user-delete.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSort, Sort} from '@angular/material/sort';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, AfterViewInit {

  users: User[] = [];
  dataSource = new MatTableDataSource<User>(this.users);

  displayedColumns = ['name', 'surname', 'email', 'detail'];

  @ViewChild('MatPaginator') paginator: MatPaginator;
  @ViewChild('empTbSort') empTbSort = new MatSort();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    public dialog: MatDialog,
  ) { this.getUsers(); }

  public doFilter = (event: Event) => {
      this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();
    }

  getUsers(): void {
    this.userService.findAll().subscribe(data => {
      this.users = data;
      this.dataSource = new MatTableDataSource<User>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.empTbSort;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.empTbSort;
  }

  ngOnInit(): void {
    this.getUsers();
  }




}
