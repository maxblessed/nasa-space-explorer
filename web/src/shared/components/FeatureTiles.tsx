import { Box, Typography, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const items = [
  {
    title: 'Space Gallery',
    path: '/gallery',
    content: 'Browse astronomy images by date range',
  },
  {
    title: 'Insights Dashboard',
    path: '/dashboard',
    content: 'Visualize patterns from NASA APOD data',
  },
  {
    title: 'Today’s Highlight',
    path: '/',
    content: 'View today’s featured astronomy image',
  },
]

export default function FeatureTiles() {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        p: 3,
        cursor: 'pointer',
        borderRadius: 3,
        transition: '0.3s',

        background: {
          xs: 'rgba(255,255,255,0.08)',
        },

        backdropFilter: {
          xs: 'blur(10px)',
        },

        color: {
          xs: 'text.primary',
        },

        boxShadow: {
          xs: 2,
          md: 'none',
        },

        mt: { xs: 4, md: -18 },
        px: { xs: 2, md: 8 },
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        },
        gap: 3,
        zIndex: 2,
        position: 'relative',
      }}
    >
      {items.map((item) => (
        <Paper
          key={item.title}
          onClick={() => navigate(item.path)}
          sx={{
            p: 3,
            cursor: 'pointer',
            borderRadius: 3,
            transition: '0.3s',

            mt: { xs: 0, md: 0 },

            background: {
              xs: 'rgba(255,255,255,0.08)',
            },

            backdropFilter: {
              md: 'blur(10px)',
            },

            color: {
              xs: 'text.primary',
            },

            boxShadow: {
              xs: 2,
              md: 'none',
            },

            border: {
              xs: '1px solid rgba(255,255,255,0.2)',
            },

            '&:hover': {
              transform: 'translateY(-9px)',
            },
          }}
        >
          <Typography variant='h6'>{item.title}</Typography>
          <Typography variant='body2'>{item.content}</Typography>
        </Paper>
      ))}
    </Box>
  )
}
