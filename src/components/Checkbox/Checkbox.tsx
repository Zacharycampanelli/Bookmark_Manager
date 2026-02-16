import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { clsx } from 'clsx';
import styles from './Checkbox.module.css';
import CheckIcon from '../../assets/svg/CheckIcon';

interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: string;
}

export default function Checkbox({ label, className, disabled, id, ...props }: CheckboxProps) {
  // Generate a unique ID if one isn't provided, to link the label
  const elementId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={clsx(styles.Wrapper, disabled && styles.Disabled, className)}>
      <CheckboxPrimitive.Root 
        className={styles.Root} 
        id={elementId}
        disabled={disabled}
        {...props}
      >
        <CheckboxPrimitive.Indicator className={styles.Indicator}>
          <CheckIcon /> 
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      
      {label && (
        <label htmlFor={elementId} className={styles.Label}>
          {label}
        </label>
      )}
    </div>
  );
}