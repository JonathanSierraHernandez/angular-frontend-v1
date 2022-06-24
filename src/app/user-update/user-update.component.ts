import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent {

  userForm: FormGroup;

  constructor( private route: ActivatedRoute, private router: Router, private userService: UserService, private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      id: [this.route.snapshot.paramMap.get('id'), Validators.required],
      name: [this.route.snapshot.paramMap.get('name'), Validators.required],
      surname: [this.route.snapshot.paramMap.get('surname'), Validators.required],
      telephone: [this.route.snapshot.paramMap.get('telephone'), Validators.required],
      email: [this.route.snapshot.paramMap.get('email'), Validators.required],
      address: [this.route.snapshot.paramMap.get('address'), Validators.required],
      plate: [this.route.snapshot.paramMap.get('plate'), Validators.required]
    });

  }

  submit() {
    if (!this.userForm.valid) {
      console.log("invalid form");
      return;
    }
    this.updateUser()
  }

  updateUser() {
    this.userService.save(this.userForm.value).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users/list']);
  }

}
