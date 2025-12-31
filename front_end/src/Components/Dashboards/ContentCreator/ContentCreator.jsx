// src/components/ContentCreatorDashboard/ContentCreatorDashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import Sidebar from './Sidebar';
import Main from './Main';
import './style.css';
import ThemeSwitcher from '../../../Pages/Website/UserHome/Components/ThemeSwitcher/ThemeSwitcher';

const STORAGE = {
  SIDEBAR: 'cc_sidebar_collapsed',
  ACTIVITY: 'cc_activity',
};

const Icon = {
  dashboard: <i className='fas fa-tachometer-alt fa-fw' aria-hidden></i>,
  plus: <i className='fas fa-plus fa-fw' aria-hidden></i>,
  lab: <i className='fas fa-flask fa-fw' aria-hidden></i>,
  course: <i className='fas fa-book-open fa-fw' aria-hidden></i>,
  content: <i className='fas fa-file-alt fa-fw' aria-hidden></i>,
  activity: <i className='fas fa-history fa-fw' aria-hidden></i>,
  menu: <i className='fas fa-bars fa-fw' aria-hidden></i>,
  logout: <i className='fas fa-sign-out-alt fa-fw' aria-hidden></i>,
  user: <i className='fas fa-user-circle fa-fw' aria-hidden></i>,
  chat: <i className='fas fa-comments fa-fw' aria-hidden></i>,
  expand: <i className='fas fa-expand-arrows-alt fa-fw' aria-hidden></i>,
  compress: <i className='fas fa-compress-arrows-alt ' aria-hidden></i>,
};

const SIDEBAR_GROUPS = [
  {
    id: 'create',
    label: 'Create New',
    icon: Icon.plus,
    links: [
      // {
      //   id: 'create_course',
      //   label: 'Create Course',
      //   path: '/create/course',
      //   icon: Icon.course,
      // },
      {
        id: 'create_lab',
        label: 'Create Lab',
        path: '/create/lab',
        icon: Icon.lab,
      },
      {
        id: 'create_content',
        label: 'Create Content',
        path: '/create/content',
        icon: Icon.content,
      },
    ],
  },
  {
    id: 'labs',
    label: 'Labs',
    icon: Icon.lab,
    links: [
      // {
      //   id: 'lab_drafts',
      //   label: 'Lab Drafts',
      //   path: '/labs/drafts',
      //   icon: Icon.activity,
      // },
      {
        id: 'lab_preview',
        label: 'Lab Preview',
        path: '/labs/preview',
        icon: Icon.content,
      },
      {
        id: 'create_lab',
        label: 'Create Lab',
        path: '/create/lab',
        icon: Icon.lab,
      },
    ],
  },
  {
    id: 'courses',
    label: 'Courses',
    icon: Icon.course,
    links: [
      {
        id: 'course_drafts',
        label: 'Course Drafts',
        path: '/courses/drafts',
        icon: Icon.activity,
      },
      {
        id: 'course_preview',
        label: 'Course Preview',
        path: '/create/course',
        icon: Icon.content,
      },
    ],
  },
  {
    id: 'content',
    label: 'Content',
    icon: Icon.content,
    links: [
      // {
      //   id: 'content_drafts',
      //   label: 'Content Drafts',
      //   path: '/content/drafts',
      //   icon: Icon.activity,
      // },
      {
        id: 'content_preview',
        label: 'Content Preview',
        path: '/content/preview',
        icon: Icon.content,
      },
      {
        id: 'create_content',
        label: 'Create Content',
        path: '/create/content',
        icon: Icon.content,
      },
    ],
  },
  {
    id: 'activity',
    label: 'Activity',
    icon: Icon.activity,
    links: [
      {
        id: 'activity_log',
        label: 'Activity Log',
        path: '',
        icon: Icon.activity,
      },
    ],
  },
];

export default function ContentCreatorDashboard({
  user = { name: 'Content Creator', avatar: null },
}) {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(() => {
    try {
      return localStorage.getItem(STORAGE.SIDEBAR) === 'true';
    } catch (e) {
      return false;
    }
  });

  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 900 : false
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  const [openGroup, setOpenGroup] = useState(null);
  const [activePanel, setActivePanel] = useState('overview');

  const [activity, setActivity] = useState(() =>
    JSON.parse(localStorage.getItem(STORAGE.ACTIVITY) || '[]')
  );

  const [expandedWidget, setExpandedWidget] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE.SIDEBAR, collapsed ? 'true' : 'false');
  }, [collapsed]);

  useEffect(() => {
    localStorage.setItem(STORAGE.ACTIVITY, JSON.stringify(activity));
  }, [activity]);

  useEffect(() => {
    function onResize() {
      setIsMobile(window.innerWidth < 900);
      if (window.innerWidth >= 900) setMobileOpen(false);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  function goto(path) {
    setActivePanel(path);
    const entry = {
      when: new Date().toISOString(),
      action: 'navigate',
      title: path,
    };
    setActivity((s) => [entry, ...s].slice(0, 200));
    navigate(path);
    if (isMobile) setMobileOpen(false);
  }

  function handleLogout() {
    Swal.fire({
      icon: 'question',
      title: 'Logout?',
      showCancelButton: true,
    }).then((r) => {
      if (r.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Logged out',
          timer: 900,
          showConfirmButton: false,
        });
      }
    });
  }

  function toggleExpand(id) {
    setExpandedWidget((s) => (s === id ? null : id));
    setActivePanel('overview');
  }

  const stats = {
    totalCourses: 30,
    totalLabs: 109,
    totalContent: 42,
    totalDrafts: 3,
  };

  return (
    <>
      <ThemeSwitcher />
      <div className='cc-app container-fluid p-0'>
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          isMobile={isMobile}
          SIDEBAR_GROUPS={SIDEBAR_GROUPS}
          openGroup={openGroup}
          setOpenGroup={setOpenGroup}
          user={user}
          Icon={Icon}
          goto={goto}
          handleLogout={handleLogout}
        />

        <Main
          collapsed={collapsed}
          isMobile={isMobile}
          mobileOpen={mobileOpen}
          activePanel={activePanel}
          setActivePanel={setActivePanel}
          Icon={Icon}
          goto={goto}
          stats={stats}
          activity={activity}
          setActivity={setActivity}
          expandedWidget={expandedWidget}
          toggleExpand={toggleExpand}
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
        />
      </div>
    </>
  );
}
