import React from 'react';
import { HeroSection ,AboutmeSection, ProjectsSection } from '../components';
// import { AboutmeSection } from './AboutmeSection';

export const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <AboutmeSection/>
            <ProjectsSection/>
        </div>
    );
};

