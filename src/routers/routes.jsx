import { Navigate } from 'react-router-dom';
import loadable from '@loadable/component';
import { TRX_CARD } from '@/data/filter.js';

const isAuthenticated = true;

const Layout = loadable(() => import('@layouts/Layout'));
const Login = loadable(() => import('@pages/Login'));
const Card = loadable(() => import('@pages/Trx/Card'));

const routers = [
  {
    path: '/',
    element: isAuthenticated ? <Navigate to="/" /> : <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <h1>Dashboard</h1> },
      {
        path: 'trx/card',
        element: <Card data={TRX_CARD} />,
      },
    ],
  },
];

export default routers;
