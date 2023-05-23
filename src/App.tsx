import { RouterProvider } from 'react-router';
import { Header } from './components';
import { createBrowserRouter } from 'react-router-dom';
import routes from './routes';
import { useSelector } from 'react-redux';
import { SLICE_NAME } from './store/theme';
import { ThemeProvider } from 'styled-components';
import { getTheme } from './themes';
import { IThemeState, IThemeStateAware } from './store/theme/types';

const router = createBrowserRouter(routes);

function App() {
  const { theme } = useSelector<IThemeStateAware, IThemeState>(state => state[SLICE_NAME])

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <Header />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
