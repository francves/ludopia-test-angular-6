import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Prueba Ludopia',
    group: true,
  },
  {
    title: 'Usuarios',
    icon: 'nb-person',
    children: [
      {
        title: 'Listar',
        link: '/pages/users',
      },
      {
        title: 'Agregar',
        link: '/pages/adduser',
      },
    ],
  },
  {
    title: 'Tablero',
    icon: 'nb-tables',
    link: '/pages/tablero',
  },
];
