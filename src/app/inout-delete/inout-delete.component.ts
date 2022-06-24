import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inout } from '../inout';
import { InoutService } from '../inout.service';

@Component({
  selector: 'app-inout-delete',
  templateUrl: './inout-delete.component.html',
  styleUrls: ['./inout-delete.component.css']
})
export class InoutDeleteComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {inout: Inout},
    public dialogRef: MatDialogRef<InoutDeleteComponent>,
    private inoutService: InoutService
    ) {}

  ngOnInit(): void {
  }

  clickNo() {
      console.log('No button clicked');
      this.dialogRef.close();
  }
  clickOk() {
      this.inoutService.delete(this.data.inout);
      this.dialogRef.close();
  }

}
