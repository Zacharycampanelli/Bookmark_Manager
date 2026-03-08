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
}

const Input = ({ name, label, type, placeholder, hint = 'hint' }: InputProps) => {
  return (
    <Box className={styles.Container}>
      <Label.Root htmlFor={name} className={`text-preset-4 ${styles.Label}`}>
        {label}
      </Label.Root>

      {/* Wrapper controls icon + field layout */}
      <Box className={styles.Wrapper}>
        <SearchIcon className={styles.Icon} />

        <TextField.Root
          size="3"
          name={name}
          id={name}
          placeholder={placeholder}
          defaultValue={name || 'Search'}
          className={styles.Root}
        />
      </Box>

`      {hint && <p className={`text-preset-4  ${styles.hint}`}>{hint}</p>}
`    </Box>
  );
};

export default Input;
