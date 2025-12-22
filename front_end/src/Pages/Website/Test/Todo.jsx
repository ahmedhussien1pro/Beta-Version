import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Nav,
  Dropdown,
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  ProgressBar,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faUser,
  faChevronDown,
  faCamera,
  faEdit,
  faChartLine,
  faClock,
  faMedal,
  // faTarget,
  faAirFreshener as faTarget,
  faCog,
  faKey,
  faDownload,
  faTrash,
  faCheck,
  faTrophy,
  faPlay,
  faSave,
  faArrowRight,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import ThemeSwitcher from '../UserHome/Components/ThemeSwitcher/ThemeSwitcher';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'A7med Hussien',
    email: 'ahmedhussien@email.com',
    phone: '+20 109 8909 76',
    location: 'New York, USA',
    bio: 'Passionate web developer with a love for creating beautiful and functional user experiences. Currently learning full-stack development to expand my skillset.',
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const saveProfile = () => {
    // Here you would typically send the updated data to your server
    alert('Profile changes saved!');
    toggleEditMode();
  };

  return (
    <>
      <style>{`
        :root {
          --main-color: #0d6efd;
          --main-color2: #0b5ed7;
          --main-color3: #0a58ca;
          --primary-bg: #191b21;
          --secondary-bg: #23272f;
          --primary-text: #ffffff;
          --secondary-text: #ebecf0;
          --whiteColor: #ffffff;
          --main-transition: all 0.3s ease;
        }

        body {
          background-color: var(--primary-bg);
          color: var(--primary-text);
        }

        .profile-gradient {
          background: linear-gradient(135deg, var(--main-color), var(--main-color3));
        }

        .glass-effect {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          background-color: rgba(35, 39, 47, 0.9);
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--main-color), var(--main-color3));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .skill-badge {
          background: linear-gradient(135deg, var(--main-color), var(--main-color3));
        }

        .bg-primary-bg {
          background-color: var(--primary-bg) !important;
        }

        .bg-secondary-bg {
          background-color: var(--secondary-bg) !important;
        }

        .text-primary-text {
          color: var(--primary-text) !important;
        }

        .text-secondary-text {
          color: var(--secondary-text) !important;
        }

        .border-gray {
          border-color: #3a3c40 !important;
        }

        .bg-gray {
          background-color: #3a3c40 !important;
        }
      `}</style>
      <ThemeSwitcher />
      <Navbar
        fixed='top'
        expand='lg'
        className='glass-effect border-bottom border-gray'
        variant='dark'>
        <Container>
          <Navbar.Brand href='#' className='d-flex align-items-center'>
            <div
              className='d-flex align-items-center me-2 bg-gradient rounded'
              style={{
                width: '40px',
                height: '40px',
                background:
                  'linear-gradient(to right, var(--main-color), var(--main-color3))',
              }}>
              <FontAwesomeIcon icon={faCode} className='text-white' />
            </div>
            <span className='fs-4 fw-bold gradient-text'>WebLearn Pro</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='index.html' className='text-secondary-text'>
                Home
              </Nav.Link>
              <Nav.Link href='dashboard.html' className='text-secondary-text'>
                Dashboard
              </Nav.Link>
              <Nav.Link href='courses.html' className='text-secondary-text'>
                Courses
              </Nav.Link>
              <Nav.Link
                href='profile.html'
                className='text-primary-text active'>
                Profile
              </Nav.Link>
            </Nav>
            <Dropdown align='end'>
              <Dropdown.Toggle
                as='a'
                className='d-flex align-items-center text-secondary-text cursor-pointer no-caret'>
                <div
                  className='rounded-circle d-flex align-items-center justify-content-center me-2'
                  style={{
                    width: '32px',
                    height: '32px',
                    background:
                      'linear-gradient(to right, var(--main-color), var(--main-color3))',
                  }}>
                  <span className='text-white fs-6 fw-semibold'>JS</span>
                </div>
                <FontAwesomeIcon icon={faChevronDown} size='xs' />
              </Dropdown.Toggle>
              <Dropdown.Menu className='bg-secondary-bg border border-gray shadow-lg'>
                <Dropdown.Item
                  href='profile.html'
                  className='text-secondary-text'>
                  <FontAwesomeIcon icon={faUser} className='me-2' />
                  Profile
                </Dropdown.Item>
                <Dropdown.Item
                  href='dashboard.html'
                  className='text-secondary-text'>
                  <FontAwesomeIcon icon={faChartLine} className='me-2' />
                  Dashboard
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  href='index.html'
                  className='text-secondary-text'>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className='me-2'
                    rotation={180}
                  />
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className='pt-5 pb-3'>
        <Container>
          <div
            className='profile-gradient rounded-3 p-4 mb-4 text-white position-relative overflow-hidden'
            data-aos='fade-up'>
            <div className='position-absolute top-0 start-0 w-100 h-100 bg-black opacity-10'></div>
            <div className='position-relative z-index-1'>
              <Row className='align-items-center'>
                <Col md='auto'>
                  <div className='position-relative'>
                    <div
                      className='rounded-circle d-flex align-items-center justify-content-center bg-white opacity-20 backdrop-blur'
                      style={{ width: '128px', height: '128px' }}>
                      <span className='fs-1 fw-bold'>JS</span>
                    </div>
                    <Button
                      variant=''
                      className='position-absolute bottom-0 end-0 rounded-circle p-0 d-flex align-items-center justify-content-center text-primary'
                      style={{
                        width: '32px',
                        height: '32px',
                        backgroundColor: 'var(--whiteColor)',
                      }}>
                      <FontAwesomeIcon icon={faCamera} size='sm' />
                    </Button>
                  </div>
                </Col>
                <Col>
                  <h1 className='fs-3 fw-bold mb-1'>{profile.name}</h1>
                  <p className='text-white opacity-75 fs-5 mb-1'>
                    Full Stack Developer Student
                  </p>
                  <p className='text-white opacity-50 mb-3'>
                    Member since March 2024
                  </p>
                  <Row className='text-center'>
                    <Col>
                      <div className='fs-4 fw-bold'>12</div>
                      <div className='text-white opacity-75 fs-6'>
                        Courses Completed
                      </div>
                    </Col>
                    <Col>
                      <div className='fs-4 fw-bold'>156</div>
                      <div className='text-white opacity-75 fs-6'>
                        Hours Learned
                      </div>
                    </Col>
                    <Col>
                      <div className='fs-4 fw-bold'>8</div>
                      <div className='text-white opacity-75 fs-6'>
                        Certificates
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md='auto'>
                  <Button
                    variant=''
                    className='bg-white opacity-20 text-white px-4 py-2 rounded'
                    onClick={toggleEditMode}
                    style={{ transition: 'all 0.3s' }}>
                    <FontAwesomeIcon icon={faEdit} className='me-2' />
                    Edit Profile
                  </Button>
                </Col>
              </Row>
            </div>
          </div>

          <Row className='g-4'>
            <Col lg={8}>
              <Card
                className='bg-secondary-bg border-0 shadow-lg mb-4'
                data-aos='fade-up'
                data-aos-delay='100'>
                <Card.Body className='p-4'>
                  <div className='d-flex align-items-center justify-content-between mb-4'>
                    <h2 className='fs-4 fw-bold text-primary-text'>
                      <FontAwesomeIcon
                        icon={faUser}
                        className='text-main-color me-2'
                      />
                      Personal Information
                    </h2>
                    <Button
                      variant='link'
                      className='text-main-color p-0'
                      onClick={toggleEditMode}>
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                  </div>
                  <Row className='g-4'>
                    <Col md={6}>
                      <Form.Label className='text-secondary-text fs-6 fw-medium'>
                        Full Name
                      </Form.Label>
                      {!isEditing ? (
                        <p className='text-primary-text p-2 bg-primary-bg rounded border border-gray'>
                          {profile.name}
                        </p>
                      ) : (
                        <Form.Control
                          type='text'
                          name='name'
                          value={profile.name}
                          onChange={handleChange}
                          className='bg-primary-bg text-primary-text border-gray'
                        />
                      )}
                    </Col>
                    <Col md={6}>
                      <Form.Label className='text-secondary-text fs-6 fw-medium'>
                        Email
                      </Form.Label>
                      {!isEditing ? (
                        <p className='text-primary-text p-2 bg-primary-bg rounded border border-gray'>
                          {profile.email}
                        </p>
                      ) : (
                        <Form.Control
                          type='email'
                          name='email'
                          value={profile.email}
                          onChange={handleChange}
                          className='bg-primary-bg text-primary-text border-gray'
                        />
                      )}
                    </Col>
                    <Col md={6}>
                      <Form.Label className='text-secondary-text fs-6 fw-medium'>
                        Phone
                      </Form.Label>
                      {!isEditing ? (
                        <p className='text-primary-text p-2 bg-primary-bg rounded border border-gray'>
                          {profile.phone}
                        </p>
                      ) : (
                        <Form.Control
                          type='tel'
                          name='phone'
                          value={profile.phone}
                          onChange={handleChange}
                          className='bg-primary-bg text-primary-text border-gray'
                        />
                      )}
                    </Col>
                    <Col md={6}>
                      <Form.Label className='text-secondary-text fs-6 fw-medium'>
                        Location
                      </Form.Label>
                      {!isEditing ? (
                        <p className='text-primary-text p-2 bg-primary-bg rounded border border-gray'>
                          {profile.location}
                        </p>
                      ) : (
                        <Form.Control
                          type='text'
                          name='location'
                          value={profile.location}
                          onChange={handleChange}
                          className='bg-primary-bg text-primary-text border-gray'
                        />
                      )}
                    </Col>
                  </Row>
                  <div className='mt-4'>
                    <Form.Label className='text-secondary-text fs-6 fw-medium'>
                      Bio
                    </Form.Label>
                    {!isEditing ? (
                      <p className='text-primary-text p-2 bg-primary-bg rounded border border-gray'>
                        {profile.bio}
                      </p>
                    ) : (
                      <Form.Control
                        as='textarea'
                        rows={4}
                        name='bio'
                        value={profile.bio}
                        onChange={handleChange}
                        className='bg-primary-bg text-primary-text border-gray'
                      />
                    )}
                  </div>
                  {isEditing && (
                    <div className='mt-4 d-flex justify-content-start'>
                      <Button
                        variant='primary'
                        className='me-2'
                        onClick={saveProfile}>
                        <FontAwesomeIcon icon={faSave} className='me-2' />
                        Save Changes
                      </Button>
                      <Button variant='secondary' onClick={toggleEditMode}>
                        Cancel
                      </Button>
                    </div>
                  )}
                </Card.Body>
              </Card>

              <Card
                className='bg-secondary-bg border-0 shadow-lg'
                data-aos='fade-up'
                data-aos-delay='300'>
                <Card.Body className='p-4'>
                  <h2 className='fs-4 fw-bold text-primary-text mb-4'>
                    <FontAwesomeIcon
                      icon={faClock}
                      className='text-main-color me-2'
                    />
                    Recent Activity
                  </h2>
                  <div className='mb-3 d-flex align-items-center p-3 bg-primary-bg rounded'>
                    <div
                      className='rounded-circle d-flex align-items-center justify-content-center me-3 bg-success-subtle'
                      style={{ width: '40px', height: '40px' }}>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className='text-success'
                      />
                    </div>
                    <div className='flex-grow-1'>
                      <p className='fw-medium text-primary-text mb-0'>
                        Completed "CSS Grid Layout" lesson
                      </p>
                      <p className='fs-6 text-secondary-text mb-0'>
                        2 hours ago
                      </p>
                    </div>
                  </div>
                  <div className='mb-3 d-flex align-items-center p-3 bg-primary-bg rounded'>
                    <div
                      className='rounded-circle d-flex align-items-center justify-content-center me-3 bg-info-subtle'
                      style={{ width: '40px', height: '40px' }}>
                      <FontAwesomeIcon icon={faTrophy} className='text-info' />
                    </div>
                    <div className='flex-grow-1'>
                      <p className='fw-medium text-primary-text mb-0'>
                        Earned "CSS Master" badge
                      </p>
                      <p className='fs-6 text-secondary-text mb-0'>1 day ago</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center p-3 bg-primary-bg rounded'>
                    <div
                      className='rounded-circle d-flex align-items-center justify-content-center me-3 bg-purple-subtle'
                      style={{ width: '40px', height: '40px' }}>
                      <FontAwesomeIcon icon={faPlay} className='text-purple' />
                    </div>
                    <div className='flex-grow-1'>
                      <p className='fw-medium text-primary-text mb-0'>
                        Started "JavaScript DOM Manipulation"
                      </p>
                      <p className='fs-6 text-secondary-text mb-0'>
                        3 days ago
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card
                className='bg-secondary-bg border-0 shadow-lg mb-4'
                data-aos='fade-up'
                data-aos-delay='400'>
                <Card.Body className='p-4'>
                  <h2 className='fs-5 fw-bold text-primary-text mb-4'>
                    <FontAwesomeIcon
                      icon={faMedal}
                      className='text-main-color me-2'
                    />
                    Skills & Badges
                  </h2>
                  <div
                    className='mb-3 d-flex align-items-center justify-content-between p-2 rounded border border-orange'
                    style={{
                      background: 'linear-gradient(to right, orange, red)',
                    }}>
                    <div className='d-flex align-items-center'>
                      <FontAwesomeIcon
                        icon={faHtml5}
                        className='text-orange fs-4 me-2'
                      />
                      <span className='fw-medium text-primary-text'>
                        HTML Expert
                      </span>
                    </div>
                    <span className='skill-badge text-white fs-6 px-2 py-1 rounded-pill'>
                      PRO
                    </span>
                  </div>
                  <div
                    className='mb-3 d-flex align-items-center justify-content-between p-2 rounded border border-blue'
                    style={{
                      background: 'linear-gradient(to right, blue, cyan)',
                    }}>
                    <div className='d-flex align-items-center'>
                      <FontAwesomeIcon
                        icon={faCss3Alt}
                        className='text-blue fs-4 me-2'
                      />
                      <span className='fw-medium text-primary-text'>
                        CSS Master
                      </span>
                    </div>
                    <span className='skill-badge text-white fs-6 px-2 py-1 rounded-pill'>
                      PRO
                    </span>
                  </div>
                  <div
                    className='mb-3 d-flex align-items-center justify-content-between p-2 rounded border border-yellow'
                    style={{
                      background: 'linear-gradient(to right, yellow, orange)',
                    }}>
                    <div className='d-flex align-items-center'>
                      <FontAwesomeIcon
                        icon={faJsSquare}
                        className='text-yellow fs-4 me-2'
                      />
                      <span className='fw-medium text-primary-text'>
                        JavaScript Intermediate
                      </span>
                    </div>
                    <span className='bg-warning text-dark fs-6 px-2 py-1 rounded-pill'>
                      INT
                    </span>
                  </div>
                  <div
                    className='d-flex align-items-center justify-content-between p-2 rounded border border-cyan'
                    style={{
                      background: 'linear-gradient(to right, cyan, blue)',
                    }}>
                    <div className='d-flex align-items-center'>
                      <FontAwesomeIcon
                        icon={faReact}
                        className='text-cyan fs-4 me-2'
                      />
                      <span className='fw-medium text-primary-text'>
                        React Beginner
                      </span>
                    </div>
                    <span className='bg-success text-white fs-6 px-2 py-1 rounded-pill'>
                      BEG
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Profile;
