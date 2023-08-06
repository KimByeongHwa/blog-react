import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import routes from './routes';
import Toast from './components/Toast';
import useToast from './hooks/toast';

function App() {
  const [toasts, addToast, deleteToast] = useToast();
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
