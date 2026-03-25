import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  hint?: string;
}

export function Input({ label, id, hint, className = "", ...props }: InputProps) {
  return (
    <div className="form-field">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input className={`form-input ${className}`.trim()} id={id} {...props} />
      {hint ? <p className="form-hint">{hint}</p> : null}
    </div>
  );
}
