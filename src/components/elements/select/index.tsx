import React, { useState, useRef, useEffect } from 'react';
import { ArrowDownIcon } from '../../../../public/assets';

//  Styles
const listTextStyle =
  'text-[13px] text-blue-dark dark:text-white p-4 cursor-pointer py-2 hover:bg-blue-light dark:hover:bg-purple-100';
const selectStyles = 'flex h-[2.5rem] w-[21.875rem] items-center justify-between rounded-md  border border-blue-dark border-opacity-20 px-[1rem] py-[0.5rem] text-sm text-black hover:cursor-pointer focus:border-none focus:ring-blue-dark dark:bg-gunmetal dark:text-white'
const containerStyles = 'w-full flex flex-col gap-4';
const listContainerStyles = 'w-[21.875rem] z-10 rounded-lg bg-transparent bg-white  text-blue-dark dark:bg-very-dark-gray dark:text-white absolute top-12'
const labelStyles = 'text-sm font-bold dark:text-white text-blue-dark';

// Select Option Props
export interface SelectOption {
  value: any;
  title: string;
}

// Select Props
interface SelectProps {
  label?: string;
  options: SelectOption[];
  selectedOption?: SelectOption;
  onChange?: (
    e: React.MouseEvent<HTMLLIElement>,
    selectedOption: SelectOption
  ) => void;
}

const Select: React.FC<SelectProps> = (props) => {

  const selectRef = useRef<HTMLDivElement | null>(null);

  const {
    label = '',
    options,
    selectedOption = options[0],
    onChange = () => {},
  } = props;

  const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
     const checkIfClickedOutside = (e: MouseEvent) => {
       // If the menu is open and the clicked target is not within the menu, then close menu
       if (
         isOpen &&
         selectRef.current &&
         !selectRef.current.contains(e.target as Node)
       ) {
         setIsOpen(false);
       }
     };

     document.addEventListener("mousedown", checkIfClickedOutside);

     return () => {
       // Cleanup the event listener
       document.removeEventListener('mousedown', checkIfClickedOutside);
     };
   }, [isOpen, selectRef]);


  return (
    <div ref={selectRef} className={containerStyles}>
      <label className={labelStyles}>{label}</label>
      <div className="relative flex flex-col gap-2">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`${selectStyles} ${isOpen && 'border border-purple-main'}`}
        >
          <p>{selectedOption.title}</p>
          <ArrowDownIcon
            className={`text-purple-main ${isOpen && 'rotate-180'}`}
            size={20}
          />
        </div>
        <ul  className={isOpen ? listContainerStyles : 'hidden'}>
          {options?.map((option) => {
            return (
              <li
                key={option.value}
                onClick={(e) => {
                  onChange(e, option);
                  setIsOpen(false);
                }}
                className={listTextStyle}
              >
                {option.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export { Select };
