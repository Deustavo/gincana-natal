import '../styles/globals.css';
import { EasybaseProvider } from 'easybase-react';
import ebconfig from '../ebconfig';

function MyApp({ Component, pageProps }) {
  return <>
    <EasybaseProvider ebconfig={ebconfig}>
      <Component {...pageProps} />
    </EasybaseProvider>
  </>
}

export default MyApp
