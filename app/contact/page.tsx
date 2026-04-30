"use client";
import React, { useState } from "react";
import validator from "validator"; // VALIDATOR: import

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<FormState>>({}); // VALIDATOR: field error state

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setFieldErrors((prev) => ({ ...prev, [e.target.name]: "" })); // VALIDATOR: clear error on change
  };

  // VALIDATOR: entire validate function is new
  const validate = (): boolean => {
    const errors: Partial<FormState> = {};

    if (validator.isEmpty(form.name.trim())) {
      errors.name = "Name is required.";
    } else if (!validator.isLength(form.name.trim(), { min: 2, max: 50 })) {
      errors.name = "Name must be between 2 and 50 characters.";
    }

    if (validator.isEmpty(form.email.trim())) {
      errors.email = "Email is required.";
    } else if (!validator.isEmail(form.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!validator.isEmpty(form.subject.trim()) && !validator.isLength(form.subject.trim(), { max: 100 })) {
      errors.subject = "Subject cannot exceed 100 characters.";
    }

    if (validator.isEmpty(form.message.trim())) {
      errors.message = "Message is required.";
    } else if (!validator.isLength(form.message.trim(), { min: 10, max: 1000 })) {
      errors.message = "Message must be between 10 and 1000 characters.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };
  // VALIDATOR: end validate function

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!validate()) return; // VALIDATOR: run validation before submitting

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // VALIDATOR: sanitize inputs before sending
        body: JSON.stringify({
          name: validator.escape(form.name.trim()),
          email: validator.normalizeEmail(form.email) || form.email,
          subject: validator.escape(form.subject.trim()),
          message: validator.escape(form.message.trim()),
        }),
        // VALIDATOR: end sanitize
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setFieldErrors({}); // VALIDATOR: clear errors on success
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans">
      <main className="max-w-2xl mx-auto px-6 py-24">
        <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">
          Get In Touch
        </p>
        <h1 className="text-4xl font-bold mb-2">Contact Me</h1>
        <p className="text-slate-400 mb-12">
          Have a question or want to work together? Fill out the form below and I&apos;ll get back to you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm text-slate-400 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                // VALIDATOR: red border on error
                className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder-slate-500 focus:outline-none transition-colors ${
                  fieldErrors.name ? "border-red-500" : "border-slate-700 focus:border-cyan-500"
                }`}
              />
              {/* VALIDATOR: error message */}
              {fieldErrors.name && (
                <p className="text-red-400 text-xs mt-1">{fieldErrors.name}</p>
              )}
            </div>
            <div className="flex-1">
              <label className="block text-sm text-slate-400 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                // VALIDATOR: red border on error
                className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder-slate-500 focus:outline-none transition-colors ${
                  fieldErrors.email ? "border-red-500" : "border-slate-700 focus:border-cyan-500"
                }`}
              />
              {/* VALIDATOR: error message */}
              {fieldErrors.email && (
                <p className="text-red-400 text-xs mt-1">{fieldErrors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="What is this about?"
              // VALIDATOR: red border on error
              className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder-slate-500 focus:outline-none transition-colors ${
                fieldErrors.subject ? "border-red-500" : "border-slate-700 focus:border-cyan-500"
              }`}
            />
            {/* VALIDATOR: error message */}
            {fieldErrors.subject && (
              <p className="text-red-400 text-xs mt-1">{fieldErrors.subject}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              placeholder="Your message here..."
              // VALIDATOR: red border on error
              className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                fieldErrors.message ? "border-red-500" : "border-slate-700 focus:border-cyan-500"
              }`}
            />
            {/* VALIDATOR: error message */}
            {fieldErrors.message && (
              <p className="text-red-400 text-xs mt-1">{fieldErrors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-800 disabled:cursor-not-allowed rounded-lg font-semibold text-sm transition-colors"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-center text-cyan-400 font-medium">
              Message sent! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-red-400 font-medium">{errorMsg}</p>
          )}

        </form>
      </main>
    </div>
  );
};

export default Contact;