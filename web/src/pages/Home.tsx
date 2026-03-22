import { Box } from '@mui/material'
import Hero from '../shared/components/Hero'
import FeatureTiles from '../shared/components/FeatureTiles'
import ApodPreiew from '../features/apod/components/ApodPreiew'
export default function Home() {
  return (
    <Box sx={{ pb: 3 }}>
      <Hero />
      <FeatureTiles />
      <ApodPreiew />
    </Box>
  )
}
