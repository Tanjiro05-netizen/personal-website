import React, { useState, useRef } from 'react';
import CustomCursor from './components/common/CustomCursor';
import LanguageSelector from './components/common/LanguageSelector';
import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';
import useActiveSection from './hooks/useActiveSection';
import useMousePosition from './hooks/useMousePosition';

const App = () => {
    const [currentLang, setCurrentLang] = useState('cn');
    const sectionRefs = useRef({});
    const mousePosition = useMousePosition();
    const activeSection = useActiveSection(sectionRefs);

    // Smooth scroll to section
    const scrollToSection = (sectionId) => {
        sectionRefs.current[sectionId]?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <div className="relative min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white">
            <CustomCursor mousePosition={mousePosition} />
            <LanguageSelector currentLang={currentLang} setCurrentLang={setCurrentLang} />
            <Sidebar
                currentLang={currentLang}
                activeSection={activeSection}
                scrollToSection={scrollToSection}
            />
            <MainContent
                currentLang={currentLang}
                sectionRefs={sectionRefs}
            />
        </div>
    );
};

export default App;