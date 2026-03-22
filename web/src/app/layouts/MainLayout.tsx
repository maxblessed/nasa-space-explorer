import { Box } from '@mui/material'
import Navbar from './Navbar'
import type React from 'react'

export default function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Navbar />
      <Box>{children}</Box>
    </>
  )
}
