import React, { useState, useEffect, useRef } from 'react';
import TopBar from './components/TopBar';
import LabSidebar from './components/LabSidebar';
import LabInfoEditor from './components/LabInfoEditor';
import Swal from 'sweetalert2';

// Styles
import './styles/variables.css';
import './styles/topbar.css';
import './styles/sidebar.css';
import './styles/layout.css';
import './styles/course-info-editor.css';

function LabCreator() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [theme, setTheme] = useState('light');
  const [labs, setLabs] = useState([]);
  const [currentLabIndex, setCurrentLabIndex] = useState(-1); // Track selected lab
  const previewWindow = useRef(null);

  // Current Lab State (for form)
  const [currentLab, setCurrentLab] = useState({
    en_title: '',
    ar_title: '',
    en_brief: '',
    ar_brief: '',
    en_difficulty: 'Easy',
    ar_difficulty: 'سهل',
    link: '',
    image: '',
    imageVariableName: '', // NEW: For variable name
    isFree: true,
    topicsCount: 1,
  });

  // Initialize theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('labCreatorData');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        if (parsed.labs) setLabs(parsed.labs);
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

  const handleAddLab = () => {
    if (!currentLab.en_title || !currentLab.ar_title) {
      Swal.fire({
        title: 'Missing Information!',
        html: '<i class="fas fa-exclamation-triangle" style="color: #f59e0b; font-size: 2rem; margin-bottom: 16px;"></i>',
        text: 'Please fill in at least the English and Arabic titles!',
        icon: 'warning',
        confirmButtonColor: '#f59e0b',
      });
      return;
    }

    const newLab = {
      ...currentLab,
      id: `lab-${Date.now()}`,
    };

    setLabs([...labs, newLab]);

    // Reset form completely
    const emptyLab = {
      en_title: '',
      ar_title: '',
      en_brief: '',
      ar_brief: '',
      en_difficulty: 'Easy',
      ar_difficulty: 'سهل',
      link: '',
      image: '',
      imageVariableName: '',
      isFree: true,
      topicsCount: 1,
    };

    setCurrentLab(emptyLab);
    setCurrentLabIndex(-1);

    setTimeout(() => {
      setCurrentLab({ ...emptyLab });
    }, 0);

    Swal.fire({
      title: 'Lab Added!',
      html: '<i class="fas fa-check-circle" style="color: #10b981; font-size: 2rem; margin-bottom: 16px;"></i>',
      text: 'Lab has been added to the list successfully.',
      icon: 'success',
      confirmButtonColor: '#10b981',
      timer: 1500,
      showConfirmButton: false,
    });
  };

  const handleUpdateLab = () => {
    if (currentLabIndex === -1) return;

    if (!currentLab.en_title || !currentLab.ar_title) {
      Swal.fire({
        title: 'Missing Information!',
        html: '<i class="fas fa-exclamation-triangle" style="color: #f59e0b; font-size: 2rem; margin-bottom: 16px;"></i>',
        text: 'Please fill in at least the English and Arabic titles!',
        icon: 'warning',
        confirmButtonColor: '#f59e0b',
      });
      return;
    }

    const updatedLabs = [...labs];
    updatedLabs[currentLabIndex] = {
      ...currentLab,
      id: labs[currentLabIndex].id, // Keep original ID
    };

    setLabs(updatedLabs);

    Swal.fire({
      title: 'Lab Updated!',
      html: '<i class="fas fa-check-circle" style="color: #10b981; font-size: 2rem; margin-bottom: 16px;"></i>',
      text: 'Lab has been updated successfully.',
      icon: 'success',
      confirmButtonColor: '#10b981',
      timer: 1500,
      showConfirmButton: false,
    });
  };

  const handleDeleteLab = async (index) => {
    const result = await Swal.fire({
      title: 'Delete Lab?',
      html: '<i class="fas fa-trash" style="color: #ef4444; font-size: 2rem; margin-bottom: 16px;"></i>',
      text: 'Are you sure you want to delete this lab?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280',
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      const newLabs = labs.filter((_, i) => i !== index);
      setLabs(newLabs);

      // Reset if deleted the selected lab
      if (currentLabIndex === index) {
        setCurrentLabIndex(-1);
        setCurrentLab({
          en_title: '',
          ar_title: '',
          en_brief: '',
          ar_brief: '',
          en_difficulty: 'Easy',
          ar_difficulty: 'سهل',
          link: '',
          image: '',
          imageVariableName: '',
          isFree: true,
          topicsCount: 1,
        });
      } else if (currentLabIndex > index) {
        setCurrentLabIndex(currentLabIndex - 1);
      }

      Swal.fire({
        title: 'Deleted!',
        html: '<i class="fas fa-check-circle" style="color: #10b981; font-size: 2rem; margin-bottom: 16px;"></i>',
        text: 'Lab has been deleted successfully.',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  const handleMoveLab = (index, direction) => {
    const newLabs = [...labs];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;

    if (targetIndex < 0 || targetIndex >= newLabs.length) return;

    [newLabs[index], newLabs[targetIndex]] = [
      newLabs[targetIndex],
      newLabs[index],
    ];
    setLabs(newLabs);

    // Update current index if needed
    if (currentLabIndex === index) {
      setCurrentLabIndex(targetIndex);
    } else if (currentLabIndex === targetIndex) {
      setCurrentLabIndex(index);
    }
  };

  const handleLabSelect = (index) => {
    setCurrentLabIndex(index);
    setCurrentLab({ ...labs[index] }); // Load selected lab data
  };

  const handleLabChange = (updatedLab) => {
    setCurrentLab(updatedLab);

    // Auto-update if editing existing lab
    if (currentLabIndex !== -1) {
      const updatedLabs = [...labs];
      updatedLabs[currentLabIndex] = {
        ...updatedLab,
        id: labs[currentLabIndex].id,
      };
      setLabs(updatedLabs);
    }
  };

  const handleNewLab = () => {
    setCurrentLabIndex(-1);
    setCurrentLab({
      en_title: '',
      ar_title: '',
      en_brief: '',
      ar_brief: '',
      en_difficulty: 'Easy',
      ar_difficulty: 'سهل',
      link: '',
      image: '',
      imageVariableName: '',
      isFree: true,
      topicsCount: 1,
    });
  };

  // SAVE IN SIDEBAR - Save to localStorage
  const handleSave = () => {
    const dataToSave = { labs };
    localStorage.setItem('labCreatorData', JSON.stringify(dataToSave));

    Swal.fire({
      title: 'Saved!',
      html: '<i class="fas fa-save" style="color: #10b981; font-size: 2rem; margin-bottom: 16px;"></i>',
      text: 'Your work has been saved to browser storage.',
      icon: 'success',
      confirmButtonColor: '#10b981',
      timer: 2000,
    });
  };

  // DOWNLOAD IN TOPBAR - Download JSON file
  const handleDownload = () => {
    const output = {
      labs,
      metadata: {
        createdAt: new Date().toISOString(),
        totalLabs: labs.length,
      },
    };

    const dataStr = JSON.stringify(output, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `labs-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);

    Swal.fire({
      title: 'Downloaded!',
      html: '<i class="fas fa-download" style="color: #3b82f6; font-size: 2rem; margin-bottom: 16px;"></i>',
      text: 'Labs JSON file has been downloaded successfully.',
      icon: 'success',
      confirmButtonColor: '#3b82f6',
      timer: 2000,
    });
  };

  const handleCopyJSON = () => {
    const output = { labs };
    const json = JSON.stringify(output, null, 2);
    navigator.clipboard.writeText(json);

    Swal.fire({
      title: 'Copied!',
      html: '<i class="fas fa-copy" style="color: #3b82f6; font-size: 2rem; margin-bottom: 16px;"></i>',
      text: 'JSON copied to clipboard!',
      icon: 'success',
      confirmButtonColor: '#3b82f6',
      timer: 1500,
      showConfirmButton: false,
    });
  };

  const handleClear = async () => {
    const result = await Swal.fire({
      title: 'Clear All Data?',
      html: '<i class="fas fa-exclamation-triangle" style="color: #ef4444; font-size: 2rem; margin-bottom: 16px;"></i>',
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
      setLabs([]);
      setCurrentLab({
        en_title: '',
        ar_title: '',
        en_brief: '',
        ar_brief: '',
        en_difficulty: 'Easy',
        ar_difficulty: 'سهل',
        link: '',
        image: '',
        imageVariableName: '',
        isFree: true,
        topicsCount: 1,
      });
      setCurrentLabIndex(-1);
      localStorage.removeItem('labCreatorData');

      Swal.fire({
        title: 'Cleared!',
        html: '<i class="fas fa-trash-alt" style="color: #10b981; font-size: 2rem; margin-bottom: 16px;"></i>',
        text: 'All data has been cleared successfully.',
        icon: 'success',
        confirmButtonColor: '#10b981',
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  const handleImportJSON = async (file) => {
    try {
      const reader = new FileReader();

      reader.onload = async (e) => {
        try {
          let jsonText = e.target.result;

          jsonText = jsonText
            .replace(/,(\s*[}\]])/g, '$1')
            .replace(/([{,]\s*)(\w+):/g, '$1"$2":')
            .trim();

          const json = JSON.parse(jsonText);

          if (!json.labs) {
            throw new Error(
              'Invalid JSON structure. Must contain "labs" array.'
            );
          }

          const lineCount = jsonText.split('\n').length;

          const result = await Swal.fire({
            title: 'Import JSON File?',
            html: `
              <div style="text-align: left; margin: 20px 0;">
                <div style="background: var(--bg-secondary); padding: 16px; border-radius: 8px; margin-bottom: 16px;">
                  <p style="margin: 8px 0;"><strong><i class="fas fa-file"></i> File:</strong> ${
                    file.name
                  }</p>
                  <p style="margin: 8px 0;"><strong><i class="fas fa-ruler"></i> Size:</strong> ${(
                    file.size / 1024
                  ).toFixed(2)} KB</p>
                  <p style="margin: 8px 0;"><strong><i class="fas fa-list-ol"></i> Lines:</strong> ${lineCount}</p>
                </div>
                <div style="background: var(--bg-tertiary); padding: 16px; border-radius: 8px;">
                  <p style="margin: 8px 0;"><strong><i class="fas fa-flask"></i> Labs:</strong> ${
                    json.labs?.length || 0
                  }</p>
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
            const importedLabs = json.labs || [];

            const validLabs = importedLabs.map((lab, index) => ({
              id: lab.id || `lab-${Date.now()}-${index}`,
              en_title: lab.en_title || '',
              ar_title: lab.ar_title || '',
              en_brief: lab.en_brief || '',
              ar_brief: lab.ar_brief || '',
              en_difficulty: lab.en_difficulty || 'Easy',
              ar_difficulty: lab.ar_difficulty || 'سهل',
              link: lab.link || '',
              image: lab.image || '',
              imageVariableName: lab.imageVariableName || '',
              isFree: lab.isFree !== undefined ? lab.isFree : true,
              topicsCount: lab.topicsCount || 1,
            }));

            setLabs(validLabs);
            setCurrentLabIndex(-1);

            const dataToSave = { labs: validLabs };
            localStorage.setItem('labCreatorData', JSON.stringify(dataToSave));

            Swal.fire({
              title: 'Import Successful!',
              html: `
                <div style="text-align: center;">
                  <i class="fas fa-check-circle" style="color: #10b981; font-size: 4rem; margin-bottom: 20px;"></i>
                  <h3 style="color: var(--text-primary); margin-bottom: 12px;">Successfully Imported</h3>
                  <div style="background: var(--bg-secondary); padding: 16px; border-radius: 8px; display: inline-block;">
                    <p style="margin: 8px 0;"><strong>${validLabs.length}</strong> Labs</p>
                  </div>
                </div>
              `,
              icon: 'success',
              confirmButtonColor: '#10b981',
              timer: 3000,
            });
          }
        } catch (parseError) {
          const errorLine =
            parseError.message.match(/line (\d+)/)?.[1] || 'unknown';

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
                  <p style="margin: 8px 0;"><strong><i class="fas fa-file"></i> File:</strong> ${file.name}</p>
                  <p style="margin: 8px 0;"><strong><i class="fas fa-list-ol"></i> Line:</strong> ${errorLine}</p>
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

  const handleOpenPreview = () => {
    if (!previewWindow.current || previewWindow.current.closed) {
      previewWindow.current = window.open(
        '/labs/preview',
        'Preview',
        'width=1200,height=800'
      );
    } else {
      previewWindow.current.focus();
    }
  };

  // Send data to preview when it changes
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === 'REQUEST_PREVIEW_DATA') {
        if (previewWindow.current && !previewWindow.current.closed) {
          console.log('Sending preview data:', { labs });
          previewWindow.current.postMessage(
            {
              type: 'PREVIEW_DATA',
              data: { labs },
            },
            window.location.origin
          );
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [labs]);

  // Cleanup preview window on unmount
  useEffect(() => {
    return () => {
      if (previewWindow.current) {
        previewWindow.current.close();
      }
    };
  }, []);

  return (
    <div className='app'>
      <LabSidebar
        collapsed={sidebarCollapsed}
        labs={labs}
        currentLabIndex={currentLabIndex}
        onToggle={handleToggleSidebar}
        onAddLab={handleNewLab}
        onLabSelect={handleLabSelect}
        onDeleteLab={handleDeleteLab}
        onMoveLab={handleMoveLab}
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
          title='Lab Creator'
          sidebarCollapsed={sidebarCollapsed}
          onToggleSidebar={handleToggleSidebar}
          onSave={handleDownload}
          onCopyJSON={handleCopyJSON}
          theme={theme}
          onPreview={handleOpenPreview}
          onToggleTheme={handleToggleTheme}
        />

        <main className='app__main'>
          <LabInfoEditor
            labInfo={currentLab}
            onLabInfoChange={handleLabChange}
            onAddLab={handleAddLab}
            onUpdateLab={handleUpdateLab}
            isEditing={currentLabIndex !== -1}
          />
        </main>
      </div>
    </div>
  );
}

export default LabCreator;
