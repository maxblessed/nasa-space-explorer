import { useState } from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Alert,
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { useApodRange } from '../features/apod/hooks/useApodRange'
import SkeletonCard from '../shared/components/SkeletonCard'
import Modal from '../shared/components/Modal'
import MediaTile from '../shared/components/MediaTile'
import ErrorState from '../shared/components/ErrorState'
import { useDateRange } from '../shared/hooks/useDateRange'
import dayjs from 'dayjs'
import type { ApodResponse } from '../features/apod/types/types'

export default function Gallery() {
  const {
    startDate,
    endDate,
    today,
    maxEndDate,
    handleStartChange,
    handleEndChange,
  } = useDateRange()

  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState<ApodResponse | null>(null)

  const { data, isLoading, error, refetch } = useApodRange(
    startDate.format('YYYY-MM-DD'),
    endDate.format('YYYY-MM-DD'),
    page,
  )

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
      <Typography variant='h4' sx={{ color: 'text.primary' }}>
        Space Gallery
      </Typography>

      <Box display='flex' gap={2} mb={3}>
        <DatePicker
          label='Start'
          value={startDate}
          maxDate={endDate ? endDate : today}
          onChange={(value) => {
            handleStartChange(value)
            setPage(1)
          }}
          slotProps={{
            textField: {
              sx: {
                input: { color: 'text.primary' },
                label: { color: 'text.secondary' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#374151',
                  },
                  '&:hover fieldset': {
                    borderColor: 'primary.main',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                  },
                },
              },
            },
          }}
        />

        <DatePicker
          label='End'
          value={endDate}
          minDate={startDate}
          maxDate={maxEndDate}
          onChange={(value) => {
            handleEndChange(value)
            setPage(1)
          }}
          slotProps={{
            textField: {
              sx: {
                input: { color: 'text.primary' },
                label: { color: 'text.secondary' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'text.secondary',
                  },
                  '&:hover fieldset': {
                    borderColor: 'primary.main',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                  },
                },
              },
            },
          }}
        />
      </Box>

      {isLoading && <SkeletonCard />}
      {error && <ErrorState refetch={refetch} />}

      {!isLoading && data?.data?.length === 0 && (
        <Alert severity='info'>No images found</Alert>
      )}

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
        {data?.data?.map((item: ApodResponse) => (
          <Card
            key={item.date}
            onClick={() => setSelected(item)}
            sx={{
              cursor: 'pointer',
              height: 260,
              overflow: 'hidden',
              '& img': { transition: '0.3s' },
              '&:hover img': { transform: 'scale(1.05)' },
            }}
          >
            <MediaTile
              url={item.url}
              media_type={item.media_type}
              title={item.title}
            />
            <CardContent>
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
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box textAlign='center' mt={5}>
        <Typography variant='body2' color='text.secondary' mb={1}>
          {`Showing ${Math.min(page * 8, data?.total || 0)} of ${data?.total || 0} results`}
        </Typography>

        {page < data?.totalPages ? (
          <Button
            variant='contained'
            onClick={() => setPage((p) => p + 1)}
            sx={{ borderRadius: 2 }}
          >
            Load More Results
          </Button>
        ) : (
          <Typography variant='caption' color='text.secondary'>
            You’ve reached the end
          </Typography>
        )}
      </Box>
      <Modal item={selected} setItem={setSelected} />
    </Box>
  )
}
