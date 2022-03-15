import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Layout } from '../components';
import { UserProvider } from '@auth0/nextjs-auth0';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
export default MyApp;
