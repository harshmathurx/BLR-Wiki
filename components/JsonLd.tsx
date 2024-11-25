export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "blr.wiki",
          "url": "https://blr-wiki.vercel.app",
          "description": "A guide to falling in love with Bengaluru. Find the best food spots, coffee shops, breakfast places, date spots, and more.",
          "sameAs": [
            "https://twitter.com/harshwhere"
          ],
          "author": {
            "@type": "Person",
            "name": "Harsh Mathur",
            "url": "https://twitter.com/harshwhere"
          }
        })
      }}
    />
  )
} 