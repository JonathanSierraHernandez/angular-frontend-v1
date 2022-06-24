import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDeleteComponent } from '../user-delete/user-delete.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  profile: string = '../assets/images/men.jpg';
  user: User;

  constructor( private route: ActivatedRoute, private router: Router, private userService: UserService, public dialog: MatDialog) {
    this.user = new User();
    this.user.id = this.route.snapshot.paramMap.get('id')
    this.user.name = this.route.snapshot.paramMap.get('name')
    this.user.surname = this.route.snapshot.paramMap.get('surname')
    this.user.telephone = this.route.snapshot.paramMap.get('telephone')
    this.user.email = this.route.snapshot.paramMap.get('email')
    this.user.address = this.route.snapshot.paramMap.get('address')
    this.user.plate = this.route.snapshot.paramMap.get('plate')
  }

  ngOnInit(): void {
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, userToDelete: User): void {
    const dialogRef = this.dialog.open(UserDeleteComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { user: userToDelete },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("redirigiendo");
      this.router.navigate(['/users/list']);
    });
  }
}
