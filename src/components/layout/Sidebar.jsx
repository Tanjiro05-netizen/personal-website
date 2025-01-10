import React from 'react';
import content from '../../data/content';
import YourImage from '../../assets/images/image-16.png';

const Sidebar = ({ currentLang, activeSection, scrollToSection }) => {
    return (
        <div className="fixed left-0 top-0 h-screen w-64 bg-gray-100 dark:bg-gray-800 flex flex-col items-center p-8">
            <img
                src={YourImage}
                alt="Your Name"
                className="w-32 h-32 rounded-full mb-8 object-cover"
            />

            <nav className="space-y-6">
                {Object.entries(content[currentLang].nav).map(([key, value]) => (
                    <button
                        key={key}
                        onClick={() => scrollToSection(key)}
                        className="flex items-center gap-3 group cursor-pointer"
                    >
                        <span
                            className={`w-2 h-2 ${
                                activeSection === key ? 'w-4 bg-orange-500' : 'bg-gray-400'
                            } rounded-full group-hover:w-4 group-hover:bg-orange-500 transition-all duration-300`}
                        />
                        <span
                            className={`text-sm ${
                                activeSection === key ? 'opacity-100' : 'opacity-60'
                            } group-hover:opacity-100 transition-opacity`}
                        >
                            {value}
                        </span>
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;