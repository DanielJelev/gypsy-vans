"use client";

import { useState } from "react";

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
    <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl mx-auto">
      <input
        required
        placeholder="Име"
        value={form.name}
        onChange={update("name")}
        className="rounded-lg border border-pebble/60 px-4 py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-coffee/40"
      />
      <input
        required
        type="email"
        placeholder="Имейл"
        value={form.email}
        onChange={update("email")}
        className="rounded-lg border border-pebble/60 px-4 py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-coffee/40"
      />
      <input
        required
        type="number"
        min="1"
        placeholder="Брой нощувки"
        value={form.nights}
        onChange={update("nights")}
        className="rounded-lg border border-pebble/60 px-4 py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-coffee/40"
      />
      <textarea
        required
        rows={4}
        placeholder="Вашето съобщение..."
        value={form.message}
        onChange={update("message")}
        className="rounded-lg border border-pebble/60 px-4 py-3 bg-white/80 resize-none focus:outline-none focus:ring-2 focus:ring-coffee/40"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="px-5 py-3 rounded-full bg-coffee text-white font-bold shadow-soft hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {status === "sending" ? "Изпращане..." : "ИЗПРАТИ"}
      </button>

      {status === "sent" && (
        <p className="text-green-700 text-center text-sm">Съобщението беше изпратено успешно!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-center text-sm">Грешка при изпращане. Опитайте отново.</p>
      )}
    </form>
  );
}
