"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsLoading(true);
    setStatus("Envoi en cours...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Message envoyé avec succès.");
        form.reset();
      } else {
        setStatus("Erreur lors de l’envoi du message.");
      }
    } catch {
      setStatus("Erreur réseau. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-white px-6 py-24">
      
      {/* Background blur */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-emerald-50 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-2">

        {/* LEFT */}
        <div>
          <p className="text-sm font-semibold uppercase text-emerald-700">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Discutons d’une opportunité ou d’un projet.
          </h2>

          <p className="mt-4 max-w-xl text-gray-600">
            Disponible pour des opportunités en développement web, support
            technique cloud, projets freelance ou collaborations numériques.
          </p>

          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Email</p>
                <p className="text-sm text-gray-600">
                  mahamadoutandjigora03@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Téléphone</p>
                <p className="text-sm text-gray-600">438 887-0332</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Localisation
                </p>
                <p className="text-sm text-gray-600">Montréal, Québec</p>
              </div>
            </div>

          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl shadow-emerald-900/5"
        >
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              Envoyer un message
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Je vous répondrai dès que possible.
            </p>
          </div>

          <div className="grid gap-4">

            <input
              name="name"
              type="text"
              placeholder="Votre nom"
              required
              className="rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-200 focus:bg-white"
            />

            <input
              name="email"
              type="email"
              placeholder="Votre email"
              required
              className="rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-200 focus:bg-white"
            />

            <input
              name="subject"
              type="text"
              placeholder="Sujet"
              className="rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-200 focus:bg-white"
            />

            <textarea
              name="message"
              placeholder="Votre message"
              required
              rows={5}
              className="rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-200 focus:bg-white"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? "Envoi..." : "Envoyer le message"}
              <Send size={18} />
            </button>

            {status && (
              <p className="text-sm font-medium text-emerald-700">
                {status}
              </p>
            )}

          </div>
        </form>

      </div>
    </section>
  );
}