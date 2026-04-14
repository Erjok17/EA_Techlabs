import { Linkedin, Instagram, Twitter, MessageSquare, Mail } from 'lucide-react';

const SocialLinks = () => {
  const socials = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ea_techlabs.1/',
      icon: Instagram,
      color: 'text-pink-600',
      bgColor: 'bg-pink-600',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/eatechlabs',
      icon: Linkedin,
      color: 'text-blue-600',
      bgColor: 'bg-blue-600',
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/256769463447',
      icon: MessageSquare,
      color: 'text-green-600',
      bgColor: 'bg-green-600',
    },
    {
      name: 'Email',
      url: 'mailto:erjokagottechlabs@gmail.com',
      icon: Mail,
      color: 'text-electric-blue',
      bgColor: 'bg-electric-blue',
    },
  {
      name: 'Twitter',
      url: 'https://twitter.com/ea_techlabs',
      icon: Twitter,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400',
  },
  ];


  return (
    <div className="flex gap-4">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${social.bgColor} bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition-all duration-300 group`}
          aria-label={social.name}
        >
          <social.icon className={`w-5 h-5 ${social.color} group-hover:scale-110 transition-transform`} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;