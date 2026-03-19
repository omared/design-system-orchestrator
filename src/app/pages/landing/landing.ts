import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../../components/button/button';
import { CardComponent } from '../../components/card/card';
import { BadgeComponent } from '../../components/badge/badge';
import { AvatarComponent } from '../../components/avatar/avatar';
import { InputComponent } from '../../components/input/input';
import { AccordionComponent, AccordionItem } from '../../components/accordion/accordion';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    Button,
    CardComponent,
    BadgeComponent,
    AvatarComponent,
    InputComponent,
    AccordionComponent,
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class LandingComponent {
  email: string = '';

  features = [
    {
      icon: '🎨',
      title: 'Design Tokens',
      description: 'Tokens sincronizados automáticamente desde Figma a tu código.',
    },
    {
      icon: '⚡',
      title: 'Desarrollo Rápido',
      description: 'Componentes listos para usar con todas las variantes necesarias.',
    },
    {
      icon: '🔄',
      title: 'Actualización Automática',
      description: 'Los cambios de diseño se reflejan sin tocar código.',
    },
  ];

  testimonials = [
    {
      name: 'María González',
      role: 'Product Designer',
      avatar: 'https://i.pravatar.cc/150?img=5',
      text: 'Este sistema cambió completamente nuestro flujo de trabajo. Ya no hay desincronización entre diseño y desarrollo.',
    },
    {
      name: 'Carlos Ramírez',
      role: 'Frontend Developer',
      avatar: 'https://i.pravatar.cc/150?img=12',
      text: 'Increíble productividad. Los tokens se actualizan automáticamente y todo funciona perfecto.',
    },
    {
      name: 'Ana Torres',
      role: 'Design Lead',
      avatar: 'https://i.pravatar.cc/150?img=9',
      text: 'Por fin un design system que realmente escala. Lo recomiendo 100%.',
    },
  ];

  faqItems: AccordionItem[] = [
    {
      id: '1',
      title: '¿Cómo funciona la sincronización con Figma?',
      content: 'Usamos un plugin personalizado que exporta las variables de Figma como tokens JSON. Estos se transforman automáticamente en SCSS y CSS mediante Style Dictionary.',
    },
    {
      id: '2',
      title: '¿Necesito conocimientos técnicos?',
      content: 'Los diseñadores solo necesitan saber usar Figma. Los desarrolladores trabajan con Angular normalmente. El sistema maneja todo automáticamente.',
    },
    {
      id: '3',
      title: '¿Qué componentes incluye?',
      content: 'Incluye 14+ componentes: Button, Input, Card, Badge, Avatar, Checkbox, Switch, Alert, Modal, Dropdown, Tabs, Tooltip, Toast y Accordion.',
    },
    {
      id: '4',
      title: '¿Es gratuito?',
      content: 'Sí, es completamente open source. Puedes usarlo, modificarlo y distribuirlo libremente.',
    },
  ];

  onSubmit() {
    console.log('Email submitted:', this.email);
    alert(`¡Gracias! Te contactaremos en ${this.email}`);
  }
}
