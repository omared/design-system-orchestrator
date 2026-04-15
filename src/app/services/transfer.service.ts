import { Injectable, signal } from '@angular/core';

export interface BankAccount {
  id: string;
  alias: string;
  accountNumber: string;
  balance: number;
  type: 'savings' | 'checking' | 'credit';
  owner: string;
}

export interface TransferData {
  originAccountId: string;
  destinationAccountId: string;
  amount: number;
  description?: string;
}

export interface TransferResult {
  transactionId: string;
  timestamp: Date;
  originAccount: BankAccount;
  destinationAccount: BankAccount;
  amount: number;
  fee: number;
  total: number;
}

@Injectable({ providedIn: 'root' })
export class TransferService {
  private readonly accounts: BankAccount[] = [
    {
      id: 'acc-001',
      alias: 'Cuenta de Ahorros Principal',
      accountNumber: '****4521',
      balance: 4_850_000,
      type: 'savings',
      owner: 'Carlos Mendoza',
    },
    {
      id: 'acc-002',
      alias: 'Cuenta Corriente',
      accountNumber: '****8803',
      balance: 1_200_000,
      type: 'checking',
      owner: 'Carlos Mendoza',
    },
    {
      id: 'acc-003',
      alias: 'Cuenta Nómina',
      accountNumber: '****1190',
      balance: 700_000,
      type: 'savings',
      owner: 'Carlos Mendoza',
    },
  ];

  private readonly registeredDestinations: BankAccount[] = [
    {
      id: 'dest-001',
      alias: 'Laura García',
      accountNumber: '****7765',
      balance: 0,
      type: 'savings',
      owner: 'Laura García',
    },
    {
      id: 'dest-002',
      alias: 'Juan Herrera',
      accountNumber: '****3312',
      balance: 0,
      type: 'checking',
      owner: 'Juan Herrera',
    },
    {
      id: 'dest-003',
      alias: 'Ana Rodríguez',
      accountNumber: '****9944',
      balance: 0,
      type: 'savings',
      owner: 'Ana Rodríguez',
    },
  ];

  // Shared state between steps
  pendingTransfer = signal<TransferData | null>(null);
  lastResult = signal<TransferResult | null>(null);

  getMyAccounts(): BankAccount[] {
    return this.accounts;
  }

  getRegisteredDestinations(): BankAccount[] {
    return this.registeredDestinations;
  }

  getAccountById(id: string): BankAccount | undefined {
    return [...this.accounts, ...this.registeredDestinations].find(a => a.id === id);
  }

  setPendingTransfer(data: TransferData): void {
    this.pendingTransfer.set(data);
  }

  confirmTransfer(): Promise<TransferResult> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = this.pendingTransfer();
        if (!data) {
          reject(new Error('No hay transferencia pendiente'));
          return;
        }

        const origin = this.getAccountById(data.originAccountId);
        const destination = this.getAccountById(data.destinationAccountId);

        if (!origin || !destination) {
          reject(new Error('Cuenta no encontrada'));
          return;
        }

        // Simulate random failure ~5%
        if (Math.random() < 0.05) {
          reject(new Error('Error de conexión. Intenta de nuevo.'));
          return;
        }

        const fee = 0; // Same bank: no fee
        const result: TransferResult = {
          transactionId: 'TXN-' + Date.now(),
          timestamp: new Date(),
          originAccount: origin,
          destinationAccount: destination,
          amount: data.amount,
          fee,
          total: data.amount + fee,
        };

        this.lastResult.set(result);
        this.pendingTransfer.set(null);
        resolve(result);
      }, 1800);
    });
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  }
}
