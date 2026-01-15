'use client';

import React from 'react';
import styles from './Experience.module.css';
import { RESUME_DATA } from '@/data/resume';
import ScrollReveal from '@/components/ScrollReveal';

const Experience = () => {
    return (
        <section className={styles.section} id="experience">
            <div className="container">
                <ScrollReveal>
                    <h2 className={styles.title}>Professional <span className="text-gradient">Experience</span></h2>
                </ScrollReveal>

                <div className={styles.timeline}>
                    {RESUME_DATA.experience.map((exp, index) => (
                        <ScrollReveal key={index} delay={index * 150}>
                            <div className={styles.item}>
                                <h3 className={styles.role}>{exp.role}</h3>
                                <div className={styles.company}>
                                    <span>{exp.company}</span>
                                    <span className={styles.duration}>{exp.duration} | {exp.location}</span>
                                </div>
                                <ul className={styles.description}>
                                    {exp.description.map((point, i) => (
                                        <li key={i} className={styles.point}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
