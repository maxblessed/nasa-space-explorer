import { Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Logo() {
  const navigate = useNavigate()

  return (
    <Box
      display='flex'
      alignItems='center'
      gap={1}
      onClick={() => navigate('/')}
      sx={{ cursor: 'pointer' }}
    >
      <Box
        sx={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #0b3d91, #1976d2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'text.primary',
          fontWeight: 700,
          fontSize: 14,
        }}
      >
        N
      </Box>

      <Typography
        variant='h6'
        fontWeight={600}
        sx={{
          letterSpacing: 1,
        }}
      >
        Nasa Explorer
      </Typography>
    </Box>
  )
}
