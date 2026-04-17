import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../app/core/service/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  standalone: false,
  styleUrls: ['./login.css']
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);


  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  errorMessage: string = '';

  onSubmit() {
    if (this.loginForm.valid) {
      
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          
          this.router.navigate(['/productos']);
        },
        error: (err) => {
          this.errorMessage = 'Credenciales incorrectas. Intenta con mor_2314 / 83r5^_';
        }
      });
    }
  }
}