import { ButtonProps } from "@/types/ButtonProps";

export default function Button({
    name,
    type = "button",
    variant="primary",
    isLoading
}:ButtonProps) {

    return (
        <button
            type={type}
            className={`w-full px-4 py-2 my-3 mt-5 rounded mx-auto ${
               variant && variant === "primary" ? "bg-blue-500 text-white" :
               variant && variant === "secondary" ? "bg-gray-500 text-white" :
               variant && variant === "danger" ? "bg-red-500 text-white" : "bg-gray-300 text-black"
            } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isLoading}
        >
            {isLoading ? "Loading..." : name || "Button"}
        </button>
    );
}