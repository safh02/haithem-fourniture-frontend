'use client';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

export default function AboutPage() {
  const locale = useLocale();
  const t = useTranslations('about');

  return (
    <div className="min-h-screen bg-[#EDE8D0] pt-16">
      {/* Header */}
      <div className="bg-[#1A1A1A] py-16 text-center px-4">
        <p className="text-[#C9A84C] text-[11px] tracking-[0.3em] uppercase font-medium mb-3">
          {locale === 'ar' ? 'حيتم للأثاث' : 'Haithem Fourniture'}
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">{t('title')}</h1>
      </div>

      {/* Story */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-[#008E47] text-[11px] tracking-[0.3em] uppercase font-medium mb-4">{t('story_title')}</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-dark mb-6 leading-tight">
              {locale === 'ar'
                ? 'علامة جزائرية متخصصة في الأثاث الفاخر'
                : 'Une marque algérienne spécialisée dans le mobilier de luxe'}
            </h2>
            <p className="text-dark/70 text-[15px] leading-relaxed mb-4">{t('story')}</p>
            <p className="text-dark/70 text-[15px] leading-relaxed">
              {locale === 'ar'
                ? 'نخدم عملاءنا من معرضنا في العلمة — سطيف، مع توصيل وتركيب لجميع ولايات الجزائر.'
                : 'Nous servons nos clients depuis notre showroom à El-Eulma — Sétif, avec livraison et installation dans toutes les wilayas d\'Algérie.'}
            </p>
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop"
              alt="Haithem Fourniture showroom"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <div className="w-16 h-px bg-[#C9A84C] mx-auto mb-8" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-dark">{t('values_title')}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { icon: '◇', ar_title: 'الجودة', fr_title: 'Qualité', ar: 'نختار أجود المواد لكل قطعة أثاث', fr: 'Nous sélectionnons les meilleurs matériaux pour chaque pièce' },
            { icon: '◈', ar_title: 'الأصالة', fr_title: 'Authenticité', ar: 'تصاميم أصيلة تجمع بين التراث والعصرية', fr: 'Designs authentiques alliant tradition et modernité' },
            { icon: '◉', ar_title: 'الخدمة', fr_title: 'Service', ar: 'نرافقك من الاختيار إلى التركيب', fr: 'Nous vous accompagnons du choix à l\'installation' },
          ].map((v) => (
            <div key={v.ar_title} className="text-center">
              <span className="text-3xl text-[#C9A84C] block mb-4">{v.icon}</span>
              <h3 className="font-display text-xl font-bold text-dark mb-3">
                {locale === 'ar' ? v.ar_title : v.fr_title}
              </h3>
              <p className="text-dark/60 text-[14px] leading-relaxed">
                {locale === 'ar' ? v.ar : v.fr}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 pt-12 border-t border-[#C9A84C]/20">
          <Link
            href={`/${locale}/contact`}
            className="bg-[#008E47] text-white px-10 py-4 text-[14px] font-medium tracking-wide hover:bg-[#006B35] transition-all"
          >
            {locale === 'ar' ? 'تواصل معنا' : 'Nous contacter'}
          </Link>
        </div>
      </div>
    </div>
  );
}
