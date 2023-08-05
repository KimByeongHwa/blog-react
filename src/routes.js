import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Detail from './pages/Detail';

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
    path: '/blogs/create',
    element: <Create />,
  },
  {
    path: '/blogs/:id/edit',
    element: <Edit />,
  },
  {
    path: '/blogs/:id',
    element: <Detail />,
  },
];

export default routes;
