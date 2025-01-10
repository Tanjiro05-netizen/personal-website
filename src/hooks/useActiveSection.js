import { useState, useEffect } from 'react';

const useActiveSection = (sectionRefs) => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const options = {
            threshold: 0.2,
            rootMargin: '-30% 0% -30% 0%',
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        Object.values(sectionRefs.current).forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, [sectionRefs]);

    return activeSection;
};

export default useActiveSection;