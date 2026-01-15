'use client';
import React from 'react';
import styles from './Footer.module.css'; // We'll create this inline css via module or use global classes
import { SOCIAL_LINKS } from '@/data/constants';

const Footer = () => {
    return (
        <footer className={styles.footer} id="contact">
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.title}>Get In Touch</h2>
                    <p className={styles.text}>
                        Open to opportunities. Feel free to connect with me.
                    </p>

                    <div className={styles.socials}>
                        <a href={SOCIAL_LINKS.email} className={styles.link}>Email</a>
                        <a href={SOCIAL_LINKS.linkedin} target="_blank" className={styles.link}>LinkedIn</a>
                        <a href={SOCIAL_LINKS.codeforces} target="_blank" className={styles.link}>Codeforces</a>
                        <a href="https://github.com" target="_blank" className={styles.link}>GitHub</a>
                    </div>

                    <p className={styles.copy}>
                        &copy; {new Date().getFullYear()} Kushagra Sharma. Built with Next.js
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
