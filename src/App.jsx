import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import routes from './routes';
import Toast from './components/Toast';
import useToast from './hooks/toast';
import { useSelector } from 'react-redux';

function App() {
  const toasts = useSelector((state) => state.toast.toasts);
  const { deleteToast } = useToast();
  return (
    <BrowserRouter>
      <Header />
      <Toast toasts={toasts} deleteToast={deleteToast} />
      <div className='container mt-3'>
        <Routes>
          {routes.map((route) => {
            return <Route key={route.path} path={route.path} element={route.element} />;
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
