import { Analytics } from '@vercel/analytics/react';
import { Roboto_Slab, Open_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/globals.css';

const robotoSlab = Roboto_Slab({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'ChemImport - Your Trusted Chemical Importer',
  description: 'Sourcing specialty chemicals from across the globe',
  // ... (keep the rest of the metadata as is)
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${openSans.className} text-gray-800`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}