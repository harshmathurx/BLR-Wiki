import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { LinkIcon } from "lucide-react"
import Link from "next/link"

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
  emoji: string
}

export function PlacesDialog({ isOpen, onClose, places, categoryName, emoji }: PlacesDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose} >
      <DialogContent className="max-w-[90%] max-h-[80vh] rounded-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-semibold">
            <span className="text-lg">{emoji}</span>
            <span>{categoryName}</span>
          </DialogTitle>
        </DialogHeader>
        <div className="overflow-y-auto pr-2">
          <ul className="space-y-2.5">
            {places.map((place, index) => (
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
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
} 