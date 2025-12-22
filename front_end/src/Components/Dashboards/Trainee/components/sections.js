// src/components/sections.js

import React from 'react';
import { motion } from 'framer-motion';
import StatsCards from './StatsCards';
import ContinueLearning from './ContinueLearning';
import ActiveLabs from './ActiveLabs';
import LearningProgressChart from './LearningProgressChart';
import RecentAchievements from './RecentAchievements';
import Leaderboard from './Leaderboard';
import CommunityFeed from './CommunityFeed';
import LearningGoals from './LearningGoals';
import AccountSettings from './AccountSettings';
import YearlyHeatmap from './YearlyHeatmap';
import LearningProgress from './LearningProgress';
import RecommendedCourses from './RecommendedCourses';
import StudyStreak from './StudyStreak';
import QuickActions from './QuickActions';
import UpcomingDeadlines from './UpcomingDeadlines';
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
};

const SectionWrapper = ({ children }) => (
  <motion.div
    initial='initial'
    animate='in'
    exit='out'
    variants={pageVariants}
    transition={pageTransition}
    className='content-animate'>
    {children}
  </motion.div>
);

const sections = {
  dashboard: ({ data }) => (
    <SectionWrapper>
      <StatsCards data={data.stats} />

      <div className='row g-4'>
        <div className='col-lg-8 order-lg-1 order-2'>
          <ContinueLearning data={data.courses} />
          <ActiveLabs data={data.labs} />
          <LearningProgressChart />
        </div>

        <div className='col-lg-4 order-lg-2 order-1'>
          <div className='d-flex flex-column gap-4'>
            <StudyStreak data={data} />
            <QuickActions />
            <Leaderboard data={data.leaderboard} />
            <CommunityFeed data={data.community} />
            <UpcomingDeadlines data={data.deadlines} />
          </div>
        </div>
        <div className='col-lg-12 order-3'>
          <YearlyHeatmap />
        </div>
      </div>
    </SectionWrapper>
  ),

  labs: ({ data }) => (
    <SectionWrapper>
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <h3 className='mb-0 gradient-text fw-bold'>Active & Available Labs</h3>
      </div>
      <ActiveLabs data={data.labs} full />
    </SectionWrapper>
  ),

  courses: ({ data }) => (
    <SectionWrapper>
      <h3 className='mb-4 gradient-text fw-bold'>My Learning Path</h3>
      <ContinueLearning data={data.courses} />
      <LearningProgress data={data.progressCourses} />
      <div className='mt-5'>
        <h4 className='mb-4 text-primary-text'>Recommended For You</h4>
        <RecommendedCourses data={data.recommended} />
      </div>
    </SectionWrapper>
  ),

  challenges: () => (
    <SectionWrapper>
      <div className='text-center py-5'>
        <h2 className='display-5 fw-bold text-warning mb-3'>CTF Challenges</h2>
        <p className='lead text-secondary-text mb-4'>
          Real-world hacking challenges with flags to capture
        </p>
        <div
          className='spinner-border text-primary'
          style={{ width: '4rem', height: '4rem' }}
          role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
        <p className='mt-4 secondary-text'>Coming Soon - Get Ready to Pwn!</p>
      </div>
    </SectionWrapper>
  ),

  achievements: ({ data }) => (
    <SectionWrapper>
      <h3 className='mb-4 gradient-text fw-bold'>Achievements & Progress</h3>
      <RecentAchievements data={data.achievements} level={data.level} />
      <LearningGoals data={data.goals} />
    </SectionWrapper>
  ),

  leaderboard: ({ data }) => (
    <SectionWrapper>
      <h3 className='mb-4 text-center gradient-text fw-bold'>
        Global Hacker Leaderboard
      </h3>
      <Leaderboard data={data.leaderboard} full />
    </SectionWrapper>
  ),

  profile: ({ data }) => (
    <SectionWrapper>
      <h3 className='mb-4 gradient-text fw-bold'>Profile & Settings</h3>
      <div className='row g-4'>
        <div className='col-lg-8'>
          <AccountSettings />
        </div>
        <div className='col-lg-4'>
          <CommunityFeed data={data.community} />
        </div>
      </div>
    </SectionWrapper>
  ),
};

export default sections;
