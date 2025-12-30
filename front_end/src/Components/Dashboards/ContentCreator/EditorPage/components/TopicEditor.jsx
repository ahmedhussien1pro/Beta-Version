import React from 'react';
import {
  FaPlus,
  FaFileAlt,
  FaHeading,
  FaImage,
  FaCode,
  FaTerminal,
  FaListUl,
  FaListOl,
  FaStickyNote,
  FaVideo,
  FaTable,
  FaMinus,
  FaCube,
} from 'react-icons/fa';
import ElementItem from './ElementItem';
import Swal from 'sweetalert2';
const TopicEditor = ({
  topic,
  topicIndex,
  onTopicChange,
  onSaveTopic,
  imageMap,
  onImageUpload,
}) => {
  // Element types configuration
  const elementTypes = [
    { type: 'text', icon: FaFileAlt, label: 'Text' },
    { type: 'title', icon: FaHeading, label: 'Title' },
    { type: 'subtitle', icon: FaHeading, label: 'Subtitle' },
    { type: 'image', icon: FaImage, label: 'Image' },
    { type: 'code', icon: FaCode, label: 'Code' },
    { type: 'terminal', icon: FaTerminal, label: 'Terminal' },
    { type: 'list', icon: FaListUl, label: 'List' },
    { type: 'orderedList', icon: FaListOl, label: 'Ordered List' },
    { type: 'note', icon: FaStickyNote, label: 'Note' },
    { type: 'video', icon: FaVideo, label: 'Video' },
    { type: 'table', icon: FaTable, label: 'Table' },
    { type: 'hr', icon: FaMinus, label: 'Divider' },
  ];

  // Create new element based on type
  const createNewElement = (type) => {
    const baseElement = {
      id: Date.now() + Math.random(),
      type,
    };

    switch (type) {
      case 'text':
      case 'title':
      case 'subtitle':
        return { ...baseElement, value: { en: '', ar: '' } };

      case 'image':
        return { ...baseElement, srcKey: '', size: 'medium' };

      case 'code':
        return { ...baseElement, language: 'javascript', value: '' };

      case 'terminal':
        return {
          ...baseElement,
          label: { en: 'Terminal', ar: 'تيرمينال' },
          value: '',
        };

      case 'list':
        return {
          ...baseElement,
          title: { en: '', ar: '' },
          items: { en: [''], ar: [''] },
        };

      case 'orderedList':
        return {
          ...baseElement,
          title: { en: '', ar: '' },
          items: [
            {
              subtitle: { en: '', ar: '' },
              text: { en: '', ar: '' },
              example: { en: '', ar: '' },
            },
          ],
        };

      case 'note':
        return {
          ...baseElement,
          noteType: 'info',
          value: { en: '', ar: '' },
          link: '',
          isLab: false,
        };

      case 'video':
        return { ...baseElement, url: '', caption: { en: '', ar: '' } };

      case 'table':
        return {
          ...baseElement,
          title: { en: '', ar: '' },
          headers: { en: [''], ar: [''] },
          rows: [{ en: [''], ar: [''] }],
        };

      case 'hr':
        return baseElement;

      default:
        return baseElement;
    }
  };

  // Add element
  const handleAddElement = (type) => {
    const newElement = createNewElement(type);
    onTopicChange({
      ...topic,
      elements: [...topic.elements, newElement],
    });
  };

  // Update element
  const handleElementChange = (index, updatedElement) => {
    const newElements = [...topic.elements];
    newElements[index] = updatedElement;
    onTopicChange({ ...topic, elements: newElements });
  };

  // Delete element
  // Delete element
  const handleDeleteElement = async (index) => {
    const result = await Swal.fire({
      // add FaTrash icon to the title
      title: ` Delete Element? <i class="fa fa-trash" style="color: #ef4444; font-size: 24px;"></i>`,
      text: 'Are you sure you want to delete this element? This cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280',
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      const newElements = topic.elements.filter((_, i) => i !== index);
      onTopicChange({ ...topic, elements: newElements });

      Swal.fire({
        title: 'Deleted!',
        text: 'Element has been deleted successfully.',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  // Move element
  const handleMoveElement = (index, direction) => {
    const newElements = [...topic.elements];
    const newIndex = direction === 'up' ? index - 1 : index + 1;

    if (newIndex >= 0 && newIndex < newElements.length) {
      [newElements[index], newElements[newIndex]] = [
        newElements[newIndex],
        newElements[index],
      ];
      onTopicChange({ ...topic, elements: newElements });
    }
  };

  // Duplicate element
  const handleDuplicateElement = (index) => {
    const elementToDuplicate = topic.elements[index];
    const duplicatedElement = {
      ...JSON.parse(JSON.stringify(elementToDuplicate)),
      id: Date.now() + Math.random(),
    };
    const newElements = [...topic.elements];
    newElements.splice(index + 1, 0, duplicatedElement);
    onTopicChange({ ...topic, elements: newElements });
  };

  return (
    <div className='topic-editor'>
      {/* Header */}
      <div className='topic-editor__header'>
        <div className='topic-editor__header-top'>
          <h2 className='topic-editor__title'>
            <FaCube />
            Topic Editor
            <span className='topic-editor__badge'>Topic {topicIndex + 1}</span>
          </h2>
        </div>

        {/* Topic Form - بس Title فقط! */}
        <div className='topic-editor__form'>
          <div className='topic-editor__row'>
            <div className='topic-editor__field'>
              <label className='topic-editor__label'>
                Topic Title (English)
              </label>
              <input
                type='text'
                className='topic-editor__input'
                placeholder='e.g., Introduction to Access Control'
                value={topic.title.en}
                onChange={(e) =>
                  onTopicChange({
                    ...topic,
                    title: { ...topic.title, en: e.target.value },
                  })
                }
              />
            </div>
            <div className='topic-editor__field'>
              <label className='topic-editor__label'>
                Topic Title (Arabic)
              </label>
              <input
                type='text'
                className='topic-editor__input'
                placeholder='مثال: مقدمة في التحكم بالوصول'
                dir='rtl'
                value={topic.title.ar}
                onChange={(e) =>
                  onTopicChange({
                    ...topic,
                    title: { ...topic.title, ar: e.target.value },
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add Element Section */}
      <div className='topic-editor__add-section'>
        <h3 className='topic-editor__add-title'>
          <FaPlus /> Add Element
        </h3>
        <div className='topic-editor__element-grid'>
          {elementTypes.map(({ type, icon: Icon, label }) => (
            <button
              key={type}
              className='topic-editor__element-btn'
              onClick={() => handleAddElement(type)}>
              <Icon className='topic-editor__element-icon' />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Elements List */}
      <div className='topic-editor__elements'>
        <div className='topic-editor__elements-header'>
          <h3 className='topic-editor__elements-title'>
            Elements
            <span className='topic-editor__elements-count'>
              {topic.elements.length}
            </span>
          </h3>
        </div>

        {topic.elements.length === 0 ? (
          <div className='topic-editor__empty'>
            <div className='topic-editor__empty-icon'>
              <FaCube />
            </div>
            <h4 className='topic-editor__empty-title'>No Elements Yet</h4>
            <p className='topic-editor__empty-text'>
              Add your first element using the buttons above
            </p>
          </div>
        ) : (
          topic.elements.map((element, index) => (
            <ElementItem
              key={element.id}
              element={element}
              index={index}
              onChange={(updatedElement) =>
                handleElementChange(index, updatedElement)
              }
              onDelete={() => handleDeleteElement(index)}
              onMove={handleMoveElement}
              onDuplicate={() => handleDuplicateElement(index)}
              isFirst={index === 0}
              isLast={index === topic.elements.length - 1}
              imageMap={imageMap}
              onImageUpload={onImageUpload}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TopicEditor;
