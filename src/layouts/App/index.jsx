import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from '@/routers/routes.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

const router = createBrowserRouter(routes);

function Index() {
  return <RouterProvider router={router} />;
}

export default Index;
