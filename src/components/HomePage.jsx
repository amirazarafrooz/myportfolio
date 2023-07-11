import React from 'react';
import { HeroSection ,AboutmeSection, ProjectsSection ,SkillsSection } from '../components';
// import { AboutmeSection } from './AboutmeSection';

export const HomePage = () => {
    return (
        <div className='homepage'>
            <HeroSection/>
            <AboutmeSection/>
            <ProjectsSection/>
            <SkillsSection/>
        </div>
    );
};

