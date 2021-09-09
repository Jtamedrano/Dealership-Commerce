import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";
import { Form } from "react-bootstrap";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

const InputField: React.FC<InputFieldProps> = ({
  className,
  label,
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props);
  console.log("Error Message - Input Field: ", error);
  return (
    <Form.Group
      className={`admin__login-input${className ? ` ${className}` : ""}`}
    >
      <Form.Label htmlFor={field.name}>{label}</Form.Label>
      <Form.Control {...field} {...props} id={field.name} isInvalid={!!error} />
      {!!error && (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default InputField;
