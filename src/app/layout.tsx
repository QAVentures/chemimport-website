import { Analytics } from '@vercel/analytics/react';
import { Manrope, Roboto, Merriweather } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import footer_shadcn from '@/components/footer_shadcn';
import ChatBot from '@/components/ChatBot';
import Script from 'next/script';
import { cn } from '@/lib/utils';
import '../styles/globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: ['400', '700'],
  variable: '--font-body',
});

const merriweather = Merriweather({ 
  subsets: ['latin'], 
  weight: ['400', '700'] 
});

export const metadata = {
  title: 'KSY Group - Your Trusted Chemical Importer',
  description: 'Sourcing specialty chemicals from across the globe',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="mytheme">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body 
        className={cn(
          'antialiased text-gray-800',
          manrope.variable,
          roboto.variable
        )}
      >
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
        
        <footer_shadcn />
        <ChatBot />
        <Analytics />
      </body>
    </html>
  );
}