import React from 'react';

const LanguageSelector = ({ currentLang, setCurrentLang }) => (
    <div className="fixed top-4 right-4 flex gap-2 z-40">
        {['cn', 'en', 'kr'].map((lang) => (
            <button
                key={lang}
                onClick={() => setCurrentLang(lang)}
                className={`px-3 py-1 rounded ${
                    currentLang === lang ? 'bg-orange-500' : 'bg-gray-700'
                }`}
            >
                {lang.toUpperCase()}
            </button>
        ))}
    </div>
);

export default LanguageSelector;