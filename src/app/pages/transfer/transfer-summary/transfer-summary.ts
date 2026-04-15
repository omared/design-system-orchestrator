import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ModalComponent } from '../../../components/modal/modal';
import { AlertComponent } from '../../../components/alert/alert';
import { TransferService, TransferData, BankAccount } from '../../../services/transfer.service';

@Component({
  selector: 'app-transfer-summary',
  standalone: true,
  imports: [CommonModule, ModalComponent, AlertComponent],
  templateUrl: './transfer-summary.html',
  styleUrl: './transfer-summary.scss',
})
export class TransferSummaryComponent implements OnInit {
  pendingTransfer: TransferData | null = null;
  originAccount: BankAccount | undefined;
  destinationAccount: BankAccount | undefined;

  showConfirmModal = false;
  isConfirming = false;
  errorMessage = '';

  constructor(
    private router: Router,
    private transferService: TransferService
  ) {}

  ngOnInit() {
    this.pendingTransfer = this.transferService.pendingTransfer();
    if (!this.pendingTransfer) {
      this.router.navigate(['/transfer']);
      return;
    }
    this.originAccount = this.transferService.getAccountById(this.pendingTransfer.originAccountId);
    this.destinationAccount = this.transferService.getAccountById(
      this.pendingTransfer.destinationAccountId
    );
  }

  get amount(): number {
    return this.pendingTransfer?.amount ?? 0;
  }

  get fee(): number {
    return 0; // Same bank: no fee
  }

  get total(): number {
    return this.amount + this.fee;
  }

  formatCurrency(value: number): string {
    return this.transferService.formatCurrency(value);
  }

  openConfirmModal() {
    this.showConfirmModal = true;
  }

  closeConfirmModal() {
    if (!this.isConfirming) this.showConfirmModal = false;
  }

  async confirm() {
    this.isConfirming = true;
    this.errorMessage = '';
    try {
      await this.transferService.confirmTransfer();
      this.showConfirmModal = false;
      this.router.navigate(['/transfer/success']);
    } catch (err: unknown) {
      this.errorMessage =
        err instanceof Error ? err.message : 'Error al procesar la transferencia.';
    } finally {
      this.isConfirming = false;
    }
  }

  goBack() {
    this.router.navigate(['/transfer/form']);
  }
}
