"use client";

import { useState } from "react";

const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];

type Props = {
  id: string;
  name: string;
  required?: boolean;
};

export default function FileInput({ id, name, required }: Props) {
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) {
      setError(null);
      return;
    }
    const extension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(extension)) {
      setError("Format non accepté : merci de joindre un fichier PDF, DOC ou DOCX.");
      e.target.value = "";
      return;
    }
    setError(null);
  }

  return (
    <>
      <input
        type="file"
        id={id}
        name={name}
        accept=".pdf,.doc,.docx"
        required={required}
        onChange={handleChange}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          style={{ color: "var(--rouge)", fontSize: "15px", marginTop: ".4rem" }}
        >
          {error}
        </p>
      )}
    </>
  );
}
