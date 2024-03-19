import { useEffect, useRef } from 'react';

const TitleChangeOnTabChange = () => {
  const pageTitle = useRef<string | null>(null);
  const attentionMessage = 'I Miss You 🥲';
  const isPageActive = useRef(true);

  useEffect(() => {
    pageTitle.current = document.title;

    const handleVisibilityChange = () => {
      if (typeof document !== 'undefined' && document.hidden) {
        isPageActive.current = false;
        setTimeout(changeTitle, 2000);
      } else {
        isPageActive.current = true;
        document.title = pageTitle.current || '';
      }
    };

    const changeTitle = () => {
      if (!isPageActive.current) {
        document.title = attentionMessage;
      }
    };
    
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }
  }, []);

  return null;
};

export default TitleChangeOnTabChange;
