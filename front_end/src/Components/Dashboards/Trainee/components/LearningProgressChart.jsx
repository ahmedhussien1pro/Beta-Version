import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LearningProgressChart = () => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'week 6', 'Week 7', 'Week 8', 'week 9'],
    datasets: [
      {
        label: 'Hours Hacked',
        data: [10, 15, 20, 25, 30, 20, 25, 15, 20, 25, 23],
        borderColor: 'var(--main-color)',
        backgroundColor: 'rgba(13, 110, 253, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: 'rgba(255,255,255,0.5)' },
      },
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(255,255,255,0.1)' },
        ticks: { color: 'rgba(255,255,255,0.5)' },
      },
    },
  };

  return (
    <div className='card-custom mb-3 p-3'>
      <div className='d-flex justify-content-between mb-3'>
        <h5>Hacking Progress</h5>
        <select className='form-select form-select-sm w-auto'>
          <option>Last 9 Weeks</option>
        </select>
      </div>
      <div style={{ height: 200, width: "100%" }}>
        <Line data={data} options={options} width={590} />
      </div>
    </div>
  );
};

export default React.memo(LearningProgressChart);
