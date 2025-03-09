'use client'

import { memo, useState, useCallback } from 'react'
import Image from 'next/image'

const fallbackImageUrl = "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=800&auto=format&fit=crop&q=80"

interface ImageSectionProps {
  imageUrl: string | null
  missionName: string
}

const ImageSection = memo(({ imageUrl, missionName }: ImageSectionProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleLoad = useCallback(() => {
    setImageLoaded(true)
  }, [])

  const handleError = useCallback(() => {
    setImageError(true)
  }, [])

  if (!imageUrl && !fallbackImageUrl || imageError) return null

  return (
    <div className="relative aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {!imageLoaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-blue-900 rounded-full border-t-blue-400 animate-spin" />
        </div>
      )}
      <Image
        src={imageUrl || fallbackImageUrl}
        alt={`${missionName} mission`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`relative z-0 object-cover transition-transform duration-500 ease-out will-change-transform ${
          imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        } group-hover:scale-110`}
        onLoad={handleLoad}
        onError={handleError}
        priority={false}
      />
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-20 border border-blue-500/20 rounded-lg pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 z-20 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
})

export default ImageSection 