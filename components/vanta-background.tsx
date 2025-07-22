import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

const VantaBackground = () => {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffect = useRef<any>(null)

  useEffect(() => {
    // Dynamically import Vanta and Three.js to avoid SSR issues
    const loadVanta = async () => {
      if (!vantaEffect.current && vantaRef.current) {
        // Import Three.js
        // @ts-ignore - Three.js types are installed but dynamic import needs this
        const THREE = await import('three')
        window.THREE = THREE
        
        // Import Vanta NET effect
        // @ts-ignore - Vanta.js doesn't have TypeScript definitions
        const VANTA = await import('vanta/dist/vanta.net.min')
        
        vantaEffect.current = VANTA.default({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          // Color configuration - using custom background color
          color: 0xffffff,           // White network lines
          backgroundColor: 0xacccea,  // Custom light blue-gray background
          // Network configuration  
          points: 8.00,              // Network density
          maxDistance: 25.00,        // Connection distance
          spacing: 20.00,            // Spacing between points
          showDots: false,            // Show the connection dots
          // Additional options for better line visibility
          mouseCoeffX: 0.3,          // Mouse interaction strength X
          mouseCoeffY: 0.3,          // Mouse interaction strength Y
        })
      }
    }

    loadVanta()

    // Cleanup
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
        vantaEffect.current = null
      }
    }
  }, [])

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 pointer-events-none"
    />
  )
}

export default VantaBackground 