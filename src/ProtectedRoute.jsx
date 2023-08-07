import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element }) {
  const isLogin = useSelector((state) => state.auth.isLogin);

  if (!isLogin) {
    return <Navigate to='/' />;
  }

  return element;
}

export default ProtectedRoute;
