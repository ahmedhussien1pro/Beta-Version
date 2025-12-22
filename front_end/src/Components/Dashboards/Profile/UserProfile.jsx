import React, { useState, useEffect, useRef } from 'react';
import Footer from '../../../Pages/Website/UserHome/Footer/Footer';
import ThemeToggler from '../../../Pages/Website/UserHome/Components/Theme/ThemeToggler';
import LangToggler from '../../../Pages/Website/UserHome/Components/Lang/LangToggler';
import './style.css';
import { motion } from 'framer-motion';
import {
  Share2,
  Edit3,
  Save,
  ChevronUp,
  ChevronDown,
  Trash,
  Download,
  Menu,
  Search,
  Bell,
  ChevronDown as ChevronDownIcon,
  Eye,
  EyeOff,
} from 'lucide-react';
import { profileData } from './userData';

function deepClone(v) {
  return JSON.parse(JSON.stringify(v));
}

function moveItem(arr, idx, direction) {
  const a = [...arr];
  const swapWith = direction === 'up' ? idx - 1 : idx + 1;
  if (swapWith < 0 || swapWith >= a.length) return a;
  [a[idx], a[swapWith]] = [a[swapWith], a[idx]];
  return a;
}

function Localized({ tag: Tag = 'div', lang = 'en', children, ...rest }) {
  const ar = rest['ar-data'];
  const en = rest['en-data'];

  const pass = { ...rest };
  delete pass['ar-data'];
  delete pass['en-data'];

  const text =
    typeof children !== 'undefined' ? children : lang === 'ar' ? ar : en;

  return <Tag {...pass}>{text}</Tag>;
}

