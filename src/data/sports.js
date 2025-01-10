import React from 'react';
import { Snowflake, Dumbbell, Trophy } from 'lucide-react';

const sports = [
    {
        icon: <Snowflake className="text-orange-500 mb-2" />,
        title: 'Snowboarding',
        description: 'No tournaments, 2 years of experience.',
    },
    {
        icon: <Dumbbell className="text-orange-500 mb-2" />,
        title: 'Karate',
        description: 'Black Belt, 22 years of experience.',
    },
    {
        icon: <Dumbbell className="text-orange-500 mb-2" />,
        title: 'Taekwondo',
        description: '6 years of experience.',
    },
    {
        icon: <Dumbbell className="text-orange-500 mb-2" />,
        title: 'Kung Fu',
        description: '6 months of experience.',
    },
    {
        icon: <Trophy className="text-orange-500 mb-2" />,
        title: 'Dancing',
        description: '3 years of experience.',
    },
];

export default sports;