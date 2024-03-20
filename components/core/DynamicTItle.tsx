import { useEffect, useRef } from 'react';

const TitleChangeOnTabChange = () => {
  const pageTitle = useRef<string | null>(null);
  const originalTitle = useRef<string | null>(null);
  const attentionMessage = 'I Miss You 🥲';
  const isPageActive = useRef(true);

  useEffect(() => {
    originalTitle.current = document.title;

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        isPageActive.current = false;
        setTimeout(changeTitle, 2000);
      } else {
        isPageActive.current = true;
        document.title = originalTitle.current || '';
      }
    };

    const changeTitle = () => {
      if (!isPageActive.current) {
        document.title = attentionMessage;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.title = originalTitle.current || '';
    };
  }, []);

  return null;
};

export default TitleChangeOnTabChange;
