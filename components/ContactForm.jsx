"use client";

import { useState } from "react";
import { WaveDivider } from "./WaveDivider";

const inputBase =
  "w-full rounded-xl border border-sand/60 bg-white/50 backdrop-blur-sm px-4 py-3 md:px-6 md:py-5 text-earth text-base md:text-xl placeholder:text-cocoa/40 focus:outline-none focus:border-terracotta/40 focus:ring-2 focus:ring-terracotta/10 transition-all duration-300 serif-head";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", nights: "", message: "" });
  const [honeypot, setHoneypot] = useState("");
  const [loadedAt] = useState(() => Date.now());
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _hp: honeypot, _t: loadedAt }),
      });

      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", nights: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', tabIndex: -1 }}>
        <input id="_hp" name="_hp" type="text" autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>
      {/* Name & Email row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <div className="relative">
          <label htmlFor="contact-name" className="block text-cocoa text-sm md:text-base uppercase tracking-wider mb-1.5 md:mb-2 ml-1">Име</label>
          <input
            id="contact-name"
            required
            placeholder="Вашето име"
            value={form.name}
            onChange={update("name")}
            className={inputBase}
          />
        </div>
        <div className="relative">
          <label htmlFor="contact-email" className="block text-cocoa text-sm md:text-base uppercase tracking-wider mb-1.5 md:mb-2 ml-1">Имейл</label>
          <input
            id="contact-email"
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
        <label htmlFor="contact-nights" className="block text-cocoa text-sm md:text-base uppercase tracking-wider mb-1.5 md:mb-2 ml-1">Брой нощувки</label>
        <input
          id="contact-nights"
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
        <label htmlFor="contact-message" className="block text-cocoa text-sm md:text-base uppercase tracking-wider mb-1.5 md:mb-2 ml-1">Съобщение</label>
        <textarea
          id="contact-message"
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
        className="w-full py-2.5 md:py-3 rounded-full bg-orange border border-orange text-white text-xs md:text-sm tracking-widest uppercase disabled:opacity-50"
      >
        {status === "sending" ? "Изпращане..." : "ИЗПРАТИ СЪОБЩЕНИЕ"}
      </button>

      {/* Status messages */}
      <div aria-live="polite" role="status">
      {status === "sent" && (
        <div className="flex items-center justify-center gap-2 py-3 rounded-xl bg-sage/10 border border-sage/30">
          <div className="w-2 h-2 rounded-full bg-sage" />
          <p className="text-sage text-xs md:text-sm font-medium">Съобщението беше изпратено успешно!</p>
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center justify-center gap-2 py-3 rounded-xl bg-terracotta/10 border border-terracotta/30">
          <div className="w-2 h-2 rounded-full bg-terracotta" />
          <p className="text-terracotta text-xs md:text-sm font-medium">Грешка при изпращане. Опитайте отново.</p>
        </div>
      )}
      </div>
    </form>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="relative pb-[160px] overflow-hidden" style={{ background: 'var(--beige-bg)' }}>
      <div className="container-page">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <p className="script-head text-4xl md:text-5xl text-terracotta mb-1">
              Свържете се
            </p>
            <h2 className="serif-head text-4xl md:text-6xl text-earth leading-tight">
              с нас
            </h2>
            <div className="flex gap-2.5 justify-center mt-6" aria-hidden="true">
              <div className="w-3 h-3 rounded-full bg-terracotta" />
              <div className="w-3 h-3 rounded-full bg-desert-rose" />
              <div className="w-3 h-3 rounded-full bg-sand" />
              <div className="w-3 h-3 rounded-full bg-sage" />
              <div className="w-3 h-3 rounded-full bg-cream border border-sand/50" />
            </div>
            <p className="text-cocoa max-w-lg mx-auto mt-6 text-lg md:text-xl">
              Имате въпроси или искате да резервирате? Пишете ни!
            </p>
          </div>

          {/* Form card */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-sand/60 shadow-boho p-5 md:p-10">
            <ContactForm />
          </div>

        </div>
      </div>

      {/* Bottom wave → Footer */}
      <WaveDivider position="bottom" fill="var(--coffee)" height={120} overlap={-2} />
    </section>
  );
}
