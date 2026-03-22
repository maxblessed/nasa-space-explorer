import { Box, Typography, Button } from '@mui/material'

export default function ErrorState({ refetch }: { refetch: () => void }) {
  return (
    <Box textAlign='center' mt={5}>
      <Typography variant='h6'>Something went wrong</Typography>
      <Typography variant='body2' sx={{ mb: 2 }}>
        Failed to load data. Try again.
      </Typography>

      <Button variant='contained' onClick={refetch}>
        Retry
      </Button>
    </Box>
  )
}
