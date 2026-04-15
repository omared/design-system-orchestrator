import { Injectable, signal } from '@angular/core';

export interface User {
  name: string;
  documentType: string;
  documentNumber: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUser = signal<User | null>(null);

  login(documentType: string, documentNumber: string): Promise<User> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!documentNumber || documentNumber.length < 6) {
          reject(new Error('Documento inválido'));
          return;
        }
        const user: User = {
          name: 'Carlos Mendoza',
          documentType,
          documentNumber,
        };
        this.currentUser.set(user);
        resolve(user);
      }, 1500);
    });
  }

  logout(): void {
    this.currentUser.set(null);
  }

  isLoggedIn(): boolean {
    return this.currentUser() !== null;
  }
}
