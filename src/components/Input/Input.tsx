import { Form } from 'radix-ui';
import styles from './Input.module.css';

interface InputProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

const Input = ({ name, label, type, placeholder }: InputProps) => {
  return (
    <Form.Root>
      <Form.Field name={name}>
        <Form.Label>{label}</Form.Label>
        <Form.Control type={type} placeholder={placeholder}></Form.Control>
        <Form.Message />
      </Form.Field>
    </Form.Root>
  );
};

export default Input;
