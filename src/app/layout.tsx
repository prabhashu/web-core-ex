import type { Metadata } from 'next';
import Script from 'next/script';
import '../index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ScrollReset from '../components/ScrollReset';
import CookieConsent from '../components/CookieConsent';

import GeminiChatLoader from '../components/GeminiChatLoader';
import HydrationOverlayFix from '../components/HydrationOverlayFix';

export const metadata: Metadata = {
  metadataBase: new URL('https://webcoreex.com'),
  title: {
    default: 'Web Core EX | #1 Web Design & Digital Marketing for Startups',
    template: '%s | Web Core EX'
  },
  description: 'Launch your startup with Web Core EX. We provide Silicon Valley quality web design, SEO, and digital marketing at smart prices. Trusted by 150+ startups.',
  keywords: ['Startup SEO services', 'Web design Sri Lanka', 'Affordable web design', 'Digital marketing for startups', 'Low cost high quality web design', 'Startup digital agency', 'Web development Sri Lanka'],
  authors: [{ name: 'Web Core EX Team' }],
  creator: 'Web Core EX',
  publisher: 'Web Core EX',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Web Core EX | #1 Web Design & Digital Marketing for Startups',
    description: 'Silicon Valley quality web design, SEO, and digital marketing for startups. Save 60% on costs without compromising quality.',
    url: 'https://webcoreex.com',
    siteName: 'Web Core EX',
    images: [
      {
        url: 'https://webcoreex.com/og-image.jpg', // Use a high-quality OG image
        width: 1200,
        height: 630,
        alt: 'Web Core EX - Digital Agency for Startups',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Core EX | Custom Web Design & Marketing for Startups',
    description: 'Silicon Valley quality web design and digital marketing for startups at smart prices.',
    images: ['https://webcoreex.com/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
          {/* Google Tag Manager - Optimized */}
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5HP9V58G');`
            }}
          />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
          {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Web Core EX",
    "image": "https://webcoreex.com/og-image.jpg",
    "description": "Silicon Valley quality web design and digital marketing for startups at smart prices.",
    "url": "https://webcoreex.com",
    "telephone": "+94728725881",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Colombo",
      "addressLocality": "Colombo",
      "addressRegion": "Western Province",
      "postalCode": "00100",
      "addressCountry": "LK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 6.9271,
      "longitude": 79.8612
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.linkedin.com/company/web-core-ex",
      "https://facebook.com/webcoreex",
      "https://www.instagram.com/webcoreex/"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Startup Web Design"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Optimization"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Social Media Marketing"
        }
      }
    ]
  }
          `}} suppressHydrationWarning />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative" suppressHydrationWarning>
        <HydrationOverlayFix />
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5HP9V58G"
        height="0" width="0" style={{display:'none', visibility:'hidden'}}></iframe></noscript>
        
        <ScrollReset />
        <ScrollToTop />
        <Navbar />
        <CookieConsent />

        
        {children}
        
        <Footer />
        <GeminiChatLoader />
        
        {/* TrustPilot Widget - Lazy Loaded */}
        <Script 
          src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" 
          strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}
