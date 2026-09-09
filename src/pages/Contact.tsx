import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, Mail, CheckCircle2 } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { ScrollReveal } from '../components/ScrollReveal';
import { GlassButton } from '../components/GlassButton';
import { GYM_CONTACT } from '../data/config';

const CONTACT_OPTIONS = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: GYM_CONTACT.phoneDisplay,
    href: GYM_CONTACT.whatsappUrl,
    external: true,
  },
  {
    icon: Phone,
    label: 'Call',
    value: GYM_CONTACT.phoneDisplay,
    href: `tel:${GYM_CONTACT.phoneRaw}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: GYM_CONTACT.email,
    href: `mailto:${GYM_CONTACT.email}`,
  },
  {
    icon: MapPin,
    label: 'Visit',
    value: `${GYM_CONTACT.addressLine1}, ${GYM_CONTACT.addressLine2}`,
    href: GYM_CONTACT.mapsUrl,
    external: true,
  },
];

const inputClasses =
  'w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-crimson-2 focus:bg-white/[0.06] transition-colors';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', goal: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend is connected yet. Structured to POST to an API endpoint
    // (e.g. fetch('/api/enquiries', { method: 'POST', body: JSON.stringify(form) }))
    // once one exists.
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Start The
            <br />
            Conversation.
          </>
        }
        supporting="Have questions about training, membership or getting started?"
        image="/images/editorial-silhouette.jpg"
      />

      <section className="bg-ink py-24 sm:py-32">
        <div className="container-edit grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* CONTACT OPTIONS */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {CONTACT_OPTIONS.map((opt, i) => (
              <ScrollReveal key={opt.label} delay={i * 0.06}>
                <a
                  href={opt.href}
                  target={opt.external ? '_blank' : undefined}
                  rel={opt.external ? 'noopener noreferrer' : undefined}
                  className="liquid-glass flex items-center gap-4 rounded-2xl bg-white/[0.03] px-6 py-5 hover:bg-white/[0.06] transition-colors"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-crimson/15 text-crimson-2 shrink-0">
                    <opt.icon className="w-5 h-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="label-eyebrow text-white/40">{opt.label}</span>
                    <span className="text-white font-medium">{opt.value}</span>
                  </span>
                </a>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.3} className="mt-2">
              <div className="liquid-glass rounded-2xl bg-white/[0.03] px-6 py-5">
                <span className="label-eyebrow text-white/40">Hours</span>
                <p className="text-white/70 text-sm mt-2">{GYM_CONTACT.hours.weekdays}</p>
                <p className="text-white/70 text-sm">{GYM_CONTACT.hours.sunday}</p>
              </div>
            </ScrollReveal>
          </div>

          {/* FORM */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              {submitted ? (
                <div className="liquid-glass flex flex-col items-center text-center gap-4 rounded-2xl bg-white/[0.03] px-8 py-20">
                  <CheckCircle2 className="w-12 h-12 text-crimson-2" />
                  <h3 className="text-2xl uppercase font-normal">Enquiry Sent</h3>
                  <p className="text-white/55 font-light max-w-sm">
                    Thanks for reaching out. Our team will get back to you shortly — or chat with
                    us on WhatsApp right now for an instant response.
                  </p>
                  <GlassButton variant="glass" href={GYM_CONTACT.whatsappUrl} external icon={<MessageCircle className="w-4 h-4" />}>
                    Chat On WhatsApp
                  </GlassButton>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="label-eyebrow text-white/40">Name</label>
                      <input id="name" name="name" required value={form.name} onChange={handleChange} className={inputClasses} placeholder="Your full name" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="label-eyebrow text-white/40">Phone</label>
                      <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} className={inputClasses} placeholder="Your phone number" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="label-eyebrow text-white/40">Email</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClasses} placeholder="you@email.com" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="goal" className="label-eyebrow text-white/40">Training Goal</label>
                    <input id="goal" name="goal" value={form.goal} onChange={handleChange} className={inputClasses} placeholder="e.g. Strength, Fat Loss, Performance" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="label-eyebrow text-white/40">Message</label>
                    <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} className={`${inputClasses} resize-none`} placeholder="Tell us a bit about what you're looking for" />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 self-start inline-flex items-center gap-2.5 px-8 py-4 bg-white text-black text-sm font-semibold uppercase tracking-[0.15em] rounded-full hover:bg-white/90 transition-colors"
                  >
                    Send Enquiry
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};
