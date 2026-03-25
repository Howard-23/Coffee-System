import type { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  hint?: string;
}

export function Textarea({ label, id, hint, className = "", ...props }: TextareaProps) {
  return (
    <div className="form-field">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <textarea className={`form-input form-textarea ${className}`.trim()} id={id} {...props} />
      {hint ? <p className="form-hint">{hint}</p> : null}
    </div>
  );
}
