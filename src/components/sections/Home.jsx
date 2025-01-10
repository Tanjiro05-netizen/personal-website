import React, { forwardRef } from 'react';
import content from '../../data/content';

const Home = forwardRef(({ currentLang }, ref) => (
    <section
        id="home"
        ref={ref}
        className="min-h-screen flex flex-col justify-center"
    >
        <h1 className="text-4xl font-bold mb-4">
            {content[currentLang].title}
            <span className="text-orange-500 ml-2">Your Name</span>
        </h1>
        <div className="max-w-2xl">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                26-year-old CS student passionate about engineering, problem-solving, and gaming.
                Combining technical expertise with competitive gaming and diverse sporting interests.
            </p>
        </div>
    </section>
));

export default Home;