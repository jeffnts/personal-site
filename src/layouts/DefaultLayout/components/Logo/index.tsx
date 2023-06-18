'use client'

import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
import { TypingText } from 'components'

export function Logo(){
  const pathname = usePathname()

  const path = useMemo(() => {
    const mapPath: any = {
      '/projects': 'Projetos',
      '/': 'Home'
    }

    return mapPath[pathname] 
  }, [pathname])

  return (
      <pre className="text-white">
          <span>
            /c/{path}/$  
          </span>          
            <Link href='/'>
              <TypingText 
                text='Jeff'
                speed={1000}
              />
            </Link>
          <span className="opacity-0 animate-pulse">|</span>
      </pre>
  )
}