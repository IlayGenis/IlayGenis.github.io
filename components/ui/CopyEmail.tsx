"use client";

import { useState } from "react";

// Progressive enhancement: without JavaScript the address is still visible
// and selectable next to this button.
export function CopyEmail({
  email,
  label,
  done,
}: {
  email: string;
  label: string;
  done: string;
}) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="copy-email"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2000);
        } catch {
          window.prompt(label, email);
        }
      }}
      aria-live="polite"
    >
      {copied ? done : label}
    </button>
  );
}
