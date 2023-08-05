import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
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
