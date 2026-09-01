import React, { useId, useState } from 'react';

interface ContactFormProps {
  endpoint: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INPUT_CLASS =
  'mt-1.5 w-full rounded-md border border-white/10 bg-[#000000] px-3.5 py-2.5 text-[15px] text-slate-200 placeholder:text-slate-500 transition-colors duration-200 focus:outline-none focus:border-slate-500';

const LABEL_CLASS = 'block text-[12px] font-medium uppercase tracking-[0.12em] text-slate-400';

const SEND_BUTTON_CLASS =
  'inline-flex min-h-10 cursor-pointer items-center justify-center rounded-md border border-white/10 bg-transparent px-4 py-2 text-[12px] font-medium uppercase tracking-[0.12em] text-slate-200 transition-colors duration-200 hover:border-slate-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(name: string, email: string, message: string): FieldErrors {
  const errors: FieldErrors = {};

  if (!name.trim()) {
    errors.name = 'Please enter your name.';
  }

  if (!email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!EMAIL_PATTERN.test(email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!message.trim()) {
    errors.message = 'Please write a message.';
  }

  return errors;
}

export const ContactForm: React.FC<ContactFormProps> = ({ endpoint }) => {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  const statusId = useId();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const isSubmitting = status === 'submitting';

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    const errors = validate(name, email, message);
    setFieldErrors(errors);
    setStatus('idle');
    setStatusMessage('');

    if (Object.keys(errors).length > 0) {
      return;
    }

    setStatus('submitting');

    try {
      const formData = new FormData();
      formData.append('name', name.trim());
      formData.append('email', email.trim());
      formData.append('message', message.trim());

      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        setName('');
        setEmail('');
        setMessage('');
        setFieldErrors({});
        setStatus('success');
        setStatusMessage('Message sent. Thank you — I will get back to you soon.');
        return;
      }

      const data: { errors?: { message?: string }[] } = await response.json().catch(() => ({}));
      const serverMessage = data.errors
        ?.map((error) => error.message)
        .filter(Boolean)
        .join(' ');

      setStatus('error');
      setStatusMessage(serverMessage || 'Something went wrong. Please try again.');
    } catch {
      setStatus('error');
      setStatusMessage('Unable to send your message. Please check your connection and try again.');
    }
  };

  return (
    <section id="contact" className="mt-10 scroll-mt-24" aria-labelledby="contact-heading">
      <div className="inline-block">
        <h2 id="contact-heading" className="mb-2 text-[16px] font-semibold uppercase tracking-[0.18em] text-[#FFFFFF]">
          Contact
        </h2>
        <div className="h-px w-full bg-gradient-to-r from-white via-white/50 to-transparent" />
      </div>
      <div className="mt-3" />

      <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-describedby={statusMessage ? statusId : undefined}>
        <div>
          <label htmlFor={nameId} className={LABEL_CLASS}>
            Name
          </label>
          <input
            id={nameId}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
            value={name}
            disabled={isSubmitting}
            onChange={(event) => setName(event.target.value)}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? `${nameId}-error` : undefined}
            className={INPUT_CLASS}
          />
          {fieldErrors.name && (
            <p id={`${nameId}-error`} className="mt-1.5 text-[12px] text-rose-400">
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={emailId} className={LABEL_CLASS}>
            Email
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="Your email"
            required
            value={email}
            disabled={isSubmitting}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? `${emailId}-error` : undefined}
            className={INPUT_CLASS}
          />
          {fieldErrors.email && (
            <p id={`${emailId}-error`} className="mt-1.5 text-[12px] text-rose-400">
              {fieldErrors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={messageId} className={LABEL_CLASS}>
            Message
          </label>
          <textarea
            id={messageId}
            name="message"
            placeholder="Write your message..."
            required
            rows={5}
            value={message}
            disabled={isSubmitting}
            onChange={(event) => setMessage(event.target.value)}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? `${messageId}-error` : undefined}
            className={`${INPUT_CLASS} min-h-[120px] resize-y`}
          />
          {fieldErrors.message && (
            <p id={`${messageId}-error`} className="mt-1.5 text-[12px] text-rose-400">
              {fieldErrors.message}
            </p>
          )}
        </div>

        <button type="submit" className={SEND_BUTTON_CLASS} disabled={isSubmitting} aria-busy={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>

        <p
          id={statusId}
          role="status"
          aria-live="polite"
          className={`min-h-5 text-[13px] leading-relaxed ${
            status === 'success' ? 'text-emerald-300' : status === 'error' ? 'text-rose-400' : 'text-transparent'
          }`}
        >
          {statusMessage || '\u00a0'}
        </p>
      </form>
    </section>
  );
};
