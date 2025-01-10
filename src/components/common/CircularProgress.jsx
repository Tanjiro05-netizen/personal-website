import React from 'react';

const CircularProgress = ({ label, percentage }) => (
    <div className="relative w-40 h-40">
        <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
                className="text-gray-200 dark:text-gray-700 stroke-current"
                strokeWidth="8"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
            />
            <circle
                className="text-orange-500 stroke-current"
                strokeWidth="8"
                strokeLinecap="round"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - percentage / 100)}`}
                style={{
                    transform: 'rotate(-90deg)',
                    transformOrigin: '50% 50%',
                    transition: 'stroke-dashoffset 1s ease-in-out'
                }}
            />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">{percentage}%</span>
            <span className="text-sm mt-1">{label}</span>
        </div>
    </div>
);

export default CircularProgress;