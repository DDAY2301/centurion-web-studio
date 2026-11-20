'use client';

import { useState, type FormEvent, type ReactNode } from 'react';

type Props = {
  locale: 'sl' | 'en';
  className?: string;
  children: ReactNode;
};

export default function InteractiveForm({ locale, className, children }: Props) {
  const [pending, setPending] = useState(false);
  const [notice, setNotice] = useState<{ error: boolean; text: string } | null>(null);
  const isSl = locale === 'sl';

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const form = event.currentTarget;
    const values = new FormData(form);
    const data: Record<string, unknown> = Object.fromEntries(values.entries());
    // HTML checkboxes serialize to "on", but the server expects a boolean.
    data.consent = values.get('consent') === 'on' || values.get('consent') === 'true';
    setPending(true);
    setNotice(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const payload: unknown = await response.json().catch(() => null);
      const parsed = payload && typeof payload === 'object'
        ? (payload as { success?: boolean; error?: string })
        : null;

      if (!response.ok || parsed?.success !== true) {
        setNotice({
          error: true,
          text: isSl
            ? 'Oddaja trenutno ni na voljo. Prosimo, poskusite pozneje.'
            : 'Enquiries are currently unavailable. Please try again later.',
        });
        return;
      }

      form.reset();
      setNotice({
        error: false,
        text: isSl ? 'Povpraševanje je bilo sprejeto.' : 'Your enquiry was accepted.',
      });
    } catch {
      setNotice({
        error: true,
        text: isSl ? 'Povezava trenutno ni na voljo.' : 'The service is currently unavailable.',
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className} aria-busy={pending}>
      {children}
      <p role="status" aria-live="polite" className={notice?.error ? 'text-red-700' : 'text-accent-700'}>
        {notice?.text ?? (pending ? (isSl ? 'Pošiljanje ...' : 'Sending ...') : '')}
      </p>
    </form>
  );
}
