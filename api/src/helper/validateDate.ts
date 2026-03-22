import dayjs from 'dayjs'

const MAX_RANGE = 30

export const validateDate = (startDate: string, endDate: string) => {
  const today = dayjs()

  let start = dayjs(startDate)
  let end = dayjs(endDate)

  if (!start.isValid()) start = today.subtract(7, 'day')
  if (!end.isValid()) end = today

  // Prevent future
  if (end.isAfter(today)) {
    end = today
  }

  // Invalid order
  if (start.isAfter(end)) {
    throw new Error('Start date cannot be after end date')
  }

  if (end.diff(start, 'day') > MAX_RANGE) {
    end = start.add(MAX_RANGE, 'day')

    if (end.isAfter(today)) {
      end = today
    }
  }

  return {
    start: start.format('YYYY-MM-DD'),
    end: end.format('YYYY-MM-DD'),
  }
}
