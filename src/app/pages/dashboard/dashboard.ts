import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CardComponent } from '../../components/card/card';
import { BadgeComponent } from '../../components/badge/badge';
import { TabsComponent, Tab } from '../../components/tabs/tabs';
import { SkeletonComponent } from '../../components/skeleton/skeleton';
import { AuthService } from '../../services/auth.service';
import { TransferService, BankAccount } from '../../services/transfer.service';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  tagVariant: 'accent' | 'success' | 'warning';
  gradient: string;
}

interface ServiceItem {
  id: string;
  icon: string;
  label: string;
  route?: string;
  disabled?: boolean;
}

interface ProductItem {
  id: string;
  type: 'account' | 'credit-card' | 'credit';
  name: string;
  number: string;
  balance: number;
  label: string;
  color: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardComponent, BadgeComponent, TabsComponent, SkeletonComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class DashboardComponent implements OnInit {
  isLoading = true;
  userName = '';
  currentNewsIndex = 0;
  currentProductIndex = 0;
  activeInterestTab = 'casa';

  newsItems: NewsItem[] = [
    {
      id: 'n1',
      title: '¡Tu crédito aprobado en minutos!',
      description: 'Solicita hasta $50.000.000 con las mejores tasas del mercado.',
      tag: 'Nuevo',
      tagVariant: 'accent',
      gradient: 'linear-gradient(135deg, #7a0cff 0%, #0ea5e9 100%)',
    },
    {
      id: 'n2',
      title: 'Gana 5% de cashback',
      description: 'Usa tu tarjeta débito en comercios afiliados hasta el 30 de enero.',
      tag: 'Promo',
      tagVariant: 'success',
      gradient: 'linear-gradient(135deg, #22c55e 0%, #0ea5e9 100%)',
    },
    {
      id: 'n3',
      title: 'Nuevo: Inversiones desde $50.000',
      description: 'Haz crecer tu dinero con fondos de inversión sin mínimos altos.',
      tag: 'Destacado',
      tagVariant: 'warning',
      gradient: 'linear-gradient(135deg, #ff7700 0%, #ffc800 100%)',
    },
  ];

  products: ProductItem[] = [
    {
      id: 'acc-001',
      type: 'account',
      name: 'Cuenta Ahorros',
      number: '****4521',
      balance: 4_850_000,
      label: 'Saldo disponible',
      color: '#7a0cff',
    },
    {
      id: 'acc-002',
      type: 'account',
      name: 'Cuenta Corriente',
      number: '****8803',
      balance: 1_200_000,
      label: 'Saldo disponible',
      color: '#0ea5e9',
    },
    {
      id: 'cc-001',
      type: 'credit-card',
      name: 'Tarjeta de Crédito',
      number: '****2211',
      balance: 3_000_000,
      label: 'Cupo disponible',
      color: '#22c55e',
    },
    {
      id: 'cr-001',
      type: 'credit',
      name: 'Crédito Personal',
      number: '#CR-0091',
      balance: 12_500_000,
      label: 'Saldo pendiente',
      color: '#ff7700',
    },
  ];

  services: ServiceItem[] = [
    { id: 'breb', icon: '🔑', label: 'Mis llaves Bre-B', disabled: true },
    { id: 'transfer', icon: '↗️', label: 'Transferir', route: '/transfer' },
    { id: 'atm', icon: '🏧', label: 'Retiro sin tarjeta', disabled: true },
    { id: 'cert', icon: '📄', label: 'Certificados', disabled: true },
  ];

  interestTabs: Tab[] = [
    { id: 'casa', label: 'Mi casa' },
    { id: 'tienda', label: 'Tienda en línea' },
    { id: 'carro', label: 'Mi carro' },
  ];

  interestOffers: Record<string, { title: string; description: string; cta: string }[]> = {
    casa: [
      {
        title: 'Crédito Hipotecario',
        description: 'Tasa desde 10.5% E.A. · Hasta 30 años',
        cta: 'Simular',
      },
      {
        title: 'Seguro de Hogar',
        description: 'Cubre hasta $200M en daños',
        cta: 'Cotizar',
      },
    ],
    tienda: [
      {
        title: 'Cuotas sin interés',
        description: '3 y 6 cuotas en más de 500 tiendas',
        cta: 'Ver tiendas',
      },
      {
        title: 'Cashback 10%',
        description: 'En compras en línea este mes',
        cta: 'Activar',
      },
    ],
    carro: [
      {
        title: 'Crédito de Vehículo',
        description: 'Financia hasta el 80% de tu carro',
        cta: 'Simular',
      },
      {
        title: 'SOAT Digital',
        description: 'Obtén tu SOAT al mejor precio',
        cta: 'Obtener',
      },
    ],
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private transferService: TransferService
  ) {}

  ngOnInit() {
    // Simulate data loading
    setTimeout(() => {
      const user = this.authService.currentUser();
      this.userName = user?.name.split(' ')[0] ?? 'Usuario';
      this.isLoading = false;
    }, 1200);
  }

  get currentOffers() {
    return this.interestOffers[this.activeInterestTab] ?? [];
  }

  get visibleNewsItems() {
    return this.newsItems;
  }

  navigateTo(route: string | undefined) {
    if (route) this.router.navigate([route]);
  }

  onTabChange(tabId: string) {
    this.activeInterestTab = tabId;
  }

  prevNews() {
    this.currentNewsIndex =
      (this.currentNewsIndex - 1 + this.newsItems.length) % this.newsItems.length;
  }

  nextNews() {
    this.currentNewsIndex = (this.currentNewsIndex + 1) % this.newsItems.length;
  }

  prevProduct() {
    this.currentProductIndex =
      (this.currentProductIndex - 1 + this.products.length) % this.products.length;
  }

  nextProduct() {
    this.currentProductIndex = (this.currentProductIndex + 1) % this.products.length;
  }

  formatCurrency(value: number): string {
    return this.transferService.formatCurrency(value);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
