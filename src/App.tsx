import { ThemeProvider } from '@emotion/react';
import ChatPage from './pages/ChatPage';
import { theme } from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatPage />
    </ThemeProvider>
  );
};

export default App;
