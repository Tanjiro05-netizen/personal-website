import React from 'react';

const ProgressBar = ({ label, percentage }) => (
    <div className="mb-6">
        <div className="flex justify-between mb-2">
            <span className="text-lg font-medium">{label}</span>
            <span className="text-orange-500">{percentage}%</span>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            <div
                className="h-full bg-orange-500 rounded-full transition-all duration-1000"
                style={{ width: `${percentage}%` }}
            />
        </div>
    </div>
);

export default ProgressBar;