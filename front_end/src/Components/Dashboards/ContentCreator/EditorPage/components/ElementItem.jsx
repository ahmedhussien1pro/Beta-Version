import React, { useState } from 'react';
import {
  FaChevronDown,
  FaChevronUp,
  FaTrash,
  FaCopy,
  FaPlus,
  FaCheckCircle,
  FaLink,
  FaUpload,
  FaTimes,
} from 'react-icons/fa';
import RichTextEditor from './RichTextEditor';

const ElementItem = ({
  element,
  index,
  onChange,
  onDelete,
  onMove,
  onDuplicate,
  isFirst,
  isLast,
  imageMap,
  onImageUpload,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const getBadgeClass = (type) => {
    const classMap = {
      text: 'element-card__badge--text',
      title: 'element-card__badge--title',
      subtitle: 'element-card__badge--subtitle',
      image: 'element-card__badge--image',
      code: 'element-card__badge--code',
      terminal: 'element-card__badge--terminal',
      list: 'element-card__badge--list',
      orderedList: 'element-card__badge--list',
      note: 'element-card__badge--note',
      video: 'element-card__badge--video',
      table: 'element-card__badge--table',
    };
    return classMap[type] || '';
  };
  const handleExampleChange = (items, index, lang, value) => {
    const newItems = [...items];
    const trimmedValue = value.trim();
    const otherLang = lang === 'en' ? 'ar' : 'en';
    const otherValue = newItems[index].example?.[otherLang]?.trim() || '';

    // Set to null if both languages are empty
    if (!trimmedValue && !otherValue) {
      newItems[index].example = null;
    } else {
      newItems[index].example = {
        ...newItems[index].example,
        [lang]: trimmedValue,
        [otherLang]: otherValue,
      };
    }

    return newItems;
  };

  const renderFields = () => {
    switch (element.type) {
      case 'text':
      case 'title':
      case 'subtitle':
        return (
          <div className='element-card__row'>
            <div className='element-card__col'>
              <label className='element-card__label'>English</label>
              <RichTextEditor
                value={element.value.en}
                onChange={(value) =>
                  onChange({
                    ...element,
                    value: { ...element.value, en: value },
                  })
                }
              />
            </div>
            <div className='element-card__col'>
              <label className='element-card__label'>Arabic</label>
              <RichTextEditor
                value={element.value.ar}
                onChange={(value) =>
                  onChange({
                    ...element,
                    value: { ...element.value, ar: value },
                  })
                }
                dir='rtl'
              />
            </div>
          </div>
        );

      case 'image':
        return (
          <>
            <div className='element-card__row'>
              <div className='element-card__col'>
                <label className='element-card__label'>Image Key</label>
                <input
                  type='text'
                  className='element-card__input'
                  placeholder='e.g., IntroImage'
                  value={element.srcKey}
                  onChange={(e) =>
                    onChange({ ...element, srcKey: e.target.value })
                  }
                />
              </div>
              <div className='element-card__col'>
                <label className='element-card__label'>Size</label>
                <select
                  className='element-card__select'
                  value={element.size}
                  onChange={(e) =>
                    onChange({ ...element, size: e.target.value })
                  }>
                  <option value='small'>Small</option>
                  <option value='medium'>Medium</option>
                  <option value='large'>Large</option>
                </select>
              </div>
            </div>

            {/* ✅ Image Mode Toggle */}
            <div className='element-card__image-mode'>
              <button
                type='button'
                className={`element-card__mode-btn ${
                  element.imageMode === 'url' ? 'active' : ''
                }`}
                onClick={() =>
                  onChange({ ...element, imageMode: 'url', imageUrl: '' })
                }>
                <FaLink /> Image URL
              </button>
              <button
                type='button'
                className={`element-card__mode-btn ${
                  element.imageMode === 'upload' ? 'active' : ''
                }`}
                onClick={() => onChange({ ...element, imageMode: 'upload' })}>
                <FaUpload /> Upload Image
              </button>
            </div>

            {/* ✅ URL Input Mode */}
            {(!element.imageMode || element.imageMode === 'url') && (
              <div className='element-card__row'>
                <div className='element-card__col element-card__col--full'>
                  <label className='element-card__label'>Image URL</label>
                  <input
                    type='text'
                    className='element-card__input'
                    placeholder='https://example.com/image.jpg'
                    value={element.imageUrl || ''}
                    onChange={(e) =>
                      onChange({ ...element, imageUrl: e.target.value })
                    }
                  />
                </div>
              </div>
            )}

            {/* ✅ Upload Mode */}
            {element.imageMode === 'upload' && (
              <div className='element-card__row'>
                <div className='element-card__col element-card__col--full'>
                  <label className='element-card__label'>Upload Image</label>
                  <label className='element-card__upload-box'>
                    <input
                      type='file'
                      accept='image/jpeg,image/png,image/jpg,image/webp'
                      style={{ display: 'none' }}
                      onChange={(e) => {
                        if (e.target.files[0]) {
                          const file = e.target.files[0];

                          // Validate file type
                          const validTypes = [
                            'image/jpeg',
                            'image/png',
                            'image/jpg',
                            'image/webp',
                          ];
                          if (!validTypes.includes(file.type)) {
                            alert(
                              'Please upload a valid image (JPEG, PNG, WebP)'
                            );
                            return;
                          }

                          // Validate file size (max 5MB)
                          if (file.size > 5 * 1024 * 1024) {
                            alert('Image size should be less than 5MB');
                            return;
                          }

                          // Upload and create preview
                          onImageUpload(element.srcKey, file);
                        }
                      }}
                    />
                    <div className='element-card__upload-content'>
                      <FaUpload className='element-card__upload-icon' />
                      <span>Click to upload or drag and drop</span>
                      <small>PNG, JPG, WEBP (max 5MB)</small>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {/* ✅ Image Preview - For both URL and Upload */}
            {(imageMap[element.srcKey] || element.imageUrl) && (
              <div className='element-card__image-preview'>
                {imageMap[element.srcKey] && (
                  <div className='element-card__alert element-card__alert--success'>
                    <FaCheckCircle />
                    <span>Image uploaded successfully</span>
                  </div>
                )}
                <button
                  type='button'
                  className='element-card__image-remove'
                  onClick={() => {
                    onChange({
                      ...element,
                      imageUrl: '',
                      imageMode: element.imageMode || 'url',
                    });
                    // Clear uploaded image if exists
                    if (imageMap[element.srcKey]) {
                      delete imageMap[element.srcKey];
                    }
                  }}
                  title='Remove image'>
                  <FaTimes />
                </button>
                <img
                  src={imageMap[element.srcKey] || element.imageUrl}
                  alt='Preview'
                  onError={(e) => {
                    e.target.src =
                      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ddd" width="200" height="200"/%3E%3Ctext fill="%23999" font-size="16" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage not found%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
            )}
          </>
        );

      case 'list':
        return (
          <>
            <div className='element-card__row'>
              <div className='element-card__col'>
                <label className='element-card__label element-card__label--optional'>
                  List Title (EN)
                </label>
                <input
                  type='text'
                  className='element-card__input'
                  placeholder='Optional title'
                  value={element.title?.en || ''}
                  onChange={(e) =>
                    onChange({
                      ...element,
                      title: { ...element.title, en: e.target.value },
                    })
                  }
                />
              </div>
              <div className='element-card__col'>
                <label className='element-card__label element-card__label--optional'>
                  List Title (AR)
                </label>
                <input
                  type='text'
                  className='element-card__input'
                  placeholder='عنوان اختياري'
                  dir='rtl'
                  value={element.title?.ar || ''}
                  onChange={(e) =>
                    onChange({
                      ...element,
                      title: { ...element.title, ar: e.target.value },
                    })
                  }
                />
              </div>
            </div>

            <div className='element-card__row'>
              <div className='element-card__col'>
                <label className='element-card__label'>Items (EN)</label>
                {element.items.en.map((item, i) => (
                  <div key={i} className='element-card__input-group'>
                    <input
                      type='text'
                      className='element-card__input'
                      placeholder={`Item ${i + 1}`}
                      value={item}
                      onChange={(e) => {
                        const newItems = [...element.items.en];
                        newItems[i] = e.target.value;
                        onChange({
                          ...element,
                          items: { ...element.items, en: newItems },
                        });
                      }}
                    />
                    <button
                      className='element-card__btn element-card__btn--danger element-card__btn--sm'
                      onClick={() => {
                        onChange({
                          ...element,
                          items: {
                            en: element.items.en.filter((_, idx) => idx !== i),
                            ar: element.items.ar.filter((_, idx) => idx !== i),
                          },
                        });
                      }}
                      disabled={element.items.en.length === 1}>
                      <FaTrash />
                    </button>
                  </div>
                ))}
                <button
                  className='element-card__btn element-card__btn--secondary element-card__btn--block'
                  onClick={() =>
                    onChange({
                      ...element,
                      items: {
                        en: [...element.items.en, ''],
                        ar: [...element.items.ar, ''],
                      },
                    })
                  }>
                  <FaPlus /> Add Item
                </button>
              </div>

              <div className='element-card__col'>
                <label className='element-card__label'>Items (AR)</label>
                {element.items.ar.map((item, i) => (
                  <div key={i} className='element-card__input-group'>
                    <input
                      type='text'
                      className='element-card__input'
                      placeholder={`العنصر ${i + 1}`}
                      dir='rtl'
                      value={item}
                      onChange={(e) => {
                        const newItems = [...element.items.ar];
                        newItems[i] = e.target.value;
                        onChange({
                          ...element,
                          items: { ...element.items, ar: newItems },
                        });
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        );

      case 'code':
        return (
          <>
            <div className='element-card__row'>
              <div className='element-card__col'>
                <label className='element-card__label'>
                  Programming Language
                </label>
                <select
                  className='element-card__select'
                  value={element.language}
                  onChange={(e) =>
                    onChange({ ...element, language: e.target.value })
                  }>
                  <option value='javascript'>JavaScript</option>
                  <option value='python'>Python</option>
                  <option value='java'>Java</option>
                  <option value='html'>HTML</option>
                  <option value='css'>CSS</option>
                  <option value='bash'>Bash</option>
                  <option value='sql'>SQL</option>
                  <option value='json'>JSON</option>
                  <option value='php'>PHP</option>
                  <option value='cpp'>C++</option>
                </select>
              </div>
            </div>
            <div className='element-card__row'>
              <div className='element-card__col element-card__col--full'>
                <label className='element-card__label'>Code</label>
                <textarea
                  className='element-card__textarea'
                  rows='10'
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-sm)',
                  }}
                  placeholder='Enter code here...'
                  value={element.value}
                  onChange={(e) =>
                    onChange({ ...element, value: e.target.value })
                  }
                />
              </div>
            </div>
          </>
        );

      case 'terminal':
        return (
          <>
            <div className='element-card__row'>
              <div className='element-card__col'>
                <label className='element-card__label'>Label (EN)</label>
                <input
                  type='text'
                  className='element-card__input'
                  placeholder='Terminal'
                  value={element.label.en}
                  onChange={(e) =>
                    onChange({
                      ...element,
                      label: { ...element.label, en: e.target.value },
                    })
                  }
                />
              </div>
              <div className='element-card__col'>
                <label className='element-card__label'>Label (AR)</label>
                <input
                  type='text'
                  className='element-card__input'
                  placeholder='تيرمينال'
                  dir='rtl'
                  value={element.label.ar}
                  onChange={(e) =>
                    onChange({
                      ...element,
                      label: { ...element.label, ar: e.target.value },
                    })
                  }
                />
              </div>
            </div>
            <div className='element-card__row'>
              <div className='element-card__col element-card__col--full'>
                <label className='element-card__label'>Command</label>
                <textarea
                  className='element-card__textarea'
                  rows='4'
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-sm)',
                  }}
                  placeholder='Enter terminal command...'
                  value={element.value}
                  onChange={(e) =>
                    onChange({ ...element, value: e.target.value })
                  }
                />
              </div>
            </div>
          </>
        );

      case 'note':
        return (
          <>
            <div className='element-card__row'>
              <div className='element-card__col'>
                <label className='element-card__label'>Note Type</label>
                <select
                  className='element-card__select'
                  value={element.noteType || 'info'}
                  onChange={(e) =>
                    onChange({ ...element, noteType: e.target.value })
                  }>
                  <option value='info'>Info (Blue)</option>
                  <option value='warning'>Warning (Orange)</option>
                  <option value='success'>Success (Green)</option>
                  <option value='danger'>Danger (Red)</option>
                </select>
              </div>
              <div className='element-card__col'>
                <label className='element-card__label element-card__label--optional'>
                  Link
                </label>
                <input
                  type='text'
                  className='element-card__input'
                  placeholder='https://...'
                  value={element.link || ''}
                  onChange={(e) =>
                    onChange({ ...element, link: e.target.value })
                  }
                />
              </div>
            </div>
            <div className='element-card__row'>
              <div className='element-card__col'>
                <label className='element-card__label'>Note Text (EN)</label>
                <textarea
                  className='element-card__textarea'
                  rows='3'
                  placeholder='Note text in English'
                  value={element.value.en}
                  onChange={(e) =>
                    onChange({
                      ...element,
                      value: { ...element.value, en: e.target.value },
                    })
                  }
                />
              </div>
              <div className='element-card__col'>
                <label className='element-card__label'>Note Text (AR)</label>
                <textarea
                  className='element-card__textarea'
                  rows='3'
                  placeholder='نص الملاحظة بالعربية'
                  dir='rtl'
                  value={element.value.ar}
                  onChange={(e) =>
                    onChange({
                      ...element,
                      value: { ...element.value, ar: e.target.value },
                    })
                  }
                />
              </div>
              <div className='element-card__switch'>
                <input
                  type='checkbox'
                  id={`isLab-${element.id}`}
                  checked={element.isLab || false}
                  onChange={(e) =>
                    onChange({ ...element, isLab: e.target.checked })
                  }
                />
                <label htmlFor={`isLab-${element.id}`}>
                  This is a Lab Link
                </label>
              </div>
            </div>
          </>
        );

      case 'hr':
        return (
          <div className='element-card__empty'>
            <div className='element-card__empty-icon'>━━━</div>
            <p>Horizontal Divider - No configuration needed</p>
          </div>
        );
      case 'orderedList':
        return (
          <>
            <div className='element-card__row'>
              <div className='element-card__col'>
                <label className='element-card__label'>List Title (EN)</label>
                <input
                  type='text'
                  className='element-card__input'
                  placeholder='List title'
                  value={element.title?.en || ''}
                  onChange={(e) =>
                    onChange({
                      ...element,
                      title: { ...element.title, en: e.target.value },
                    })
                  }
                />
              </div>
              <div className='element-card__col'>
                <label className='element-card__label'>List Title (AR)</label>
                <input
                  type='text'
                  className='element-card__input'
                  placeholder='عنوان القائمة'
                  dir='rtl'
                  value={element.title?.ar || ''}
                  onChange={(e) =>
                    onChange({
                      ...element,
                      title: { ...element.title, ar: e.target.value },
                    })
                  }
                />
              </div>
            </div>

            <div className='element-card__row'>
              <div className='element-card__col element-card__col--full'>
                <label className='element-card__label'>Items</label>
                {element.items.map((item, i) => (
                  <div key={i} className='element-card__sub-item'>
                    <div className='element-card__sub-item-header'>
                      <span className='element-card__sub-item-title'>
                        Item {i + 1}
                      </span>
                      <div className='element-card__sub-item-actions'>
                        <button
                          className='element-card__btn element-card__btn--danger element-card__btn--sm'
                          onClick={() => {
                            const newItems = element.items.filter(
                              (_, idx) => idx !== i
                            );
                            onChange({ ...element, items: newItems });
                          }}>
                          <FaTrash /> Remove
                        </button>
                      </div>
                    </div>

                    <div className='element-card__row'>
                      <div className='element-card__col'>
                        <label className='element-card__label'>
                          Subtitle (EN)
                        </label>
                        <input
                          type='text'
                          className='element-card__input'
                          placeholder='Subtitle in English'
                          value={item.subtitle.en}
                          onChange={(e) => {
                            const newItems = [...element.items];
                            newItems[i].subtitle.en = e.target.value;
                            onChange({ ...element, items: newItems });
                          }}
                        />
                      </div>
                      <div className='element-card__col'>
                        <label className='element-card__label'>
                          Subtitle (AR)
                        </label>
                        <input
                          type='text'
                          className='element-card__input'
                          placeholder='العنوان الفرعي بالعربية'
                          dir='rtl'
                          value={item.subtitle.ar}
                          onChange={(e) => {
                            const newItems = [...element.items];
                            newItems[i].subtitle.ar = e.target.value;
                            onChange({ ...element, items: newItems });
                          }}
                        />
                      </div>
                    </div>

                    <div className='element-card__row'>
                      <div className='element-card__col'>
                        <label className='element-card__label'>Text (EN)</label>
                        <textarea
                          className='element-card__textarea'
                          rows='3'
                          placeholder='Text in English'
                          value={item.text.en}
                          onChange={(e) => {
                            const newItems = [...element.items];
                            newItems[i].text.en = e.target.value;
                            onChange({ ...element, items: newItems });
                          }}
                        />
                      </div>
                      <div className='element-card__col'>
                        <label className='element-card__label'>Text (AR)</label>
                        <textarea
                          className='element-card__textarea'
                          rows='3'
                          placeholder='النص بالعربية'
                          dir='rtl'
                          value={item.text.ar}
                          onChange={(e) => {
                            const newItems = [...element.items];
                            newItems[i].text.ar = e.target.value;
                            onChange({ ...element, items: newItems });
                          }}
                        />
                      </div>
                    </div>

                    {/* ✅ IMPROVED EXAMPLE SECTION */}
                    <div className='element-card__row'>
                      <div className='element-card__col'>
                        <label className='element-card__label element-card__label--optional'>
                          Example (EN)
                        </label>
                        <input
                          type='text'
                          className='element-card__input'
                          placeholder='Example (optional)'
                          value={item.example?.en || ''}
                          onChange={(e) => {
                            const newItems = handleExampleChange(
                              element.items,
                              i,
                              'en',
                              e.target.value
                            );
                            onChange({ ...element, items: newItems });
                          }}
                        />
                      </div>
                      <div className='element-card__col'>
                        <label className='element-card__label element-card__label--optional'>
                          Example (AR)
                        </label>
                        <input
                          type='text'
                          className='element-card__input'
                          placeholder='مثال (اختياري)'
                          dir='rtl'
                          value={item.example?.ar || ''}
                          onChange={(e) => {
                            const newItems = handleExampleChange(
                              element.items,
                              i,
                              'ar',
                              e.target.value
                            );
                            onChange({ ...element, items: newItems });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  className='element-card__btn element-card__btn--primary element-card__btn--block'
                  onClick={() => {
                    const newItem = {
                      subtitle: { en: '', ar: '' },
                      text: { en: '', ar: '' },
                      example: null, // ✅ Start with null
                    };
                    onChange({
                      ...element,
                      items: [...element.items, newItem],
                    });
                  }}>
                  <FaPlus /> Add Item
                </button>
              </div>
            </div>
          </>
        );
      case 'video':
        return (
          <>
            <div className='element-card__row'>
              <div className='element-card__col element-card__col--full'>
                <label className='element-card__label'>Video URL</label>
                <input
                  type='text'
                  className='element-card__input'
                  placeholder='https://youtube.com/embed/... or https://vimeo.com/...'
                  value={element.url}
                  onChange={(e) =>
                    onChange({ ...element, url: e.target.value })
                  }
                />
                <div
                  className='element-card__alert element-card__alert--info'
                  style={{ marginTop: 'var(--space-2)' }}>
                  <span>Use embed URL, not regular watch URL</span>
                </div>
              </div>
            </div>
            <div className='element-card__row'>
              <div className='element-card__col'>
                <label className='element-card__label element-card__label--optional'>
                  Caption (EN)
                </label>
                <input
                  type='text'
                  className='element-card__input'
                  placeholder='Video caption'
                  value={element.caption?.en || ''}
                  onChange={(e) =>
                    onChange({
                      ...element,
                      caption: { ...element.caption, en: e.target.value },
                    })
                  }
                />
              </div>
              <div className='element-card__col'>
                <label className='element-card__label element-card__label--optional'>
                  Caption (AR)
                </label>
                <input
                  type='text'
                  className='element-card__input'
                  placeholder='عنوان الفيديو'
                  dir='rtl'
                  value={element.caption?.ar || ''}
                  onChange={(e) =>
                    onChange({
                      ...element,
                      caption: { ...element.caption, ar: e.target.value },
                    })
                  }
                />
              </div>
            </div>
            {element.url && (
              <div className='element-card__image-preview'>
                <iframe
                  src={element.url}
                  width='100%'
                  height='315'
                  frameBorder='0'
                  title='image preview'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  style={{ borderRadius: 'var(--radius-md)' }}
                />
              </div>
            )}
          </>
        );

      case 'table':
        return (
          <>
            <div className='element-card__row'>
              <div className='element-card__col'>
                <label className='element-card__label element-card__label--optional'>
                  Table Title (EN)
                </label>
                <input
                  type='text'
                  className='element-card__input'
                  placeholder='Table title'
                  value={element.title?.en || ''}
                  onChange={(e) =>
                    onChange({
                      ...element,
                      title: { ...element.title, en: e.target.value },
                    })
                  }
                />
              </div>
              <div className='element-card__col'>
                <label className='element-card__label element-card__label--optional'>
                  Table Title (AR)
                </label>
                <input
                  type='text'
                  className='element-card__input'
                  placeholder='عنوان الجدول'
                  dir='rtl'
                  value={element.title?.ar || ''}
                  onChange={(e) =>
                    onChange({
                      ...element,
                      title: { ...element.title, ar: e.target.value },
                    })
                  }
                />
              </div>
            </div>

            {/* Headers Management */}
            <div className='element-card__row'>
              <div className='element-card__col element-card__col--full'>
                <label className='element-card__label'>
                  Table Headers (EN)
                </label>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'var(--space-2)',
                    marginBottom: 'var(--space-3)',
                  }}>
                  {element.headers.en.map((header, i) => (
                    <div
                      key={i}
                      className='element-card__input-group'
                      style={{ flex: '1 1 200px', maxWidth: '250px' }}>
                      <input
                        type='text'
                        className='element-card__input'
                        placeholder={`Header ${i + 1}`}
                        value={header}
                        onChange={(e) => {
                          const newHeaders = { ...element.headers };
                          newHeaders.en[i] = e.target.value;
                          onChange({ ...element, headers: newHeaders });
                        }}
                      />
                      <button
                        className='element-card__btn element-card__btn--danger element-card__btn--sm'
                        onClick={() => {
                          onChange({
                            ...element,
                            headers: {
                              en: element.headers.en.filter(
                                (_, idx) => idx !== i
                              ),
                              ar: element.headers.ar.filter(
                                (_, idx) => idx !== i
                              ),
                            },
                            rows: element.rows.map((row) => ({
                              en: row.en.filter((_, idx) => idx !== i),
                              ar: row.ar.filter((_, idx) => idx !== i),
                            })),
                          });
                        }}
                        disabled={element.headers.en.length === 1}>
                        <FaTrash />
                      </button>
                    </div>
                  ))}
                  <button
                    className='element-card__btn element-card__btn--secondary element-card__btn--sm'
                    onClick={() => {
                      onChange({
                        ...element,
                        headers: {
                          en: [...element.headers.en, ''],
                          ar: [...element.headers.ar, ''],
                        },
                        rows: element.rows.map((row) => ({
                          en: [...row.en, ''],
                          ar: [...row.ar, ''],
                        })),
                      });
                    }}>
                    <FaPlus /> Add Column
                  </button>
                </div>

                {/* Arabic Headers */}
                <label className='element-card__label'>
                  Table Headers (AR)
                </label>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'var(--space-2)',
                  }}>
                  {element.headers.ar.map((header, i) => (
                    <input
                      key={i}
                      type='text'
                      className='element-card__input'
                      placeholder={`عنوان ${i + 1}`}
                      dir='rtl'
                      value={header}
                      onChange={(e) => {
                        const newHeaders = { ...element.headers };
                        newHeaders.ar[i] = e.target.value;
                        onChange({ ...element, headers: newHeaders });
                      }}
                      style={{ flex: '1 1 200px', maxWidth: '250px' }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Rows Management */}
            <div className='element-card__row'>
              <div className='element-card__col element-card__col--full'>
                <label className='element-card__label'>Table Rows (EN)</label>
                {element.rows.map((row, rowIdx) => (
                  <div key={rowIdx} className='element-card__sub-item'>
                    <div className='element-card__sub-item-header'>
                      <span className='element-card__sub-item-title'>
                        Row {rowIdx + 1}
                      </span>
                      <button
                        className='element-card__btn element-card__btn--danger element-card__btn--sm'
                        onClick={() => {
                          onChange({
                            ...element,
                            rows: element.rows.filter(
                              (_, idx) => idx !== rowIdx
                            ),
                          });
                        }}>
                        <FaTrash /> Remove Row
                      </button>
                    </div>
                    <div className='element-card__row'>
                      {row.en.map((cell, cellIdx) => (
                        <div key={cellIdx} className='element-card__col'>
                          <label
                            className='element-card__label'
                            style={{ fontSize: 'var(--text-xs)' }}>
                            {element.headers.en[cellIdx] ||
                              `Column ${cellIdx + 1}`}
                          </label>
                          <input
                            type='text'
                            className='element-card__input'
                            placeholder={element.headers.en[cellIdx]}
                            value={cell}
                            onChange={(e) => {
                              const newRows = [...element.rows];
                              newRows[rowIdx].en[cellIdx] = e.target.value;
                              onChange({ ...element, rows: newRows });
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className='element-card__row'>
                      {row.ar.map((cell, cellIdx) => (
                        <div key={cellIdx} className='element-card__col'>
                          <label
                            className='element-card__label'
                            style={{ fontSize: 'var(--text-xs)' }}>
                            {element.headers.ar[cellIdx] ||
                              `عمود ${cellIdx + 1}`}
                          </label>
                          <input
                            type='text'
                            className='element-card__input'
                            placeholder={element.headers.ar[cellIdx]}
                            dir='rtl'
                            value={cell}
                            onChange={(e) => {
                              const newRows = [...element.rows];
                              newRows[rowIdx].ar[cellIdx] = e.target.value;
                              onChange({ ...element, rows: newRows });
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <button
                  className='element-card__btn element-card__btn--primary element-card__btn--block'
                  onClick={() => {
                    const newRow = {
                      en: element.headers.en.map(() => ''),
                      ar: element.headers.ar.map(() => ''),
                    };
                    onChange({ ...element, rows: [...element.rows, newRow] });
                  }}>
                  <FaPlus /> Add Row
                </button>
              </div>
            </div>
          </>
        );

      default:
        return (
          <div className='element-card__alert element-card__alert--info'>
            <span>Element type "{element.type}" - Fields coming soon...</span>
          </div>
        );
    }
  };

  return (
    <div
      className={`element-card ${collapsed ? 'element-card--collapsed' : ''}`}>
      {/* Header */}
      <div
        className='element-card__header'
        onClick={() => setCollapsed(!collapsed)}>
        <div className='element-card__header-left'>
          <div className='element-card__toggle'>
            <FaChevronDown className='element-card__toggle-icon' />
          </div>
          <span
            className={`element-card__badge ${getBadgeClass(element.type)}`}>
            {element.type}
          </span>
          <span className='element-card__number'>Element #{index + 1}</span>
        </div>

        <div
          className='element-card__header-right'
          onClick={(e) => e.stopPropagation()}>
          <button
            className='element-card__action'
            onClick={() => onMove(index, 'up')}
            disabled={isFirst}
            title='Move Up'>
            <FaChevronUp />
          </button>
          <button
            className='element-card__action'
            onClick={() => onMove(index, 'down')}
            disabled={isLast}
            title='Move Down'>
            <FaChevronDown />
          </button>
          <button
            className='element-card__action element-card__action--copy'
            onClick={onDuplicate}
            title='Duplicate'>
            <FaCopy />
          </button>
          <button
            className='element-card__action element-card__action--delete'
            onClick={onDelete}
            title='Delete'>
            <FaTrash />
          </button>
        </div>
      </div>

      {/* Body */}
      {!collapsed && <div className='element-card__body'>{renderFields()}</div>}
    </div>
  );
};

export default ElementItem;
