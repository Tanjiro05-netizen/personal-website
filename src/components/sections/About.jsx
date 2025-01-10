import React, { forwardRef } from 'react';
import { Code, Gamepad2, Dumbbell, Target, Snowflake } from 'lucide-react';

const About = forwardRef((props, ref) => (
    <section
        id="about"
        ref={ref}
        className="min-h-screen flex flex-col justify-center"
    >
        <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Code className="mr-4 text-orange-500" />
            About Me
        </h2>
        <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                    A Computer Science student with a unique background in law and economics,
                    I bring a diverse perspective to problem-solving and software development.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                    Beyond coding, I'm an avid gamer and sports enthusiast, constantly pushing
                    my boundaries in both digital and physical realms.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <Gamepad2 className="text-orange-500 mb-2" />
                    <h3 className="font-bold mb-1">Gaming</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Competitive LoL Player</p>
                </div>
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <Dumbbell className="text-orange-500 mb-2" />
                    <h3 className="font-bold mb-1">Martial Arts</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Various Disciplines</p>
                </div>
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <Target className="text-orange-500 mb-2" />
                    <h3 className="font-bold mb-1">Archery</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Precision Sport</p>
                </div>
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <Snowflake className="text-orange-500 mb-2" />
                    <h3 className="font-bold mb-1">Winter Sports</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Snow Enthusiast</p>
                </div>
            </div>
        </div>
    </section>
));

export default About;