import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputComponent } from '../../../components/input/input';
import { DropdownComponent, DropdownOption } from '../../../components/dropdown/dropdown';
import { AlertComponent } from '../../../components/alert/alert';
import { TransferService, BankAccount } from '../../../services/transfer.service';

@Component({
  selector: 'app-transfer-form',
  standalone: true,
  imports: [CommonModule, FormsModule, InputComponent, DropdownComponent, AlertComponent],
  templateUrl: './transfer-form.html',
  styleUrl: './transfer-form.scss',
})
export class TransferFormComponent implements OnInit {
  originAccountId = '';
  destinationAccountId = '';
  amountRaw = '';
  description = '';

  touched = false;
  isLoading = false;
  errorMessage = '';

  originOptions: DropdownOption[] = [];
  destinationOptions: DropdownOption[] = [];

  private myAccounts: BankAccount[] = [];
  private destinations: BankAccount[] = [];

  constructor(
    private router: Router,
    private transferService: TransferService
  ) {}

  ngOnInit() {
    this.myAccounts = this.transferService.getMyAccounts();
    this.destinations = this.transferService.getRegisteredDestinations();

    this.originOptions = this.myAccounts.map(a => ({
      value: a.id,
      label: `${a.alias} · ${a.accountNumber} · ${this.formatCurrency(a.balance)}`,
    }));

    this.destinationOptions = this.destinations.map(a => ({
      value: a.id,
      label: `${a.alias} · ${a.accountNumber}`,
    }));

    // Auto-select first origin if only one account
    if (this.myAccounts.length === 1) {
      this.originAccountId = this.myAccounts[0].id;
    }
  }

  get selectedOrigin(): BankAccount | undefined {
    return this.myAccounts.find(a => a.id === this.originAccountId);
  }

  get selectedDestination(): BankAccount | undefined {
    return this.destinations.find(a => a.id === this.destinationAccountId);
  }

  get amount(): number {
    const cleaned = this.amountRaw.replace(/[^0-9]/g, '');
    return Number(cleaned) || 0;
  }

  get amountFormatted(): string {
    if (!this.amountRaw) return '';
    return this.formatCurrency(this.amount);
  }

  get originError(): boolean {
    return this.touched && !this.originAccountId;
  }

  get destinationError(): boolean {
    return this.touched && !this.destinationAccountId;
  }

  get amountError(): boolean {
    return this.touched && (this.amount <= 0 || this.isAmountExceedingBalance);
  }

  get amountErrorText(): string {
    if (this.amount <= 0) return 'Ingresa un valor válido';
    if (this.isAmountExceedingBalance)
      return `Saldo insuficiente. Disponible: ${this.formatCurrency(this.selectedOrigin!.balance)}`;
    return '';
  }

  get isAmountExceedingBalance(): boolean {
    if (!this.selectedOrigin || this.amount <= 0) return false;
    return this.amount > this.selectedOrigin.balance;
  }

  get showPartialSummary(): boolean {
    return !!this.originAccountId && !!this.destinationAccountId && this.amount > 0;
  }

  get isFormValid(): boolean {
    return (
      !!this.originAccountId &&
      !!this.destinationAccountId &&
      this.amount > 0 &&
      !this.isAmountExceedingBalance
    );
  }

  onAmountInput(value: string) {
    // Strip non-numeric and enforce max
    const cleaned = value.replace(/[^0-9]/g, '');
    this.amountRaw = cleaned;
    if (this.errorMessage) this.errorMessage = '';
  }

  formatCurrency(value: number): string {
    return this.transferService.formatCurrency(value);
  }

  continue() {
    this.touched = true;
    if (!this.isFormValid) return;

    this.transferService.setPendingTransfer({
      originAccountId: this.originAccountId,
      destinationAccountId: this.destinationAccountId,
      amount: this.amount,
      description: this.description,
    });

    this.router.navigate(['/transfer/summary']);
  }

  goBack() {
    this.router.navigate(['/transfer']);
  }
}
