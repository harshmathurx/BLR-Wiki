import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { categoryIconMap } from "./DirectoryGrid"

interface Place {
  id: number
  name: string
  href: string
}

interface PlacesDialogProps {
  isOpen: boolean
  onClose: () => void
  places: Place[]
  categoryName: string
}

export function PlacesDialog({ isOpen, onClose, places, categoryName }: PlacesDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[80%] lg:max-w-[800px] max-h-[70vh] flex flex-col">
        <DialogHeader className="flex flex-row items-center justify-between border-b pb-4">
          <DialogTitle className="flex items-center gap-2 text-xl font-semibold">
            <span>{categoryName}</span>
            <div className="bg-[#1D1C1C] rounded-full p-2 text-white h-8 w-8 flex items-center justify-center">
              {categoryIconMap[categoryName]}
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto py-4 pr-4 dialog-scroll">
          <ul className="space-y-3">
            {places.map((place) => (
              <li key={place.id} className="text-muted-foreground">
                <Link
                  href={place.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-foreground transition-colors inline-flex items-center"
                >
                  <span className="mr-2"><ChevronRight className="h-4 w-4" /></span>
                  <span>{place.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
} 