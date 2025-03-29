
import React from 'react';
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  animate?: boolean;
  type?: 'primary' | 'secondary' | 'cta';
  disabled?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  text, 
  onClick, 
  className = '',
  icon,
  animate = true,
  type = 'cta',
  disabled = false
}) => {
  const buttonClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    cta: 'btn-cta'
  }[type];

  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={cn(
        buttonClass,
        animate && 'animate-pulse-subtle',
        disabled && 'opacity-70 cursor-not-allowed',
        className
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default CTAButton;
