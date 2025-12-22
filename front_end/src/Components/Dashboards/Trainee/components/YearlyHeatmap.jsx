import React, { useMemo } from 'react';

const YearlyHeatmap = () => {
  const year = new Date().getFullYear();
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const firstDay = new Date(year, 0, 1).getDay();
  const days = useMemo(() => {
    const daysArray = [];
    let date = new Date(year, 0, 1);
    while (date.getFullYear() === year) {
      const count =
        date.getMonth() >= 6
          ? Math.floor(Math.random() * 4)
          : Math.floor(Math.random() * 2);
      daysArray.push({ date: new Date(date), count });
      date.setDate(date.getDate() + 1);
    }
    return daysArray;
  }, [year]);

  const totalHacks = days.reduce((sum, d) => sum + d.count, 0);

  const cumDays = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  const monthPositions = months.map((_, m) => {
    const startIndex = cumDays[m];
    const col = Math.floor((startIndex + firstDay) / 7);
    const cellSize = 12;
    const gap = 6;
    const left = 52 + col * (cellSize + gap); // 52 for day labels
    return { left };
  });

  return (
    <div className='card-custom p-3'>
      <div className='d-flex justify-content-between mb-3'>
        <h5>2024 Hacking Activity</h5>
        <small className='text-secondary-text'>{totalHacks} hacks</small>
      </div>
      <div className='profile__heatmap'>
        {monthPositions.map((pos, i) => (
          <div
            key={i}
            className='profile__heatmap-month-label'
            style={{ left: `${pos.left}px` }}>
            {months[i]}
          </div>
        ))}
        <div className='profile__heatmap-inner'>
          <div className='profile__heatmap-day-labels'>
            {['Mon', 'Wed', 'Fri'].map((day) => (
              <div key={day} className='profile__heatmap-day-label'>
                {day}
              </div>
            ))}
          </div>
          <div className='profile__heatmap-grid'>
            {days.map((day, index) => {
              const level = day.count === 0 ? 0 : Math.min(3, day.count);
              return (
                <div
                  key={index}
                  className={`profile__heatmap-square profile__heatmap-level-${level}`}
                  title={`${day.date.toLocaleDateString()}: ${day.count} hacks`}
                />
              );
            })}
          </div>
        </div>
        <div className='profile__heatmap-key mt-3 d-flex justify-content-center gap-3'>
          {[0, 1, 2, 3].map((level) => (
            <div
              key={level}
              className='d-flex align-items-center gap-1 text-secondary-text'>
              <div
                className={`profile__heatmap-square profile__heatmap-level-${level}`}
              />
              <span>
                {['No hacks', '1 hack', '2 hacks', '≥3 hacks'][level]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(YearlyHeatmap);
