import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Wait for page to be fully interactive before loading chatbot
    const loadChatbot = () => {
      // Add the Chatbit configuration
      const configScript = document.createElement('script');
      configScript.innerHTML = `
        window.cbConfig = {
          chatId: "7f60eff6-e997-4e92-8fd4-7b1308a1724f"
        };
      `;
      document.body.appendChild(configScript);

      // Add the Chatbit embed script
      const embedScript = document.createElement('script');
      embedScript.src = 'https://app.chatbit.co/embed.min.js';
      embedScript.async = true;
      embedScript.defer = true;
      document.body.appendChild(embedScript);
    };

    // Load chatbot AFTER everything else (5-8 seconds)
    const timer = setTimeout(loadChatbot, 8000);
    
    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default Chatbot;