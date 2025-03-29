
import React from 'react';
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  animate?: boolean;
  type?: 'primary' | 'secondary' | 'cta';
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  text, 
  onClick, 
  className = '',
  icon,
  animate = true,
  type = 'cta'
}) => {
  const buttonClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    cta: 'btn-cta'
  }[type];

  return (
    <button 
      onClick={onClick} 
      className={cn(
        buttonClass,
        animate && 'animate-pulse-subtle',
        className
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default CTAButton;
