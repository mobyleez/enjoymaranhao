import React from 'react';

interface AdminFieldProps {
  label: string;
  hint?: string;
  children: React.ReactNode;
}

const AdminField = ({ label, hint, children }: AdminFieldProps) => {
  return (
    <div className="space-y-1.5">
      <div className="flex items-baseline gap-2">
        <label className="text-xs font-semibold text-foreground/80 tracking-[1px] uppercase">{label}</label>
        {hint && <span className="text-[11px] text-muted-foreground">{hint}</span>}
      </div>
      {children}
    </div>
  );
};

export default AdminField;
