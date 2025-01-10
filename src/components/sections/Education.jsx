import React, { forwardRef } from 'react';
import { Book } from 'lucide-react';
import educationData from '../../data/education';

const Education = forwardRef((props, ref) => (
    <section
        id="education"
        ref={ref}
        className="min-h-screen flex flex-col justify-center"
    >
        <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Book className="mr-4 text-orange-500" />
            Education
        </h2>
        <div className="space-y-8">
            {educationData.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
                    <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-[9px] top-0" />
                    <span className="inline-block px-4 py-1 bg-orange-100 dark:bg-orange-900 text-orange-500 rounded-full mb-2">
                        {edu.period}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-2">{edu.school}</h4>
                    <p className="text-gray-500 dark:text-gray-400">{edu.description}</p>
                </div>
            ))}
        </div>
    </section>
));

export default Education;