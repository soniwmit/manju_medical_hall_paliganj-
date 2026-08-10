import { useEffect, useRef } from 'react';

export function useTracker(currentPage?: string) {
  const previousPageRef = useRef<string | undefined>(currentPage);
  const isMountedRef = useRef<boolean>(false);

  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid') || '');
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = (pageName?: string) => {
      if (pageName) {
        return pageName.charAt(0).toUpperCase() + pageName.slice(1);
      }
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = (pageName?: string) => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(pageName),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };

    const sendExitPayload = (pageName?: string) => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(pageName),
        action: 'page_change'
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };

    // On initial mount or page state change
    if (!isMountedRef.current) {
      sendInitPayload(currentPage);
      isMountedRef.current = true;
    } else if (previousPageRef.current !== currentPage) {
      sendExitPayload(previousPageRef.current);
      setTimeout(() => sendInitPayload(currentPage), 100);
    }

    previousPageRef.current = currentPage;

    const handleLocationChange = () => {
      sendExitPayload(currentPage);
      setTimeout(() => sendInitPayload(currentPage), 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pagehide', () => sendExitPayload(currentPage));
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload(currentPage);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pagehide', () => sendExitPayload(currentPage));
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [currentPage]);
}
