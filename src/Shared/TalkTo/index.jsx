import React, { useEffect, useState } from 'react';

const Tawk = () => {
  const [isTawkLoaded, setIsTawkLoaded] = useState(false);

  useEffect(() => {
    const Tawk_API = window.Tawk_API || {};
    const Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];

    s1.async = true;
    s1.src = 'https://embed.tawk.to/66e2761450c10f7a00a85c6f/1i7i9qgb7';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');

    s0.parentNode.insertBefore(s1, s0);

    s1.onload = () => {
      setIsTawkLoaded(true);
      Tawk_API.hideWidget(); // Hide the widget on load
      Tawk_API.onLoad = function() {
        Tawk_API.hideWidget(); // Ensure it stays hidden
      };
    };

    return () => {
      const tawkScript = document.querySelector('script[src="https://embed.tawk.to/66e2761450c10f7a00a85c6f/1i7i9qgb7"]');
      if (tawkScript) {
        tawkScript.remove();
      }
    };
  }, []);

  const handleChatOpen = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize(); // Open the chat when user clicks
    }
  };

  return (
    <div>
      <button onClick={handleChatOpen} disabled={!isTawkLoaded}>
        {/* Optional button or custom chat icon here */}
      </button>
    </div>
  );
};

export default Tawk;
