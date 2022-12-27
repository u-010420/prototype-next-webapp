import Head from 'next/head';
//import Link from 'next/link';
//import Image from 'next/image';
//import styles from '../styles/Home.module.scss';
import NavBar from './navbar';
import Footer from './footer';

export const siteTitle = 'Next.js WebApp • TypeScript';

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <>

      <Head>
        <title>{siteTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Next.js Framework w/ TypeScript" />
        <meta name="author" content="u-010420" />
        <meta name="og:title" content={siteTitle} />
        <meta name="og:type" content="WebApp" />
        <meta name="og:url" content="https://vercel.com" />
        <meta name='og:description' content="OpenSource Web Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
