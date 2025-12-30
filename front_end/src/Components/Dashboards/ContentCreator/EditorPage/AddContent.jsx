import React, { useState, useEffect, useRef } from 'react';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import CourseInfoEditor from './components/CourseInfoEditor';
import TopicEditor from './components/TopicEditor';
import Swal from 'sweetalert2';

// Styles
import './styles/variables.css';
import './styles/topbar.css';
import './styles/sidebar.css';
import './styles/layout.css';
import './styles/course-info-editor.css';
import './styles/topic-editor.css';
import './styles/element-card.css';
import './styles/rich-text-editor.css';

function ContentCreator() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [theme, setTheme] = useState('light');
  const [activeView, setActiveView] = useState('course-info');
  const [topics, setTopics] = useState([]);
  const [currentTopicIndex, setCurrentTopicIndex] = useState(-1);
  const [imageMap, setImageMap] = useState({});

  // Course Info State
  const [courseInfo, setCourseInfo] = useState({
    title: { en: '', ar: '' },
    description: { en: '', ar: '' },
    difficulty: { en: '', ar: '' },
    duration: { en: '', ar: '' },
    instructor: '',
    rating: '',
    students: '',
  });

  const previewWindow = useRef(null);

  // Initialize theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('contentCreatorData');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        if (parsed.courseInfo) setCourseInfo(parsed.courseInfo);
        if (parsed.topics) setTopics(parsed.topics);
        if (parsed.imageMap) setImageMap(parsed.imageMap);
      } catch (err) {
        console.error('Failed to load saved data:', err);
      }
    }
  }, []);

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleAddTopic = () => {
    const newTopic = {
      id: `topic-${Date.now()}`,
      title: {
        en: `Topic ${topics.length + 1}`,
        ar: `موضوع ${topics.length + 1}`,
      },
      elements: [],
    };
    setTopics([...topics, newTopic]);
    setCurrentTopicIndex(topics.length);
    setActiveView('topic');
  };

  const handleDeleteTopic = async (index) => {
    const result = await Swal.fire({
      title: 'Delete Topic?',
      html: '<i class="fas fa-trash" style="color: #ef4444; font-size: 2rem; margin-bottom: 16px;"></i>',
      text: 'Are you sure you want to delete this topic? All elements inside will be lost!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280',
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      const newTopics = topics.filter((_, i) => i !== index);
      setTopics(newTopics);
      if (currentTopicIndex === index) {
        setCurrentTopicIndex(-1);
        setActiveView('course-info');
      } else if (currentTopicIndex > index) {
        setCurrentTopicIndex(currentTopicIndex - 1);
      }

      Swal.fire({
        title: 'Deleted!',
        html: '<i class="fas fa-check-circle" style="color: #10b981; font-size: 2rem; margin-bottom: 16px;"></i>',
        text: 'Topic has been deleted successfully.',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  const handleMoveTopic = (index, direction) => {
    const newTopics = [...topics];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;

    if (targetIndex < 0 || targetIndex >= newTopics.length) return;

    [newTopics[index], newTopics[targetIndex]] = [
      newTopics[targetIndex],
      newTopics[index],
    ];
    setTopics(newTopics);

    if (currentTopicIndex === index) {
      setCurrentTopicIndex(targetIndex);
    } else if (currentTopicIndex === targetIndex) {
      setCurrentTopicIndex(index);
    }
  };

  const handleTopicSelect = (index) => {
    setCurrentTopicIndex(index);
    setActiveView('topic');
  };

  const handleTopicChange = (updatedTopic) => {
    const newTopics = [...topics];
    newTopics[currentTopicIndex] = updatedTopic;
    setTopics(newTopics);
  };

  const handleCourseInfoChange = (updatedInfo) => {
    setCourseInfo(updatedInfo);
  };

  const handleImageUpload = (key, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageMap({
        ...imageMap,
        [key]: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  // SAVE IN SIDEBAR - Save to localStorage only
  const handleSave = () => {
    const dataToSave = {
      courseInfo,
      topics,
      imageMap,
    };
    localStorage.setItem('contentCreatorData', JSON.stringify(dataToSave));

    Swal.fire({
      title:
        'Saved! <i class="fas fa-save" style="color: #10b981; font-size: 2rem; margin-bottom: 16px;"></i>',
      text: 'Your work has been saved to browser storage.',
      icon: 'success',
      confirmButtonColor: '#10b981',
      timer: 2000,
    });
  };

  // DOWNLOAD IN TOPBAR - Download JSON file
  const handleDownload = () => {
    const output = {
      landingData: courseInfo,
      topics,
      metadata: {
        createdAt: new Date().toISOString(),
        totalTopics: topics.length,
        totalElements: topics.reduce(
          (acc, topic) => acc + topic.elements.length,
          0
        ),
      },
    };

    // Create downloadable JSON file
    const dataStr = JSON.stringify(output, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `course-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);

    Swal.fire({
      title:
        'Downloaded! <i class="fas fa-download" style="color: #3b82f6; font-size: 2rem; margin-bottom: 16px;"></i>',
      text: 'Course JSON file has been downloaded successfully.',
      icon: 'success',
      confirmButtonColor: '#3b82f6',
      timer: 2000,
    });
  };

  const handleCopyJSON = () => {
    const output = {
      landingData: courseInfo,
      topics,
    };
    const json = JSON.stringify(output, null, 2);
    navigator.clipboard.writeText(json);

    Swal.fire({
      title:
        'Copied! <i class="fas fa-copy" style="color: #3b82f6; font-size: 2rem; margin-bottom: 16px;"></i>',
      text: 'JSON copied to clipboard!',
      icon: 'success',
      confirmButtonColor: '#3b82f6',
      timer: 1500,
      showConfirmButton: false,
    });
  };

  const handleClear = async () => {
    const result = await Swal.fire({
      title:
        'Clear All Data? <i class="fas fa-exclamation-triangle" style="color: #ef4444; font-size: 2rem; margin-bottom: 16px;"></i>',
      text: 'Are you sure? This will delete everything and cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, clear everything!',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280',
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      setCourseInfo({
        title: { en: '', ar: '' },
        description: { en: '', ar: '' },
        difficulty: { en: '', ar: '' },
        duration: { en: '', ar: '' },
        instructor: '',
        rating: '',
        students: '',
      });
      setTopics([]);
      setImageMap({});
      setCurrentTopicIndex(-1);
      setActiveView('course-info');
      localStorage.removeItem('contentCreatorData');

      Swal.fire({
        title:
          'Cleared! <i class="fas fa-trash-alt" style="color: #10b981; font-size: 2rem; margin-bottom: 16px;"></i>',
        text: 'All data has been cleared successfully.',
        icon: 'success',
        confirmButtonColor: '#10b981',
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  const handleSaveTopic = () => {
    // Auto-save to localStorage
    const dataToSave = {
      courseInfo,
      topics,
      imageMap,
    };
    localStorage.setItem('contentCreatorData', JSON.stringify(dataToSave));

    Swal.fire({
      title:
        'Topic Saved! <i class="fas fa-check-circle" style="color: #10b981; font-size: 2rem; margin-bottom: 16px;"></i>',
      text: `"${topics[currentTopicIndex]?.title.en}" has been saved successfully.`,
      icon: 'success',
      confirmButtonColor: '#10b981',
      timer: 2000,
      showConfirmButton: false,
    });
  };

  // Get title for TopBar
  const getTitle = () => {
    if (activeView === 'course-info') {
      return 'Course Information';
    } else if (activeView === 'topic' && currentTopicIndex >= 0) {
      return `${topics[currentTopicIndex]?.title.en || 'Enter Topic Title'}`;
    }
    return 'Content Creator';
  };

  // Open preview window
  const handleOpenPreview = () => {
    if (!previewWindow.current || previewWindow.current.closed) {
      previewWindow.current = window.open(
        '/content/preview',
        'Preview',
        'width=1200,height=800'
      );
    } else {
      previewWindow.current.focus();
    }
  };

  // Send data to preview when it changes (Live Sync)
  useEffect(() => {
    if (previewWindow.current && !previewWindow.current.closed) {
      previewWindow.current.postMessage(
        {
          type: 'PREVIEW_UPDATE',
          data: {
            landingData: courseInfo,
            topics,
            imageMap,
          },
        },
        window.location.origin
      );
    }
  }, [courseInfo, topics, imageMap]);

  // Listen for preview data requests
  useEffect(() => {
    const handleRequest = (event) => {
      if (event.origin !== window.location.origin) return;

      if (event.data.type === 'REQUEST_PREVIEW_DATA' && previewWindow.current) {
        previewWindow.current.postMessage(
          {
            type: 'PREVIEW_DATA',
            data: {
              landingData: courseInfo,
              topics,
              imageMap,
            },
          },
          window.location.origin
        );
      }
    };

    window.addEventListener('message', handleRequest);
    return () => window.removeEventListener('message', handleRequest);
  }, [courseInfo, topics, imageMap]);

  // Cleanup preview window on unmount
  useEffect(() => {
    return () => {
      if (previewWindow.current) {
        previewWindow.current.close();
      }
    };
  }, []);
 const handleImportJSON = async (file) => {
  try {
    const reader = new FileReader();
    
    reader.onload = async (e) => {
      try {
        let jsonText = e.target.result;
        
        // Try to fix common JSON errors
        jsonText = jsonText
          .replace(/,(\s*[}\]])/g, '$1') // Remove trailing commas
          .replace(/([{,]\s*)(\w+):/g, '$1"$2":') // Add quotes to unquoted keys
          .trim();

        const json = JSON.parse(jsonText);
        
        // Validate JSON structure
        if (!json.landingData && !json.topics) {
          throw new Error('Invalid JSON structure. Must contain "landingData" and "topics".');
        }

        // Show file info with line count
        const lineCount = jsonText.split('\n').length;

        const result = await Swal.fire({
          title: 'Import JSON File?',
          html: `
            <div style="text-align: left; margin: 20px 0;">
              <div style="background: var(--bg-secondary); padding: 16px; border-radius: 8px; margin-bottom: 16px;">
                <p style="margin: 8px 0;"><strong>📄 File:</strong> ${file.name}</p>
                <p style="margin: 8px 0;"><strong>📏 Size:</strong> ${(file.size / 1024).toFixed(2)} KB</p>
                <p style="margin: 8px 0;"><strong>📝 Lines:</strong> ${lineCount}</p>
              </div>
              <div style="background: var(--bg-tertiary); padding: 16px; border-radius: 8px;">
                <p style="margin: 8px 0;"><strong>📋 Course:</strong> ${json.landingData?.title?.en || 'N/A'}</p>
                <p style="margin: 8px 0;"><strong>📚 Topics:</strong> ${json.topics?.length || 0}</p>
                <p style="margin: 8px 0;"><strong>📝 Elements:</strong> ${json.topics?.reduce((acc, t) => acc + (t.elements?.length || 0), 0) || 0}</p>
              </div>
              <p style="color: var(--color-error); margin-top: 16px; padding: 12px; background: rgba(239, 68, 68, 0.1); border-radius: 8px;">
                <i class="fas fa-exclamation-triangle"></i> 
                <strong>Warning:</strong> This will replace all current data!
              </p>
            </div>
          `,
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: '<i class="fas fa-check"></i> Yes, Import!',
          cancelButtonText: '<i class="fas fa-times"></i> Cancel',
          confirmButtonColor: '#0c65eb',
          cancelButtonColor: '#6b7280',
          reverseButtons: true,
          customClass: {
            popup: 'swal-wide',
          },
        });

        if (result.isConfirmed) {
          // Normalize data structure
          const landingData = json.landingData || {
            title: { en: '', ar: '' },
            description: { en: '', ar: '' },
            difficulty: { en: '', ar: '' },
            duration: { en: '', ar: '' },
            instructor: '',
            rating: '',
            students: '',
          };

          const importedTopics = json.topics || [];
          
          // Validate topics structure
          const validTopics = importedTopics.map((topic, index) => ({
            id: topic.id || `topic-${Date.now()}-${index}`,
            title: topic.title || { en: `Topic ${index + 1}`, ar: `موضوع ${index + 1}` },
            elements: Array.isArray(topic.elements) ? topic.elements : [],
          }));

          // Import data
          setCourseInfo(landingData);
          setTopics(validTopics);
          setImageMap(json.imageMap || {});
          setCurrentTopicIndex(-1);
          setActiveView('course-info');

          // Save to localStorage
          const dataToSave = {
            courseInfo: landingData,
            topics: validTopics,
            imageMap: json.imageMap || {},
          };
          localStorage.setItem('contentCreatorData', JSON.stringify(dataToSave));

          Swal.fire({
            title: 'Import Successful!',
            html: `
              <div style="text-align: center;">
                <i class="fas fa-check-circle" style="color: #10b981; font-size: 4rem; margin-bottom: 20px;"></i>
                <h3 style="color: var(--text-primary); margin-bottom: 12px;">Successfully Imported</h3>
                <div style="background: var(--bg-secondary); padding: 16px; border-radius: 8px; display: inline-block;">
                  <p style="margin: 8px 0;"><strong>${validTopics.length}</strong> Topics</p>
                  <p style="margin: 8px 0;"><strong>${validTopics.reduce((acc, t) => acc + t.elements.length, 0)}</strong> Elements</p>
                </div>
              </div>
            `,
            icon: 'success',
            confirmButtonColor: '#10b981',
            timer: 3000,
          });
        }
      } catch (parseError) {
        // Enhanced error message
        const errorLine = parseError.message.match(/line (\d+)/)?.[1] || 'unknown';
        const errorPosition = parseError.message.match(/position (\d+)/)?.[1] || 'unknown';

        Swal.fire({
          title: 'Invalid JSON Format!',
          html: `
            <div style="text-align: left;">
              <div style="background: var(--bg-secondary); padding: 16px; border-radius: 8px; margin: 16px 0;">
                <p style="color: var(--color-error); margin: 8px 0;">
                  <i class="fas fa-times-circle"></i> <strong>Error Details:</strong>
                </p>
                <p style="margin: 8px 0; font-family: monospace; font-size: 14px;">
                  ${parseError.message}
                </p>
              </div>
              <div style="background: var(--bg-tertiary); padding: 16px; border-radius: 8px;">
                <p style="margin: 8px 0;"><strong>📄 File:</strong> ${file.name}</p>
                <p style="margin: 8px 0;"><strong>📏 Line:</strong> ${errorLine}</p>
                <p style="margin: 8px 0;"><strong>📍 Position:</strong> ${errorPosition}</p>
              </div>
              <div style="margin-top: 16px; padding: 12px; background: rgba(59, 130, 246, 0.1); border-radius: 8px;">
                <p style="color: var(--color-primary-500); margin: 0;">
                  <i class="fas fa-lightbulb"></i> <strong>Tips:</strong>
                </p>
                <ul style="margin: 8px 0; padding-left: 20px; font-size: 14px;">
                  <li>Check for missing commas or brackets</li>
                  <li>Remove trailing commas before ] or }</li>
                  <li>Validate JSON at <a href="https://jsonlint.com" target="_blank">jsonlint.com</a></li>
                </ul>
              </div>
            </div>
          `,
          icon: 'error',
          confirmButtonColor: '#ef4444',
          width: '600px',
        });
      }
    };

    reader.onerror = () => {
      Swal.fire({
        title: 'File Read Error!',
        html: `
          <i class="fas fa-exclamation-circle" style="color: #ef4444; font-size: 3rem; margin-bottom: 16px;"></i>
          <p>Could not read the file. Please try again.</p>
          <p style="font-size: 14px; color: var(--text-tertiary); margin-top: 12px;">
            Make sure the file is not corrupted and you have permission to read it.
          </p>
        `,
        icon: 'error',
        confirmButtonColor: '#ef4444',
      });
    };

    reader.readAsText(file);
  } catch (error) {
    Swal.fire({
      title: 'Import Failed!',
      html: `
        <i class="fas fa-times-circle" style="color: #ef4444; font-size: 3rem; margin-bottom: 16px;"></i>
        <p>${error.message}</p>
      `,
      icon: 'error',
      confirmButtonColor: '#ef4444',
    });
  }
};

  return (
    <div className='app'>
      <Sidebar
        collapsed={sidebarCollapsed}
        activeView={activeView}
        topics={topics}
        currentTopicIndex={currentTopicIndex}
        onToggle={handleToggleSidebar}
        onViewChange={setActiveView}
        onTopicSelect={handleTopicSelect}
        onAddTopic={handleAddTopic}
        onDeleteTopic={handleDeleteTopic}
        onMoveTopic={handleMoveTopic}
        onSave={handleSave}
        onCopyJSON={handleCopyJSON}
        onClear={handleClear}
        onImportJSON={handleImportJSON}
      />

      <div
        className={`app__content ${
          sidebarCollapsed ? 'app__content--expanded' : ''
        }`}>
        <TopBar
          title={getTitle()}
          sidebarCollapsed={sidebarCollapsed}
          onToggleSidebar={handleToggleSidebar}
          onSave={handleDownload} // Download JSON
          onCopyJSON={handleCopyJSON}
          theme={theme}
          onPreview={handleOpenPreview}
          onToggleTheme={handleToggleTheme}
        />

        <main className='app__main'>
          {activeView === 'course-info' && (
            <CourseInfoEditor
              courseInfo={courseInfo}
              onCourseInfoChange={handleCourseInfoChange}
            />
          )}

          {activeView === 'topic' && currentTopicIndex >= 0 && (
            <TopicEditor
              topic={topics[currentTopicIndex]}
              topicIndex={currentTopicIndex}
              onTopicChange={handleTopicChange}
              onSaveTopic={handleSaveTopic}
              imageMap={imageMap}
              onImageUpload={handleImageUpload}
            />
          )}

          {activeView === 'topic' && currentTopicIndex < 0 && (
            <div
              style={{
                textAlign: 'center',
                padding: '4rem',
                color: 'var(--text-tertiary)',
              }}>
              <h2>No Topic Selected</h2>
              <p>Please select a topic from the sidebar or create a new one.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default ContentCreator;
