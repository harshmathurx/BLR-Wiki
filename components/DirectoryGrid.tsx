"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { HoverEffect } from '@/components/ui/HoverEffect'
import { BeerIcon, CarIcon, ChevronRight, CoffeeIcon, ComputerIcon, CroissantIcon, DumbbellIcon, FlowerIcon, MartiniIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { PlacesDialog } from './PlacesDialog'

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

export const categoryIconMap: Record<string, React.ReactNode> = {
  "Coffee": <CoffeeIcon />,
  "Food": <CroissantIcon />,
  "Drinks": <MartiniIcon />,
  "Restaurants": <CroissantIcon />,
  "Gyms": <DumbbellIcon />,
  "Breakfast": <CroissantIcon />,
  "Drive Routes": <CarIcon />,
  "Date Plans": <FlowerIcon />,
  "Co-working": <ComputerIcon />,
  "Where's the party at?": <BeerIcon />,
}

export default function DirectoryGrid({ categories }: { categories: Category[] }) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  return (
    <>
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <HoverEffect key={category.id}>
              <Card className="border border-gray-200 h-auto md:h-[420px]">
                <CardHeader className="pb-4 border-border/10 border-b border-gray-200 flex flex-row justify-between items-center">
                  <CardTitle className="flex items-center gap-2 text-xl font-semibold">
                    <span>{category.name}</span>
                  </CardTitle>
                  <div className="bg-[#1D1C1C] rounded-full p-2 text-white h-8 w-8 flex items-center justify-center">
                    {categoryIconMap[category.name]}
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2.5">
                    {category.places.slice(0, 7).map((place) => (
                      <li key={place.id} className=" text-muted-foreground">
                        <Link
                          href={place.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-foreground transition-colors inline-flex items-center"
                        >
                          <span className="mr-1"><ChevronRight /></span>
                          <span>{place.name}</span>
                        </Link>
                      </li>
                    ))}
                    {category.places.length > 7 && (
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
      />
    </>
  )
} 