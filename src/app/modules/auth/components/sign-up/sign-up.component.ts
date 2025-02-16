import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { CountryData } from '../../models/country-data.model';
import { CountryService } from '../../services/country.service';
import { CountryResponse } from '../../models/country-response.model';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SignUpComponent implements OnInit {

  public signUpForm: FormGroup = new FormGroup({});

  public countries: CountryData[] = [];

  public showPassword: boolean = false;

  public constructor(
    private countryService: CountryService,
    private authService: AuthService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      country: new FormControl('', Validators.required),
      age: new FormControl(null, Validators.min(18)),
      height: new FormControl(null, Validators.min(100)),
      weight: new FormControl(null, Validators.min(40)),
      weightGoal: new FormControl(null, Validators.min(40)),
      password: new FormControl('', Validators.required)
    });

    this.countryService.getCountries().subscribe((response: CountryResponse) => {
      if (!response.error) {
        this.countries = response.data;
      }
    });
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  public signUp(): void {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    }

    this.authService.login();
    this.router.navigate(['/']);
  }

  public signIn(): void {
    this.router.navigate(['/auth/signin']);
  }

}