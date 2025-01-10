import React from 'react';
import Home from '../sections/Home';
import About from '../sections/About';
import Education from '../sections/Education';
import Skills from '../sections/Skills';
import Gaming from '../sections/Gaming';
import Sports from '../sections/Sports';
import Currently from '../sections/Currently';
import Stream from '../sections/Stream';
import Blog from '../sections/Blog';
import Contact from '../sections/Contact';

const MainContent = ({ currentLang, sectionRefs }) => {
    return (
        <main className="ml-64 p-8">
            <Home ref={el => sectionRefs.current.home = el} currentLang={currentLang} />
            <About ref={el => sectionRefs.current.about = el} currentLang={currentLang} />
            <Education ref={el => sectionRefs.current.education = el} currentLang={currentLang} />
            <Skills ref={el => sectionRefs.current.skills = el} currentLang={currentLang} />
            <Gaming ref={el => sectionRefs.current.gaming = el} currentLang={currentLang} />
            <Sports ref={el => sectionRefs.current.sports = el} currentLang={currentLang} />
            <Currently ref={el => sectionRefs.current.currently = el} currentLang={currentLang} />
            <Stream ref={el => sectionRefs.current.stream = el} currentLang={currentLang} />
            <Blog ref={el => sectionRefs.current.blog = el} currentLang={currentLang} />
            <Contact ref={el => sectionRefs.current.contact = el} currentLang={currentLang} />
        </main>
    );
};

export default MainContent;