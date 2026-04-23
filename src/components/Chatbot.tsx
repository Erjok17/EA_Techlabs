import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
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
    embedScript.defer = true;
    document.body.appendChild(embedScript);

    // Cleanup when component unmounts
    return () => {
      document.body.removeChild(configScript);
      document.body.removeChild(embedScript);
    };
  }, []);

  return null;
};

export default Chatbot;