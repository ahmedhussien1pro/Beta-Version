// src/gtag.js
export const GA_ID = 'G-CMGVN78MHV';

export const loadGA = () => {
  if (document.getElementById('gtag-script')) return;

  const script = document.createElement('script');
  script.id = 'gtag-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_ID, { send_page_view: false });
};
