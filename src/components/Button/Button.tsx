import { ButtonProps } from "@/types/ButtonProps";

export default function Button({
  name,
  type = "button",
  variant = "primary",
  isLoading,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`mx-auto my-3 mt-5 w-full cursor-pointer rounded px-4 py-2 ${
        variant && variant === "primary"
          ? "bg-blue-500 text-white"
          : variant && variant === "secondary"
            ? "bg-gray-500 text-white"
            : variant && variant === "danger"
              ? "bg-red-500 text-white"
              : "bg-gray-300 text-black"
      } ${isLoading ? "cursor-not-allowed opacity-50" : ""}`}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : name || "Button"}
    </button>
  );
}
