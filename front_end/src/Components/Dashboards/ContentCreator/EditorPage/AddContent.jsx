// src/pages/EditorPage/ContentEditorPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import { defaultCourseData } from '../data/courseData';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import $ from 'jquery';
import ThemeSwitcher from '../../../../Pages/Website/UserHome/Components/ThemeSwitcher/ThemeSwitcher';
import Header from '../../../../Pages/Website/UserHome/Header/Header';
import Footer from '../../../../Pages/Website/UserHome/Footer/Footer';
import GoBackDashboard from '../GoBackDashboard';
const fileToBase64 = (file) =>
  new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = () => res(reader.result);
    reader.onerror = (e) => rej(e);
    reader.readAsDataURL(file);
  });

export default function ContentEditorPage() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('courseDraft');
    return saved ? JSON.parse(saved) : defaultCourseData;
  });

  const navigate = useNavigate();
  const containerRef = useRef(null);
  const toolbarRef = useRef(null);

  const [toolbarVisible, setToolbarVisible] = useState(false);
  const [toolbarPos, setToolbarPos] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handler = (e) => {
      const msg = e.originalEvent?.message || '';
      if (
        msg.includes('ResizeObserver loop') ||
        msg.includes('undelivered notifications') ||
        msg.includes('ResizeObserver loop limit exceeded')
      ) {
        e.stopImmediatePropagation();
        return false;
      }
    };
    $(window).on('error', handler);
    return () => {
      $(window).off('error', handler);
    };
  }, []);

  const updateMeta = (field, value) =>
    setData((d) => ({ ...d, meta: { ...d.meta, [field]: value } }));

  const updateSection = (idx, field, value) =>
    setData((d) => {
      const sections = [...d.sections];
      sections[idx] = { ...sections[idx], [field]: value };
      return { ...d, sections };
    });

  const addParagraph = (secIdx) =>
    setData((d) => {
      const sections = d.sections.map((s, i) => {
        if (i !== secIdx) return s;
        const paragraphs = Array.isArray(s.paragraphs) ? [...s.paragraphs] : [];
        paragraphs.push('');
        return { ...s, paragraphs };
      });
      return { ...d, sections };
    });

  const addSection = () =>
    setData((d) => ({
      ...d,
      sections: [
        ...d.sections,
        {
          id: `sec-${Date.now()}`,
          header: 'New Topic',
          subtitle: '',
          paragraphs: [''],
          images: [],
        },
      ],
    }));

  const removeParagraph = (secIdx, pIdx) =>
    setData((d) => {
      const sections = d.sections.map((s, i) => {
        if (i !== secIdx) return s;
        const paragraphs = s.paragraphs.filter((_, j) => j !== pIdx);
        return { ...s, paragraphs };
      });
      return { ...d, sections };
    });

  const setParagraph = (secIdx, pIdx, html) =>
    setData((d) => {
      const sections = d.sections.map((s, i) => {
        if (i !== secIdx) return s;
        const paragraphs = [...s.paragraphs];
        paragraphs[pIdx] = html;
        return { ...s, paragraphs };
      });
      return { ...d, sections };
    });

  const uploadImageForSection = async (e, secIdx) => {
    const file = e.target.files[0];
    if (!file) return;
    const b64 = await fileToBase64(file);
    setData((d) => {
      const sections = d.sections.map((s, i) => {
        if (i !== secIdx) return s;
        return { ...s, images: [...(s.images || []), b64] };
      });
      return { ...d, sections };
    });
  };

  const uploadMetaImage = async (e, field) => {
    const file = e.target.files[0];
    if (!file) return;
    const b64 = await fileToBase64(file);
    updateMeta(field, b64);
  };

  const saveDraft = () => {
    localStorage.setItem('courseDraft', JSON.stringify(data));
    Swal.fire({
      icon: 'success',
      title: 'Saved',
      text: 'Draft saved to localStorage',
      timer: 1400,
      showConfirmButton: false,
    });
  };

  const preview = () => {
    localStorage.setItem('coursePreview', JSON.stringify(data));
    Swal.fire({
      icon: 'info',
      title: 'Opening preview',
      timer: 700,
      showConfirmButton: false,
    }).then(() => navigate('/content/preview'));
  };

  // Floating toolbar logic (selection-based)
  useEffect(() => {
    const onMouseUp = (e) => {
      const sel = window.getSelection();
      if (!sel) return hideToolbar();
      if (sel.isCollapsed) {
        hideToolbar();
        return;
      }
      const range = sel.getRangeAt(0);
      const common = range.commonAncestorContainer;
      if (!containerRef.current.contains(common)) {
        hideToolbar();
        return;
      }
      const rect = range.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) {
        hideToolbar();
        return;
      }
      const top = rect.top + window.scrollY - 44;
      const left = rect.left + window.scrollX + rect.width / 2;
      setToolbarPos({ top, left });
      setToolbarVisible(true);
    };

    const onKeyUp = () => {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed) {
        hideToolbar();
        return;
      }
      const range = sel.getRangeAt(0);
      const common = range.commonAncestorContainer;
      if (!containerRef.current.contains(common)) {
        hideToolbar();
        return;
      }
      const rect = range.getBoundingClientRect();
      const top = rect.top + window.scrollY - 44;
      const left = rect.left + window.scrollX + rect.width / 2;
      setToolbarPos({ top, left });
      setToolbarVisible(true);
    };

    const onScrollOrClickOutside = (e) => {
      const sel = window.getSelection();
      if (sel && !sel.isCollapsed) return;
      const toolbarEl = toolbarRef.current;
      if (toolbarEl && toolbarEl.contains(e.target)) return;
      hideToolbar();
    };

    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('keyup', onKeyUp);
    document.addEventListener('mousedown', onScrollOrClickOutside);
    window.addEventListener('scroll', hideToolbar);

    return () => {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('keyup', onKeyUp);
      document.removeEventListener('mousedown', onScrollOrClickOutside);
      window.removeEventListener('scroll', hideToolbar);
    };
  }, []);

  function hideToolbar() {
    setToolbarVisible(false);
  }

  const exec = (command, value = null) => {
    document.execCommand(command, false, value);
    setTimeout(() => {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed) hideToolbar();
    }, 50);
  };

  const insertLink = async () => {
    const { value: url } = await Swal.fire({
      title: 'Insert link',
      input: 'url',
      inputLabel: 'URL',
      inputPlaceholder: 'https://example.com',
      showCancelButton: true,
    });
    if (url) {
      exec('createLink', url);
    }
  };

  const setFontSize = (sizePx) => {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed) return;
    const range = sel.getRangeAt(0);
    const wrapper = document.createElement('span');
    wrapper.style.fontSize = sizePx;
    try {
      wrapper.appendChild(range.extractContents());
      range.insertNode(wrapper);
      sel.removeAllRanges();
      const newRange = document.createRange();
      newRange.selectNodeContents(wrapper);
      sel.addRange(newRange);
    } catch (err) {
      console.error(err);
    }
  };

  const clearFormatting = () => {
    exec('removeFormat');
  };

  return (
    <div className='Custom__body--bg'>
      <Header />
      <ThemeSwitcher />
      <div className='container py-4 ' ref={containerRef}>
        <h2 className='mb-4 text-center fw-bold'>
          <i className='fa-solid fa-file-lines me-2 main-color'></i>Editor —
          Create / Edit Course Content
        </h2>

        {/* Metadata */}
        <div className='card mb-4 shadow-sm secondary-bg primary-text'>
          <div className='card-header custom--faq__header fw-semibold fs-5'>
            <i className='fa-solid fa-info-circle me-2 main-color'></i> Course
            Metadata
          </div>
          <div className='card-body secondary-bg'>
            <div className='mb-3'>
              <label className='form-label'>Course Title</label>
              <input
                className='form-control focus-bg-transparent'
                value={data.meta.courseTitle}
                onChange={(e) => updateMeta('courseTitle', e.target.value)}
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Course Description</label>
              <textarea
                className='form-control focus-bg-transparent'
                rows={2}
                value={data.meta.courseDescription}
                onChange={(e) =>
                  updateMeta('courseDescription', e.target.value)
                }
              />
              <small className='secondary-text'>
                Select text in any paragraph to reveal formatting toolbar.
              </small>
            </div>

            <div className='row g-3'>
              <div className='col-md-4'>
                <label className='form-label'>Duration</label>
                <input
                  className='form-control focus-bg-transparent'
                  value={data.meta.duration}
                  onChange={(e) => updateMeta('duration', e.target.value)}
                />
              </div>

              <div className='col-md-4'>
                <label className='form-label'>Course Image</label>
                <input
                  type='file'
                  className='form-control focus-bg-transparent'
                  accept='image/*'
                  onChange={(e) => uploadMetaImage(e, 'courseImage')}
                />
                {data.meta.courseImage && (
                  <img
                    src={data.meta.courseImage}
                    className='img-thumbnail mt-2'
                    alt='course'
                    style={{ maxWidth: 160, height: 60 }}
                  />
                )}
              </div>

              <div className='col-md-4'>
                <label className='form-label'>Background Image</label>
                <input
                  type='file'
                  className='form-control focus-bg-transparent'
                  accept='image/*'
                  onChange={(e) => uploadMetaImage(e, 'background')}
                />
                {data.meta.background && (
                  <img
                    src={data.meta.background}
                    className='img-thumbnail mt-2'
                    alt='bg'
                    style={{ maxWidth: 160, height: 60 }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sections header controls */}
        <div className='d-flex justify-content-between align-items-center mb-3'>
          <h3>
            <i className='fa-solid fa-list-check me-2 main-color'></i> Sections
          </h3>
          <div>
            <button
              className='btn-main-color2 btn-main-color-sm me-2'
              onClick={addSection}>
              <i className='fa-solid fa-plus me-1'></i> Add Section
            </button>
            <button
              className='btn-main-color btn-main-color-sm me-2'
              onClick={saveDraft}>
              <i className='fa-solid fa-save me-1'></i> Save
            </button>
            <button
              className='btn-main-color btn-main-color-sm'
              onClick={() => {
                Swal.fire(
                  'Info',
                  'Select text in any paragraph to reveal formatting toolbar. Use the toolbar to apply formatting like bold, italics, lists, links, and more.',
                  'info'
                );
              }}>
              Help
            </button>
          </div>
        </div>

        {/* Sections using <dl>/<dt>/<dd> style with jQuery slideToggle */}
        <dl className='editor-sections'>
          {data.sections.map((sec, sIdx) => (
            <React.Fragment key={sec.id}>
              <dt
                className='fw-semibold custom--faq__header p-3 rounded mb-2 d-flex justify-content-between align-items-center'
                style={{ cursor: 'pointer' }}
                onClick={(e) => {
                  const dd = $(e.currentTarget).next('dd');
                  // toggle the dd & rotate chevron class (if you add rotate styles)
                  dd.slideToggle(250);
                }}>
                <span>
                  <i className='fa-solid fa-layer-group me-2 main-color'></i>
                  {sec.header || `Section ${sIdx + 1}`}
                </span>
                <i className='fa-solid fa-chevron-down main-color'></i>
              </dt>

              <dd
                className='rounded p-3 mb-3 secondary-bg border-main-color'
                style={{ display: 'none' }}>
                <div className='mb-3 row'>
                  <div className='col-md-10'>
                    <label className='form-label'>Header</label>
                    <input
                      className='form-control focus-bg-transparent'
                      value={sec.header}
                      onChange={(e) =>
                        updateSection(sIdx, 'header', e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className='mb-3 row'>
                  <div className='col-md-10'>
                    <label className='form-label'>Subtitle</label>
                    <input
                      className='form-control focus-bg-transparent'
                      value={sec.subtitle}
                      onChange={(e) =>
                        updateSection(sIdx, 'subtitle', e.target.value)
                      }
                    />
                  </div>
                </div>

                <hr />

                <h5>Paragraphs</h5>
                {sec.paragraphs?.length > 0 ? (
                  sec.paragraphs.map((p, pIdx) => (
                    <div key={pIdx} className='mb-3'>
                      <div className='d-flex justify-content-between mb-1'>
                        <small className='secondary-text'>
                          Paragraph {pIdx + 1}
                        </small>
                        <div>
                          <button
                            className='btn-main-color btn-main-color-sm me-1'
                            onClick={() => {
                              const paraEl = document.querySelector(
                                `#sec-${sIdx}-p-${pIdx}`
                              );
                              if (paraEl) {
                                const range = document.createRange();
                                range.selectNodeContents(paraEl);
                                const sel = window.getSelection();
                                sel.removeAllRanges();
                                sel.addRange(range);
                                const rect = range.getBoundingClientRect();
                                setToolbarPos({
                                  top: rect.top + window.scrollY - 44,
                                  left:
                                    rect.left + window.scrollX + rect.width / 2,
                                });
                                setToolbarVisible(true);
                              }
                            }}>
                            <i className='fa-solid fa-highlighter me-1'></i>
                            Format
                          </button>
                          <button
                            className='btn btn-sm btn-danger border-danger'
                            onClick={() => removeParagraph(sIdx, pIdx)}>
                            <i className='fa-solid fa-trash-can me-1'></i>Remove
                          </button>
                        </div>
                      </div>

                      <div
                        id={`sec-${sIdx}-p-${pIdx}`}
                        className='form-control focus-bg-transparent'
                        contentEditable
                        suppressContentEditableWarning
                        onInput={(e) =>
                          setParagraph(sIdx, pIdx, e.currentTarget.innerHTML)
                        }
                        dangerouslySetInnerHTML={{ __html: p }}
                        style={{ minHeight: 90 }}
                      />
                    </div>
                  ))
                ) : (
                  <div className='secondary-text mb-2'>No paragraphs yet</div>
                )}

                <div className='mt-2'>
                  <button
                    className='btn-main-color btn-main-color-sm me-2'
                    onClick={() => addParagraph(sIdx)}>
                    <i className='fa-solid fa-plus me-1'></i>Add paragraph
                  </button>

                  <div className='mt-3'>
                    <label className='form-label'>Images</label>
                    <input
                      type='file'
                      className='form-control focus-bg-transparent mb-2'
                      accept='image/*'
                      onChange={(e) => uploadImageForSection(e, sIdx)}
                    />
                    <div className='d-flex gap-2 flex-wrap'>
                      {sec.images?.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          className='img-thumbnail'
                          alt=''
                          style={{ width: 120 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </dd>
            </React.Fragment>
          ))}
        </dl>

        {/* Labs Link */}
        <div className='card my-4 shadow-sm secondary-bg primary-text'>
          <div className='card-header custom--faq__header  fw-semibold'>
            <i className='fa-solid fa-flask me-2 main-color'></i> Labs Link
          </div>
          <div className='card-body secondary-bg'>
            <input
              className='form-control focus-bg-transparent'
              value={data.labsLink}
              onChange={(e) =>
                setData((d) => ({ ...d, labsLink: e.target.value }))
              }
              placeholder='Enter labs link...'
            />
          </div>
        </div>

        {/* Actions */}
        <div className='text-center mb-5'>
          <button className='btn-main-color2 me-2' onClick={saveDraft}>
            <i className='fa-solid fa-save me-1'></i> Save Draft
          </button>
          <button className='btn-main-color me-2' onClick={preview}>
            <i className='fa-solid fa-eye me-1'></i> Preview
          </button>
          <GoBackDashboard />
        </div>

        {/* Floating toolbar */}
        {toolbarVisible && (
          <div
            ref={toolbarRef}
            className='card shadow-sm'
            style={{
              position: 'absolute',
              top: toolbarPos.top,
              left: toolbarPos.left,
              transform: 'translate(-50%, -100%)',
              zIndex: 9999,
              padding: '6px 8px',
              display: 'flex',
              flexDirection: 'row',
              gap: 6,
              alignItems: 'center',
            }}>
            <button
              className='btn btn-sm btn-light'
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => exec('bold')}>
              <i className='fa-solid fa-bold'></i>
            </button>
            <button
              className='btn btn-sm btn-light'
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => exec('italic')}>
              <i className='fa-solid fa-italic'></i>
            </button>
            <button
              className='btn btn-sm btn-light'
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => exec('underline')}>
              <i className='fa-solid fa-underline'></i>
            </button>
            <button
              className='btn btn-sm btn-light'
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => exec('strikeThrough')}>
              <i className='fa-solid fa-strikethrough'></i>
            </button>

            <div className='vr' />

            <button
              className='btn btn-sm btn-light'
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => exec('justifyLeft')}>
              <i className='fa-solid fa-align-left'></i>
            </button>
            <button
              className='btn btn-sm btn-light'
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => exec('justifyCenter')}>
              <i className='fa-solid fa-align-center'></i>
            </button>
            <button
              className='btn btn-sm btn-light'
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => exec('justifyRight')}>
              <i className='fa-solid fa-align-right'></i>
            </button>
            <button
              className='btn btn-sm btn-light'
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => exec('justifyFull')}>
              <i className='fa-solid fa-align-justify'></i>
            </button>

            <div className='vr' />

            <button
              className='btn btn-sm btn-light'
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => exec('insertUnorderedList')}>
              <i className='fa-solid fa-list-ul'></i>
            </button>
            <button
              className='btn btn-sm btn-light'
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => exec('insertOrderedList')}>
              <i className='fa-solid fa-list-ol'></i>
            </button>

            <div className='vr' />

            <input
              type='color'
              className='form-control form-control-color p-0'
              title='Text color'
              style={{ width: 36, height: 32 }}
              onChange={(e) => exec('foreColor', e.target.value)}
            />

            <button
              className='btn btn-sm btn-light'
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setFontSize('18px')}>
              <small>A+</small>
            </button>
            <button
              className='btn btn-sm btn-light'
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setFontSize('14px')}>
              <small>A-</small>
            </button>

            <button
              className='btn btn-sm btn-light'
              onMouseDown={(e) => e.preventDefault()}
              onClick={insertLink}>
              <i className='fa-solid fa-link'></i>
            </button>

            <button
              className='btn btn-sm btn-light'
              onMouseDown={(e) => e.preventDefault()}
              onClick={clearFormatting}>
              <i className='fa-solid fa-eraser'></i>
            </button>

            <button
              className='btn btn-sm btn-danger'
              onMouseDown={(e) => e.preventDefault()}
              onClick={hideToolbar}>
              <i className='fa-solid fa-xmark'></i>
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
