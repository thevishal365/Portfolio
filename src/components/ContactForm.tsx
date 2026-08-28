import React, { useId, useState } from 'react';

interface ContactFormProps {
  endpoint: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INPUT_CLASS =
  'mt-1.5 w-full rounded-xl border border-white/10 bg-slate-900/60 px-3.5 py-2.5 text-[16px] text-slate-200 placeholder:text-slate-500 backdrop-blur-md transition-all duration-300 focus:outline-none focus-visible:border-emerald-500/40 focus-visible:ring-2 focus-visible:ring-emerald-400 disabled:cursor-not-allowed disabled:opacity-60';

const LABEL_CLASS = 'block text-[13px] font-medium tracking-wide text-slate-300';

const SEND_BUTTON_CLASS =
  'inline-flex min-h-11 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-slate-900/60 px-5 py-1.5 text-[13px] font-medium tracking-wide text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-slate-800/80 hover:text-white hover:shadow-[0_0_16px_rgba(16,185,129,0.15)] active:translate-y-0 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0';

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
    <section id="contact" className="mt-14 scroll-mt-24" aria-labelledby="contact-heading">
      <h2
        id="contact-heading"
        className="text-[38px] md:text-[48px] lg:text-[58px] font-extrabold text-white tracking-tight mb-6 leading-[1.05]"
      >
        Contact
      </h2>
      <div aria-hidden="true" className="mb-7 h-[1px] w-20 bg-gradient-to-r from-emerald-400 via-sky-400 to-transparent" />

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
            <p id={`${nameId}-error`} className="mt-1.5 text-[13px] text-rose-400">
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
            <p id={`${emailId}-error`} className="mt-1.5 text-[13px] text-rose-400">
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
            className={`${INPUT_CLASS} min-h-[132px] resize-y`}
          />
          {fieldErrors.message && (
            <p id={`${messageId}-error`} className="mt-1.5 text-[13px] text-rose-400">
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
          className={`min-h-5 text-[14px] leading-relaxed ${
            status === 'success' ? 'text-emerald-300' : status === 'error' ? 'text-rose-400' : 'text-transparent'
          }`}
        >
          {statusMessage || '\u00a0'}
        </p>
      </form>
    </section>
  );
};
