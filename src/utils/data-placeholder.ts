type NavMenu = {
  id: number;
  name: string;
  href: string;
};

const navMenu: NavMenu[] = [
  {
    id: 1,
    name: 'Задачи',
    href: '/',
  },
  {
    id: 2,
    name: 'Категории',
    href: '/categories',
  },
];

export default navMenu;
