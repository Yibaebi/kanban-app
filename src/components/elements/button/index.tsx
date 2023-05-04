import React, { ButtonHTMLAttributes, useMemo } from 'react';

// Button Variants
const variantsClassMap = {
  primary: 'bg-purple-main text-white hover:bg-[#A8A4FF] hover:bg-purple-250',
  secondary:
    'bg-purple-100 text-purple-main hover:bg-purple-250 dark:hover:bg-white dark:bg-white',
  destructive: 'bg-red-dark text-white hover:bg-red-light',
};

// Button Sizes
const sizeClassMap = {
  large: 'rounded-3xl px-[30px] py-[15px] sm:px-[60px] text-base',
  small: 'rounded-[20px] px-[30px] py-[9px] sm:px-[60px] text-[12px]/[23px]',
};

// Button Props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: keyof typeof variantsClassMap;
  size?: keyof typeof sizeClassMap;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { label = '', size = 'small', variant = 'primary', ...rest } = props;

  const className = useMemo(() => {
    const variantClass = variantsClassMap[variant];
    const sizeClass = sizeClassMap[size];

    const commonClasses =
      'font-bold disabled:pointer-events-none transition-all duration-300';
    const className = `${commonClasses} ${variantClass} ${sizeClass}`;

    return className;
  }, [size, variant]);

  return (
    <button className={`${className}`} {...rest}>
      {label}
    </button>
  );
};

export { Button };
