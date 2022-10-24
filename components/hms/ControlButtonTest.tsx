import React from 'react';

interface ControlButtonProps {
  active?: boolean;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string; 
  children: React.ReactNode;
}

const ControlButton: React.FC<ControlButtonProps> = ({ active, text, children, onClick, className = '', ...props}) => {
  return (
    <div className="flex flex-col items-center">
      <button
        onClick={onClick}
        type="button"
        className={`flex items-center justify-center w-11 h-11 rounded-full border-solid border-2 ${
          active ? 'border-gray-200' : 'border-gray-base'
        } focus:outline-none focus:border-gray-400 focus:bg-gray-800 ${className}`} {...props}
      >
        {children}
      </button>
      <span className="text-xxs mt-1">{text}</span>
    </div>
  );
};

export default ControlButton; 