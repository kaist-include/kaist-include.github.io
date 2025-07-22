import { useEffect, useRef, useState } from 'react'

interface Props {
  children: React.ReactNode
  animation?: 'fadeInUp' | 'slideInLeft' | 'slideInRight' | 'fadeIn'
  delay?: number
  threshold?: number
  className?: string
}

const ScrollAnimation = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0, 
  threshold = 0.1,
  className = ''
}: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [delay, threshold])

  const animationClasses = {
    fadeInUp: isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8',
    slideInLeft: isVisible ? 'animate-slideInLeft' : 'opacity-0 -translate-x-8',
    slideInRight: isVisible ? 'animate-slideInRight' : 'opacity-0 translate-x-8',
    fadeIn: isVisible ? 'animate-fadeIn' : 'opacity-0'
  }

  return (
    <div 
      ref={elementRef}
      className={`transition-all duration-800 ease-out ${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  )
}

export default ScrollAnimation 