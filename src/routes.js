import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Detail from './pages/Detail';
import Admin from './pages/Admin';

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
  },
  {
    path: '/admin/create',
    element: <Create />,
  },
  {
    path: '/admin/:id/edit',
    element: <Edit />,
  },
  {
    path: '/blogs/:id',
    element: <Detail />,
  },
];

export default routes;
