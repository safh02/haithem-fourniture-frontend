'use client';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

const API = process.env.NEXT_PUBLIC_API_URL || 'https://haithem-fourniture-backend-production.up.railway.app';

export default function ContactPage() {
  const locale = useLocale();
  const t = useTranslations('contact');
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch(`${API}/api/quotes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, locale }),
      });
      setSent(true);
    } catch { }
    setSending(false);
  };

  return (
    <div className="min-h-screen bg-[#EDE8D0] pt-16">
      <div className="bg-[#1A1A1A] py-16 text-center px-4">
        <p className="text-[#C9A84C] text-[11px] tracking-[0.3em] uppercase font-medium mb-3">{t('subtitle')}</p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">{t('title')}</h1>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Info */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h3 className="font-display text-xl font-bold text-dark mb-4">{t('showroom')}</h3>
            <div className="space-y-3 text-[14px] text-dark/70">
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-[#008E47] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>{t('address')}</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-[#008E47] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>{t('hours')}</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-[#008E47] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span className="text-[#008E47] font-medium">TODO: +213 XXX XXX XXX</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display text-lg font-bold text-dark mb-4">
              {locale === 'ar' ? 'تابعنا' : 'Suivez-nous'}
            </h3>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=100077938660833" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 border border-[#1A1A1A]/20 flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all text-dark/60">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/haithem_fourniture/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 border border-[#1A1A1A]/20 flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all text-dark/60">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          {sent ? (
            <div className="bg-[#008E47]/10 border border-[#008E47]/30 p-8 text-center">
              <svg className="w-12 h-12 text-[#008E47] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <h3 className="font-display text-xl font-bold text-dark mb-2">
                {locale === 'ar' ? 'شكراً لك!' : 'Message envoyé !'}
              </h3>
              <p className="text-dark/60 text-[14px]">
                {locale === 'ar' ? 'سنتواصل معك قريباً.' : 'Nous vous répondrons très prochainement.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[12px] text-dark/60 uppercase tracking-wider mb-2">{t('form_name')} *</label>
                  <input
                    required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full bg-white border-0 border-b-2 border-[#EDE8D0] focus:border-[#008E47] outline-none px-0 py-3 text-[14px] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[12px] text-dark/60 uppercase tracking-wider mb-2">{t('form_phone')} *</label>
                  <input
                    required type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full bg-white border-0 border-b-2 border-[#EDE8D0] focus:border-[#008E47] outline-none px-0 py-3 text-[14px] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[12px] text-dark/60 uppercase tracking-wider mb-2">{t('form_email')}</label>
                <input
                  type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full bg-white border-0 border-b-2 border-[#EDE8D0] focus:border-[#008E47] outline-none px-0 py-3 text-[14px] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[12px] text-dark/60 uppercase tracking-wider mb-2">{t('form_message')} *</label>
                <textarea
                  required rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full bg-white border-0 border-b-2 border-[#EDE8D0] focus:border-[#008E47] outline-none px-0 py-3 text-[14px] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="bg-[#008E47] text-white px-10 py-4 text-[14px] font-medium tracking-wide hover:bg-[#006B35] transition-all disabled:opacity-50 w-full sm:w-auto"
              >
                {sending ? '...' : t('form_submit')}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
