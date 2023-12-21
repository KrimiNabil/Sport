import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  test = true;
  path: string = "";
  imagePreview: any;
  file!: FileList;
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.path = this.router.url;
    console.log("Here Path", this.path);
    this.signupForm = this.formBuilder.group({
      fristName: ["", [Validators.required, Validators.minLength(5)]],
      lastName: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(8)]],
      confirmPwd: ["", [Validators.required]],
      img: [""]

    });
  }
  signup() {
    console.log("here signup", this.signupForm.value);
    if (this.path == "/subscription") {
      this.signupForm.value.role = "user";
    } else {
      this.signupForm.value.role = "admin";
    }
    this.userService.signup(this.signupForm.value, this.signupForm.value.img)
      .subscribe((response) => {
        console.log("Here response after signup", response.msg);

      }
      );

  }
  matchPwd() {
    let pwd = this.signupForm.value.pwd;
    let confirmPwd = this.signupForm.value.confirmPwd;
    if (confirmPwd != "") {
      this.test = false;
      if (pwd == confirmPwd) {
        this.test = true;
      } else {
        this.test = false;
      }
    }


  }
  onImageSelected(event: Event) {
    const fileInput = (event.target as HTMLInputElement);
    const file  = (fileInput.files as FileList)[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }
}

