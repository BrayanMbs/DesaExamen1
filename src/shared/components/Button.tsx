import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-cyan-400 text-slate-950 hover:bg-cyan-300",
  secondary: "bg-slate-800 text-slate-100 ring-1 ring-slate-700 hover:bg-slate-700",
  danger: "bg-red-500 text-white hover:bg-red-400",
  ghost: "bg-transparent text-slate-300 ring-1 ring-slate-700 hover:bg-slate-800"
};

export function Button({ className = "", variant = "primary", ...props }: ButtonProps): JSX.Element {
  return (
    <button
      className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}
