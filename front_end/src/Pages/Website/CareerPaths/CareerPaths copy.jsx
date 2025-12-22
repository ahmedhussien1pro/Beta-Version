import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeSwitcher from '../../Website/UserHome/Components/ThemeSwitcher/ThemeSwitcher';
import {
  Box,
  TextField,
  Chip,
  IconButton,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Badge,
  ClickAwayListener,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldAlt,
  faSearch,
  faBug,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';

import './career-paths.css';

const ICON_MAP = {
  soc: faShieldAlt,
  pentest: faBug,
  grc: faClipboardList,
};

const STEP_ICON = {
  assessment: faSearch,
  detection: faShieldAlt,
  response: faBug,
  monitoring: faClipboardList,
};

// Framer Motion variants
const sidebarVariants = {
  expanded: { width: '320px' },
  collapsed: { width: '80px' },
};

const mobileSidebarVariants = {
  closed: { x: '-100%' },
  open: { x: 0 },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

export default function CyberRoadmapPro() {
  const [paths, setPaths] = useState([]);
  const [activePath, setActivePath] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [openStep, setOpenStep] = useState(null);

  const timelineRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    fetch('/paths.json')
      .then((r) => r.json())
      .then((data) => {
        setPaths(data);
        if (data.length) setActivePath(data[0]);
      });
  }, []);

  useEffect(() => {
    if (!timelineRef.current || !activePath) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            'timeline__step--active',
            entry.isIntersecting
          );
        });
      },
      { threshold: 0.6 }
    );

    const steps = timelineRef.current.querySelectorAll('.timeline__step');
    steps.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, [activePath]);

  // Mobile sidebar close on scroll or outside click
  useEffect(() => {
    const handleScroll = () => {
      if (mobileOpen) setMobileOpen(false);
    };
    const handleClickOutside = (event) => {
      if (
        mobileOpen &&
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener('scroll', handleScroll, true);
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('scroll', handleScroll, true);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileOpen]);

  const filteredPaths = paths.filter((p) => {
    const q = query.toLowerCase();
    return (
      (p.name.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q)) &&
      (difficultyFilter === 'All' || p.difficulty === difficultyFilter)
    );
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setCollapsed(false); // Expand on mobile open
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'available':
        return 'success';
      case 'pro':
        return 'primary';
      case 'in-progress':
        return 'warning';
      default:
        return 'default';
    }
  };

  return (
    <Box className='cr' ref={containerRef}>
      <ThemeSwitcher />

      {/* Mobile Sidebar Toggle */}
      <IconButton
        className='mobile-menu-toggle'
        onClick={handleDrawerToggle}
        size='large'>
        {mobileOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      {/* Sidebar */}
      <motion.aside
        className={`cr__sidebar ${collapsed ? 'collapsed' : ''} ${
          mobileOpen ? 'mobile-open' : ''
        }`}
        variants={
          window.innerWidth < 768 ? mobileSidebarVariants : sidebarVariants
        }
        initial={window.innerWidth < 768 ? 'closed' : 'expanded'}
        animate={mobileOpen ? 'open' : collapsed ? 'collapsed' : 'expanded'}
        transition={{ type: 'spring', stiffness: 300 }}>
        <div className='cr__sidebar-header'>
          <IconButton
            size='small'
            onClick={() => {
              if (window.innerWidth < 768) setMobileOpen(false);
              else setCollapsed(!collapsed);
            }}>
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <AnimatePresence>
            {!collapsed && (
              <motion.h4
                className='cr__sidebar-title'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}>
                Career Paths
              </motion.h4>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {!collapsed && (
            <>
              <motion.div
                className='cr__sidebar-search'
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}>
                <TextField
                  size='small'
                  fullWidth
                  placeholder='Search paths...'
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  InputProps={{
                    startAdornment: <SearchIcon fontSize='small' />,
                  }}
                />
              </motion.div>

              <motion.div
                className='cr__sidebar-filters'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2, delay: 0.15 }}>
                <FormControl
                  fullWidth
                  size='small'
                  className='cr__difficulty-select'>
                  <InputLabel>Difficulty</InputLabel>
                  <Select
                    value={difficultyFilter}
                    onChange={(e) => setDifficultyFilter(e.target.value)}
                    label='Difficulty'
                    endAdornment={<ArrowDropDownIcon />}>
                    {['All', 'Beginner', 'Intermediate', 'Advanced'].map(
                      (d) => (
                        <MenuItem key={d} value={d}>
                          {d}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <motion.div
          className='cr__sidebar-list'
          initial='hidden'
          animate='visible'
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}>
          <List>
            {filteredPaths.map((p, i) => {
              const active = p.id === activePath?.id;
              return (
                <motion.div
                  key={p.id}
                  variants={listItemVariants}
                  custom={i}
                  whileHover={{
                    y: -2,
                    scale: 1.02,
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.15)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`cr__sidebar-item ${active ? 'active' : ''}`}
                  onClick={() => {
                    setActivePath(p);
                    if (window.innerWidth < 768) setMobileOpen(false);
                  }}>
                  <ListItemButton disableRipple>
                    <motion.div
                      className='cr__sidebar-icon-wrapper'
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}>
                      <FontAwesomeIcon
                        className='cr__sidebar-icon'
                        icon={ICON_MAP[p.icon] || faSearch}
                      />
                    </motion.div>

                    <AnimatePresence>
                      {!collapsed && (
                        <motion.div
                          className='cr__sidebar-info'
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: 'auto' }}
                          exit={{ opacity: 0, width: 0 }}
                          transition={{ duration: 0.2 }}>
                          <ListItemText
                            primary={p.name}
                            secondary={`${p.steps.length} steps`}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </ListItemButton>
                </motion.div>
              );
            })}
          </List>
        </motion.div>
      </motion.aside>

      {/* Main */}
      <main className='cr__main container-fluid'>
        {activePath && (
          <>
            {/* HERO HEADER */}
            <motion.div
              className='cr__hero'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}>
              <div className='cr__hero-left'>
                <motion.div
                  className='cr__hero-icon-wrapper'
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}>
                  <FontAwesomeIcon
                    icon={ICON_MAP[activePath.icon]}
                    className='cr__hero-icon'
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}>
                  <h2 className='cr__hero-title'>{activePath.name}</h2>
                  <p className='cr__hero-subtitle'>{activePath.description}</p>
                  <Chip
                    label={activePath.difficulty}
                    color='primary'
                    size='small'
                    className='cr__hero-difficulty'
                  />
                </motion.div>
              </div>
              <motion.div
                className='cr__hero-progress'
                initial={{ width: 0 }}
                animate={{ width: `${activePath.steps.length * 25}%` }} // Dynamic progress based on steps
                transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
              />
            </motion.div>

            {/* TIMELINE */}
            <div className='timeline' ref={timelineRef}>
              <motion.div
                className='timeline__line'
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />

              <motion.div
                initial='hidden'
                animate='visible'
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 0.5,
                    },
                  },
                }}>
                {activePath.steps.map((step, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <motion.div
                      key={step.id}
                      className={`timeline__step ${
                        isLeft ? 'left-card' : 'right-card'
                      } ${openStep === step.id ? 'expanded' : ''}`}
                      data-index={i}
                      variants={{
                        hidden: { opacity: 0, y: 50, scale: 0.9 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: {
                            type: 'spring',
                            stiffness: 200,
                          },
                        },
                      }}
                      whileHover={{
                        y: isLeft ? -5 : 5,
                        scale: 1.02,
                        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                      }}>
                      <motion.div
                        className='timeline__marker'
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        transition={{ duration: 0.3 }}>
                        {String(i + 1).padStart(2, '0')}
                      </motion.div>

                      <motion.div
                        className='timeline__card'
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        onClick={() =>
                          setOpenStep(openStep === step.id ? null : step.id)
                        }>
                        {/* Status Ribbon */}
                        <Badge
                          badgeContent={
                            step.status
                              ? step.status.charAt(0).toUpperCase()
                              : ''
                          }
                          color={getStatusColor(step.status)}
                          className='timeline__status-badge'
                        />

                        <div className='timeline__card-header'>
                          <h5 className='timeline__card-title'>{step.title}</h5>
                          <Chip
                            size='small'
                            label={`${
                              step.courses?.length || step.coursesCount || 1
                            } courses`}
                            color='secondary'
                          />
                        </div>

                        <p className='timeline__desc'>{step.description}</p>

                        <div className='timeline__meta'>
                          <div className='timeline__skills'>
                            {(step.skills || []).map((s, idx) => (
                              <Chip key={idx} label={s} size='small' />
                            ))}
                          </div>

                          <motion.div
                            className='timeline__icon-wrapper'
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.4 }}>
                            <FontAwesomeIcon
                              icon={STEP_ICON[step.icon] || faShieldAlt}
                              className='timeline__icon'
                            />
                          </motion.div>
                        </div>

                        <AnimatePresence>
                          {openStep === step.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0, scaleY: 0 }}
                              animate={{
                                height: 'auto',
                                opacity: 1,
                                scaleY: 1,
                              }}
                              exit={{ height: 0, opacity: 0, scaleY: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className='timeline__expand'>
                              <div className='timeline__courses-list'>
                                <h6>Courses in this step:</h6>
                                <List dense>
                                  {step.courses?.map((course, idx) => (
                                    <ListItem key={idx} disablePadding>
                                      <ListItemButton
                                        onClick={() =>
                                          console.log(`Start ${course}`)
                                        } // Integrate with your platform
                                      >
                                        <ListItemText primary={course} />
                                        <PlayCircleFilledWhiteIcon fontSize='small' />
                                      </ListItemButton>
                                    </ListItem>
                                  ))}
                                </List>
                              </div>
                              <Button
                                size='small'
                                variant='contained'
                                startIcon={<PlayCircleFilledWhiteIcon />}
                                whileHover={{ scale: 1.05 }}>
                                Start Step
                              </Button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </>
        )}
      </main>
    </Box>
  );
}
