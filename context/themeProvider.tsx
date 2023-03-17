'use client'

import { ThemeProvider, useTheme } from 'next-themes'
import React from 'react'

type Props = {
   children: React.ReactNode
}

export function Providers({ children }: Props) {
   return (
      <ThemeProvider
         themes={[
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula',
            'cmyk',
            'autumn',
            'business',
            'acid',
            'lemonade',
            'night',
            'coffee',
            'winter',
         ]}
      >
         {children}
      </ThemeProvider>
   )
}

const useThemes = () => {
   const { themes, theme, setTheme, forcedTheme, systemTheme, resolvedTheme } =
      useTheme()

   return { themes, theme, setTheme, forcedTheme, systemTheme, resolvedTheme }
}

export default useThemes
