import WhatsAppIcon from './WhatsAppIcon';

const WhatsAppButton = () => {
  const phoneNumber = '256769463447'; // Your business WhatsApp number
  const message = 'Hello! I\'m interested in your software development services. Can you help me with my project?';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={24} className="group-hover:scale-110 transition-transform" />
    </a>
  );
};

export default WhatsAppButton;