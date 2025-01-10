import React, { forwardRef } from 'react';
import { BookOpen, Film } from 'lucide-react';
import currentlyData from '../../data/currently';

const Currently = forwardRef((props, ref) => (
    <section
        id="currently"
        ref={ref}
        className="min-h-screen flex flex-col justify-center"
    >
        <h2 className="text-3xl font-bold mb-8 flex items-center">
            <BookOpen className="mr-4 text-orange-500" />
            Currently Reading/Watching
        </h2>
        <div className="grid grid-cols-2 gap-8">
            {/* Currently Reading */}
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                    <BookOpen className="mr-2 text-orange-500" />
                    Currently Reading
                </h3>
                <ul className="space-y-2">
                    {currentlyData.reading.map((item, index) => (
                        <li key={index} className="text-gray-600 dark:text-gray-400">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Currently Watching */}
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Film className="mr-2 text-orange-500" />
                    Currently Watching
                </h3>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h4 className="font-bold mb-2">K-Dramas</h4>
                        <ul className="space-y-2">
                            {currentlyData.watching.kdramas.map((item, index) => (
                                <li key={index} className="text-gray-600 dark:text-gray-400">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Anime</h4>
                        <ul className="space-y-2">
                            {currentlyData.watching.anime.map((item, index) => (
                                <li key={index} className="text-gray-600 dark:text-gray-400">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
));

export default Currently;