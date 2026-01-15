'use client';

import React from 'react';
import styles from './Skills.module.css';
import { RESUME_DATA } from '@/data/resume';
import ScrollReveal from '@/components/ScrollReveal';
import {
    SiC, SiCplusplus, SiPython, SiTypescript, SiJavascript, SiKotlin,
    SiReact, SiNodedotjs, SiFlutter, SiFirebase, SiSupabase, SiDocker,
    SiMongodb, SiMysql, SiPostgresql, SiGit, SiGithub, SiXcode,
    SiAndroidstudio, SiJetpackcompose
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc';
import { BsLightningChargeFill, BsPeopleFill, BsLightbulbFill, BsMegaphoneFill } from 'react-icons/bs';
import { IconType } from 'react-icons';

// Icon and color mapping for skills
const skillData: Record<string, { icon: IconType; color: string }> = {
    // Languages
    'C': { icon: SiC, color: '#A8B9CC' },
    'C++': { icon: SiCplusplus, color: '#00599C' },
    'Python': { icon: SiPython, color: '#3776AB' },
    'TypeScript': { icon: SiTypescript, color: '#3178C6' },
    'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
    'Kotlin': { icon: SiKotlin, color: '#7F52FF' },
    'Java': { icon: FaJava, color: '#ED8B00' },
    'MATLAB': { icon: FaDatabase, color: '#0076A8' },

    // Technologies
    'Android SDK': { icon: SiAndroidstudio, color: '#3DDC84' },
    'Jetpack Compose': { icon: SiJetpackcompose, color: '#4285F4' },
    'React': { icon: SiReact, color: '#61DAFB' },
    'Node.js': { icon: SiNodedotjs, color: '#339933' },
    'Flutter': { icon: SiFlutter, color: '#02569B' },
    'React Native': { icon: TbBrandReactNative, color: '#61DAFB' },
    'Supabase': { icon: SiSupabase, color: '#3FCF8E' },
    'Firebase': { icon: SiFirebase, color: '#FFCA28' },

    // Tools
    'Git': { icon: SiGit, color: '#F05032' },
    'GitHub': { icon: SiGithub, color: '#ffffff' },
    'VS Code': { icon: VscCode, color: '#007ACC' },
    'Xcode': { icon: SiXcode, color: '#147EFB' },
    'Docker': { icon: SiDocker, color: '#2496ED' },
    'Playwright': { icon: BsLightningChargeFill, color: '#45BA63' },
    'Google Play Console': { icon: SiAndroidstudio, color: '#414141' },

    // Databases
    'MongoDB': { icon: SiMongodb, color: '#47A248' },
    'MySQL': { icon: SiMysql, color: '#4479A1' },
    'PostgreSQL (Supabase)': { icon: SiPostgresql, color: '#4169E1' },

    // Soft Skills
    'Leadership': { icon: BsPeopleFill, color: '#FF6B6B' },
    'Team Management': { icon: BsPeopleFill, color: '#4ECDC4' },
    'Creativity': { icon: BsLightbulbFill, color: '#FFE66D' },
    'Public Speaking': { icon: BsMegaphoneFill, color: '#FF8C42' },
};

const Skills = () => {
    const { languages, technologies, tools, databases, softSkills } = RESUME_DATA.skills;

    const categories = [
        { name: "Languages", items: languages },
        { name: "Technologies", items: technologies },
        { name: "Databases", items: databases },
        { name: "Tools & DevOps", items: tools },
        { name: "Soft Skills", items: softSkills },
    ];

    return (
        <section className={styles.section} id="skills">
            <div className="container">
                <ScrollReveal>
                    <h2 className={styles.title}>Technical <span className="text-gradient">Arsenal</span></h2>
                </ScrollReveal>

                {categories.map((cat, index) => (
                    <ScrollReveal key={cat.name} delay={index * 100}>
                        <div className={styles.categoryGroup}>
                            <h3 className={styles.categoryTitle}>{cat.name}</h3>
                            <div className={styles.skillList}>
                                {cat.items.map((skill) => {
                                    const data = skillData[skill];
                                    const IconComponent = data?.icon;
                                    const iconColor = data?.color || '#22d3ee';
                                    return (
                                        <div key={skill} className={styles.skillBadge}>
                                            {IconComponent && (
                                                <IconComponent
                                                    className={styles.skillIcon}
                                                    style={{ color: iconColor }}
                                                />
                                            )}
                                            <span>{skill}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};

export default Skills;
