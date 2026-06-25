'use client';
import { useTranslations, useLocale } from 'next-intl';

const REVIEWS = [
  {
    name_ar: 'أحمد بن علي',
    name_fr: 'Ahmed Benali',
    wilaya_ar: 'الجزائر العاصمة',
    wilaya_fr: 'Alger',
    text_ar: 'طاولة السفرة التي طلبتها تجاوزت كل توقعاتي. الجودة ممتازة والتوصيل كان في الوقت المحدد. أنصح بشدة!',
    text_fr: 'La table de salle à manger que j\'ai commandée a dépassé toutes mes attentes. Qualité excellente, livraison ponctuelle. Je recommande vivement !',
    rating: 5,
  },
  {
    name_ar: 'فاطمة الزهراء',
    name_fr: 'Fatima Zahra',
    wilaya_ar: 'وهران',
    wilaya_fr: 'Oran',
    text_ar: 'أرائك راقية جداً وتصميم عصري. الفريق كان محترفاً في التركيب. منزلنا أصبح مختلفاً تماماً!',
    text_fr: 'Canapés très élégants et design moderne. L\'équipe était professionnelle pour l\'installation. Notre maison a été complètement transformée !',
    rating: 5,
  },
  {
    name_ar: 'كريم حداد',
    name_fr: 'Karim Haddad',
    wilaya_ar: 'قسنطينة',
    wilaya_fr: 'Constantine',
    text_ar: 'الثريا التي اخترتها تضيف فخامة لا توصف للصالون. سعر منافس مقارنة بالاستيراد وجودة أفضل.',
    text_fr: 'Le lustre que j\'ai choisi ajoute un luxe indescriptible au salon. Prix compétitif par rapport à l\'importation et meilleure qualité.',
    rating: 5,
  },
];

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const locale = useLocale();

  return (
    <section className="py-24 bg-[#EDE8D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="text-center mb-14">
          <p className="text-[#008E47] text-[11px] tracking-[0.3em] uppercase font-medium mb-3">{t('subtitle')}</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-dark">{t('title')}</h2>
          <div className="w-16 h-px bg-[#C9A84C] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-white p-7 border-b-2 border-[#C9A84C]">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-dark/70 text-[14px] leading-relaxed mb-5 italic">
                "{locale === 'ar' ? r.text_ar : r.text_fr}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#008E47]/10 flex items-center justify-center">
                  <span className="text-[#008E47] font-bold text-[13px]">
                    {(locale === 'ar' ? r.name_ar : r.name_fr)[0]}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-dark text-[13px]">{locale === 'ar' ? r.name_ar : r.name_fr}</p>
                  <p className="text-dark/40 text-[11px]">{locale === 'ar' ? r.wilaya_ar : r.wilaya_fr}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
