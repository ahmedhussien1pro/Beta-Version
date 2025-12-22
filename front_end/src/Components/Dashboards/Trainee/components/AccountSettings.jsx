import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faDownload, faTrash } from '@fortawesome/free-solid-svg-icons';

const AccountSettings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    marketing: false,
    twoFactor: true,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className='card-custom p-3'>
      <h5>Account Settings</h5>
      <div className='d-flex justify-content-between align-items-center mb-3 p-2 border-bottom border-gray'>
        <div>
          <div className='fw-semibold'>Email Notifications</div>
          <small className='text-secondary-text'>Course updates</small>
        </div>
        <Form.Switch
          checked={settings.emailNotifications}
          onChange={() => toggleSetting('emailNotifications')}
        />
      </div>
      <div className='d-flex justify-content-between align-items-center mb-3 p-2 border-bottom border-gray'>
        <div>
          <div className='fw-semibold'>Marketing Emails</div>
          <small className='text-secondary-text'>New labs and offers</small>
        </div>
        <Form.Switch
          checked={settings.marketing}
          onChange={() => toggleSetting('marketing')}
        />
      </div>
      <div className='d-flex justify-content-between align-items-center mb-4 p-2'>
        <div>
          <div className='fw-semibold'>Two-Factor Auth</div>
          <small className='text-secondary-text'>Extra security</small>
        </div>
        <Form.Switch
          checked={settings.twoFactor}
          onChange={() => toggleSetting('twoFactor')}
        />
      </div>
      <Button
        variant='link'
        className='w-100 text-start p-2 border-bottom border-gray'>
        <FontAwesomeIcon icon={faKey} className='me-2 text-gray' /> Change
        Password
      </Button>
      <Button
        variant='link'
        className='w-100 text-start p-2 border-bottom border-gray'>
        <FontAwesomeIcon icon={faDownload} className='me-2 text-gray' />{' '}
        Download Data
      </Button>
      <Button variant='link' className='w-100 text-start text-danger p-2'>
        <FontAwesomeIcon icon={faTrash} className='me-2' /> Delete Account
      </Button>
    </div>
  );
};

export default React.memo(AccountSettings);
