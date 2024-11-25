import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
            <div className="container mx-auto px-4 h-16 flex items-center justify-center">
                <Image src="/apple-touch-icon.png" alt="blr.wiki" width={32} height={32} className="mr-2" />
                <Link href="/" className="text-xl font-medium">
                    blr.wiki
                </Link>
            </div>
        </header>
    )
} 