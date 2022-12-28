/* @Layout [GLOBAL] */
import Head from 'next/head';
import NavBar from './NavBar';
import Footer from './Footer';

export const meta = {
        title: 'Next.js WebApp w/ TypeScript',
        description: 'Software Engineer',
        author: 'u-010420',
        type: 'Website',
};

export default function Layout({ children }: {
        children: React.ReactNode
}) {
        return (
                <>
                        <Head>
                                <title>{meta.title}</title>
                                <meta charSet="UTF-8" />
                                <meta
                                        content="width=device-width, initial-scale=1"
                                        name="viewport"
                                />
                                <meta content={meta.description} name="description" />
                                <meta property="og:url" content="http://localhost:3000" />
                                <meta property="og:type" content={meta.type} />
                                <meta property="og:site_name" content="Anonymous" />
                                <meta property="og:description" content={meta.description} />
                                <meta property="og:title" content={meta.title} />
                                <meta property="og:author" content={meta.author} />
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
