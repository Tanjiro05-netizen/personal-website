import React, { forwardRef } from 'react';
import { Code } from 'lucide-react';
import ProgressBar from '../common/ProgressBar';
import skillsData from '../../data/skills';

const Skills = forwardRef((props, ref) => (
    <section
        id="skills"
        ref={ref}
        className="min-h-screen flex flex-col justify-center"
    >
        <h2 className="text-3xl font-bold mb-12 flex items-center">
            <Code className="mr-4 text-orange-500" />
            Skills
        </h2>
        <div className="grid grid-cols-2 gap-16">
            <div>
                <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
                {skillsData.technical.map((skill, index) => (
                    <ProgressBar key={index} {...skill} />
                ))}
            </div>
            <div>
                <h3 className="text-2xl font-bold mb-8">Engineering & Soft Skills</h3>
                {skillsData.engineering.map((skill, index) => (
                    <ProgressBar key={index} {...skill} />
                ))}
            </div>
        </div>
    </section>
));

export default Skills;