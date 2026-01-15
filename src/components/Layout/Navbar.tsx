'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { NAV_LINKS } from '@/data/constants';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    KS.
                </Link>

                <ul className={styles.navLinks}>
                    {NAV_LINKS.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href} className={styles.navLink}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button className={styles.mobileMenuBtn} aria-label="Toggle menu">
                    ☰
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
