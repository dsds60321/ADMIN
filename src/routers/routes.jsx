import { Navigate } from 'react-router-dom';
import loadable from '@loadable/component';
import Dashboard from '@pages/Dashboard/index.jsx';
import Layout from '@layouts/Layout/index.jsx';

const isAuthenticated = true;

const Login = loadable(() => import('@pages/Login'));
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
    children: [{ index: true, element: <h1>Dashboard</h1> }],
  },
];

export default routers;
