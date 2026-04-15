import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BadgeComponent } from '../../../components/badge/badge';
import { TransferService, TransferResult } from '../../../services/transfer.service';

@Component({
  selector: 'app-transfer-success',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  templateUrl: './transfer-success.html',
  styleUrl: './transfer-success.scss',
})
export class TransferSuccessComponent implements OnInit {
  result: TransferResult | null = null;

  constructor(
    private router: Router,
    private transferService: TransferService
  ) {}

  ngOnInit() {
    this.result = this.transferService.lastResult();
    if (!this.result) {
      this.router.navigate(['/dashboard']);
    }
  }

  formatCurrency(value: number): string {
    return this.transferService.formatCurrency(value);
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('es-CO', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  downloadVoucher() {
    // In a real app this would generate a PDF
    window.print();
  }
}