function EditableField({
  isEditing,
  value,
  onChange,
  type = 'text',
  className = '',
}) {
  if (!isEditing) return <>{value}</>;
  if (type === 'textarea')
    return (
      <textarea
        className={`form-control bg-transparent primary-text  ${className}`}
        rows={3}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  return (
    <input
      className={`form-control bg-transparent ${className}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default function CyberLabProfileFull({ initialData = profileData }) {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [colors, setColors] = useState(() => {
    try {
      const saved = localStorage.getItem('colors');
      return saved ? JSON.parse(saved) : initialData.settings.colors || {};
    } catch {
      return initialData.settings.colors || {};
    }
  });
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(`profile_${lang}`);
      return saved ? JSON.parse(saved) : deepClone(initialData[lang]);
    } catch {
      return deepClone(initialData[lang]);
    }
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`profile_${lang}`);
      if (saved) {
        setData(JSON.parse(saved));
      } else {
        setData(deepClone(initialData[lang] || {}));
      }
    } catch {
      setData(deepClone(initialData[lang] || {}));
    }
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', lang);
  }, [lang, initialData]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(colors));
  }, [colors]);

  function saveProfileEdits() {
    try {
      localStorage.setItem(`profile_${lang}`, JSON.stringify(data));
    } catch (e) {
      console.warn('Could not save profile to localStorage', e);
    }
    setIsEditing(false);
  }

  function resetToDefaults() {
    setData(deepClone(initialData[lang] || {}));
    setColors(initialData.settings.colors || {});
    try {
      localStorage.removeItem(`profile_${lang}`);
      localStorage.removeItem('colors');
    } catch {}
  }

  function toggleCourseVisibility(id) {
    setData((prev) => ({
      ...prev,
      courses: prev.courses.map((c) =>
        c.id === id ? { ...c, visible: !c.visible } : c
      ),
    }));
  }

  function toggleSkillVisibility(id) {
    setData((prev) => ({
      ...prev,
      skills: prev.skills.map((s) =>
        s.id === id ? { ...s, visible: !s.visible } : s
      ),
    }));
  }

  function moveItemInList(listKey, id, direction) {
    setData((prev) => {
      const arr = [...(prev[listKey] || [])];
      const idx = arr.findIndex((x) => x.id === id);
      if (idx === -1) return prev;
      const moved = moveItem(arr, idx, direction);
      return { ...prev, [listKey]: moved };
    });
  }

  // remove item
  function removeItem(listKey, id) {
    setData((prev) => ({
      ...prev,
      [listKey]: prev[listKey].filter((x) => x.id !== id),
    }));
  }

  // add simple course

  // add skill
  function addSkill() {
    const id = 'sk' + Math.random().toString(36).slice(2, 9);
    const newSkill = {
      id,
      skill: lang === 'ar' ? 'مهارة جديدة' : 'New skill',
      visible: true,
    };
    setData((prev) => ({
      ...prev,
      skills: [newSkill, ...(prev.skills || [])],
    }));
  }

  // share profile
  async function shareProfile() {
    const title = data.name || (lang === 'ar' ? 'الملف الشخصي' : 'Profile');
    const text =
      lang === 'ar' ? 'شوف ملفى على CyberLabs' : 'Check my CyberLabs profile';
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, text, url });
      } else {
        await navigator.clipboard.writeText(url);
        alert(lang === 'ar' ? 'تم نسخ الرابط!' : 'Link copied to clipboard!');
      }
    } catch (e) {
      // fallback copy
      try {
        await navigator.clipboard.writeText(url);
        alert(lang === 'ar' ? 'تم نسخ الرابط!' : 'Link copied to clipboard!');
      } catch {
        alert(lang === 'ar' ? 'لا يمكن النسخ' : 'Unable to copy link');
      }
    }
  }

  function downloadCertificate(cert) {
    window.open(cert.image || '#', '_blank');
  }

  /* ----------------------------
     UI small computed values
     ---------------------------- */
  const userStats = {
    level: 12,
    xp: 8750,
    nextLevelXP: 10000,
    labsCompleted: (data.courses || []).filter((c) => c.progress >= 100).length,
    certificates: (data.certificates || []).length,
    badges: (data.badges || []).length,
    skillPoints: (data.skills || []).length * 10,
  };

  const progressPercentage = (userStats.xp / userStats.nextLevelXP) * 100;

  /* ----------------------------
     Header Component
     ---------------------------- */
  const Header = () => {
    const [search, setSearch] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const dropdownRef = useRef(null);

    const toggleDropdown = () => setDropdownOpen((prev) => !prev);

    // Close dropdown on outside click
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setDropdownOpen(false);
        }
      };
      const contentContainer = document.getElementsByTagName('main')[0];
      if (!contentContainer) return;

      const handleScroll = () => setDropdownOpen(false);

      contentContainer.addEventListener('scroll', handleScroll);
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        contentContainer.removeEventListener('scroll', handleScroll);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [dropdownOpen]);

    // Mock user
    const user = { name: data.name, image: data.avatar };

    // Compute Initials
    const getInitials = () => {
      if (!user?.name) return 'U';
      const parts = user.name.trim().split(' ');
      if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
      return (
        parts[0].charAt(0).toUpperCase() + parts[1].charAt(0).toUpperCase()
      );
    };

    // Mock logout
    const handleLogout = () => {
      console.log('Logged out');
    };

    return (
      <header
        className='top-header position-sticky top-0 start-0 w-100 d-flex align-items-center px-3 px-md-4 py-3'
        style={{
          height: '70px',
          backdropFilter: 'blur(12px)',
          zIndex: 1040,
          marginLeft: 0,
        }}>
        {/* Left: Hamburger */}
        <div className='d-flex align-items-center'>
          <button
            className='btn btn-link primary-text me-4 d-lg-none'
            aria-label='Toggle Sidebar'>
            <Menu size={24} />
          </button>
        </div>

        {/* Search */}
        <div className='flex-grow-1 mx-4 d-none d-md-block'>
          <div className='position-relative'>
            <input
              type='text'
              className='form-control bg-transparent border-gray primary-text shadow-sm'
              style={{
                width: '100%',
                maxWidth: '220px',
                paddingLeft: '42px',
                borderRadius: '12px',
                fontSize: '0.95rem',
              }}
              placeholder='Search labs, courses, challenges...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search
              size={16}
              className='position-absolute top-50 start-0 translate-middle-y ms-3 secondary-text'
              style={{ pointerEvents: 'none' }}
            />
          </div>
        </div>

        {/* Right icons */}
        <div className='d-flex align-items-center gap-3 gap-md-4'>
          {/* Mobile Search */}
          <button className='btn btn-link primary-text d-md-none'>
            <Search size={24} />
          </button>

          {/* Notifications */}
          <div className='position-relative'>
            <button className='btn btn-link'>
              <Bell size={24} />
              <span
                className='position-absolute top-0 start-50 badge rounded-pill bg-danger'
                style={{
                  fontSize: '0.65rem',
                  width: 'fit-content',
                  transform: 'translate(15%, 4%)',
                }}>
                3
              </span>
            </button>
          </div>
          {/* Controls */}
          <ThemeToggler theme={theme} setTheme={setTheme} />
          <LangToggler lang={lang} setLang={setLang} />
          <button
            className='btn btn-sm btn-outline-secondary'
            onClick={() => setIsEditing((s) => !s)}
            title={
              data.labels?.editProfile || (lang === 'ar' ? 'تعديل' : 'Edit')
            }>
            <Edit3 size={14} className='me-1' />{' '}
            {data.labels?.editProfile ||
              (lang === 'ar' ? 'تعديل الملف' : 'Edit profile')}
          </button>

          <button
            className='btn btn-sm btn-outline-primary'
            onClick={shareProfile}
            title='Share'>
            <Share2 size={14} className='me-1' />{' '}
            {lang === 'ar' ? 'مشاركة' : 'Share'}
          </button>

          {/* User Avatar */}
          <div className='position-relative' ref={dropdownRef}>
            <button
              className='btn btn-link primary-text d-flex align-items-center gap-2 p-0 text-decoration-none'
              type='button'
              onClick={toggleDropdown}>
              {user?.image ? (
                <img
                  src={user.image}
                  alt='User'
                  className='rounded-circle shadow-sm'
                  style={{ width: 40, height: 40, objectFit: 'cover' }}
                />
              ) : (
                <div
                  className='rounded-circle d-flex align-items-center justify-content-center primary-text fw-bold shadow-sm'
                  style={{
                    width: 40,
                    height: 40,
                    background: 'linear-gradient(135deg, #0d6efd, #0a58ca)',
                    fontSize: '0.9rem',
                  }}>
                  {getInitials()}
                </div>
              )}
              <ChevronDownIcon
                size={16}
                className='secondary-text d-none d-md-block'
              />
            </button>

            {dropdownOpen && (
              <ul
                className='dropdown-menu border-gray shadow-lg show text-center'
                style={{
                  position: 'absolute',
                  right: 0,
                  top: '100%',
                  marginTop: '4px',
                }}>
                <li>
                  <a className='dropdown-item py-2' href='/dashboard/profile'>
                    Profile
                  </a>
                </li>
                <li>
                  <a className='dropdown-item py-2' href='/dashboard/profile'>
                    Settings
                  </a>
                </li>
                <li>
                  <hr className='dropdown-divider my-1' />
                </li>
                <li>
                  <button
                    className='dropdown-item py-2 text-danger'
                    onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </header>
    );
  };
  return (
    <div className='primary-bg primary-text min-vh-100'>
      <Header />

      {/* Cover */}
      <div
        className='position-relative'
        style={{
          height: 260,
          background: data.cover
            ? `url(${data.cover}) center/cover no-repeat`
            : `linear-gradient(135deg, ${colors.primaryStart} 0%, ${colors.primaryEnd} 100%)`,
        }}>
        <div
          className='position-absolute bottom-0 start-0 w-100 p-4'
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.55), transparent)',
          }}>
          <div className='container'>
            <div className='d-flex flex-column flex-md-row align-items-center align-items-md-end gap-3'>
              <img
                src={data.avatar}
                alt='Profile'
                className='rounded-circle border border-4'
                style={{
                  width: 120,
                  height: 120,
                  objectFit: 'cover',
                  marginTop: -60,
                }}
              />
              <div className='flex-grow-1 text-center text-md-end'>
                <div className='d-flex align-items-center justify-content-center justify-content-md-end gap-3'>
                  <div className='text-start text-md-end'>
                    <h2 className='mb-1'>
                      <EditableField
                        isEditing={isEditing}
                        value={data.name}
                        className='primary-text'
                        onChange={(v) => setData((d) => ({ ...d, name: v }))}
                      />
                    </h2>
                    <div className='small secondary-text'>
                      <span className='me-2'>{data.contact?.location}</span>
                      <span className='me-2'>•</span>
                      <span className='me-2'>{data.contact?.email}</span>
                    </div>
                  </div>

                  <div className='d-flex gap-2 align-items-center'>
                    <span className='badge bg-primary fs-6 px-3 py-2'>
                      <Localized
                        tag='span'
                        ar-data='المستوى'
                        en-data='Level'
                        lang={lang}
                      />{' '}
                      {userStats.level}
                    </span>
                    <div className='text-warning small d-flex align-items-center'>
                      <span className='me-1'>
                        {userStats.xp} / {userStats.nextLevelXP} XP
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className='progress mt-2 primary-bg'
                  style={{ height: 8, maxWidth: 300, margin: '8px auto 0' }}>
                  <div
                    className='progress-bar bg-warning'
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main container */}
      <div className='container mt-4 primary-text'>
        <div className='row'>
          {/* Sidebar (CV summary) */}
          <div className='col-md-3 d-none d-md-block'>
            <div
              className={
                theme === 'dark'
                  ? 'card profile-card secondary-bg  border-secondary shadow-lg sticky-top rounded-3'
                  : 'card profile-card secondary-bg border-secondary shadow-lg sticky-top rounded-3'
              }
              style={{ top: 80 }}>
              <div className='card-body'>
                <h6 className='secondary-text'>
                  <Localized
                    tag='span'
                    ar-data='السيرة الذاتية'
                    en-data='CV Summary'
                    lang={lang}
                  />
                </h6>

                <div className='mb-3 primary-text'>
                  <small className='secondary-text d-block mb-1'>
                    <Localized
                      tag='span'
                      ar-data='المهارات'
                      en-data='Skills'
                      lang={lang}
                    />
                  </small>
                  {!isEditing ? (
                    <div className='d-flex flex-wrap gap-2'>
                      {(data.skills || [])
                        .filter((s) => s.visible)
                        .map((s) => (
                          <span
                            key={s.id}
                            className='badge bg-main-color rounded-pill px-3 py-2'>
                            {s.skill}
                          </span>
                        ))}
                    </div>
                  ) : (
                    <div>
                      {(data.skills || []).map((s, i) => (
                        <div
                          key={s.id}
                          className='d-flex align-items-center gap-2 mb-2'>
                          <input
                            className='form-control form-control-sm'
                            value={s.skill}
                            onChange={(e) => {
                              const arr = [...data.skills];
                              arr[i].skill = e.target.value;
                              setData({ ...data, skills: arr });
                            }}
                          />
                          <button
                            className='btn btn-sm btn-outline-secondary'
                            onClick={() =>
                              moveItemInList('skills', s.id, 'up')
                            }>
                            <ChevronUp size={14} />
                          </button>
                          <button
                            className='btn btn-sm btn-outline-secondary'
                            onClick={() =>
                              moveItemInList('skills', s.id, 'down')
                            }>
                            <ChevronDown size={14} />
                          </button>
                          <button
                            className='btn btn-sm btn-outline-secondary'
                            onClick={() => toggleSkillVisibility(s.id)}>
                            {s.visible ? (
                              <EyeOff size={14} />
                            ) : (
                              <Eye size={14} />
                            )}
                          </button>
                          <button
                            className='btn btn-sm btn-outline-danger'
                            onClick={() => removeItem('skills', s.id)}>
                            <Trash size={14} />
                          </button>
                        </div>
                      ))}
                      <button
                        className='btn btn-sm btn-outline-primary mt-2'
                        onClick={addSkill}>
                        +{' '}
                        <Localized
                          tag='span'
                          ar-data='مهارة'
                          en-data='Skill'
                          lang={lang}
                        />
                      </button>
                    </div>
                  )}
                </div>

                <div className='mb-3 primary-text'>
                  <small className='secondary-text d-block mb-1'>
                    <Localized
                      tag='span'
                      ar-data='التواصل'
                      en-data='Contact'
                      lang={lang}
                    />
                  </small>
                  <div className='small secondary-text'>
                    <div>{data.contact?.email}</div>
                    <div>{data.contact?.phone}</div>
                    <div>{data.contact?.website}</div>
                  </div>
                </div>

                <div className='mb-3 primary-text'>
                  <small className='secondary-text d-block mb-1'>
                    <Localized
                      tag='span'
                      ar-data='التعليم'
                      en-data='Education'
                      lang={lang}
                    />
                  </small>
                  <EditableField
                    isEditing={isEditing}
                    value={data.education}
                    className='primary-text'
                    onChange={(v) => setData((d) => ({ ...d, education: v }))}
                  />
                </div>

                {isEditing && (
                  <div className='mb-3 primary-text'>
                    <small className='secondary-text d-block mb-1'>
                      <Localized
                        tag='span'
                        ar-data='الغلاف'
                        en-data='Cover'
                        lang={lang}
                      />
                    </small>
                    <div className='d-flex flex-column gap-2'>
                      <input
                        type='file'
                        className='form-control'
                        accept='image/*'
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            setData({
                              ...data,
                              cover: URL.createObjectURL(file),
                            });
                          }
                        }}
                      />
                      <button
                        className='btn btn-sm btn-outline-danger'
                        onClick={() => setData({ ...data, cover: null })}>
                        <Localized
                          tag='span'
                          ar-data='إزالة صورة الغلاف'
                          en-data='Remove Cover Image'
                          lang={lang}
                        />
                      </button>
                      <div className='d-flex align-items-center gap-2'>
                        <label>
                          <Localized
                            tag='span'
                            ar-data='لون البداية:'
                            en-data='Start Color:'
                            lang={lang}
                          />
                        </label>
                        <input
                          type='color'
                          value={colors.primaryStart}
                          onChange={(e) =>
                            setColors({
                              ...colors,
                              primaryStart: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className='d-flex align-items-center gap-2'>
                        <label>
                          <Localized
                            tag='span'
                            ar-data='لون النهاية:'
                            en-data='End Color:'
                            lang={lang}
                          />
                        </label>
                        <input
                          type='color'
                          value={colors.primaryEnd}
                          onChange={(e) =>
                            setColors({ ...colors, primaryEnd: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </div>
                )}

                <hr />
                <div className='row g-2 text-center'>
                  <div className='col-6'>
                    <div className='small secondary-text'>
                      <Localized
                        tag='span'
                        ar-data='مختبرات'
                        en-data='Labs'
                        lang={lang}
                      />
                    </div>
                    <strong>{userStats.labsCompleted}</strong>
                  </div>
                  <div className='col-6'>
                    <div className='small secondary-text'>
                      <Localized
                        tag='span'
                        ar-data='شهادات'
                        en-data='Certs'
                        lang={lang}
                      />
                    </div>
                    <strong>{userStats.certificates}</strong>
                  </div>
                </div>
                <div className='mt-3 d-grid gap-2'>
                  {isEditing ? (
                    <>
                      <button
                        className='btn btn-outline-secondary btn-sm'
                        onClick={resetToDefaults}>
                        Reset
                      </button>
                      <button
                        className='btn btn-primary btn-sm'
                        onClick={saveProfileEdits}>
                        <Save size={16} className='me-1' />{' '}
                        <Localized
                          tag='span'
                          ar-data='حفظ'
                          en-data='Save'
                          lang={lang}
                        />
                      </button>
                    </>
                  ) : (
                    <button
                      className='btn btn-outline-primary btn-sm'
                      onClick={() => setActiveTab('overview')}>
                      <Localized
                        tag='span'
                        ar-data='تحميل CV (طباعة)'
                        en-data='Download CV (print)'
                        lang={lang}
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className='col-md-9'>
            {/* Tabs */}
            <div className='mb-3 d-flex gap-2 flex-wrap'>
              <button
                className={`btn btn-sm ${
                  activeTab === 'overview'
                    ? 'btn-primary'
                    : 'btn-outline-secondary'
                }`}
                onClick={() => setActiveTab('overview')}>
                {data.labels?.overview ||
                  (lang === 'ar' ? 'نظرة عامة' : 'Overview')}
              </button>
              <button
                className={`btn btn-sm ${
                  activeTab === 'courses'
                    ? 'btn-primary'
                    : 'btn-outline-secondary'
                }`}
                onClick={() => setActiveTab('courses')}>
                {data.labels?.courses ||
                  (lang === 'ar' ? 'الدورات' : 'Courses')}
              </button>
              <button
                className={`btn btn-sm ${
                  activeTab === 'certificates'
                    ? 'btn-primary'
                    : 'btn-outline-secondary'
                }`}
                onClick={() => setActiveTab('certificates')}>
                {data.labels?.certificates ||
                  (lang === 'ar' ? 'الشهادات' : 'Certificates')}
              </button>
              <button
                className={`btn btn-sm ${
                  activeTab === 'badges'
                    ? 'btn-primary'
                    : 'btn-outline-secondary'
                }`}
                onClick={() => setActiveTab('badges')}>
                {data.labels?.badges ||
                  (lang === 'ar' ? 'الإنجازات' : 'Badges')}
              </button>
              <button
                className={`btn btn-sm ${
                  activeTab === 'wishlist'
                    ? 'btn-primary'
                    : 'btn-outline-secondary'
                }`}
                onClick={() => setActiveTab('wishlist')}>
                {data.labels?.wishlist ||
                  (lang === 'ar' ? 'قائمة الرغبات' : 'Wishlist')}
              </button>
            </div>

            {/* Overview */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <div
                  className={
                    theme === 'dark'
                      ? 'card profile-card secondary-bg  border-secondary shadow-lg mb-3 rounded-3'
                      : 'card profile-card secondary-bg border-secondary shadow-lg mb-3 rounded-3'
                  }>
                  <div className='card-body'>
                    <h5 className='card-title mb-3'>
                      <Localized
                        tag='span'
                        ar-data={data.labels?.overview || 'نظرة عامة'}
                        en-data={data.labels?.overview || 'Overview'}
                        lang={lang}
                      />
                    </h5>

                    <div className='mb-3 primary-text'>
                      <small className='secondary-text d-block mb-1'>
                        <Localized
                          tag='span'
                          ar-data='نبذة عني'
                          en-data='Bio'
                          lang={lang}
                        />
                      </small>
                      <EditableField
                        isEditing={isEditing}
                        className='primary-text'
                        type='textarea'
                        value={data.bio}
                        onChange={(v) => setData((d) => ({ ...d, bio: v }))}
                      />
                    </div>

                    <div className='row'>
                      <div className='col-md-6 mb-3 primary-text'>
                        <small className='secondary-text d-block mb-1'>
                          <Localized
                            tag='span'
                            ar-data='التعليم'
                            en-data='Education'
                            lang={lang}
                          />
                        </small>
                        <EditableField
                          isEditing={isEditing}
                          value={data.education}
                          className='primary-text'
                          onChange={(v) =>
                            setData((d) => ({ ...d, education: v }))
                          }
                        />
                      </div>
                      <div className='col-md-6 mb-3 primary-text'>
                        <small className='secondary-text d-block mb-1'>
                          <Localized
                            tag='span'
                            ar-data='تاريخ الانضمام'
                            en-data='Joined'
                            lang={lang}
                          />
                        </small>
                        <EditableField
                          isEditing={isEditing}
                          value={data.joinDate}
                          className='primary-text'
                          onChange={(v) =>
                            setData((d) => ({ ...d, joinDate: v }))
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div
                  className={
                    theme === 'dark'
                      ? 'card profile-card secondary-bg  border-secondary shadow-lg mb-3 rounded-3'
                      : 'card profile-card secondary-bg border-secondary shadow-lg mb-3 rounded-3'
                  }>
                  <div className='card-body'>
                    <h5 className='card-title mb-3'>
                      <Localized
                        tag='span'
                        ar-data='الخبرات'
                        en-data='Experience'
                        lang={lang}
                      />
                    </h5>
                    <div className='timeline secondary-text'>
                      {(data.experience || []).map((exp, idx) => (
                        <div key={exp.id} className='d-flex gap-3 mb-3'>
                          <div style={{ width: 6 }} />
                          <div className='flex-grow-1'>
                            {isEditing ? (
                              <>
                                <input
                                  className='form-control mb-1'
                                  value={exp.role}
                                  onChange={(e) =>
                                    setData((d) => {
                                      const arr = [...d.experience];
                                      arr[idx] = {
                                        ...arr[idx],
                                        role: e.target.value,
                                      };
                                      return { ...d, experience: arr };
                                    })
                                  }
                                />
                                <input
                                  className='form-control mb-1'
                                  value={exp.org}
                                  onChange={(e) =>
                                    setData((d) => {
                                      const arr = [...d.experience];
                                      arr[idx] = {
                                        ...arr[idx],
                                        org: e.target.value,
                                      };
                                      return { ...d, experience: arr };
                                    })
                                  }
                                />
                                <textarea
                                  className='form-control mb-1'
                                  rows={2}
                                  value={exp.desc}
                                  onChange={(e) =>
                                    setData((d) => {
                                      const arr = [...d.experience];
                                      arr[idx] = {
                                        ...arr[idx],
                                        desc: e.target.value,
                                      };
                                      return { ...d, experience: arr };
                                    })
                                  }
                                />
                                <div className='d-flex gap-1 mt-1'>
                                  <button
                                    className='btn btn-sm btn-outline-secondary'
                                    onClick={() =>
                                      moveItemInList('experience', exp.id, 'up')
                                    }>
                                    <ChevronUp size={14} />
                                  </button>
                                  <button
                                    className='btn btn-sm btn-outline-secondary'
                                    onClick={() =>
                                      moveItemInList(
                                        'experience',
                                        exp.id,
                                        'down'
                                      )
                                    }>
                                    <ChevronDown size={14} />
                                  </button>
                                  <button
                                    className='btn btn-sm btn-outline-danger'
                                    onClick={() =>
                                      removeItem('experience', exp.id)
                                    }>
                                    <Trash size={14} />
                                  </button>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className='d-flex justify-content-between'>
                                  <strong>{exp.role}</strong>
                                  <small className='secondary-text'>
                                    {exp.from} - {exp.to}
                                  </small>
                                </div>
                                <div className='small secondary-text'>
                                  {exp.org}
                                </div>
                                <div className='mt-1'>{exp.desc}</div>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                      {isEditing && (
                        <div className='d-flex'>
                          <button
                            className='btn btn-sm btn-outline-primary'
                            onClick={() =>
                              setData((d) => ({
                                ...d,
                                experience: [
                                  {
                                    id:
                                      'exp' +
                                      Math.random().toString(36).slice(2, 8),
                                    role:
                                      lang === 'ar' ? 'دور جديد' : 'New role',
                                    org: '',
                                    from: '',
                                    to: '',
                                    desc: '',
                                  },
                                  ...(d.experience || []),
                                ],
                              }))
                            }>
                            +{' '}
                            <Localized
                              tag='span'
                              ar-data='خبرة'
                              en-data='Experience'
                              lang={lang}
                            />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Courses tab */}
            {activeTab === 'courses' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className='mb-4 d-flex justify-content-between align-items-center'>
                  <h5>
                    <Localized
                      tag='span'
                      ar-data={data.labels?.courses || 'الدورات'}
                      en-data={data.labels?.courses || 'Courses'}
                      lang={lang}
                    />
                  </h5>
                </div>

                <div className='row g-3'>
                  {(data.courses || [])
                    .filter((c) => c.visible)
                    .map((course, idx) => (
                      <div key={course.id} className='col-md-6'>
                        <div
                          className={
                            theme === 'dark'
                              ? 'card profile-card secondary-bg  border-secondary shadow-lg h-100 rounded-3'
                              : 'card profile-card secondary-bg border-secondary shadow-lg h-100 rounded-3'
                          }>
                          {course.image ? (
                            <img
                              src={course.image}
                              alt={course.title}
                              className='card-img-top rounded-top-3'
                              style={{ height: 150, objectFit: 'cover' }}
                            />
                          ) : null}
                          <div className='card-body'>
                            <h6 className='card-title'>
                              {isEditing ? (
                                <input
                                  className='form-control'
                                  value={course.title}
                                  onChange={(e) =>
                                    setData((d) => {
                                      const arr = [...d.courses];
                                      arr[idx] = {
                                        ...arr[idx],
                                        title: e.target.value,
                                      };
                                      return { ...d, courses: arr };
                                    })
                                  }
                                />
                              ) : (
                                course.title
                              )}
                            </h6>

                            <div
                              className='progress primary-bg mb-2'
                              style={{ height: 8 }}>
                              <div
                                className='progress-bar bg-primary'
                                style={{ width: `${course.progress}%` }}
                              />
                            </div>
                            <small className='secondary-text'>
                              {course.progress}%{' '}
                              <Localized
                                tag='span'
                                ar-data='مكتمل'
                                en-data='completed'
                                lang={lang}
                              />
                            </small>

                            <div className='d-flex gap-2 mt-3'>
                              <button className='btn btn-primary btn-sm flex-grow-1'>
                                <Localized
                                  tag='span'
                                  ar-data='متابعة الدورة'
                                  en-data='Go to course'
                                  lang={lang}
                                />
                              </button>
                              {isEditing && (
                                <div className='btn-group'>
                                  <button
                                    className='btn btn-outline-secondary btn-sm'
                                    onClick={() =>
                                      moveItemInList('courses', course.id, 'up')
                                    }>
                                    <ChevronUp size={14} />
                                  </button>
                                  <button
                                    className='btn btn-outline-secondary btn-sm'
                                    onClick={() =>
                                      moveItemInList(
                                        'courses',
                                        course.id,
                                        'down'
                                      )
                                    }>
                                    <ChevronDown size={14} />
                                  </button>
                                  <button
                                    className='btn btn-outline-danger btn-sm'
                                    onClick={() =>
                                      toggleCourseVisibility(course.id)
                                    }>
                                    ⨯
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                {isEditing && (
                  <div className='mt-4'>
                    <h6 className='mb-2'>
                      <Localized
                        tag='span'
                        ar-data='الدورات المخفية'
                        en-data='Hidden courses'
                        lang={lang}
                      />
                    </h6>
                    <div className='row g-3'>
                      {(data.courses || [])
                        .filter((c) => !c.visible)
                        .map((course, idx) => (
                          <div key={course.id} className='col-md-6'>
                            <div className='card profile-card secondary-bg border-secondary shadow-lg h-100 rounded-3'>
                              <div className='card-body'>
                                <h6 className='card-title'>{course.title}</h6>
                                <small className='secondary-text'>
                                  <Localized
                                    tag='span'
                                    ar-data='مخفي'
                                    en-data='Hidden'
                                    lang={lang}
                                  />
                                </small>
                                <div className='mt-3 d-flex gap-2'>
                                  <button
                                    className='btn btn-sm btn-outline-primary'
                                    onClick={() =>
                                      toggleCourseVisibility(course.id)
                                    }>
                                    <Localized
                                      tag='span'
                                      ar-data='إظهار'
                                      en-data='Show'
                                      lang={lang}
                                    />
                                  </button>
                                  <button
                                    className='btn btn-sm btn-outline-secondary'
                                    onClick={() =>
                                      moveItemInList('courses', course.id, 'up')
                                    }>
                                    <ChevronUp size={14} />
                                  </button>
                                  <button
                                    className='btn btn-sm btn-outline-secondary'
                                    onClick={() =>
                                      moveItemInList(
                                        'courses',
                                        course.id,
                                        'down'
                                      )
                                    }>
                                    <ChevronDown size={14} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Certificates */}
            {activeTab === 'certificates' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className='row g-3'>
                  {(data.certificates || []).map((cert, idx) => (
                    <div key={cert.id} className='col-md-6'>
                      <div
                        className={
                          theme === 'dark'
                            ? 'card profile-card secondary-bg  border-secondary shadow-lg h-100 rounded-3'
                            : 'card profile-card secondary-bg border-secondary shadow-lg h-100 rounded-3'
                        }>
                        {cert.image ? (
                          <img
                            src={cert.image}
                            className='card-img-top rounded-top-3'
                            alt={cert.title}
                            style={{ height: 200, objectFit: 'cover' }}
                          />
                        ) : null}
                        <div className='card-body'>
                          <h6 className='card-title'>{cert.title}</h6>
                          <p className='secondary-text small mb-2'>
                            {cert.course}
                          </p>
                          <p className='secondary-text small mb-3'>
                            <strong>
                              <svg style={{ width: 14, height: 14 }} />
                            </strong>{' '}
                            {cert.date}
                          </p>
                          <div className='d-flex gap-2'>
                            <button
                              className='btn btn-primary btn-sm flex-grow-1'
                              onClick={() => downloadCertificate(cert)}>
                              <Download size={14} className='me-1' />
                              <Localized
                                tag='span'
                                ar-data='تحميل'
                                en-data='Download'
                                lang={lang}
                              />
                            </button>
                            {isEditing && (
                              <button
                                className='btn btn-sm btn-outline-danger'
                                onClick={() =>
                                  removeItem('certificates', cert.id)
                                }>
                                <Trash size={14} />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Badges */}
            {activeTab === 'badges' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className='row g-3'>
                  {(data.badges || []).map((b) => (
                    <div key={b.id} className='col-6 col-md-4 col-lg-3'>
                      <div
                        className={
                          theme === 'dark'
                            ? 'card profile-card secondary-bg primary-bg border-secondary shadow-lg h-100 text-center rounded-3'
                            : 'card profile-card secondary-bg border-secondary shadow-lg h-100 text-center rounded-3'
                        }>
                        <div className='card-body'>
                          <div
                            className='rounded-circle primary-bg border d-inline-flex align-items-center justify-content-center mb-3'
                            style={{ width: 80, height: 80 }}>
                            <strong>{b.xp}</strong>
                          </div>
                          <h6 className='card-title'>{b.name}</h6>
                          <span className='badge bg-warning rounded-pill px-3 py-2'>
                            {b.xp} XP
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Wishlist */}
            {activeTab === 'wishlist' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className='row g-3'>
                  {(data.wishlist || []).map((item) => (
                    <div key={item.id} className='col-md-6'>
                      <div
                        className={
                          theme === 'dark'
                            ? 'card profile-card secondary-bg  border-secondary shadow-lg h-100 rounded-3'
                            : 'card profile-card secondary-bg border-secondary shadow-lg h-100 rounded-3'
                        }>
                        {item.image ? (
                          <img
                            src={item.image}
                            className='card-img-top rounded-top-3'
                            alt={item.title}
                            style={{ height: 150, objectFit: 'cover' }}
                          />
                        ) : null}
                        <div className='card-body'>
                          <h6 className='card-title'>{item.title}</h6>
                          <div className='d-flex gap-2 mt-3'>
                            <button className='btn btn-primary btn-sm flex-grow-1'>
                              <Localized
                                tag='span'
                                ar-data='الذهاب للدورة'
                                en-data='Go to course'
                                lang={lang}
                              />
                            </button>
                            {isEditing && (
                              <button
                                className='btn btn-outline-danger btn-sm'
                                onClick={() => removeItem('wishlist', item.id)}>
                                <Localized
                                  tag='span'
                                  ar-data='حذف'
                                  en-data='Remove'
                                  lang={lang}
                                />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
