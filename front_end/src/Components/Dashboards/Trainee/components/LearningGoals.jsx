import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const LearningGoals = ({ data, setData }) => {
  const [newGoal, setNewGoal] = useState('');

  const toggleGoal = (index) => {
    setData((prev) => ({
      ...prev,
      goals: prev.goals.map((g, i) =>
        i === index ? { ...g, completed: !g.completed } : g
      ),
    }));
  };

  const addGoal = () => {
    if (newGoal) {
      setData((prev) => ({
        ...prev,
        goals: [...prev.goals, { text: newGoal, completed: false }],
      }));
      setNewGoal('');
    }
  };

  return (
    <div className='card-custom p-3'>
      <h5>Learning Goals</h5>
      {data.map((goal, index) => (
        <Form.Check
          key={index}
          type='checkbox'
          label={
            <span
              className={
                goal.completed
                  ? 'text-decoration-line-through text-secondary'
                  : ''
              }>
              {goal.text}
            </span>
          }
          checked={goal.completed}
          onChange={() => toggleGoal(index)}
          className='mb-2'
        />
      ))}
      <div className='input-group'>
        <input
          className='form-control bg-primary-bg border-gray'
          placeholder='Add new goal...'
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
        />
        <Button className='btn btn-main' onClick={addGoal}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
    </div>
  );
};

export default React.memo(LearningGoals);
