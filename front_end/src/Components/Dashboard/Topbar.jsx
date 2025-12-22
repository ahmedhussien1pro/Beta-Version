import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '../../Context/MenuContext';
import { Link, useNavigate } from 'react-router-dom';
import Cookie from 'cookie-universal';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios';

export default function Topbar1() {
  const { setIsOpen } = useContext(Menu);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const cookie = Cookie();
  const token = cookie.get('CuberWeb');

  useEffect(() => {
    if (token) {
      axios
        .get('https://digitopia-project-backend.vercel.app/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setName(res.data.data.name);
        })
        .catch((error) => {
          console.error('API request failed:', error);
          navigate('/login', { replace: true });
        });
    } else {
      navigate('/login', { replace: true });
    }
  }, [token, navigate]);

  async function handleLogout() {
    try {
      await axios.post(
        'https://digitopia-project-backend.vercel.app/api/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      cookie.remove('CuberWeb');
      window.location.pathname = '/';
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='topbar'>
      <div className='top-menu'>
        <FontAwesomeIcon
          onClick={() => setIsOpen((prev) => !prev)}
          icon={faBars}
          className='fabars-size'
        />
        <Link to={'/home'} target='_self' className='Home-link'>
          Cyber Labs
        </Link>
      </div>
      <div className='dropdown-basic-button'>
        <DropdownButton id='dropdown-basic-button' title={name}>
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
}
