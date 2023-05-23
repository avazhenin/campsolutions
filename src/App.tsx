import { RouterProvider } from 'react-router';
import './App.css';
import { Header } from './components';
import { createBrowserRouter } from 'react-router-dom';
import routes from './routes';

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
