import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto py-12 px-4 text-center text-sm text-gray-600">
      <p>
        Have more places in mind? Share them{' '}
        <a 
          href="https://airtable.com/appgj3zR7clC0nFDc/shrk2vyPGgCNKXyrm" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-gray-600 transition-colors underline"
        >
          here
        </a>
        !
      </p>
      <p className="mt-2">
        inspired by <Link target="_blank" className="underline" rel="noopener noreferrer" href="https://dilli.wiki">dilli.wiki</Link>
      </p>
    </footer>
  )
} 