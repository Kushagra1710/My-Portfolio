'use client';

import React from 'react';
import styles from './Projects.module.css';
import { RESUME_DATA } from '@/data/resume';
import ScrollReveal from '@/components/ScrollReveal';

const Projects = () => {
    return (
        <section className={styles.section} id="projects">
            <div className="container">
                <ScrollReveal>
                    <h2 className={styles.title}>Featured <span className="text-gradient">Projects</span></h2>
                </ScrollReveal>

                <div className={styles.grid}>
                    {RESUME_DATA.projects.map((project, index) => (
                        <ScrollReveal key={index} delay={index * 150}>
                            <div className={styles.card}>
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <div className={styles.techStack}>
                                    {project.tech.map(t => (
                                        <span key={t} className={styles.techTag}>{t}</span>
                                    ))}
                                </div>
                                <ul className={styles.description}>
                                    {project.description.map((desc, i) => (
                                        <li key={i} className={styles.point}>{desc}</li>
                                    ))}
                                </ul>
                                <div className={styles.links}>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        View on GitHub →
                                    </a>
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                            Live Demo →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
