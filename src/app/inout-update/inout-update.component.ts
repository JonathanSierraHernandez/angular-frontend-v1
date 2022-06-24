import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InoutService } from '../inout.service';
import { UserService } from '../user.service';
import { Inout } from '../inout';
import { User } from '../user';

@Component({
  selector: 'app-inout-update',
  templateUrl: './inout-update.component.html',
  styleUrls: ['./inout-update.component.css']
})
export class InoutUpdateComponent implements OnInit {

  inout: Inout;
  inoutForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private inoutService: InoutService, private userService: UserService,) {
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
   this.inoutForm = this.formBuilder.group({
        email: [this.inout.usr.email, Validators.required],
        enter: [this.inout.enter, Validators.required],
        out: [this.inout.out, Validators.required]
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
