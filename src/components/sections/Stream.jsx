import React, { forwardRef } from 'react';
import { Radio } from 'lucide-react';

const Stream = forwardRef((props, ref) => (
    <section
        id="stream"
        ref={ref}
        className="min-h-screen flex flex-col justify-center"
    >
        <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Radio className="mr-4 text-orange-500" />
            Live Stream
        </h2>
        <div className="aspect-video bg-gray-800 rounded-lg">
            <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-400">Twitch Stream Embed</p>
            </div>
        </div>
    </section>
));

export default Stream;