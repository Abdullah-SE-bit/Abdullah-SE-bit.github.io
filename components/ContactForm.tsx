"use client";

import { useId, useState, type FormEvent } from "react";
import { contactForm, profile } from "@/lib/data";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent"; email: string }
  | { state: "error" };

const labelClass =
  "font-mono text-[11px] uppercase tracking-[0.18em] text-faint";
const inputClass =
  "mt-2 block w-full border border-line bg-surface px-4 py-3 text-base text-foreground hover:border-muted focus:border-foreground";

export function ContactForm() {
  const id = useId();
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name"));
    const email = String(data.get("email"));

    // Honeypot: only bots fill the hidden checkbox, so skip the request.
    if (data.get("botcheck")) {
      form.reset();
      setStatus({ state: "sent", email });
      return;
    }

    setStatus({ state: "sending" });
    try {
      const response = await fetch(contactForm.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: contactForm.accessKey,
          subject: `Project discussion from ${name}`,
          name,
          email,
          message: String(data.get("message")),
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message);
      form.reset();
      setStatus({ state: "sent", email });
    } catch {
      setStatus({ state: "error" });
    }
  }

  return (
    <div>
      <h3 className="text-2xl font-medium tracking-[-0.01em] text-foreground md:text-3xl">
        Discuss a project
      </h3>

      <form
        onSubmit={onSubmit}
        className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        <div>
          <label htmlFor={`${id}-name`} className={labelClass}>
            Name
          </label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor={`${id}-email`} className={labelClass}>
            Email
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${id}-message`} className={labelClass}>
            Message
          </label>
          <textarea
            id={`${id}-message`}
            name="message"
            required
            rows={6}
            maxLength={5000}
            className={`${inputClass} resize-y`}
          />
        </div>

        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 sm:col-span-2">
          <button
            type="submit"
            disabled={status.state === "sending"}
            className="border border-foreground px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-foreground hover:bg-foreground hover:text-background disabled:pointer-events-none disabled:opacity-50"
          >
            {status.state === "sending" ? "Sending" : "Send message"}
          </button>

          <p role="status" aria-live="polite" className="text-sm">
            {status.state === "sent" ? (
              <span className="text-foreground">
                Message sent. I&apos;ll reply to {status.email}.
              </span>
            ) : null}
            {status.state === "error" ? (
              <span className="text-muted">
                Couldn&apos;t send your message. Email me at{" "}
                <a
                  href={`mailto:${profile.email}`}
                  className="text-accent underline underline-offset-4"
                >
                  {profile.email}
                </a>{" "}
                instead.
              </span>
            ) : null}
          </p>
        </div>
      </form>
    </div>
  );
}
