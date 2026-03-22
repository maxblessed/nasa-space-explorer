import { Paper, Typography } from '@mui/material'

export default function StatCard({
  label,
  value,
}: {
  label: string
  value: string | number | undefined
}) {
  return (
    <Paper
      sx={{
        p: 2,
        borderRadius: 3,
        textAlign: 'center',

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
      }}
    >
      <Typography variant='caption' sx={{ color: 'text.primary' }}>
        {label}
      </Typography>

      <Typography variant='h6' fontWeight={700} sx={{ color: 'primary.main' }}>
        {value ?? '-'}
      </Typography>
    </Paper>
  )
}
