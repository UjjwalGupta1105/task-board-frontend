"use client";
import { FieldValues, get, useFormContext } from "react-hook-form";
import { InputFieldProps } from "@/types/InputFieldProps";

export default function InputField<T extends FieldValues>({
  fieldName,
  placeholder,
  type = "text",
  other,
  className = "",
  setValueFn,
  disabled,
  onChangeFn,
  inputClassName,
}: InputFieldProps<T>) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, fieldName);

  return (
    <div className={`flex w-full flex-col gap-1 ${className}`}>
      <div className="relative flex items-center">
        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          {...(register ? register(fieldName) : {})}
          onChange={(e) => {
            onChangeFn?.(e.target.value);
            setValueFn?.(e.target.value);
          }}
          className={`mt-3 w-full rounded-md border px-3 py-2 transition outline-none ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"} ${inputClassName || ""}`}
          {...other}
        />
      </div>

      {error && <p className="mt-1 text-xs text-red-500">{error?.message}</p>}
    </div>
  );
}
