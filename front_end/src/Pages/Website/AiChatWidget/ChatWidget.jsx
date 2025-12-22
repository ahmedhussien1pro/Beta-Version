import { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.livechatai.com/embed.js';
    script.setAttribute('data-id', 'cm6clkym10001l40a2nu45w2s');
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ChatWidget;
