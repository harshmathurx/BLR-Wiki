import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { HoverEffect } from '@/components/ui/HoverEffect'
import Link from 'next/link'

interface Place {
  id: number
  name: string
  href: string
}

interface Category {
  id: number
  name: string
  emoji: string
  places: Place[]
}

export default function DirectoryGrid({ categories }: { categories: Category[] }) {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <HoverEffect key={category.id}>
            <Card className="border border-gray-200 h-[400px]">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base font-medium">
                  <span>{category.emoji}</span>
                  <span>{category.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5">
                  {category.places.map((place, index) => (
                    <li key={place.id} className="text-sm">
                      <Link 
                        href={place.href}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="hover:text-gray-600 transition-colors inline-flex items-start"
                      >
                        <span className="mr-1">{index + 1}.</span>
                        <span>{place.name}</span>
                        <span className="text-gray-400 ml-1">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </HoverEffect>
        ))}
      </div>
    </div>
  )
} 