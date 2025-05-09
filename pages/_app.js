import { ThemeProvider } from '../contexts/ThemeContext'; // Import ThemeProvider
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
