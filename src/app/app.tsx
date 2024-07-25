import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getTrip, getTrips } from '../api/trips';
import { TripView } from '../enteties/trip-view/trip-view';
import { TripForm } from '../enteties/trip-form/trip-form';
import Home from '../pages/home';
import { withProviders } from '../providers/with-providers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: async () => {
      return getTrips();
    },
    children: [
      {
        path: 'trip/:id',
        element: <TripView />,
        loader: async ({ params }) => {
          return getTrip(params.id);
        },
      },
      {
        path: 'create-trip',
        element: <TripForm />,
      },
      {
        path: 'edit-trip/:id',
        element: <TripForm />,
        loader: async ({ params }) => {
          return getTrip(params.id);
        },
      },
    ],
  },
]);
export const Routing = withProviders(() => <RouterProvider router={router} />);

function App() {
  return <Routing />;
}

export { App };
