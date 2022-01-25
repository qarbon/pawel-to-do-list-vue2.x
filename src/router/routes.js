import Home from '@/views/Home'

const routes = [
  {
    path: '/',
    name: 'task-list',
    component: Home,
  },
  { path: '*', redirect: '/' },
];

export default routes;
