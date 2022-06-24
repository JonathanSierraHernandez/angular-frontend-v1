import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {


  userForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
   this.userForm = this.formBuilder.group({
        name: [null, Validators.required],
        surname: [null, Validators.required],
        telephone: [null, Validators.required],
        email: [null, Validators.required],
        address: [null, Validators.required],
        plate: [null, Validators.required]
      });
  }

  submit() {
    if (!this.userForm.valid) {
      console.log("invalid form");
      return;
    }
    this.createUser()
  }

  createUser() {
    this.userService.save(this.userForm.value).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users/list/']);
  }
}
