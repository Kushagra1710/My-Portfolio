import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero} id="about">
            <div className={`container ${styles.content}`}>
                <div className={styles.textContent}>
                    <span className={styles.greeting}>Hello, I&apos;m</span>
                    <h1 className={styles.name}>Kushagra Sharma</h1>
                    <h2 className={styles.title}>Software Engineer & Competitive Programmer</h2>
                    <p className={styles.description}>
                        Final Year Student at IIIT Bhopal. Passionate about building scalable applications
                        and solving complex algorithmic problems. I love turning ideas into reality through code.
                    </p>

                    <div className={styles.ctaButtons}>
                        <Link href="#projects" className={styles.primaryBtn}>
                            View Work
                        </Link>
                        <Link href="#contact" className={styles.secondaryBtn}>
                            Contact Me
                        </Link>
                        <a
                            href="https://drive.google.com/drive/folders/1D3d7ts0DZpCs56OMxTFeha23L8I2v6wD?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.resumeBtn}
                        >
                            📄 Resume
                        </a>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <div className={styles.imageGlow}></div>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/profile.jpg"
                            alt="Kushagra Sharma"
                            fill
                            className={styles.profileImage}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
