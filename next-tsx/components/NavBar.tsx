/* @Navigation Bar • Dynamic Component */
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

export default function NavBar() {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, [])

  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-md bg-black">
        <div className="container-fluid">

          <Link
            className="navbar-brand fw-bold d-block-inline py-2"
            href="/"
          >
            <span>&#x1F680;</span>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={90}
              height={16}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          > <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/">
                  HOME
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>

    </>
  );
}
