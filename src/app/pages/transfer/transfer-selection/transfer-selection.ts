import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface TransferOption {
  id: string;
  icon: string;
  title: string;
  description: string;
  route?: string;
  disabled: boolean;
  available: boolean;
}

@Component({
  selector: 'app-transfer-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transfer-selection.html',
  styleUrl: './transfer-selection.scss',
})
export class TransferSelectionComponent {
  options: TransferOption[] = [
    {
      id: 'own',
      icon: '🔄',
      title: 'Entre mis productos',
      description: 'Mueve dinero entre tus propias cuentas',
      disabled: true,
      available: false,
    },
    {
      id: 'breb',
      icon: '🔑',
      title: 'Transferir a una llave',
      description: 'Transfiere usando número de celular, cédula o correo',
      disabled: true,
      available: false,
    },
    {
      id: 'same-bank',
      icon: '🏦',
      title: 'A otras cuentas de este banco',
      description: 'Sin comisión · Disponible en segundos',
      route: '/transfer/form',
      disabled: false,
      available: true,
    },
    {
      id: 'other-bank',
      icon: '🔀',
      title: 'A otras entidades',
      description: 'PSE, ACH u otras redes bancarias',
      disabled: true,
      available: false,
    },
  ];

  constructor(private router: Router) {}

  select(option: TransferOption) {
    if (!option.disabled && option.route) {
      this.router.navigate([option.route]);
    }
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
