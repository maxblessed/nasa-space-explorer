import { Box, Typography } from '@mui/material'
import { useApod } from '../../features/apod/hooks/useApod'
import dayjs from 'dayjs'

export default function Hero() {
  const { data } = useApod()

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
      {!isVideo ? (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${data?.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ) : (
        <iframe
          src={data?.url}
          title='space-video'
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
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
