// src/data/gaming.js
import { Gamepad2, Sword, Shield, Trophy } from 'lucide-react';
import gamingVideos from './gaming-videos';

const gaming = [
    {
        icon: <Gamepad2 className="text-orange-500 mb-2" />,
        title: 'League of Legends',
        description: 'Emerald 1, S1.1',
        media: {
            clips: gamingVideos['League of Legends'] || [], // Pull video links dynamically
            images: [], // Add image URLs here if needed
        },
    },
    {
        icon: <Gamepad2 className="text-orange-500 mb-2" />,
        title: 'Wild Rift',
        description: 'Emerald 2',
        media: {
            clips: gamingVideos['Wild Rift'] || [], // Pull video links dynamically
            images: [], // Add image URLs here if needed
        },
    },
    {
        icon: <Gamepad2 className="text-orange-500 mb-2" />,
        title: 'Teamfight Tactics',
        description: 'Diamond 4',
        media: {
            clips: gamingVideos['Teamfight Tactics'] || [], // Pull video links dynamically
            images: [], // Add image URLs here if needed
        },
    },
    {
        icon: <Gamepad2 className="text-orange-500 mb-2" />,
        title: 'NARAKA BLADEPOINT',
        description: 'Solar Rank',
        media: {
            clips: gamingVideos['NARAKA BLADEPOINT'] || [], // Pull video links dynamically
            images: [], // Add image URLs here if needed
        },
    },
    // Monster Hunter Achievements
    {
        icon: <Sword className="text-orange-500 mb-2" />,
        title: 'Monster Hunter World',
        description: 'Master Rank 999',
        stats: {
            monstersHunted: 2000, // Update this number
            weapons: {
                greatSword: 600,
                longSword: 450,
                swordAndShield: 400,
                dualBlades: 380,
                hammer: 300,
                huntingHorn: 280,
                lance: 260,
                gunlance: 240,
                switchAxe: 250,
                chargeBlade: 200,
                insectGlaive: 150,
                bow: 350,
                lightBowgun: 120,
                heavyBowgun: 100,
            },
            quests: {
                lowRank: 139,
                highRank: 407,
                masterRank: 998,
                investigations: 659,
                arenaQuests: 54,
            },
            achievements: [
                'Crowned Hunter', // Add or remove achievements
                'Elder Dragon Slayer',
                'Master of the New World',
                'Fatalis Slayer', // Added a new achievement
            ],
        },
        media: {
            clips: gamingVideos['Monster Hunter World'] || [], // Pull video links dynamically
            images: [], // Add image URLs here if needed
        },
    },
];

export default gaming;