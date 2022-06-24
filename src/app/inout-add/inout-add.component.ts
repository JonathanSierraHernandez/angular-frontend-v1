import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InoutService } from '../inout.service';
import { UserService } from '../user.service';
import { Inout } from '../inout';
import { User } from '../user';

@Component({
  selector: 'app-inout-add',
  templateUrl: './inout-add.component.html',
  styleUrls: ['./inout-add.component.css']
})
export class InoutAddComponent implements OnInit {

  inoutForm: FormGroup;
  inout: Inout = new Inout();
  usr: User;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private inoutService: InoutService,
      private userService: UserService,
      private formBuilder: FormBuilder) {
    }

  ngOnInit(): void {
   this.inoutForm = this.formBuilder.group({
        email: [null, Validators.required],
        enter: [null, Validators.required],
        out: [null, Validators.required]
      });
  }

  submit() {
    if (!this.inoutForm.valid) {
      console.log("invalid form");
      return;
    }

    this.userService.findByEmail(this.inoutForm.value.email).subscribe(result => {
      this.inout.enter = this.inoutForm.value.enter;
      this.inout.out = this.inoutForm.value.out;
      this.inout.usr = result;
      this.createInOut();
     });


  }

  createInOut() {
    console.log(this.inout);
    this.inoutService.save(this.inout).subscribe(result => this.gotoInOutList());
  }

  gotoInOutList() {
    this.router.navigate(['/inout']);
  }

}
