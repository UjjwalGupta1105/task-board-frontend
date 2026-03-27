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
        formState: { errors }
    } = useFormContext();

    const error = get(errors, fieldName);

  return (
    <div className={`flex flex-col gap-1 w-full ${className}`}>
      
      <div className="relative flex items-center">

        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          
          {...(register
            ? register(fieldName)
            : {})}

          onChange={(e) => {
            onChangeFn?.(e.target.value);
            setValueFn?.(e.target.value);
          }}

          className={`w-full border rounded-md px-3 my-5 py-2 outline-none transition
            ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}
            ${inputClassName || ""}`}

          {...other}
        />
      </div>

      {error && (
        <p className="text-red-500 text-xs mt-1">
          {error?.message}
        </p>
      )}
    </div>
  );
}