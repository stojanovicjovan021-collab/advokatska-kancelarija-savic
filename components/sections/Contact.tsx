'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { RevealText } from '@/components/ui/RevealText';
import { FloatingField } from '@/components/ui/FloatingField';
import { buttonVariants } from '@/components/ui/Button';
import { contactInfo } from '@/lib/data';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialState: FormState = { name: '', email: '', phone: '', message: '' };

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  function validate(): boolean {
    const nextErrors: Partial<FormState> = {};

    if (form.name.trim().length < 2)
      nextErrors.name = 'Унесите ваше пуно име.';

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      nextErrors.email = 'Унесите исправну имејл адресу.';

    if (form.message.trim().length < 10)
      nextErrors.message = 'Опишите укратко ваш случај (мин. 10 карактера).';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      setForm(initialState);
    }, 1200);
  }

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(contactInfo.address)}&output=embed`;

  return (
    <section id="contact" className="bg-ink py-28 text-paper sm:py-36">
      <div className="container-luxury">

        <span className="eyebrow-rule text-xs uppercase tracking-[0.25em] text-gold-300">
          Контакт
        </span>

        <RevealText
          as="h2"
          text="Закажите консултације и разговарајмо о вашем случају."
          className="mt-6 max-w-2xl font-display text-3xl leading-[1.15] text-paper balance sm:text-4xl"
        />

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="relative min-h-[70px]">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-start gap-4 rounded-sm border border-gold/30 bg-gold/10 p-8"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-ink">
                      <Check size={18} />
                    </span>

                    <div>
                      <h3 className="font-display text-xl text-paper">
                        Порука је успешно послата
                      </h3>

                      <p className="mt-2 text-sm text-paper/60">
                        Наш тим ће вам одговорити у току наредног радног дана.
                      </p>
                    </div>

                    <button
                      onClick={() => setStatus('idle')}
                      className="text-sm text-gold-200 underline underline-offset-4"
                    >
                      Пошаљите још једну поруку
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                      <FloatingField
                        label="Име и презиме"
                        name="name"
                        required
                        value={form.name}
                        onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                        error={errors.name}
                      />

                      <FloatingField
                        label="Телефон"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                      />
                    </div>

                    <FloatingField
                      label="Имејл адреса"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                      error={errors.email}
                    />

                    <FloatingField
                      label="Опишите ваш случај"
                      name="message"
                      as="textarea"
                      required
                      value={form.message}
                      onChange={(v) => setForm((f) => ({ ...f, message: v }))}
                      error={errors.message}
                    />

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className={buttonVariants({
                        variant: 'gold',
                        size: 'lg',
                        className: 'w-full sm:w-auto',
                      })}
                    >
                      {status === 'submitting'
                        ? 'Слање у току…'
                        : 'Пошаљите поруку'}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="overflow-hidden rounded-sm border border-paper/10">
              <iframe
                title="Локација адвокатске канцеларије"
                src={mapSrc}
                className="h-64 w-full grayscale invert-[0.92] contrast-[1.1] sm:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin
                  size={20}
                  className="mt-0.5 shrink-0 text-gold-300"
                  strokeWidth={1.5}
                />
                <span className="text-sm leading-relaxed text-paper/70">
                  {contactInfo.address}
                </span>
              </li>

             <li className="flex items-start gap-4">
  <Phone
    size={20}
    className="mt-0.5 shrink-0 text-gold-300"
    strokeWidth={1.5}
  />

  <div className="flex flex-col">
    <a
      href="tel:+38163401104"
      className="text-sm text-paper/70 hover:text-gold-200"
    >
      063 40 11 04
    </a>

    <a
      href="tel:+381213824048"
      className="text-sm text-paper/70 hover:text-gold-200"
    >
      021 382 40 48
    </a>
  </div>
</li>

              <li className="flex items-start gap-4">
                <Mail
                  size={20}
                  className="mt-0.5 shrink-0 text-gold-300"
                  strokeWidth={1.5}
                />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-paper/70 hover:text-gold-200"
                >
                  {contactInfo.email}
                </a>
              </li>

              <li className="flex items-start gap-4">
                <Clock
                  size={20}
                  className="mt-0.5 shrink-0 text-gold-300"
                  strokeWidth={1.5}
                />
                <span className="text-sm leading-relaxed text-paper/70">
                  {contactInfo.workingHours}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
