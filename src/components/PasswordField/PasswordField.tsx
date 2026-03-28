"use client";
import { FieldValues, get, useFormContext } from "react-hook-form";
import { InputFieldProps } from "@/types/InputFieldProps";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

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
  } = useFormContext<T>();

  const error = get(errors, fieldName);
  const [show, setShow] = useState(false);

  return (
    <div className={`flex w-full flex-col gap-1 ${className}`}>
      <div className="relative mt-2 flex items-center">
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          disabled={disabled}
          {...(register ? register(fieldName) : {})}
          onChange={(e) => {
            onChangeFn?.(e.target.value);
            setValueFn?.(e.target.value);
          }}
          className={`mt-1 w-full rounded-md border px-3 py-2 transition outline-none ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"} ${inputClassName || ""}`}
          {...other}
        />

        <button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          className="absolute top-1/2 right-2 -translate-y-1/4 cursor-pointer"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {error && <p className="mt-1 text-xs text-red-500">{error?.message}</p>}
    </div>
  );
}
