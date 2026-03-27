import { FieldError, UseFormRegister, Control, FieldValues, Path } from "react-hook-form";

export interface InputFieldProps<T extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
  fieldName: Path<T>;
  label?: string;

  icon?: React.ReactNode;

  inputClassName?: string;     

  isLoading?: boolean;

  other?: Omit<React.InputHTMLAttributes<HTMLInputElement>, "name" | "type" | "placeholder" | "disabled">;

  onChangeFn?: (value: string) => void;
  setValueFn?: (value: string) => void;
}