import React, { InputHTMLAttributes } from 'react';

//  Styles
const inputStyles =
  'text-black w-full text-sm dark:bg-gunmetal dark:placeholder-white dark:placeholder-opacity-25 dark:text-white dark:invalid:text-red-dark invalid:text-red-dark border border-blue-dark border-opacity-20 rounded outline-none placeholder-black placeholder-opacity-25 max-w-[21.875rem] h-[2.5rem] px-[1rem] py-[0.5rem] focus:border-blue-dark focus:ring-0 focus:ring-blue-dark invalid:border-red-dark';
const containerStyles = 'w-full flex flex-col gap-4';
const labelStyles = 'text-sm font-bold dark:text-white text-blue-dark';
const errorTextStyles = 'text-red-dark right-1 dark:bg-gunmetal bg-white px-2 absolute text-[11px] md:text-[13px] leading-[23px] ';

// Interface
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = (props) => {
  const { label = '', error, ...rest } = props;

  return (
    <div className={containerStyles}>
      <label className={labelStyles}>{label}</label>
      <div className="flex relative items-center ">
        <input className={`${inputStyles} ${error && 'text-red-dark border border-red-dark focus:ring-red-dark'}`} {...rest} />
        <p className={errorTextStyles}>{error}</p>
      </div>
    </div>
  );
};

export { Input };
