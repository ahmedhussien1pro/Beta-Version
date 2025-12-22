// src/components/ContentCreatorDashboard/Cards.jsx
import React from 'react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Cell,
} from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const areaData = [
  { name: 'Jan', value: 40 },
  { name: 'Feb', value: 55 },
  { name: 'Mar', value: 48 },
  { name: 'Apr', value: 65 },
  { name: 'May', value: 78 },
  { name: 'Jun', value: 72 },
  { name: 'Jul', value: 72 },
  { name: 'Aug', value: 72 },
  { name: 'Sep', value: 72 },
];

const barData = [
  { name: 'Week 1', uv: 120 },
  { name: 'Week 2', uv: 100 },
  { name: 'Week 3', uv: 110 },
  { name: 'Week 5', uv: 125 },
  { name: 'Week 6', uv: 130 },
  { name: 'Week 7', uv: 200 },
  { name: 'Week 8', uv: 220 },
];

const pieData = [
  { name: 'Courses', value: 44 },
  { name: 'Labs', value: 101 },
  { name: 'Videos', value: 25 },
  { name: 'Docs', value: 12 },
  { name: 'MCQ Exam', value: 25 },
  { name: 'Vuln', value: 40 },
];

const CHART_COLORS = [
  'var(--main-color)',
  '#2563eb',
  '#7c3aed',
  '#10b981',
  '#f59e0b',
  '#ef4444',
  '#10b981',
  '#f59e0b',
  '#ef4444',
];

const WIDGETS_META = [
  {
    id: 'engagement',
    label: 'Engagement',
    icon: <i className='fas fa-chart-area main-color' />,
  },
  {
    id: 'breakdown',
    label: 'Activity',
    icon: <i className='fas fa-chart-bar main-color' />,
  },
  {
    id: 'types',
    label: 'Content Types',
    icon: <i className='fas fa-pie-chart main-color' />,
  },
  {
    id: 'insights',
    label: 'Insights',
    icon: <i className='fas fa-lightbulb main-color' />,
  },
  { id: 'preview', label: 'Preview', icon: <i className='fas fa-desktop' /> },
  {
    id: 'activity',
    label: 'Activity Log',
    icon: <i className='fas fa-history main-color' />,
  },
];

