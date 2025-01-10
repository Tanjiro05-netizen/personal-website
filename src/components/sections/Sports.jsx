import React, { forwardRef } from 'react';
import { Trophy } from 'lucide-react';
import sportsData from '../../data/sports';

const Sports = forwardRef((props, ref) => (
    <section
        id="sports"
        ref={ref}
        className="min-h-screen flex flex-col justify-center"
    >
        <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Trophy className="mr-4 text-orange-500" />
            Sports
        </h2>
        <div className="grid grid-cols-2 gap-8">
            {sportsData.map((sport, index) => (
                <div key={index} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    {sport.icon}
                    <h3 className="text-xl font-bold mb-2">{sport.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{sport.description}</p>
                </div>
            ))}
        </div>
    </section>
));

export default Sports;