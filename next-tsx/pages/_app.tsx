import '../styles/globals.scss';
import type { AppProps } from 'next/app';
// Single Shared Layout w/ Custom _app.tsx (Optional)
// import Layout from '../components/layout';
/*
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
*/
export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
