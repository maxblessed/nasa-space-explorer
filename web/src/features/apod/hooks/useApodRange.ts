import { useQuery } from '@tanstack/react-query'
import { api } from '../../../api/nasaApi'
import { cacheConfig } from '../../../constant'

export const useApodRange = (
  startDate: string,
  endDate: string,
  page: number,
) => {
  return useQuery({
    queryKey: ['apod-range', startDate, endDate, page],
    queryFn: async () => {
      const { data } = await api.get('apod/range', {
        params: {
          startDate: startDate,
          endDate: endDate,
          page,
          limit: 8,
        },
      })
      return data
    },
    enabled: !!startDate && !!endDate,
    ...cacheConfig,
  })
}
