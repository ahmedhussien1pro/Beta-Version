// src/pages/PreviewPage/PreviewPage.jsx
import React from 'react';
import LabTemplateRenderer from '../TemplateRenderer/LabTemplateRenderer';
import ThemeSwitcher from '../../../../Pages/Website/UserHome/Components/ThemeSwitcher/ThemeSwitcher';

export default function PreviewPage() {
  const raw =
    localStorage.getItem('coursePreview') ||
    localStorage.getItem('courseDraft');
  const data = raw ? JSON.parse(raw) : null;

  return (
    <div>
      <ThemeSwitcher />
      {data ? (
        <LabTemplateRenderer
          data={data}
          handleGoToLab={(path) => (window.location.href = path)}
        />
      ) : (
        <div>No preview data</div>
      )}
    </div>
  );
}
