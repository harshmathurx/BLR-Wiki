"use client"
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { HoverEffect } from '@/components/ui/HoverEffect'
import { LinkIcon } from 'lucide-react'
import Link from 'next/link'
import { PlacesDialog } from './PlacesDialog'
import { useState } from 'react'

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
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  return (
    <>
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <HoverEffect key={category.id}>
              <Card className="border border-gray-200 h-auto md:h-[400px]">
                <CardHeader className="pb-4 border-border/10 border-b border-gray-200">
                  <CardTitle className="flex items-center gap-2 text-xl font-semibold">
                    <span className="text-lg">{category.emoji}</span>
                    <span>{category.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2.5">
                    {category.places.slice(0, 8).map((place, index) => (
                      <li key={place.id} className="text-[16px] text-muted-foreground">
                        <Link 
                          href={place.href}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="hover:text-foreground transition-colors inline-flex items-center"
                        >
                          <span className="mr-1">{index + 1}.</span>
                          <span>{place.name}</span>
                          <span className="text-gray-400 ml-1">
                            <LinkIcon className="w-3 h-3" />
                          </span>
                        </Link>
                      </li>
                    ))}
                    {category.places.length > 8 && (
                      <li>
                        <button
                          onClick={() => setSelectedCategory(category)}
                          className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          See all {category.places.length} places →
                        </button>
                      </li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            </HoverEffect>
          ))}
        </div>
      </div>

      <PlacesDialog
        isOpen={selectedCategory !== null}
        onClose={() => setSelectedCategory(null)}
        places={selectedCategory?.places || []}
        categoryName={selectedCategory?.name || ''}
        emoji={selectedCategory?.emoji || ''}
      />
    </>
  )
} 