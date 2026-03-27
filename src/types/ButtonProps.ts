export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name?: string;
    variant?: "primary" | "secondary" | "danger";
    isLoading?: boolean;
}