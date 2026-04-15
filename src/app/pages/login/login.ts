import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../components/input/input';
import { DropdownComponent, DropdownOption } from '../../components/dropdown/dropdown';
import { AlertComponent } from '../../components/alert/alert';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, InputComponent, DropdownComponent, AlertComponent],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  documentType = '';
  documentNumber = '';
  isLoading = false;
  errorMessage = '';
  touched = false;

  documentTypeOptions: DropdownOption[] = [
    { value: 'CC', label: 'Cédula de Ciudadanía' },
    { value: 'CE', label: 'Cédula de Extranjería' },
    { value: 'PA', label: 'Pasaporte' },
    { value: 'NIT', label: 'NIT' },
  ];

  get documentTypeError(): boolean {
    return this.touched && !this.documentType;
  }

  get documentNumberError(): boolean {
    return (
      this.touched && (!this.documentNumber || !/^\d{6,15}$/.test(this.documentNumber))
    );
  }

  get documentNumberErrorText(): string {
    if (!this.documentNumber) return 'Este campo es requerido';
    if (!/^\d{6,15}$/.test(this.documentNumber)) return 'Ingresa entre 6 y 15 dígitos';
    return '';
  }

  get isFormValid(): boolean {
    return !!this.documentType && /^\d{6,15}$/.test(this.documentNumber);
  }

  constructor(private router: Router, private authService: AuthService) {}

  onDocumentTypeChange(value: string) {
    this.documentType = value;
    if (this.errorMessage) this.errorMessage = '';
  }

  onDocumentNumberChange(value: string) {
    this.documentNumber = value;
    if (this.errorMessage) this.errorMessage = '';
  }

  async onSubmit() {
    this.touched = true;
    if (!this.isFormValid) return;

    this.isLoading = true;
    this.errorMessage = '';

    try {
      await this.authService.login(this.documentType, this.documentNumber);
      this.router.navigate(['/dashboard']);
    } catch (err: unknown) {
      this.errorMessage =
        err instanceof Error ? err.message : 'No pudimos verificar tu identidad. Intenta de nuevo.';
    } finally {
      this.isLoading = false;
    }
  }
}
