import React, { useState } from 'react';
import { Modal, button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faCalendarPlus,
  faShieldVirus,
} from '@fortawesome/free-solid-svg-icons';

const QuickActions = () => {
  const [showScan, setShowScan] = useState(false);

  return (
    <div className='card-custom p-3 mb-3'>
      <h6>Quick Actions</h6>
      <div className='d-grid gap-2 mt-2'>
        <button className='btn-main-color2 w-100 my-1'>
          <FontAwesomeIcon icon={faPlus} className='me-2' /> Enroll New Course
        </button>
        <button className='btn-main-color2 w-100 my-1'>
          <FontAwesomeIcon icon={faCalendarPlus} className='me-2' /> Schedule
          Lab
        </button>
        <button
          className='btn-main-color2 w-100 my-1'
          onClick={() => setShowScan(true)}>
          <FontAwesomeIcon icon={faShieldVirus} className='me-2' /> Run Vuln
          Scan
        </button>
      </div>
      <Modal show={showScan} onHide={() => setShowScan(false)}>
        <Modal.Header className='bg-warning text-dark'>
          <Modal.Title>Vulnerability Scan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Scanning your deployed machines for vulnerabilities...</p>
          <div className='progress'>
            <div
              className='progress-bar progress-bar-striped progress-bar-animated bg-warning'
              style={{ width: '45%' }}></div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default React.memo(QuickActions);
