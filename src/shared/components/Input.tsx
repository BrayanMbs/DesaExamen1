import type { InputHTMLAttributes } from "react";

export function Input({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>): JSX.Element {
  return (
    <input
      className={`min-h-10 rounded-md border border-slate-700 bg-slate-950 px-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300 ${className}`}
      {...props}
    />
  );
}
