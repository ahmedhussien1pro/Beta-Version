import React, { useState } from 'react';
import { Modal, ProgressBar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faClock } from '@fortawesome/free-solid-svg-icons';

const ActiveLabs = React.memo(({ data, setData }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedLab, setSelectedLab] = useState(null);

  const deployLab = (lab) => {
    setSelectedLab(lab);
    setShowModal(true);
    // Simulate deploy
    setTimeout(() => {
      setData((prev) => ({
        ...prev,
        labs: prev.labs.map((l) =>
          l.name === lab.name ? { ...l, status: 'Deployed' } : l
        ),
      }));
    }, 2000);
  };

  return (
    <>
      <div className='card-custom mb-3 p-3'>
        <h5 className='mb-3'>Active Labs</h5>
        {data.map((lab) => (
          <div key={lab.name} className='p-3 bg-primary-bg rounded mb-2'>
            <div className='d-flex justify-content-between'>
              <div>
                <h6>{lab.name}</h6>
                <small className='text-secondary-text'>
                  Flags: {lab.flags}
                </small>
              </div>
              <ProgressBar now={lab.progress} className='flex-grow-1 ms-3' />
            </div>
            <Button
              className='btn btn-main mt-2'
              onClick={() => deployLab(lab)}>
              <FontAwesomeIcon icon={faPlay} className='me-1' />{' '}
              {lab.status === 'Deployed' ? 'Continue' : 'Deploy Machine'}
            </Button>
          </div>
        ))}
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton className='bg-success text-white'>
          <Modal.Title>Deploying {selectedLab?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='text-center'>
            <FontAwesomeIcon
              icon={faClock}
              spin
              size='2x'
              className='text-main-color mb-3'
            />
            <p>Machine deploying... Ready in 2 minutes</p>
            <ProgressBar animated now={50} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
});

export default ActiveLabs;
