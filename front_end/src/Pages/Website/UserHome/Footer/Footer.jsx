import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  // const lang = localStorage.getItem('lang') || 'en';
  // const arLogo = `سايبر <span>لاب</span>`;
  // const enLogo = `Cybersss <span>Labs</span>`;

  return (
    <div className='footer-footer'>
      <div className='container'>
        <div className='row-footer'>
          <div className='copyright'>
            <span ar-data='حقوق النشر' en-data='Copyright'>
              Copyright
            </span>
            {/* <span
              className='header__logo-title'
              dangerouslySetInnerHTML={{
                __html: lang === 'en' ? enLogo : arLogo,
              }}></span> */}
            <span className='header__logo-title'>
              Cyber <span>Labs</span>
            </span>
          </div>
          <div className='links-footer'>
            <ul>
              <li>
                <NavLink to='/facebook'>
                  <i className='fa-brands fa-facebook'></i>
                </NavLink>
              </li>
              <li>
                <NavLink to='/twitter'>
                  <i className='fa-brands fa-twitter'></i>
                </NavLink>
              </li>
              <li>
                <NavLink to='/linkedin'>
                  <i className='fa-brands fa-linkedin-in'></i>
                </NavLink>
              </li>
              <li>
                <NavLink to='/instagram'>
                  <i className='fa-brands fa-instagram'></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
