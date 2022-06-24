import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InoutDeleteComponent } from '../inout-delete/inout-delete.component';
import { Inout } from '../inout';
import { User } from '../user';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-inout-detail',
  templateUrl: './inout-detail.component.html',
  styleUrls: ['./inout-detail.component.css']
})
export class InoutDetailComponent implements OnInit {

  inoutImage: string = '../assets/images/car.jpg';
  inout: Inout;

  constructor(private route: ActivatedRoute, private router: Router, public dialog: MatDialog) {
    this.inout = new Inout();
    this.inout.usr = new User();
    this.inout.id = this.route.snapshot.paramMap.get('id');
    this.inout.enter = this.route.snapshot.paramMap.get('enter');
    this.inout.out = this.route.snapshot.paramMap.get('out');
    this.inout.usr.id =this.route.snapshot.paramMap.get('usrId');
    this.inout.usr.name =this.route.snapshot.paramMap.get('usrName');
    this.inout.usr.surname =this.route.snapshot.paramMap.get('usrSurname');
    this.inout.usr.telephone =this.route.snapshot.paramMap.get('usrTelephone');
    this.inout.usr.email =this.route.snapshot.paramMap.get('usrEmail');
    this.inout.usr.address =this.route.snapshot.paramMap.get('usrAddress');
    this.inout.usr.plate =this.route.snapshot.paramMap.get('usrPlate');
   }

  ngOnInit(): void {
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, inoutToDelete: Inout): void {
    const dialogRef = this.dialog.open(InoutDeleteComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { inout: inoutToDelete },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("redirigiendo");
      this.router.navigate(['/inout']);
    });
  }

}
