import styles from './styles.module.css';

interface CheckboxProps {
  label?: string;
  checked: boolean;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const labelStyles =
  ' flex relative cursor-pointer items-center gap-6 rounded bg-blue-light dark:bg-very-dark-gray dark:text-white p-3 text-sm font-bold text-black hover:bg-purple-main hover:bg-opacity-25';

const CheckBox: React.FC<CheckboxProps> = (props) => {
  const { label, id, onChange, checked } = props;

  return (
    <label htmlFor={id} className={`${styles.label} ${labelStyles}`}>
      <input
        type="checkbox"
        checked={checked}
        id={id}
        className={`${styles.checkbox} focus:ring-0 dark:bg-gunmetal`}
        onChange={onChange}
      />
      <p className={`${checked && 'line-through decoration-1 opacity-50'}`}>
        {label}
      </p>
    </label>
  );
};

export { CheckBox };
