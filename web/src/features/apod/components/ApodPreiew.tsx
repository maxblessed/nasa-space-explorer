import { Box, Typography, Card } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import { useApodRange } from '../hooks/useApodRange'
import MediaTile from '../../../shared/components/MediaTile'
import type { ApodResponse } from '../types/types'

export default function ApodPreview() {
  const navigate = useNavigate()

  const { data } = useApodRange(
    dayjs().subtract(5, 'day').format('YYYY-MM-DD'),
    dayjs().format('YYYY-MM-DD'),
    1,
  )

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, mt: 4 }}>
      <Typography variant='h4' fontWeight={700}>
        Recent Highlights
      </Typography>

      <Box
        display='grid'
        gridTemplateColumns={{
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        gap={3}
      >
        {data?.data?.slice(0, 3).map((item: ApodResponse) => (
          <Card
            key={item.date}
            onClick={() => navigate('/gallery')}
            sx={{
              cursor: 'pointer',
              height: 220,
              overflow: 'hidden',
              borderRadius: 3,

              '& img': {
                transition: '0.4s ease',
              },

              '&:hover img': {
                transform: 'scale(1.08)',
                filter: 'brightness(0.85)',
              },
            }}
          >
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
              <MediaTile
                url={item.url}
                media_type={item.media_type}
                title={item.title}
              />

              <Box
                sx={{
                  bottom: 0,
                  width: '100%',
                  p: 1,
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                  color: 'text.primary',
                  fontSize: 12,
                }}
              >
                <Typography
                  variant='subtitle1'
                  fontWeight={600}
                  sx={{ color: 'text.primary' }}
                >
                  {item.title}
                </Typography>

                <Typography variant='caption' sx={{ color: 'text.secondary' }}>
                  {dayjs(item.date).format('MMM D, YYYY')}
                </Typography>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  )
}
