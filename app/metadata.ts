export const siteConfig = {
  name: "blr.wiki",
  description: "A guide to falling in love with Bengaluru. Find the best food spots, coffee shops, breakfast places, date spots, and more.",
  url: "https://blr-wiki.vercel.app",
  ogImage: "https://blr-wiki.vercel.app/ogimage.jpg",
  links: {
    twitter: "https://twitter.com/harshwhere",
  },
}

export const metadata = {
  metadataBase: new URL("https://blr-wiki.vercel.app"),
  title: {
    default: "blr.wiki - bangalore's ultimate guide",
    template: "%s | blr.wiki",
  },
  description: "Discover Bangalore's gems with blr.wiki. From iconic breakfast spots like MTR and CTR to trendy cafes like Blue Tokai and Third Wave. Your ultimate guide to food, coffee, workspaces, and experiences in Bengaluru.",
  keywords: [
    "Bangalore guide",
    "Bengaluru local spots",
    "best restaurants in Bangalore",
    "Bangalore cafes",
    "Bangalore breakfast places",
    "coworking spaces Bangalore",
    "date spots in Bangalore",
    "Bangalore nightlife",
    "Bangalore food guide",
    "best coffee shops Bangalore",
    "MTR Bangalore",
    "CTR Malleshwaram",
    "Third Wave Coffee",
    "Cubbon Park",
    "Church Street Bangalore",
    "local guide Bangalore",
    "Bangalore things to do",
    "Bangalore city guide",
    "Bangalore food spots",
    "Bangalore local recommendations"
  ],
  authors: [
    {
      name: "harshwhere",
      url: "https://twitter.com/harshwhere",
    },
  ],
  creator: "harshwhere",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "blr.wiki - Discover Bangalore Like a Local",
    description: "Your curated guide to Bangalore's best kept secrets. Find local favorites for food, coffee, workspaces, and more.",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "blr.wiki - Bangalore's Ultimate Local Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "blr.wiki - Bangalore's Ultimate Local Guide",
    description: "Discover the best of Bangalore: from iconic breakfast spots to hidden coffee gems. Your local guide to the city.",
    images: [siteConfig.ogImage],
    creator: "@harshwhere",
  },
  alternates: {
    canonical: "https://blr-wiki.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
} 