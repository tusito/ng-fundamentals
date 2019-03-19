import { Component, ViewChild } from '@angular/core'
import { NgForm, FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component ({
    templateUrl: './login.component.html',
    styles: [`
        em {float:right; color:#E05C65; padding-left: 10px;}
    `]
})

export class LoginComponent {
    constructor(private authService:AuthService, private router: Router) { }
    userName:any
    password:any
    mouseoverLogin:any

    login(formValues: NgForm) {
        this.authService.loginUser(formValues.value.userName, formValues.value.password)
        console.log(formValues.value)
        console.log(formValues.value.userName  + ' ' + formValues.value.password)
        this.router.navigate(['events'])
    }

    cancel() {
        this.router.navigate(['events'])
    }

}