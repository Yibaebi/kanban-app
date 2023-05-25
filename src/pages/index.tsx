import { Button, Input, Select, CheckBox, SelectOption } from '@/components';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { useState } from 'react';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

const selectOptions = [
  { value: 'todo', title: 'To Do' },
  { value: 'doing', title: 'Doing' },
  { value: 'done', title: 'Done' },
];

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Select Props to be passed to the select component
  const [selectedOption, setSelectedOption] = useState(selectOptions[0]);
  const onSelectChange = (
    e: React.MouseEvent<HTMLLIElement>,
    option: SelectOption
  ) => setSelectedOption(option);

  // Checkbox props to be passed to the checkbox component
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(true);
  const onCheckboxChange1 = (e: React.ChangeEvent<HTMLInputElement>) =>
    setIsChecked(e.target.checked);
  const onCheckboxChange2 = (e: React.ChangeEvent<HTMLInputElement>) =>
    setIsChecked1(e.target.checked);

  return (
    <div className={isDarkMode ? 'dark' : ' '}>
      <main
        className={`
        flex min-h-screen w-full flex-col bg-blue-light p-5 py-24 dark:bg-gunmetal dark:text-white md:p-24 
        ${plusJakartaSans.className}
      `}
      >
        <h1 className="mb-10 text-xl text-red-dark">Welcome to Kanban App</h1>

        {/* Light Mode or Dark Mode */}
        <div className="mb-5 flex flex-col gap-4">
          <h6>Toggle Light Mode or Dark Mode</h6>

          <section className=" flex h-[50px] gap-10 ">
            <button
              onClick={() => setIsDarkMode(false)}
              className={toggleDarkModeBtnStyle}
            >
              Light
            </button>
            <button
              onClick={() => setIsDarkMode(true)}
              className={toggleDarkModeBtnStyle}
            >
              Dark
            </button>
          </section>
        </div>
        {/* End of Light Mode or Dark Mode */}

        {/* Button Variants Display */}
        <section className="mb-5 flex flex-col gap-4">
          <h6>Button Variants</h6>

          <div className="flex max-w-sm flex-col gap-3">
            <div className="flex flex-col gap-3">
              <Button label="Primary Small" />
              <Button label="Primary Large" size="large" />
            </div>

            <div className="flex flex-col gap-3">
              <Button label="Secondary Small" variant="secondary" />
              <Button
                label="Secondary Large"
                size="large"
                variant="secondary"
              />
            </div>

            <div className="flex flex-col gap-3">
              <Button label="Destructive Small" variant="destructive" />
              <Button
                label="Destructive Large"
                size="large"
                variant="destructive"
                disabled={true}
              />
            </div>
          </div>
        </section>

        {/* Input Component Display */}
        <section className="mb-5 flex flex-col gap-4">
          <h6>Input Component</h6>

          <div className="flex w-[21.875rem] max-w-lg flex-col gap-3">
            <Input
              label="Text Field (Idle)"
              type="text"
              placeholder="Enter task name"
            />
            <Input
              label="Text Field (Active)"
              type="text"
              value="Building a website"
              placeholder="Enter task name"
            />
            <Input
              label="Text Field (Error)"
              type="email"
              error="Can't be empty"
              placeholder="Enter task name"
            />
          </div>
        </section>

        {/* Select Component Display */}
        <section className="mb-5 flex flex-col gap-4">
          <h6>Select Component</h6>

          <div className="flex w-[21.875rem] max-w-lg flex-col gap-3">
            <Select
              label="Dropdown (Idle)"
              options={selectOptions}
              selectedOption={selectedOption}
              onChange={onSelectChange}
            />
          </div>
        </section>

        {/* Subtask Checkbox Component Display */}
        <section className="mb-5 flex flex-col gap-4">
          <h6>Subtask Checkbox Component</h6>

          <div className="flex w-[21.875rem] max-w-lg flex-col gap-3">
            <div>
              <CheckBox
                label="Idle"
                id="checkbox1"
                checked={isChecked}
                onChange={onCheckboxChange1}
              />
            </div>
            <div>
              <CheckBox
                label="Completed"
                id="checkbox2"
                checked={isChecked1}
                onChange={onCheckboxChange2}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const toggleDarkModeBtnStyle =
  'bg-black text-white py-4 px-6 hover:bg-slate-700';
