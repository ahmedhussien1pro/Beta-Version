import React, { useState, useEffect } from 'react';
import {
  Form,
  Badge,
  Row,
  Col,
  Card,
  Button,
  Offcanvas,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faFilter,
  faTh,
  faList,
  faLock,
  faCheckCircle,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import dataJson from './data.json';
import './all-labs.css';

const AllLabs = () => {
  const [allLabs, setAllLabs] = useState([]);
  const [filteredLabs, setFilteredLabs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  const [courses, setCourses] = useState([]);
  const [uniqueDifficulties, setUniqueDifficulties] = useState([]);

  const [showSidebar, setShowSidebar] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  useEffect(() => {
    const savedCourses =
      JSON.parse(localStorage.getItem('labs_filters_courses')) || [];
    const savedDiffs =
      JSON.parse(localStorage.getItem('labs_filters_difficulty')) || [];

    setSelectedCourses(savedCourses);
    setSelectedDifficulties(savedDiffs);
  }, []);

  useEffect(() => {
    const coursesData = dataJson.courses;
    setCourses(coursesData);

    const labs = coursesData.flatMap((course) =>
      course.labs.map((lab) => ({
        ...lab,
        courseId: course.id,
        courseTitle: course.title,
      }))
    );

    setAllLabs(labs);
    setFilteredLabs(labs);

    const diffs = [...new Set(labs.map((lab) => lab.difficulty))];
    setUniqueDifficulties(diffs);
  }, []);

  useEffect(() => {
    let filtered = allLabs.filter(
      (lab) =>
        (selectedCourses.length === 0 ||
          selectedCourses.includes(lab.courseId.toString())) &&
        (selectedDifficulties.length === 0 ||
          selectedDifficulties.includes(lab.difficulty)) &&
        (lab.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lab.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lab.courseTitle.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredLabs(filtered);
  }, [searchTerm, selectedCourses, selectedDifficulties, allLabs]);
  useEffect(() => {
    localStorage.setItem(
      'labs_filters_courses',
      JSON.stringify(selectedCourses)
    );

    localStorage.setItem(
      'labs_filters_difficulty',
      JSON.stringify(selectedDifficulties)
    );
  }, [selectedCourses, selectedDifficulties]);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'free':
        return (
          <Badge className='all-labs__status all-labs__status--free'>
            <FontAwesomeIcon icon={faCheckCircle} /> Free
          </Badge>
        );
      case 'paid':
        return (
          <Badge className='all-labs__status all-labs__status--paid'>
            <FontAwesomeIcon icon={faLock} /> Paid
          </Badge>
        );
      case 'coming_soon':
        return (
          <Badge className='all-labs__status all-labs__status--soon'>
            <FontAwesomeIcon icon={faClock} /> Coming Soon
          </Badge>
        );
      default:
        return null;
    }
  };

  const FilterContent = () => (
    <>
      <h5 className='main-color'>Courses</h5>
      {courses.map((course) => (
        <Form.Check
          key={course.id}
          type='checkbox'
          className='primary-text'
          id={`course-${course.id}`}
          label={course.title}
          value={course.id}
          checked={selectedCourses.includes(course.id.toString())}
          onChange={(e) => {
            const val = e.target.value;
            if (e.target.checked) {
              setSelectedCourses((prev) => [...prev, val]);
            } else {
              setSelectedCourses((prev) => prev.filter((id) => id !== val));
            }
          }}
        />
      ))}

      <h5 className='mt-3 main-color'>Difficulty</h5>
      {uniqueDifficulties.map((diff) => (
        <Form.Check
          key={diff}
          type='checkbox'
          id={`diff-${diff}`}
          label={diff}
          value={diff}
          className='primary-text'
          checked={selectedDifficulties.includes(diff)}
          onChange={(e) => {
            const val = e.target.value;
            if (e.target.checked) {
              setSelectedDifficulties((prev) => [...prev, val]);
            } else {
              setSelectedDifficulties((prev) => prev.filter((d) => d !== val));
            }
          }}
        />
      ))}
    </>
  );

  return (
    <div className='container-fluid all-labs'>
      {/* Top Bar */}
      <div className='all-labs__toolbar'>
        <div className='all-labs__search position-relative'>
          <Form.Control
            type='text'
            placeholder='Search labs...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FontAwesomeIcon icon={faSearch} className='all-labs__search-icon' />
        </div>

        <div className='all-labs__actions'>
          <Button
            className='all-labs__btn'
            onClick={() =>
              window.innerWidth < 992
                ? setShowSidebar(true)
                : setIsSidebarCollapsed(!isSidebarCollapsed)
            }>
            <FontAwesomeIcon icon={faFilter} /> Filters
          </Button>

          <Button
            className='all-labs__btn'
            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}>
            <FontAwesomeIcon icon={viewMode === 'list' ? faTh : faList} />
          </Button>
        </div>
      </div>

      <Row className='gx-4 position-relative'>
        {/* Desktop Sidebar */}
        {!isSidebarCollapsed && (
          <Col
            lg={3}
            className='d-none d-lg-block all-labs__sidebar motion-fade'>
            <Card className='all-labs__filter-card'>
              <FilterContent />
            </Card>
          </Col>
        )}

        {/* Content */}
        <Col
          lg={isSidebarCollapsed ? 12 : 9}
          className={`all-labs__content all-labs__content--${viewMode}`}>
          <div className='all-labs__grid'>
            {filteredLabs.map((lab, index) => (
              <motion.div
                key={lab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}>
                <div className='all-labs__item'>
                  <div className='all-labs__item-header'>
                    <div>
                      <h5 className='mb-1'>
                        <a href={`${lab.link}`} className='all-labs__lab-link'>
                          {lab.title}
                        </a>
                      </h5>
                      <small>{lab.courseTitle}</small>
                    </div>
                    {getStatusBadge(lab.status)}
                  </div>

                  <p className='all-labs__description'>{lab.description}</p>

                  <div className='all-labs__meta'>
                    <Badge className='all-labs__difficulty'>
                      {lab.difficulty}
                    </Badge>
                    <span>Updated: 1 day ago</span>
                    <span>Downloads: 120</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Col>
      </Row>

      {/* Mobile Offcanvas */}
      <Offcanvas
        show={showSidebar}
        className='primary-bg primary-text'
        onHide={() => setShowSidebar(false)}
        placement='start'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FilterContent />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default AllLabs;
