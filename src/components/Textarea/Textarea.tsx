import { useState } from 'react';
import * as Form from '@radix-ui/react-form';
import styles from './Textarea.module.css';
import SearchIcon from '../../assets/svg/IconSearch';

interface TextareaProps {
  name: string;
  label: string;
  placeholder?: string;
  hint?: string;
  required?: boolean;
  rows?: number;
  maxLength?: number;
}

const Textarea = ({
  name,
  label,
  placeholder,
  hint,
  required = true,
  rows = 4,
  maxLength = 280,
}: TextareaProps) => {
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    console.log('submit');
  };
  return (
    <Form.Root onSubmit={handleSubmit}>
    <Form.Field name={name} className={`${styles.Container} text-preset-4`}>
      <Form.Label className={styles.Label}>{label}</Form.Label>

      <div className={`${styles.Wrapper} text-preset-4-medium`}>
        <SearchIcon className={styles.Icon} />

        <Form.Control asChild>
          <textarea
            id={name}
            placeholder={placeholder}
            required={required}
            rows={rows}
            maxLength={maxLength}
            className={styles.Textarea}
            onChange={(e) => setCharCount(e.target.value.length)}
          />
        </Form.Control>
      </div>

      <div className={styles.Footer}>
        {hint ? <p className={styles.Hint}>{hint}</p> : <span />}
        <span className={styles.CharCount}>
          {charCount}/{maxLength}
        </span>
      </div>

      <Form.Message match="valueMissing" className={styles.ErrorMessage}>
        This field is required.
      </Form.Message>
    </Form.Field>
    </Form.Root>
  );
};

export default Textarea;