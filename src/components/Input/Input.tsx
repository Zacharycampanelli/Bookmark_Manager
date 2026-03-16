import { Box, TextField } from '@radix-ui/themes';
import * as Label from '@radix-ui/react-label';
import styles from './Input.module.css';
import SearchIcon from '../../assets/svg/IconSearch';

interface InputProps {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  hint?: string;
  isError?: boolean; // Prop to manually trigger error state
}

const Input = ({ name, label, type, placeholder, hint, isError }: InputProps) => {
  return (
    <Box className={` ${styles.Container} text-preset-4`}>
      <Label.Root htmlFor={name} className={styles.Label}>
        {label}
      </Label.Root>

      <Box className={` ${styles.Wrapper} text-preset-4-medium`}>
        <SearchIcon className={styles.Icon} />

        <TextField.Root
          size="3"
          name={name}
          id={name}
          type={type}
          data-error={isError}
          placeholder={placeholder}
          /* Apply .error class based on prop */
          className={styles.Root}
        />
      </Box>

      {hint && <p className={styles.hint}>{hint}</p>}
    </Box>
  );
};

export default Input;