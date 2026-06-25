'use client';
import { useState } from 'react';
import { useLocale } from 'next-intl';

const API = process.env.NEXT_PUBLIC_API_URL || 'https://haithem-fourniture-backend-production.up.railway.app';

export default function DevisPage() {
  const locale = useLocale();
  const [form, setForm] = useState({
    name: '', phone: '', email: '', wilaya: '', type: '', dimensions: '', budget: '', message: ''
  });
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
    } catch {}
    setSending(false);
  };

  const L = (ar: string, fr: string) => locale === 'ar' ? ar : fr;

  const TYPES_AR = ['طاولة سفرة', 'أريكة', 'ثريا', 'ديكور', 'أخرى'];
  const TYPES_FR = ['Table de salle à manger', 'Canapé', 'Lustre', 'Décoration', 'Autre'];
  const WILAYAS = ['أدرار','الشلف','الأغواط','أم البواقي','باتنة','بجاية','بسكرة','بشار','البليدة','البويرة','تمنراست','تبسة','تلمسان','تيارت','تيزي وزو','الجزائر','الجلفة','جيجل','سطيف','سعيدة','سكيكدة','سيدي بلعباس','عنابة','قالمة','قسنطينة','المدية','مستغانم','المسيلة','معسكر','ورقلة','وهران','البيض','إليزي','برج بوعريريج','بومرداس','الطارف','تندوف','تيسمسيلت','الوادي','خنشلة','سوق أهراس','تيبازة','ميلة','عين الدفلى','النعامة','عين تموشنت','غرداية','غليزان','المغير','المنيعة','أولاد جلال','برج باجي مختار','بني عباس','تيميمون','تقرت','جانت','عين صالح'];

  return (
    <div className="min-h-screen bg-[#EDE8D0] pt-16">
      <div className="bg-[#1A1A1A] py-16 text-center px-4">
        <p className="text-[#C9A84C] text-[11px] tracking-[0.3em] uppercase font-medium mb-3">
          {L('مجاني وبدون التزام', 'Gratuit et sans engagement')}
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
          {L('اطلب عرض سعر', 'Demander un devis')}
        </h1>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-8 py-16">
        {sent ? (
          <div className="bg-[#008E47]/10 border border-[#008E47]/30 p-10 text-center">
            <svg className="w-14 h-14 text-[#008E47] mx-auto mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <h2 className="font-display text-2xl font-bold text-dark mb-3">
              {L('تم إرسال طلبك!', 'Demande envoyée !')}
            </h2>
            <p className="text-dark/60 text-[15px]">
              {L('سنتواصل معك خلال 24 ساعة بعرض سعر مفصل.', 'Nous vous contacterons dans les 24h avec un devis détaillé.')}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 shadow-sm">
            <h2 className="font-display text-xl font-bold text-dark mb-6">
              {L('معلوماتك الشخصية', 'Vos informations')}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] text-dark/50 uppercase tracking-wider mb-2">{L('الاسم الكامل', 'Nom complet')} *</label>
                <input required value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))}
                  className="w-full border-b border-[#EDE8D0] focus:border-[#008E47] outline-none py-2 text-[14px] bg-transparent transition-colors" />
              </div>
              <div>
                <label className="block text-[11px] text-dark/50 uppercase tracking-wider mb-2">{L('رقم الهاتف', 'Téléphone')} *</label>
                <input required type="tel" value={form.phone} onChange={e => setForm(f => ({...f, phone: e.target.value}))}
                  className="w-full border-b border-[#EDE8D0] focus:border-[#008E47] outline-none py-2 text-[14px] bg-transparent transition-colors" />
              </div>
            </div>

            <div>
              <label className="block text-[11px] text-dark/50 uppercase tracking-wider mb-2">{L('الولاية', 'Wilaya')} *</label>
              <select required value={form.wilaya} onChange={e => setForm(f => ({...f, wilaya: e.target.value}))}
                className="w-full border-b border-[#EDE8D0] focus:border-[#008E47] outline-none py-2 text-[14px] bg-transparent transition-colors">
                <option value="">{L('اختر الولاية', 'Choisir la wilaya')}</option>
                {WILAYAS.map(w => <option key={w} value={w}>{w}</option>)}
              </select>
            </div>

            <div className="pt-4 border-t border-[#EDE8D0]">
              <h2 className="font-display text-xl font-bold text-dark mb-6">
                {L('تفاصيل الطلب', 'Détails de la demande')}
              </h2>

              <div className="mb-5">
                <label className="block text-[11px] text-dark/50 uppercase tracking-wider mb-3">{L('نوع الأثاث', 'Type de mobilier')} *</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {(locale === 'ar' ? TYPES_AR : TYPES_FR).map((t, i) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setForm(f => ({...f, type: t}))}
                      className={`py-2.5 px-3 text-[13px] border transition-all ${
                        form.type === t ? 'bg-[#008E47] text-white border-[#008E47]' : 'border-[#EDE8D0] text-dark/60 hover:border-[#008E47]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-[11px] text-dark/50 uppercase tracking-wider mb-2">
                  {L('الأبعاد التقريبية (اختياري)', 'Dimensions approximatives (optionnel)')}
                </label>
                <input value={form.dimensions} onChange={e => setForm(f => ({...f, dimensions: e.target.value}))}
                  placeholder={L('مثال: 200×90 سم', 'Ex: 200×90 cm')}
                  className="w-full border-b border-[#EDE8D0] focus:border-[#008E47] outline-none py-2 text-[14px] bg-transparent transition-colors placeholder:text-dark/20" />
              </div>

              <div>
                <label className="block text-[11px] text-dark/50 uppercase tracking-wider mb-2">
                  {L('تفاصيل إضافية', 'Détails supplémentaires')}
                </label>
                <textarea rows={4} value={form.message} onChange={e => setForm(f => ({...f, message: e.target.value}))}
                  placeholder={L('أوصف ما تريد بالتفصيل...', 'Décrivez votre projet en détail...')}
                  className="w-full border-b border-[#EDE8D0] focus:border-[#008E47] outline-none py-2 text-[14px] bg-transparent transition-colors resize-none placeholder:text-dark/20" />
              </div>
            </div>

            <button type="submit" disabled={sending}
              className="w-full bg-[#008E47] text-white py-4 text-[14px] font-medium tracking-wide hover:bg-[#006B35] transition-all disabled:opacity-50 mt-4">
              {sending ? '...' : L('إرسال الطلب', 'Envoyer la demande')}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
