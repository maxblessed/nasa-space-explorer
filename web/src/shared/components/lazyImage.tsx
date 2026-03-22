import { useState } from 'react'
import { Box, Skeleton } from '@mui/material'

type Props = {
  src: string
  alt?: string
  height?: number | string
}

export default function LazyImage({ src, alt, height = 160 }: Props) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  return (
    <Box sx={{ position: 'relative', height }}>
      {loading && <Skeleton variant='rectangular' width='100%' height='100%' />}
      <Box
        component='img'
        src={error ? 'https://via.placeholder.com/400x300?text=No+Image' : src}
        alt={alt}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false)
          setError(true)
        }}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: loading ? 'none' : 'block',
          transition: '0.3s',
        }}
      />
    </Box>
  )
}
