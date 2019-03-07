import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-page-user-register',
  templateUrl: './page-user-register.component.html',
  styleUrls: ['./page-user-register.component.css']
})
export class PageUserRegisterComponent implements OnInit {

  isRegistrationSuccess = false;

  registerForm = new FormGroup (
    {
      email: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl(),
      person: new FormGroup(
        {
          name: new FormControl(),
          surname: new FormControl()
        }
      )
    }
  );

  constructor(
    private auth : AuthService
  ) { }

  ngOnInit() {
  }

  async handleSubmit(){
    const formData = this.registerForm.getRawValue();
    const status =  await this.auth.register(formData);
    if(status.status === 'ok'){
      this.isRegistrationSuccess = true;
    }
  }

}
