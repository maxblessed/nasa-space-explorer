import { Box, Skeleton } from '@mui/material'

export default function ChartSkeleton() {
  return (
    <Box>
      <Skeleton width={200} height={40} />
      <Skeleton width='100%' height={300} sx={{ mt: 2 }} />
    </Box>
  )
}
