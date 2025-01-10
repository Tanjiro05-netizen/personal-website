import React, { forwardRef } from 'react';

const Blog = forwardRef((props, ref) => (
    <section
        id="blog"
        ref={ref}
        className="min-h-screen flex flex-col justify-center"
    >
        <h2 className="text-3xl font-bold mb-8">Blog</h2>
        <div className="grid grid-cols-2 gap-8">
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Latest Posts</h3>
                <p className="text-gray-600 dark:text-gray-400">
                    Preview of your latest blog posts...
                </p>
                <button className="mt-4 text-orange-500 hover:text-orange-600">
                    Read More →
                </button>
            </div>
        </div>
    </section>
));

export default Blog;