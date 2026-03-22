"use client";

import { useState } from "react";

const inputBase =
  "w-full rounded-xl border border-sand/60 bg-white/50 backdrop-blur-sm px-6 py-5 text-earth text-xl placeholder:text-cocoa/40 focus:outline-none focus:border-terracotta/40 focus:ring-2 focus:ring-terracotta/10 transition-all duration-300 serif-head";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", nights: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", nights: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name & Email row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <label className="block text-cocoa/50 text-base uppercase tracking-wider mb-2 ml-1">Име</label>
          <input
            required
            placeholder="Вашето име"
            value={form.name}
            onChange={update("name")}
            className={inputBase}
          />
        </div>
        <div className="relative">
          <label className="block text-cocoa/50 text-base uppercase tracking-wider mb-2 ml-1">Имейл</label>
          <input
            required
            type="email"
            placeholder="email@example.com"
            value={form.email}
            onChange={update("email")}
            className={inputBase}
          />
        </div>
      </div>

      {/* Nights */}
      <div>
        <label className="block text-cocoa/50 text-base uppercase tracking-wider mb-2 ml-1">Брой нощувки</label>
        <input
          required
          type="text"
          placeholder="напр. 5"
          value={form.nights}
          onChange={update("nights")}
          className={inputBase}
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-cocoa/50 text-base uppercase tracking-wider mb-2 ml-1">Съобщение</label>
        <textarea
          required
          rows={4}
          placeholder="Разкажете ни за вашето планирано приключение..."
          value={form.message}
          onChange={update("message")}
          className={`${inputBase} resize-none`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-3 rounded-full bg-orange border border-orange text-white text-sm tracking-widest uppercase disabled:opacity-50"
      >
        {status === "sending" ? "Изпращане..." : "ИЗПРАТИ СЪОБЩЕНИЕ"}
      </button>

      {/* Status messages */}
      {status === "sent" && (
        <div className="flex items-center justify-center gap-2 py-3 rounded-xl bg-sage/10 border border-sage/30">
          <div className="w-2 h-2 rounded-full bg-sage" />
          <p className="text-sage text-sm font-medium">Съобщението беше изпратено успешно!</p>
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center justify-center gap-2 py-3 rounded-xl bg-terracotta/10 border border-terracotta/30">
          <div className="w-2 h-2 rounded-full bg-terracotta" />
          <p className="text-terracotta text-sm font-medium">Грешка при изпращане. Опитайте отново.</p>
        </div>
      )}
    </form>
  );
}
