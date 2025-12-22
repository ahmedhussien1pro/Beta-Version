import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';

const Leaderboard = React.memo(({ data, full = false }) => (
  <div className='card-custom p-3 mb-3'>
    <h6>{full ? 'Global Leaderboard' : 'Top Players'}</h6>
    <div className='table-responsive'>
      <table className='table-sm my-2  w-100'>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Score</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, full ? 10 : 5).map((user, index) => (
            <tr
              key={index}
              className={
                user.rank <= 3
                  ? `rank-${['gold', 'silver', 'bronze'][user.rank - 1]}`
                  : ''
              }>
              <td>
                {user.rank <= 3 ? (
                  <FontAwesomeIcon icon={faCrown} className='me-1' />
                ) : (
                  user.rank
                )}
              </td>
              <td>{user.name}</td>
              <td>{user.score}</td>
              <td>{user.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {!full && <small className='secondary-text'>Your Rank: #45</small>}
    <button className='btn-main-color2 w-100 mt-2'>
      View Full Leaderboard
    </button>
  </div>
));

export default Leaderboard;
