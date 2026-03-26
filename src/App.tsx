import { ThemeProvider } from '@emotion/react';
import AppLayout from './components/layout/AppLayout';
import { theme } from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout />
    </ThemeProvider>
  );
};

export default App;
