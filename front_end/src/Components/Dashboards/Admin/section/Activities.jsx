import React from 'react';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement
);

export default function Activities() {
    // بيانات تجريبية
    const usersByRole = {
        labels: ['Admin', 'User', 'Content Creator'],
        values: [3, 15, 7],
    };

    const coursesStatus = {
        labels: ['Ready', 'Under Creating', 'Draft'],
        values: [5, 3, 2],
    };

    const monthlyActivities = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        values: [12, 19, 8, 14, 20, 10],
    };

    const topCreators = {
        labels: ['Alice', 'Bob', 'Charlie', 'David'],
        values: [10, 7, 5, 3],
    };

    // إعداد البيانات لكل Chart
    const barData = {
        labels: usersByRole.labels,
        datasets: [
            {
                label: 'Number of Users',
                data: usersByRole.values,
                backgroundColor: ['#4e79a7', '#f28e2b', '#e15759'],
            },
        ],
    };

    const doughnutData = {
        labels: coursesStatus.labels,
        datasets: [
            {
                label: 'Courses Status',
                data: coursesStatus.values,
                backgroundColor: ['#76b7b2', '#59a14f', '#edc948'],
            },
        ],
    };

    const lineData = {
        labels: monthlyActivities.labels,
        datasets: [
            {
                label: 'Monthly Activities',
                data: monthlyActivities.values,
                borderColor: '#4e79a7',
                backgroundColor: 'rgba(78, 121, 167, 0.2)',
                tension: 0.3,
            },
        ],
    };

    const pieData = {
        labels: topCreators.labels,
        datasets: [
            {
                label: 'Top Creators',
                data: topCreators.values,
                backgroundColor: ['#f28e2b', '#59a14f', '#e15759', '#76b7b2'],
            },
        ],
    };

    return (
        <div className="container py-4">
            <h3 className="mb-4" style={{ color: "var(--main-color" }}>Activities Dashboard</h3>

            <div className="row justify-content-around">
                <div className="card col-md-5 mb-4  ">
                    <Bar data={barData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} style={{ width: "100%" }} />
                </div>

                <div className=" card col-md-5 mb-4">
                    <Doughnut data={doughnutData} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} style={{ width: "100%" }} />
                </div>

                <div className="card col-md-5 mb-4">
                    <Line data={lineData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
                </div>

                <div className="card col-md-5 mb-4">
                    <Pie data={pieData} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} />
                </div>
            </div>
        </div>
    )
}