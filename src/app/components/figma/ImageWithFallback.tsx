import React, { useState, useEffect, useRef } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const imgRef = useRef<HTMLImageElement>(null)

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Completely suppress error messages in console
    e.preventDefault()
    e.stopPropagation()
    
    // Prevent the error from bubbling up
    const img = e.currentTarget
    if (img) {
      // Remove error handlers to prevent further logging
      img.onerror = null
    }
    
    setDidError(true)
    setIsLoading(false)
    
    // Silently log in development only
    if (process.env.NODE_ENV === 'development') {
      console.debug('[Image] Failed to load:', props.src?.substring(0, 60))
    }
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  // Add error suppression at the DOM level
  useEffect(() => {
    const img = imgRef.current
    if (img) {
      const errorHandler = (e: Event) => {
        e.preventDefault()
        e.stopPropagation()
        e.stopImmediatePropagation()
        setDidError(true)
        setIsLoading(false)
        return false
      }
      
      // Add error listener at capture phase
      img.addEventListener('error', errorHandler, { capture: true })
      
      return () => {
        img.removeEventListener('error', errorHandler, { capture: true })
      }
    }
  }, [])

  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <>
      {isLoading && (
        <div className={`inline-block bg-gray-200 animate-pulse ${className ?? ''}`} style={style} />
      )}
      <img 
        ref={imgRef}
        src={src} 
        alt={alt} 
        className={`${className ?? ''} ${isLoading ? 'hidden' : ''}`} 
        style={style} 
        {...rest} 
        onError={handleError}
        onLoad={handleLoad}
      />
    </>
  )
}
