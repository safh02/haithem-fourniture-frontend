import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const locales = ['ar', 'fr'];

export const metadata: Metadata = {
  title: 'Haithem Fourniture | حيتم للأثاث — Mobilier de luxe en Algérie',
  description: 'أثاث فاخر مصنوع بعناية للمنازل الجزائرية | Mobilier de luxe artisanal — Livraison dans toute l\'Algérie',
  openGraph: {
    title: 'Haithem Fourniture — حيتم للأثاث',
    description: 'الأناقة على مقاسك | L\'élégance taillée pour vous',
    images: ['/og-image.jpg'],
    locale: 'ar_DZ',
    type: 'website',
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) notFound();
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
