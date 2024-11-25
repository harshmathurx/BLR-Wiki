#!/bin/bash

# Create the public directory if it doesn't exist
mkdir -p public

# Generate favicons from the SVG
npx sharp-cli input.svg -o public/favicon-16x16.png resize 16 16
npx sharp-cli input.svg -o public/favicon-32x32.png resize 32 32
npx sharp-cli input.svg -o public/apple-touch-icon.png resize 180 180
npx sharp-cli input.svg -o public/android-chrome-192x192.png resize 192 192
npx sharp-cli input.svg -o public/android-chrome-512x512.png resize 512 512

# Generate favicon.ico (requires ImageMagick)
convert public/favicon-32x32.png public/favicon.ico 