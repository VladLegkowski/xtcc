import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { withProviders } from './providers/with-providers';

const Home = React.lazy(() => import('./home'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/trips/:id',
    element: <Home />,
  },
  {
    path: '/trips/create',
    element: <Home />,
  },
  {
    path: '/trips/:id/edit',
    element: <Home />,
  },
]);

export const Routing = withProviders(() => <RouterProvider router={router} />);