export default function Cards({
  stats,
  activity,
  setActivity,
  expandedWidget,
  toggleExpand,
  selectedChat,
  setSelectedChat,
  goto,
}) {
  const miniItems = WIDGETS_META.filter((w) => w.id !== expandedWidget);

  function clearSelectedChat() {
    setSelectedChat(null);
    if (expandedWidget === 'preview') toggleExpand('preview');
  }

  return (
    <>
      <div className='cc-grid'>
        {/* Stats card */}
        <div
          className={`cc-card ${
            expandedWidget === 'engagement' ? 'cc-card--expanded' : ''
          } ${
            expandedWidget && expandedWidget !== 'engagement'
              ? 'cc-card--hidden'
              : ''
          }`}
          data-widget='engagement'>
          <h3 className='h5 main-color mb-0'>Platform Stats</h3>
          <div className='cc-stats position-relative'>
            <div className='cc-stats__item'>
              <div className='cc-stats__value display-6'>
                {stats.totalCourses}
              </div>
              <div className='cc-stats__label'>Courses</div>
            </div>
            <div className='cc-stats__item'>
              <div className='cc-stats__value display-6'>{stats.totalLabs}</div>
              <div className='cc-stats__label'>Labs</div>
            </div>
            <div className='cc-stats__item'>
              <div className='cc-stats__value display-6'>
                {stats.totalContent}
              </div>
              <div className='cc-stats__label'>Content</div>
            </div>
            <div className='cc-stats__item'>
              <div className='cc-stats__value display-6'>
                {stats.totalDrafts}
              </div>
              <div className='cc-stats__label'>Drafts</div>
            </div>

            <button
              className='cc-expand-btn'
              onClick={() => toggleExpand('engagement')}
              title='Expand'>
              {expandedWidget === 'engagement' ? (
                <i className='fas fa-compress-arrows-alt' />
              ) : (
                <i className='fas fa-expand-arrows-alt' />
              )}
            </button>
          </div>
        </div>

        {/* Engagement chart */}
        <div
          className={`cc-card p-3 ${
            expandedWidget === 'engagement' ? 'cc-card--expanded' : ''
          } ${
            expandedWidget && expandedWidget !== 'engagement'
              ? 'cc-card--hidden'
              : ''
          }`}
          data-widget='engagementChart'>
          <div className='d-flex justify-content-between align-items-center mb-2 position-relative'>
            <h3 className='h5 main-color mb-0'>Engagement (area)</h3>
            <button
              className='cc-expand-btn'
              onClick={() => toggleExpand('engagement')}>
              {expandedWidget === 'engagement' ? (
                <i className='fas fa-compress-arrows-alt' />
              ) : (
                <i className='fas fa-expand-arrows-alt' />
              )}
            </button>
          </div>
          <div
            className='cc-chart-wrap'
            onClick={() => toggleExpand('engagement')}
            role='button'
            tabIndex={0}>
            <ResponsiveContainer
              width='100%'
              height={expandedWidget === 'engagement' ? 320 : 220}>
              <AreaChart
                data={areaData}
                margin={{ top: 6, right: 6, left: -18, bottom: 0 }}>
                <defs>
                  <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                    <stop
                      offset='5%'
                      stopColor={CHART_COLORS[0]}
                      stopOpacity={0.8}
                    />
                    <stop
                      offset='95%'
                      stopColor={CHART_COLORS[0]}
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray='3 3' opacity={0.08} />
                <XAxis dataKey='name' tickLine={false} />
                <YAxis tickLine={false} />
                <Tooltip />
                <Area
                  type='monotone'
                  dataKey='value'
                  stroke={CHART_COLORS[0]}
                  fillOpacity={1}
                  fill='url(#colorUv)'
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar chart */}
        <div
          className={`cc-card p-3 ${
            expandedWidget === 'breakdown' ? 'cc-card--expanded' : ''
          } ${
            expandedWidget && expandedWidget !== 'breakdown'
              ? 'cc-card--hidden'
              : ''
          }`}
          data-widget='breakdown'>
          <div className='d-flex justify-content-between align-items-center mb-2 position-relative'>
            <h3 className='h5 main-color mb-0'>Activity breakdown</h3>
            <button
              className='cc-expand-btn'
              onClick={() => toggleExpand('breakdown')}>
              {expandedWidget === 'breakdown' ? (
                <i className='fas fa-compress-arrows-alt' />
              ) : (
                <i className='fas fa-expand-arrows-alt' />
              )}
            </button>
          </div>
          <div
            className='cc-chart-wrap'
            onClick={() => toggleExpand('breakdown')}
            role='button'
            tabIndex={0}>
            <ResponsiveContainer
              width='100%'
              height={expandedWidget === 'breakdown' ? 320 : 220}>
              <BarChart
                data={barData}
                margin={{ top: 6, right: 6, left: -18, bottom: 0 }}>
                <CartesianGrid strokeDasharray='3 3' opacity={0.08} />
                <XAxis dataKey='name' tickLine={false} />
                <YAxis />
                <Tooltip />
                <Bar dataKey='uv' radius={[6, 6, 0, 0]}>
                  {barData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={CHART_COLORS[index % CHART_COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie */}
        <div
          className={`cc-card p-3 ${
            expandedWidget === 'types' ? 'cc-card--expanded' : ''
          } ${
            expandedWidget && expandedWidget !== 'types'
              ? 'cc-card--hidden'
              : ''
          }`}
          data-widget='types'>
          <div className='d-flex justify-content-between align-items-center mb-2 position-relative'>
            <h3 className='h5 main-color mb-0'>Content types</h3>
            <button
              className='cc-expand-btn'
              onClick={() => toggleExpand('types')}>
              {expandedWidget === 'types' ? (
                <i className='fas fa-compress-arrows-alt' />
              ) : (
                <i className='fas fa-expand-arrows-alt' />
              )}
            </button>
          </div>
          <div
            className='cc-chart-wrap'
            onClick={() => toggleExpand('types')}
            role='button'
            tabIndex={0}>
            <ResponsiveContainer
              width='100%'
              height={expandedWidget === 'types' ? 320 : 220}>
              <PieChart>
                <Tooltip />
                <Pie
                  data={pieData}
                  innerRadius={36}
                  outerRadius={expandedWidget === 'types' ? 90 : 70}
                  dataKey='value'
                  label>
                  {pieData.map((entry, idx) => (
                    <Cell
                      key={`c-${idx}`}
                      fill={CHART_COLORS[idx % CHART_COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Insights */}
        <div
          className={`cc-card p-3 ${
            expandedWidget === 'insights' ? 'cc-card--expanded' : ''
          } ${
            expandedWidget && expandedWidget !== 'insights'
              ? 'cc-card--hidden'
              : ''
          }`}
          data-widget='insights'>
          <div className='d-flex justify-content-between align-items-center mb-2 position-relative'>
            <h3 className='h5 main-color mb-0'>Creator Insights</h3>
            <button
              className='cc-expand-btn'
              onClick={() => toggleExpand('insights')}>
              {expandedWidget === 'insights' ? (
                <i className='fas fa-compress-arrows-alt' />
              ) : (
                <i className='fas fa-expand-arrows-alt' />
              )}
            </button>
          </div>

          <div
            onClick={() => toggleExpand('insights')}
            role='button'
            tabIndex={0}>
            <div className='small muted mb-2'>
              Quick stats for content creators — completion, difficulty &
              skills.
            </div>
            <div className='mb-2'>
              <strong className='main-color'>
                Top labs by completion rate
              </strong>
              <ul className='small mb-2'>
                <li>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className='me-2 text-warning'
                  />
                  Web Fundamentals — 82%
                </li>
                <li>
                  {' '}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className='me-2 text-warning'
                  />
                  SQLi Lab — 74%
                </li>
                <li>
                  {' '}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className='me-2 text-warning'
                  />
                  HTTP Labs — 69%
                </li>
              </ul>
            </div>
            <div className='mb-2'>
              <strong className='main-color'>
                Most difficult step per lab
              </strong>
              <ul className='small mb-2 '>
                <li>
                  {' '}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className='me-2 text-warning'
                  />
                  SQLi Lab — Precise payload chaining (step 4)
                </li>
                <li>
                  {' '}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className='me-2 text-warning'
                  />
                  Token Auth — CSRF exploit chaining
                </li>
              </ul>
            </div>

            <div className='mb-2 d-flex gap-2 flex-column'>
              <div style={{ flex: 1 }}>
                <strong className='main-color'>Avg time / challenge</strong>
                <div className='small muted'>
                  {' '}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className='me-2 text-warning'
                  />
                  ~18m
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <strong className='main-color'>Skills targeted</strong>
                <div className='small muted'>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className='me-2 text-warning'
                  />{' '}
                  Web · Network · Crypto · OSINT
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent activity */}
        <div
          className={`cc-card cc-activity p-3 ${
            expandedWidget === 'activity' ? 'cc-card--expanded' : ''
          } ${
            expandedWidget && expandedWidget !== 'activity'
              ? 'cc-card--hidden'
              : ''
          }`}
          data-widget='activity'>
          <div className='d-flex justify-content-between align-items-center mb-2 position-relative'>
            <h3 className='h5 main-color mb-0'>Recent activity</h3>
            <button
              className='cc-expand-btn'
              onClick={() => toggleExpand('activity')}>
              {expandedWidget === 'activity' ? (
                <i className='fas fa-compress-arrows-alt' />
              ) : (
                <i className='fas fa-expand-arrows-alt' />
              )}
            </button>
          </div>
          <ul className='list-unstyled mb-0'>
            {activity.slice(0, 6).map((a, i) => (
              <li key={i} className='mb-2'>
                <strong>
                  {' '}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className='me-2 text-warning'
                  />
                  {a.action}
                </strong>{' '}
                — {a.title || a.itemId}
                <div className='muted small'>
                  {new Date(a.when).toLocaleString()}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Preview area */}
        <div
          className={`cc-card p-3 cc-preview ${
            expandedWidget === 'preview' ? 'cc-card--expanded' : ''
          } ${
            expandedWidget && expandedWidget !== 'preview'
              ? 'cc-card--hidden'
              : ''
          }`}
          data-widget='preview'>
          <div className='d-flex justify-content-between align-items-center mb-2 position-relative'>
            <h3 className='h5 main-color mb-0'>Preview area</h3>
            <button
              className='cc-expand-btn'
              onClick={() => toggleExpand('preview')}>
              {expandedWidget === 'preview' ? (
                <i className='fas fa-compress-arrows-alt' />
              ) : (
                <i className='fas fa-expand-arrows-alt' />
              )}
            </button>
          </div>

          {!selectedChat && (
            <>
              <p className='muted mb-2'>Placeholder preview panel</p>
              <div className='cc-preview-actions'>
                <button
                  className='btn-main-color btn-main-color-sm'
                  onClick={() => goto('/preview/course')}>
                  Open course preview
                </button>
              </div>
            </>
          )}

          {selectedChat && (
            <div className='cc-preview-expanded-content p-3'>
              <div className='d-flex justify-content-between align-items-start'>
                <div>
                  <strong style={{ fontSize: 18 }}>
                    {selectedChat.who === 'you' ? 'You' : 'Assistant'}
                  </strong>
                  <div className='muted small'>
                    {new Date(selectedChat.when).toLocaleString()}
                  </div>
                </div>
                <button
                  className='cc-expand-btn me-2'
                  onClick={clearSelectedChat}>
                  Close
                </button>
              </div>
              <div style={{ marginTop: 12, fontSize: 16 }}>
                {selectedChat.text}
              </div>
              <div className='muted small mt-2'>
                This preview simulates expanding the chat into the main preview
                area.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mini bar when expanded */}
      {expandedWidget && (
        <div className='cc-mini-bar mt-3'>
          <div className='d-flex gap-2 align-items-center justify-content-center'>
            {miniItems.map((m) => (
              <button
                key={m.id}
                className='btn btn-sm btn-outline-secondary d-flex align-items-center gap-2'
                title={m.label}
                onClick={() => toggleExpand(m.id)}>
                <span style={{ fontSize: 14 }}>{m.icon}</span>
                <span className='small'>{m.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
