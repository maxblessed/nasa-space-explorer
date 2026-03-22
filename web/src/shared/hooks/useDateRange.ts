import { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'

const MAX_RANGE = 30

export const useDateRange = () => {
  const today = dayjs()

  const [startDate, setStartDate] = useState<Dayjs>(today.subtract(7, 'day'))
  const [endDate, setEndDate] = useState<Dayjs>(today)

  const handleStartChange = (value: Dayjs | null) => {
    if (!value) return

    setStartDate(value)

    const maxEnd = value.add(MAX_RANGE, 'day')

    if (endDate.isAfter(maxEnd)) {
      setEndDate(maxEnd.isAfter(today) ? today : maxEnd)
    }
  }

  const handleEndChange = (value: Dayjs | null) => {
    if (!value) return

    const maxEnd = startDate.add(MAX_RANGE, 'day')

    if (value.isAfter(maxEnd)) {
      setEndDate(maxEnd.isAfter(today) ? today : maxEnd)
    } else {
      setEndDate(value)
    }
  }

  const maxEndDate = startDate.add(MAX_RANGE, 'day').isAfter(today)
    ? today
    : startDate.add(MAX_RANGE, 'day')

  return {
    startDate,
    endDate,
    today,
    maxEndDate,
    handleStartChange,
    handleEndChange,
  }
}
