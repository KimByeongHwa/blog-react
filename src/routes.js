import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Detail from './pages/Detail';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

// TODO: createBrowserRouter 사용법 공부
const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/blogs',
    element: <Blogs />,
  },
  {
    path: '/admin',
    element: <Admin />,
    auth: true,
  },
  {
    path: '/admin/create',
    element: <Create />,
    auth: true,
  },
  {
    path: '/admin/:id/edit',
    element: <Edit />,
    auth: true,
  },
  {
    path: '/blogs/:id',
    element: <Detail />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
