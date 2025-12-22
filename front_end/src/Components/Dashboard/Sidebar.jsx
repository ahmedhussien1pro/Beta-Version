import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFaceSmile,
  faGear,
  faHouse,
  faPlus,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu } from '../../Context/MenuContext';
import { WindowSizeContext } from '../../Context/WindowContext';
import axios from 'axios';
import Cookie from 'cookie-universal';

const Sidebar = () => {
  const { isOpen } = useContext(Menu);
  const { windowSize } = useContext(WindowSizeContext);
  const cookie = Cookie();
  const token = cookie.get('CuberWeb');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login', { replace: true });
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await axios.get(
          'https://digitopia-project-backend.vercel.app/api/user',
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUser(response.data.data);
      } catch (error) {
        console.error('API request failed:', error);
        navigate('/login', { replace: true });
      }
    };

    fetchUser();
  }, [token, navigate]);

  const sidebarStyle = {
    left: windowSize < 768 ? (isOpen ? 0 : '-100%') : 0,
    width: isOpen ? '220px' : '60px',
  };

  const contentStyle = {
    marginLeft: isOpen ? '220px' : '60px',
    transition: 'margin-left 0.3s ease-in-out',
  };

  return (
    <div className='full-cont'>
      <div className='sidebar' style={sidebarStyle}>
        <NavLink to='/home' className='navlink active side-bar-link'>
          <FontAwesomeIcon
            icon={faHouse}
            style={{ padding: isOpen ? '10px 8px 10px 30px' : '0 0px' }}
          />
          <span className='text' style={{ display: isOpen ? 'block' : 'none' }}>
            Home Labs
          </span>
        </NavLink>

        {user && (
          <>
            {user.role === 'admin' && (
              <>
                <NavLink
                  to='/trainee-dashboard'
                  className='navlink active side-bar-link'>
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{ padding: isOpen ? '10px 8px 10px 30px' : '0 0px' }}
                  />
                  <span
                    className='text'
                    style={{ display: isOpen ? 'block' : 'none' }}>
                    Personal Information
                  </span>
                </NavLink>

                <NavLink
                  to='/dashboard/users'
                  className='navlink active side-bar-link'>
                  <FontAwesomeIcon
                    icon={faUsers}
                    style={{
                      padding: isOpen ? '10px 8px 10px 30px' : '0 0px',
                    }}
                  />
                  <span
                    className='text'
                    style={{ display: isOpen ? 'block' : 'none' }}>
                    Users
                  </span>
                </NavLink>
                <NavLink
                  to='/dashboard/user/add'
                  className='navlink active side-bar-link'>
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{
                      padding: isOpen ? '10px 8px 10px 30px' : '0 0px',
                    }}
                  />
                  <span
                    className='text'
                    style={{ display: isOpen ? 'block' : 'none' }}>
                    Add User
                  </span>
                </NavLink>

                <NavLink
                  to='/dashboard/settings'
                  className='navlink active side-bar-link'>
                  <FontAwesomeIcon
                    icon={faGear}
                    style={{ padding: isOpen ? '10px 8px 10px 30px' : '0 0px' }}
                  />
                  <span
                    className='text'
                    style={{ display: isOpen ? 'block' : 'none' }}>
                    Settings
                  </span>
                </NavLink>
                {/* <NavLink
                  to="/dashboard/Theme"
                  className="navlink active side-bar-link"
                >
                  <FontAwesomeIcon
                    icon={faSun}
                    style={{ padding: isOpen ? "10px 0px 10px 30px" : "0 0px" }}
                  />
                  <span
                    className="text"
                    style={{ display: isOpen ? "block" : "none" }}
                  >
                    ThemeCustomize
                  </span>
                </NavLink> */}
              </>
            )}
            {user.role === 'writer' && (
              <>
                <NavLink
                  to='/trainee-dashboard'
                  className='navlink active side-bar-link'>
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{ padding: isOpen ? '10px 8px 10px 30px' : '0 0px' }}
                  />
                  <span
                    className='text'
                    style={{ display: isOpen ? 'block' : 'none' }}>
                    Personal Information
                  </span>
                </NavLink>
                <NavLink
                  to='/dashboard/settings'
                  className='navlink active side-bar-link'>
                  <FontAwesomeIcon
                    icon={faGear}
                    style={{ padding: isOpen ? '10px 8px 10px 30px' : '0 0px' }}
                  />
                  <span
                    className='text'
                    style={{ display: isOpen ? 'block' : 'none' }}>
                    Settings
                  </span>
                </NavLink>
                <NavLink
                  to='/dashboard/Platform-information'
                  className='navlink active side-bar-link'>
                  <FontAwesomeIcon
                    icon={faFaceSmile}
                    style={{ padding: isOpen ? '10px 8px 10px 30px' : '0 0px' }}
                  />
                  <span
                    className='text'
                    style={{ display: isOpen ? 'block' : 'none' }}>
                    About Us
                  </span>
                </NavLink>
              </>
            )}
          </>
        )}
      </div>
      <div className='main-contents' style={contentStyle}>
        {/* Your Main Content Goes Here */}
      </div>
    </div>
  );
};

export default Sidebar;
