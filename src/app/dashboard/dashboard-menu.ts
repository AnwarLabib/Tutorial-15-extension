import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  { title: 'Dashboard', icon: 'nb-home', link: '/dashboard', home: true},
  {
    title: 'Items',
    icon: 'fa fa-shopping-basket',
    link: '/dashboard/items'
  },
  {
    title: 'AllItems',
    icon: 'fa fa-shopping-bag',
    link: '/dashboard/allitems'
  },
  {
    title: 'ShoppingCart',
    icon: 'fa fa-shopping-cart',
    link: '/dashboard'
  }
];
