import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent {


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {user: User},
    public dialogRef: MatDialogRef<UserDeleteComponent>,
    private userService: UserService
    ) {}

  onClose(): void {
    // set the closeMessage property here
  }

  clickNo() {
      console.log('No button clicked');
      this.dialogRef.close();
  }
  clickOk() {
      this.userService.delete(this.data.user);
      this.dialogRef.close();
  }

}
