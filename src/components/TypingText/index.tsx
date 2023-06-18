'use client'

import { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed: number;
}

export const TypingText: React.FC<TypingEffectProps> = ({ text, speed }) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval: NodeJS.Timeout;

    const type = () => {
      setTypedText(prevText => {
        const nextIndex = (currentIndex + 1) % (text.length + 1);
        const nextTypedText = text.substring(0, nextIndex);
        currentIndex = nextIndex;
        return nextTypedText;
      });
    };

    typingInterval = setInterval(type, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return (
    <code className="typing-effect">
      <span>
        &nbsp; {typedText}
      </span>
    </code>
  );
};

