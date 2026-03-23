import { Box, Skeleton } from '@mui/material'

export default function SkeletonCard() {
  return (
    <Box
      display='grid'
      gridTemplateColumns={{
        xs: '1fr',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(4, 1fr)',
      }}
      gap={3}
    >
      {Array.from(new Array(8)).map((_, i) => (
        <Skeleton
          key={i}
          variant='rectangular'
          height={260}
          sx={{ borderRadius: 3 }}
        />
      ))}
    </Box>
  )
}
