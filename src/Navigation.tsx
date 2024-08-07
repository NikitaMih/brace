import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UsersPage } from 'src/pages';

const Navigation = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <UsersPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Navigation;
