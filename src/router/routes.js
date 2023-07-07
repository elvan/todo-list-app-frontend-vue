import LoginPage from '../pages/LoginPage.vue';
import RegisterPage from '../pages/RegisterPage.vue';
import TasksPage from '../pages/TasksPage.vue';

const routes = [
  {
    path: '/tasks',
    component: TasksPage,
    name: 'tasks',
  },
  {
    path: '/login',
    component: LoginPage,
    name: 'login',
  },
  {
    path: '/register',
    component: RegisterPage,
    name: 'register',
  },
];

export default routes;
