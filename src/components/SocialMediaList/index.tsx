import Image from 'next/image'

import linkedin from './icons/linkedin.svg'
import youtube from './icons/youtube.svg'
import github from './icons/github.svg'

export const SocialMediaList = () => {
  return (
    <ul className="fixed z-50 right-10 top-1/2 transform -translate-y-1/2 space-y-4">
      <li className="hover:text-blue-500">
        <a 
          href="https://github.com/jeffnts" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Image 
            src={github} 
            alt="Github" 
            className="w-6 h-6" 
          />
        </a>
      </li>
      <li >
        <a 
          href="https://www.linkedin.com/in/jeffnts/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Image 
            src={linkedin} alt="LinkedIn" 
            className="w-6 h-6"
          />
        </a>
      </li>
      <li>
        <a 
          href="https://www.youtube.com/@jeffntsdev" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Image 
            src={youtube} 
            alt="Youtube" 
            className="w-6 h-6"
          />
        </a>
      </li>
    </ul>
  );
};
