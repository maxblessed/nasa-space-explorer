import { Box, Typography } from '@mui/material'
import { useApod } from '../../features/apod/hooks/useApod'
import dayjs from 'dayjs'
import ChartSkeleton from './ChartSkeleton'

const mediaStyles = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: 0,
}
export default function Hero() {
  const { data, isLoading } = useApod()

  const isVideo = data?.media_type === 'video'

  return (
    <Box
      sx={{
        width: '100%',
        height: '70vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {isLoading ? (
        <ChartSkeleton />
      ) : !isVideo ? (
        <Box
          sx={{
            ...mediaStyles,
            backgroundImage: `url(${data?.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ) : data?.url?.includes('youtube') ? (
        <Box
          component='iframe'
          src={data.url}
          title={data.title}
          sx={{
            ...mediaStyles,
            border: 'none',
          }}
          allowFullScreen
        />
      ) : (
        <Box component='video' sx={mediaStyles}>
          <source src={data.url} type='video/mp4' />
        </Box>
      )}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.3))',
        }}
      />

      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: { xs: 3, md: 10 },
          color: 'text.primary',
          textAlign: 'center',
        }}
      >
        <Typography
          variant='h2'
          gutterBottom
          sx={{
            marginTop: { xs: 0, md: -10 },
            fontWeight: { xs: 500, md: 700 },
            fontSize: { xs: 48, md: 64 },
          }}
        >
          Explore the Universe
        </Typography>

        <Typography
          variant='subtitle1'
          fontWeight={600}
          sx={{ color: 'text.primary' }}
        >
          {data?.title}
        </Typography>

        <Typography variant='caption' sx={{ color: 'text.secondary' }}>
          {dayjs(data?.date).format('MMM D, YYYY')}
        </Typography>
      </Box>
    </Box>
  )
}
