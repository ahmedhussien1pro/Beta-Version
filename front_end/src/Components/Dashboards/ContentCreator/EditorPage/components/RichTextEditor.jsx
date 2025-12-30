// import React, { useRef, useState } from 'react';

// import {
//   FaBold,
//   FaItalic,
//   FaUnderline,
//   FaStrikethrough,
//   FaLink,
//   FaPalette,
//   FaCode,
// } from 'react-icons/fa';
import React, { useRef } from 'react';
import Swal from 'sweetalert2';

const RichTextEditor = ({ value, onChange, dir = 'ltr' }) => {
  const textareaRef = useRef(null);
  // const [activeFormats, setActiveFormats] = useState([]);

  const insertTag = (startTag, endTag) => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);

    if (selectedText) {
      const before = value.substring(0, start);
      const after = value.substring(end);
      const newValue = `${before}${startTag}${selectedText}${endTag}${after}`;
      onChange(newValue);

      setTimeout(() => {
        textarea.focus();
        textarea.selectionStart = start + startTag.length;
        textarea.selectionEnd = start + startTag.length + selectedText.length;
      }, 0);
    } else {
      // If no selection, insert tags at cursor
      const before = value.substring(0, start);
      const after = value.substring(start);
      const newValue = `${before}${startTag}${endTag}${after}`;
      onChange(newValue);

      setTimeout(() => {
        textarea.focus();
        textarea.selectionStart = start + startTag.length;
        textarea.selectionEnd = start + startTag.length;
      }, 0);
    }
  };

  const handleBold = () => insertTag('<strong>', '</strong>');
  const handleItalic = () => insertTag('<em>', '</em>');
  const handleUnderline = () => insertTag('<u>', '</u>');
  const handleStrike = () => insertTag('<del>', '</del>');
  const handleCode = () => insertTag('<code>', '</code>');

  const handleLink = async () => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);

    const { value: url } = await Swal.fire({
      title: `Insert Link <i class="fa fa-link" style="color: var(--main-color); font-size: 24px;"></i>`,
      input: 'url',
      inputLabel: 'Enter URL',
      inputPlaceholder: 'https://example.com',
      inputValue: 'https://',
      showCancelButton: true,
      confirmButtonText: 'Insert',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#3b82f6',
      cancelButtonColor: '#6b7280',
      inputValidator: (value) => {
        if (!value) {
          return 'Please enter a URL!';
        }
        if (!value.startsWith('http://') && !value.startsWith('https://')) {
          return 'URL must start with http:// or https://';
        }
      },
    });

    if (url) {
      insertTag(`<a href="${url}">`, '</a>');
    }
  };

  const handleColor = (e) => {
    const color = e.target.value;
    insertTag(`<span style="color: ${color}">`, '</span>');
  };

  return (
    <div className='rich-editor'>
      {/* Toolbar */}
      {/* <div className='rich-editor__toolbar'>
        <button
          type='button'
          className='rich-editor__btn'
          onClick={handleBold}
          title='Bold (Ctrl+B)'>
          <FaBold />
        </button>
        <button
          type='button'
          className='rich-editor__btn'
          onClick={handleItalic}
          title='Italic (Ctrl+I)'>
          <FaItalic />
        </button>
        <button
          type='button'
          className='rich-editor__btn'
          onClick={handleUnderline}
          title='Underline (Ctrl+U)'>
          <FaUnderline />
        </button>
        <button
          type='button'
          className='rich-editor__btn'
          onClick={handleStrike}
          title='Strikethrough'>
          <FaStrikethrough />
        </button>

        <div className='rich-editor__divider'></div>

        <button
          type='button'
          className='rich-editor__btn'
          onClick={handleCode}
          title='Inline Code'>
          <FaCode />
        </button>
        <button
          type='button'
          className='rich-editor__btn'
          onClick={handleLink}
          title='Insert Link'>
          <FaLink />
        </button>

        <div className='rich-editor__divider'></div>

        <div className='rich-editor__color-picker'>
          <button type='button' className='rich-editor__btn' title='Text Color'>
            <FaPalette />
          </button>
          <input
            type='color'
            className='rich-editor__color-input'
            onChange={handleColor}
          />
        </div>
      </div> */}

      {/* Content */}
      <textarea
        ref={textareaRef}
        className='rich-editor__content'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder='Type here... Use toolbar to format text'
        dir={dir}
      />
    </div>
  );
};

export default RichTextEditor;
