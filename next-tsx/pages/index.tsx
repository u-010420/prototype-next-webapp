/* @Index • WebApp (Home Page) */
import Head from 'next/head';
import { Inter } from '@next/font/google';
import Layout, { meta } from '../components/Layout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Layout>
        <div className="container-100vh">
          <div className="center-xy">

            <small className="fw-bold">0P3NS0URCE PR0J3CT5</small>
            <h1 className="mb-4">SOFTWAREDEV</h1>
            <a className="btn btn-outline-light">Read More</a>
            <div className="d-flex justify-content-end mt-5 fw-bold">
              <small>&#x1F4E6; Version 1.0.0</small>
            </div>

          </div>
        </div>
      </Layout>
    </>
  );
}
