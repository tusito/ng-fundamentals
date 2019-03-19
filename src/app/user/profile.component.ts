import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {


    constructor(private authService:AuthService, private router: Router) { 

    }

    profileForm: FormGroup

    ngOnInit()  {
        
        let firstName = new FormControl(this.authService.currentUser.firstName, Validators.required)
        let lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)
        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName
        })
    }

    saveProfile(formValues) {
        this.authService.updateCurrentUser(formValues.value.firstName, formValues.value.lastName)
    }

    cancel() {
        this.router.navigate(['events'])
    }
    
}