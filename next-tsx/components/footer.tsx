import Image from 'next/image';
import styles from '../styles/Home.module.scss';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={80}
            height={20}
          />
        </a>
      </footer>
    </>
  );
}
