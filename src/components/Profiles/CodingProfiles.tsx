'use client';

import React from 'react';
import Image from 'next/image';
import styles from './CodingProfiles.module.css';
import { RESUME_DATA } from '@/data/resume';
import ScrollReveal from '@/components/ScrollReveal';
import {
    SiCodeforces, SiCodechef, SiLeetcode, SiGeeksforgeeks
} from 'react-icons/si';
import { IconType } from 'react-icons';

// Platform icon mapping for react-icons
const platformIcons: Record<string, IconType> = {
    'Codeforces': SiCodeforces,
    'CodeChef': SiCodechef,
    'LeetCode': SiLeetcode,
    'GeeksforGeeks': SiGeeksforgeeks,
};

// Custom SVG logos for platforms not in react-icons
const customLogos: Record<string, string> = {
    'Codolio': '/icons/codolio.svg',
    'Code360': '/icons/code360.svg',
};

const CodingProfiles = () => {
    return (
        <section className={styles.section} id="profiles">
            <div className="container">
                <ScrollReveal>
                    <h2 className={styles.title}>Coding <span className="text-gradient">Profiles</span></h2>
                </ScrollReveal>

                <div className={styles.grid}>
                    {RESUME_DATA.codingProfiles.map((profile, index) => {
                        const IconComponent = platformIcons[profile.platform];
                        const customLogo = customLogos[profile.platform];

                        return (
                            <ScrollReveal key={profile.platform} delay={index * 100}>
                                <a
                                    href={profile.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.card}
                                >
                                    <div className={styles.platformHeader}>
                                        {IconComponent ? (
                                            <IconComponent
                                                className={styles.platformIcon}
                                                style={{ color: profile.color }}
                                            />
                                        ) : customLogo ? (
                                            <Image
                                                src={customLogo}
                                                alt={profile.platform}
                                                width={28}
                                                height={28}
                                                className={styles.platformLogo}
                                            />
                                        ) : null}
                                        <h3 className={styles.platformName}>{profile.platform}</h3>
                                    </div>
                                    <span className={styles.handle}>@{profile.handle}</span>

                                    <div className={styles.stats}>
                                        <div className={styles.rating} style={{ color: profile.color }}>
                                            {profile.rating}
                                        </div>
                                        {profile.rank && (
                                            <div className={styles.rank}>{profile.rank}</div>
                                        )}
                                    </div>
                                </a>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CodingProfiles;
