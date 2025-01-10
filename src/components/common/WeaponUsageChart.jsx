import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const WeaponUsageChart = ({ weaponData }) => {
    const data = {
        labels: Object.keys(weaponData),
        datasets: [
            {
                label: 'Hunts',
                data: Object.values(weaponData),
                backgroundColor: 'rgba(255, 159, 64, 0.6)', // Orange color
                borderColor: 'rgba(255, 159, 64, 1)', // Orange border
                borderWidth: 1,
            },
        ],
    };

    const options = {
        indexAxis: 'y', // Horizontal bars
        responsive: true,
        maintainAspectRatio: false, // Allow chart to resize freely
        plugins: {
            legend: {
                display: false, // Hide legend
            },
            title: {
                display: true,
                text: 'Weapon Usage in Monster Hunter World',
                font: {
                    size: 16,
                },
                color: 'rgba(255, 255, 255, 0.8)', // White title text
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            x: {
                grid: {
                    display: true,
                    color: 'rgba(200, 200, 200, 0.2)', // Light gray grid lines
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.8)', // White text for x-axis ticks
                },
                title: {
                    display: true,
                    text: 'Number of Hunts',
                    color: 'rgba(255, 255, 255, 0.8)', // White text for x-axis title
                },
            },
            y: {
                grid: {
                    display: false, // No grid lines on y-axis
                },
                ticks: {
                    color: 'rgba(255, 159, 64, 1)', // Orange text for y-axis ticks (weapon names)
                    font: {
                        size: 12, // Adjust font size if needed
                    },
                },
            },
        },
    };

    return (
        <div style={{ height: '500px', width: '100%' }}> {/* Set a fixed height for the chart */}
            <Bar data={data} options={options} />
        </div>
    );
};

export default WeaponUsageChart;