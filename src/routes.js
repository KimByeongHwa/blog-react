import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Post from './pages/Post';
import Edit from './pages/Edit';

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
    element: <Post />,
  },
  {
    path: '/blogs/edit',
    element: <Edit />,
  },
];

export default routes;
