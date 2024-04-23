"use client"
import React from 'react'


import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'


export default function Providers({ children }) {
   
  const queryClient  = new QueryClient()

  return (
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster position='top-right' />
      </QueryClientProvider>
    )
}
