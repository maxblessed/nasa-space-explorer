import { useState } from 'react'
import { Box, Skeleton } from '@mui/material'
import type { ApodResponse } from '../../features/apod/types/types'

type MediaTileProps = Pick<ApodResponse, 'url' | 'media_type' | 'title'> & {
  height?: number | string
  borderRadius?: number | string
  showControls?: boolean
  mb?: number | string
}

export default function MediaTile({
  url,
  media_type,
  title,
  height = 160,
  borderRadius = 2,
  showControls = false,
}: MediaTileProps) {
  const isVideo = media_type === 'video'
  const isYoutube = url?.includes('youtube')
  const fallbackImage = 'https://picsum.photos/400/300'

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const baseStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.3s ease',
    opacity: loading ? 0 : 1,
  }

  return (
    <Box
      sx={{
        position: 'relative',
        height,
        borderRadius,
        overflow: 'hidden',
      }}
    >
      {loading && (
        <Skeleton
          variant='rectangular'
          width='100%'
          height='100%'
          sx={{ borderRadius }}
        />
      )}

      {!isVideo && (
        <Box
          component='img'
          src={error ? fallbackImage : url}
          alt={title}
          onLoad={() => setLoading(false)}
          onError={() => {
            setError(true)
            setLoading(false)
          }}
          sx={baseStyles}
        />
      )}

      {isVideo && isYoutube && (
        <Box
          component='iframe'
          src={url}
          title={title}
          onLoad={() => setLoading(false)}
          sx={{
            ...baseStyles,
            border: 'none',
          }}
          allowFullScreen
        />
      )}

      {isVideo && !isYoutube && !error && (
        <Box
          component='video'
          controls={showControls}
          onLoadedData={() => setLoading(false)}
          onError={() => {
            setError(true)
            setLoading(false)
          }}
          sx={baseStyles}
        >
          <source src={url} type='video/mp4' />
        </Box>
      )}

      {error && isVideo && (
        <Box
          component='img'
          src={fallbackImage}
          alt='fallback'
          sx={baseStyles}
        />
      )}
    </Box>
  )
}
