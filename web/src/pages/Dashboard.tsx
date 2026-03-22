import { Box, Typography, Paper } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { useApodAnalysis } from '../features/apod/hooks/useApodAnalysis'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { useDateRange } from '../shared/hooks/useDateRange'
import ChartSkeleton from '../shared/components/ChartSkeleton'
import ErrorState from '../shared/components/ErrorState'
import StatCard from '../shared/components/StatCards'

export default function Dashboard() {
  const {
    startDate,
    endDate,
    today,
    maxEndDate,
    handleStartChange,
    handleEndChange,
  } = useDateRange()

  const { data, isLoading, error, refetch } = useApodAnalysis(
    startDate.format('YYYY-MM-DD'),
    endDate.format('YYYY-MM-DD'),
  )

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
      <Typography variant='h4' sx={{ color: 'text.primary' }}>
        Insights Dashboard
      </Typography>
      <Box display='flex' gap={2} mb={3}>
        <DatePicker
          label='Start'
          value={startDate}
          maxDate={endDate || today}
          onChange={handleStartChange}
        />

        <DatePicker
          label='End'
          value={endDate}
          minDate={startDate}
          maxDate={maxEndDate}
          onChange={handleEndChange}
        />
      </Box>

      <Box
        display='grid'
        gridTemplateColumns={{
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={2}
        mb={4}
      >
        <StatCard label='Total' value={data?.total} />
        <StatCard label='Images' value={data?.images} />
        <StatCard label='Videos' value={data?.videos} />
        <StatCard
          label='Range'
          value={`${dayjs(data?.start).format('MM/DD')} - ${dayjs(
            data?.end,
          ).format('MM/DD')}`}
        />
      </Box>

      <Paper
        sx={{
          p: { xs: 2, md: 4 },
          borderRadius: 3,
        }}
      >
        {isLoading && <ChartSkeleton />}
        {error && <ErrorState refetch={refetch} />}

        <Box sx={{ width: '100%', height: { xs: 250, md: 320 } }}>
          <ResponsiveContainer width='100%' height='100%'>
            <PieChart>
              <Pie
                data={[
                  { name: 'Images', value: data?.images || 0 },
                  { name: 'Videos', value: data?.videos || 0 },
                ]}
                dataKey='value'
                innerRadius={50}
                outerRadius={80}
              >
                <Cell fill='#f97316' />
                <Cell fill='#3b82f6' />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Paper>
    </Box>
  )
}
