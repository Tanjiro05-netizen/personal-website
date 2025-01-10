import React, { forwardRef, useState } from 'react';
import { Gamepad2, Sword, Shield, Trophy, Maximize2, Minimize2 } from 'lucide-react';
import gamingData from '../../data/gaming';
import WeaponUsageChart from '../common/WeaponUsageChart';

const Gaming = forwardRef((props, ref) => {
    const [expandedVideo, setExpandedVideo] = useState(null); // Track which video is expanded

    const toggleVideoSize = (index) => {
        if (expandedVideo === index) {
            setExpandedVideo(null); // Collapse the video if it's already expanded
        } else {
            setExpandedVideo(index); // Expand the video
        }
    };

    return (
        <section
            id="gaming"
            ref={ref}
            className="min-h-screen flex flex-col justify-center p-8"
        >
            <h2 className="text-3xl font-bold mb-8 flex items-center">
                <Gamepad2 className="mr-4 text-orange-500" />
                Gaming Credentials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {gamingData.map((game, index) => (
                    <div key={index} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        {game.icon}
                        <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{game.description}</p>

                        {/* Display Monster Hunter Stats (if available) */}
                        {game.stats && (
                            <div className="mt-4">
                                <h4 className="text-lg font-semibold mb-2 flex items-center">
                                    <Trophy className="mr-2 text-orange-500" />
                                    Monster Hunter Stats
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    <strong>Monsters Hunted:</strong> {game.stats.monstersHunted}
                                </p>
                                <div className="mt-4">
                                    <WeaponUsageChart weaponData={game.stats.weapons} />
                                </div>
                                <div className="mt-4">
                                    <h5 className="text-md font-medium mb-1 flex items-center">
                                        <Shield className="mr-2 text-orange-500" />
                                        Achievements:
                                    </h5>
                                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                                        {game.stats.achievements.map((achievement, idx) => (
                                            <li key={idx}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {/* Display Game Media (videos and images) */}
                        {game.media && (
                            <div className="mt-6">
                                <h4 className="text-lg font-semibold mb-4">Most recent clip</h4> {/* Updated header */}
                                <div className="grid grid-cols-1 gap-4">
                                    {/* Videos */}
                                    {game.media.clips.map((clip, clipIndex) => (
                                        <div key={clipIndex} className="relative">
                                            <video
                                                controls
                                                className={`w-full rounded-md ${
                                                    expandedVideo === clipIndex ? 'h-96' : 'h-48'
                                                } transition-all duration-300`}
                                            >
                                                <source src={clip} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                            <button
                                                onClick={() => toggleVideoSize(clipIndex)}
                                                className="absolute bottom-2 right-2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
                                            >
                                                {expandedVideo === clipIndex ? (
                                                    <Minimize2 size={16} />
                                                ) : (
                                                    <Maximize2 size={16} />
                                                )}
                                            </button>
                                        </div>
                                    ))}

                                    {/* Images */}
                                    {game.media.images.map((image, imageIndex) => (
                                        <div key={imageIndex} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                            <img
                                                src={image}
                                                alt={`${game.title} gameplay`}
                                                className="w-full rounded-md"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
});

export default Gaming;