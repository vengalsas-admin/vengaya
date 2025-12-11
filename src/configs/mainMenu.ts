import { MenuItem } from '@/interfaces/menuItem';

export const mainMenu: MenuItem[] = [
  { href: '/', label: 'Inicio' },
  {
    href: '/credito',
    label: 'Línea de Crédito',
    children: [
      { href: '/credito/natural', label: 'Crédito Persona Natural' },
      { href: '/credito/libranza', label: 'Crédito por Libranza' },
      { href: '/credito/pyme', label: 'Crédito Pyme' },
    ],
  },
  { href: '/simulador', label: 'Simulador de Crédito' },
  { href: '/comunidad', label: 'Comunidad VengaYa' },
  { href: '/nosotros', label: 'Sobre Nosotros' },
  {
    href: '/ayuda',
    label: 'Ayuda y Soporte',
    children: [
      { href: '/ayuda/atencion', label: 'Atención al Cliente' },
      { href: '/ayuda/faq', label: 'Preguntas Frecuentes' },
      { href: '/ayuda/contacto', label: 'Contacto' },
    ],
  },
];
