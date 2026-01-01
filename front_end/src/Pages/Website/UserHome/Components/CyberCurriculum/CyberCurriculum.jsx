import React, { useState } from 'react';
import {
  FaLightbulb,
  FaExternalLinkAlt,
  FaTerminal,
  FaListUl,
  FaChevronDown,
  FaChevronUp,
  FaCode,
} from 'react-icons/fa';
import './CyberCurriculum.css';

const CyberCurriculum = ({ topics, imageMap, labsLink, onLabClick }) => {
  const handleGoToLab = (path) => {
    window.open(path, '_blank', 'noopener,noreferrer');
  };
  const [openTopicId, setOpenTopicId] = useState(null);

  const toggleTopic = (topicId) => {
    setOpenTopicId(openTopicId === topicId ? null : topicId);
  };
  const Lang = localStorage.getItem('lang') || 'en';
  const renderElement = (el, index) => {
    switch (el.type) {
      // ========== TITLES ==========
      case 'title':
        return (
          <h3
            key={index}
            className='cyber-curriculum__title-main'
            ar-data={el.value.ar}
            en-data={el.value.en}>
            {Lang === 'en' ? el.value.en : el.value.ar}
          </h3>
        );

      case 'subtitle':
        return (
          <h4
            key={index}
            className='cyber-curriculum__subtitle'
            ar-data={el.value.ar}
            en-data={el.value.en}>
            {Lang === 'en' ? el.value.en : el.value.ar}
          </h4>
        );

      // ========== TEXT ==========
      case 'text':
        return (
          <p
            key={index}
            className='cyber-curriculum__text'
            ar-data={el.value.ar}
            en-data={el.value.en}>
            {Lang === 'en' ? el.value.en : el.value.ar}
          </p>
        );

      // ========== MARKDOWN TEXT (supports links, bold, etc) ==========
      case 'markdown':
        return (
          <div
            key={index}
            className='cyber-curriculum__markdown'
            dangerouslySetInnerHTML={{ __html: el.value.en }}
          />
        );

      // ========== IMAGE ==========
      case 'image':
        return (
          <div
            key={index}
            className={`cyber-curriculum__image-wrapper cyber-curriculum__image-wrapper--${
              el.size || 'medium'
            }`}>
            <img
              src={imageMap[el.srcKey] || el.srcKey || el.imageUrl || ''}
              alt={el.alt || 'visual'}
              className='cyber-curriculum__image'
            />
            {el.caption && (
              <p
                className='cyber-curriculum__image-caption'
                ar-data={el.caption.ar}
                en-data={el.caption.en}>
                {Lang === 'en' ? el.caption.en : el.caption.ar}
              </p>
            )}
          </div>
        );

      // ========== VIDEO ==========
      case 'video':
        return (
          <div key={index} className='cyber-curriculum__video-wrapper'>
            <div className='cyber-curriculum__video-container'>
              {el.url ? (
                <iframe
                  src={el.url}
                  title={el.title?.en || 'Video'}
                  className='cyber-curriculum__video'
                  allowFullScreen
                />
              ) : (
                <video
                  src={el.src}
                  controls
                  className='cyber-curriculum__video'>
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            {el.caption && (
              <p
                className='cyber-curriculum__video-caption'
                ar-data={el.caption.ar}
                en-data={el.caption.en}>
                {Lang === 'en' ? el.caption.en : el.caption.ar}
              </p>
            )}
          </div>
        );

      // ========== HORIZONTAL LINE ==========
      case 'hr':
        return <hr key={index} className='cyber-curriculum__divider' />;

      // ========== CODE BLOCK ==========
      case 'code':
        return (
          <div key={index} className='cyber-curriculum__code-block'>
            <div className='cyber-curriculum__code-header'>
              <FaCode className='cyber-curriculum__code-icon' />
              <span className='cyber-curriculum__code-lang'>
                {el.language || 'code'}
              </span>
            </div>
            <pre className='cyber-curriculum__code-pre'>
              <code className='cyber-curriculum__code'>{el.value}</code>
            </pre>
          </div>
        );

      // ========== TERMINAL ==========
      case 'terminal':
        return (
          <div key={index} className='cyber-curriculum__terminal'>
            <div className='cyber-curriculum__terminal-header'>
              <div className='cyber-curriculum__terminal-buttons'>
                <span className='cyber-curriculum__terminal-btn cyber-curriculum__terminal-btn--red'></span>
                <span className='cyber-curriculum__terminal-btn cyber-curriculum__terminal-btn--yellow'></span>
                <span className='cyber-curriculum__terminal-btn cyber-curriculum__terminal-btn--green'></span>
              </div>
              <span className='cyber-curriculum__terminal-title'>
                {el.label?.en || 'Terminal'}
              </span>
            </div>
            <div className='cyber-curriculum__terminal-body'>
              <FaTerminal className='cyber-curriculum__terminal-icon' />
              <pre className='cyber-curriculum__code-pre'>
                <code className='cyber-curriculum__terminal-code'>
                  {el.value}
                </code>
              </pre>
            </div>
          </div>
        );

      // ========== UNORDERED LIST ==========
      case 'list':
        return (
          <div key={index} className='cyber-curriculum__list-container'>
            {el.title && (
              <h4
                className='cyber-curriculum__list-title'
                ar-data={el.title.ar}
                en-data={el.title.en}>
                {Lang === 'en' ? el.title.en : el.title.ar}
              </h4>
            )}
            <ul className='cyber-curriculum__list'>
              {el.items.en.map((item, idx) => (
                <li key={idx} className='cyber-curriculum__list-item'>
                  <FaListUl className='cyber-curriculum__list-icon' />
                  <span ar-data={el.items.ar[idx]} en-data={item}>
                    {Lang === 'en' ? item : el.items.ar[idx]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );

      // ========== ORDERED LIST ==========
      case 'orderedList':
        return (
          <div key={index} className='cyber-curriculum__list-container'>
            {el.title && (
              <h4
                className='cyber-curriculum__list-title'
                ar-data={el.title?.ar}
                en-data={el.title?.en}>
                {Lang === 'en' ? el.title.en : el.title.ar}
              </h4>
            )}
            <ol className='cyber-curriculum__ordered-list'>
              {el.items.map((item, idx) => (
                <li key={idx} className='cyber-curriculum__ordered-item'>
                  {item.subtitle && (
                    <strong
                      className='cyber-curriculum__item-subtitle ms-1'
                      ar-data={item.subtitle.ar}
                      en-data={item.subtitle.en}>
                      {Lang === 'en' ? item.subtitle.en : item.subtitle.ar}
                    </strong>
                  )}
                  {item.text && (
                    <span ar-data={item.text.ar} en-data={item.text.en}>
                      {' '}
                      {Lang === 'en' ? item.text.en : item.text.ar}
                    </span>
                  )}
                  {/* add it only if there is an example */}

                  {item.example && (
                    <ul className='cyber-curriculum__nested-list'>
                      <li className='cyber-curriculum__nested-item'>
                        <FaLightbulb className='cyber-curriculum__example-icon' />
                        <span
                          ar-data={item.example.ar}
                          en-data={item.example.en}>
                          {Lang === 'en' ? item.example.en : item.example.ar}
                        </span>
                      </li>
                    </ul>
                  )}
                  {item.image && (
                    <div
                      className={`cyber-curriculum__image-wrapper cyber-curriculum__image-wrapper--${
                        item.image.size || 'medium'
                      }`}>
                      <img
                        src={imageMap[item.image.srcKey]}
                        alt='visual'
                        className='cyber-curriculum__image'
                      />
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        );

      // ========== TABLE ==========
      case 'table':
        return (
          <div key={index} className='cyber-curriculum__table-wrapper'>
            {el.title && (
              <h4
                className='cyber-curriculum__table-title'
                ar-data={el.title?.ar}
                en-data={el.title?.en}>
                {Lang === 'en' ? el.title?.en : el.title?.ar}
              </h4>
            )}
            <div className='cyber-curriculum__table-container'>
              <table className='cyber-curriculum__table'>
                <thead>
                  <tr>
                    {el.headers.en.map((header, idx) => (
                      <th
                        key={idx}
                        className='cyber-curriculum__table-header'
                        ar-data={el.headers.ar[idx]}
                        en-data={header}>
                        {Lang === 'en' ? header : el.headers.ar[idx]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {el.rows.map((row, rowIdx) => (
                    <tr key={rowIdx}>
                      {row.en.map((cell, cellIdx) => (
                        <td
                          key={cellIdx}
                          className='cyber-curriculum__table-cell'
                          ar-data={row.ar[cellIdx]}
                          en-data={cell}>
                          {Lang === 'en' ? cell : row.ar[cellIdx]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      // ========== NOTE/ALERT BOX ==========
      case 'note':
        return (
          <div
            key={index}
            className={`cyber-curriculum__note cyber-curriculum__note--${
              el.noteType || 'info'
            }`}>
            <FaLightbulb className='cyber-curriculum__note-icon' />
            <div className='cyber-curriculum__note-content'>
              {el.isLab && (
                <strong en-data='Labs:' ar-data='اللابات: '>
                  {Lang === 'en' ? 'Labs:' : 'اللابات: '}
                </strong>
              )}
              <span ar-data={el.value.ar} en-data={el.value.en}>
                {Lang === 'en' ? el.value.en : el.value.ar}
              </span>
              {el.link && (
                <>
                  {' '}
                  <a
                    href={el.link}
                    onClick={(e) => {
                      if (el.isLab && onLabClick) {
                        e.preventDefault();
                        onLabClick(el.link);
                      }
                    }}
                    className='cyber-curriculum__note-link'
                    target={el.isLab ? '_self' : '_blank'}
                    rel='noopener noreferrer'>
                    {el.linkText?.en || (el.isLab ? 'Go To Labs' : 'Read more')}
                    <FaExternalLinkAlt className='ms-1' size={12} />
                  </a>
                </>
              )}
            </div>
          </div>
        );

      // ========== BUTTON ==========
      case 'button':
        return (
          <div key={index} className='cyber-curriculum__button-wrapper'>
            <button
              className={`cyber-curriculum__button cyber-curriculum__button--${
                el.variant || 'primary'
              }`}
              onClick={() => el.onClick && el.onClick()}>
              {el.icon && <span className='me-2'>{el.icon}</span>}
              <span ar-data={el.label.ar} en-data={el.label.en}>
                {el.label.en}
              </span>
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className='cyber-curriculum'>
      <div className='cyber-curriculum__container'>
        <div className='cyber-curriculum__topics'>
          {topics.map((topic, index) => {
            const isOpen = openTopicId === topic.id;

            return (
              <div
                key={topic.id}
                className={`cyber-curriculum__topic ${
                  isOpen ? 'cyber-curriculum__topic--open' : ''
                }`}>
                <div className='cyber-curriculum__topic-header'>
                  <button
                    className='cyber-curriculum__topic-trigger'
                    onClick={() => toggleTopic(topic.id)}
                    aria-expanded={isOpen}>
                    <div className='cyber-curriculum__topic-info'>
                      <span
                        className='cyber-curriculum__topic-badge'
                        ar-data={`الموضوع ${String(index + 1).padStart(
                          1,
                          '0'
                        )}`}
                        en-data={`Topic ${String(index + 1).padStart(2, '0')}`}>
                        Topic {String(index + 1).padStart(2, '0')}
                      </span>
                      <span
                        className='cyber-curriculum__topic-title'
                        ar-data={topic.title.ar}
                        en-data={topic.title.en}>
                        {Lang === 'en' ? topic.title.en : topic.title.ar}
                      </span>
                    </div>
                    <div className='cyber-curriculum__topic-icon'>
                      {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  </button>
                </div>

                {isOpen && (
                  <div className='cyber-curriculum__topic-content'>
                    <div className='cyber-curriculum__elements'>
                      {topic.elements.map((el, i) => renderElement(el, i))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button onClick={() => handleGoToLab(labsLink)} className='go-to__btn'>
          Go To Labs
        </button>
      </div>
    </div>
  );
};

export default CyberCurriculum;
