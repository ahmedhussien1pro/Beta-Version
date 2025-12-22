import React, { useEffect, useState, useRef, useMemo } from 'react';
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
  Tooltip,
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

export default function CyberRoadmapPro() {
  const [paths, setPaths] = useState([]);
  const [activePath, setActivePath] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [query, setQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [openStep, setOpenStep] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const containerRef = useRef();
  const timelineRef = useRef();

  /* ===== Responsive Fix ===== */
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /* ===== Data Fetch (ready for your JSON) ===== */
  useEffect(() => {
    fetch('/paths.json')
      .then((r) => r.json())
      .then((data) => {
        setPaths(data);
        if (!activePath && data.length) setActivePath(data[0]);
      });
  }, []);

  /* ===== Sidebar Auto Close ===== */
  useEffect(() => {
    const closeOnScroll = () => mobileOpen && setMobileOpen(false);
    if (mobileOpen) {
      document.addEventListener('scroll', closeOnScroll, true);
    }
    return () => document.removeEventListener('scroll', closeOnScroll, true);
  }, [mobileOpen]);

  /* ===== Debounced Search ===== */
  const filteredPaths = useMemo(() => {
    const q = query.toLowerCase();
    return paths.filter(
      (p) =>
        (p.name.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q)) &&
        (difficultyFilter === 'All' || p.difficulty === difficultyFilter)
    );
  }, [paths, query, difficultyFilter]);

  /* ===== Progress Calculation ===== */
  const progress = useMemo(() => {
    if (!activePath) return 0;
    const done = activePath.steps.filter(
      (s) => s.status === 'available'
    ).length;
    return (done / activePath.steps.length) * 100;
  }, [activePath]);

  const toggleSidebar = () => {
    if (isMobile) setMobileOpen(!mobileOpen);
    else setCollapsed(!collapsed);
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

      {/* Mobile Toggle */}
      <IconButton className='mobile-menu-toggle' onClick={toggleSidebar}>
        {mobileOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      {/* SIDEBAR */}
      <motion.aside
        className={`cr__sidebar 
        ${collapsed ? 'collapsed' : ''} 
        ${mobileOpen ? 'mobile-open' : ''}`}
        animate={
          mobileOpen
            ? { x: 0 }
            : isMobile
            ? { x: '-100%' }
            : { width: collapsed ? 80 : 320 }
        }>
        {/* Header */}
        <div className='cr__sidebar-header'>
          <IconButton size='small' onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>

          <AnimatePresence>
            {!collapsed && (
              <motion.h4
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className='cr__sidebar-title'>
                Career Paths
              </motion.h4>
            )}
          </AnimatePresence>
        </div>

        {!collapsed && (
          <>
            {/* Search */}
            <div className='cr__sidebar-search'>
              <TextField
                fullWidth
                size='small'
                placeholder='Search paths...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                InputProps={{
                  startAdornment: <SearchIcon fontSize='small' />,
                }}
              />
            </div>

            {/* Filter */}
            <div className='cr__sidebar-filters'>
              <FormControl fullWidth size='small'>
                <InputLabel>Difficulty</InputLabel>
                <Select
                  label='Difficulty'
                  value={difficultyFilter}
                  icon={<ArrowDropDownIcon />}
                  onChange={(e) => setDifficultyFilter(e.target.value)}>
                  {['All', 'Beginner', 'Intermediate', 'Advanced'].map((d) => (
                    <MenuItem key={d} value={d}>
                      {d}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </>
        )}

        {/* List */}
        <List className='cr__sidebar-list'>
          {filteredPaths.map((p) => {
            const active = p.id === activePath?.id;

            return (
              <motion.div
                key={p.id}
                whileHover={{ scale: 1.02 }}
                className={`cr__sidebar-item ${active ? 'active' : ''}`}
                onClick={() => {
                  setActivePath(p);
                  setMobileOpen(false);
                }}>
                <ListItemButton disableRipple>
                  <div className='cr__sidebar-icon-wrapper'>
                    <Tooltip title={collapsed ? p.name : ''}>
                      <FontAwesomeIcon
                        icon={ICON_MAP[p.icon]}
                        className='cr__sidebar-icon'
                      />
                    </Tooltip>
                  </div>

                  {!collapsed && (
                    <div className='cr__sidebar-info'>
                      <ListItemText
                        primary={
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                            }}>
                            <span>{p.name}</span>
                            <Chip size='small' label={p.steps.length} />
                          </div>
                        }
                        secondary={p.difficulty}
                      />
                    </div>
                  )}
                </ListItemButton>
              </motion.div>
            );
          })}
        </List>
      </motion.aside>

      {/* MAIN */}
      <main className='cr__main container-fluid'>
        {activePath && (
          <>
            {/* HERO */}
            <motion.div className='cr__hero'>
              <div className='cr__hero-left'>
                <div className='cr__hero-icon-wrapper'>
                  <FontAwesomeIcon
                    icon={ICON_MAP[activePath.icon]}
                    className='cr__hero-icon'
                  />
                </div>
                <div>
                  <h2 className='cr__hero-title'>{activePath.name}</h2>
                  <p className='cr__hero-subtitle'>{activePath.description}</p>
                  <Chip
                    label={activePath.difficulty}
                    size='small'
                    color='primary'
                  />
                </div>
              </div>

              <div
                className='cr__hero-progress'
                style={{ width: `${progress}%` }}
              />
            </motion.div>

            {/* TIMELINE */}
            <div className='timeline' ref={timelineRef}>
              <div className='timeline__line' />

              {activePath.steps.map((step, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={step.id}
                    className={`timeline__step ${
                      isLeft ? 'left-card' : 'right-card'
                    }`}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    initial={{ opacity: 0, y: 30 }}>
                    <div className='timeline__marker'>
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    <motion.div
                      className='timeline__card'
                      onClick={() =>
                        setOpenStep(openStep === step.id ? null : step.id)
                      }>
                      <Badge
                        badgeContent={step.status?.charAt(0) || ''}
                        color={getStatusColor(step.status)}
                        className='timeline__status-badge'
                      />

                      <div className='timeline__card-header'>
                        <h5 className='timeline__card-title'>{step.title}</h5>
                        <Chip
                          size='small'
                          label={`${step.courses.length} courses`}
                        />
                      </div>

                      <p className='timeline__desc'>{step.description}</p>

                      <div className='timeline__skills'>
                        {step.skills?.map((s, i) => (
                          <Chip key={i} label={s} size='small' />
                        ))}
                      </div>

                      <AnimatePresence>
                        {openStep === step.id && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            className='timeline__expand'>
                            <List dense>
                              {step.courses.map((c, i) => (
                                <ListItem key={i} disablePadding>
                                  <ListItemButton>
                                    <ListItemText primary={c} />
                                    <PlayCircleFilledWhiteIcon fontSize='small' />
                                  </ListItemButton>
                                </ListItem>
                              ))}
                            </List>
                            <Button
                              fullWidth
                              size='small'
                              variant='contained'
                              startIcon={<PlayCircleFilledWhiteIcon />}>
                              Start Step
                            </Button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </>
        )}
      </main>
    </Box>
  );
}
