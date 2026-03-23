import { useQuery } from '@tanstack/react-query'
import { api } from '../../../api/nasaApi'
import { cacheConfig } from '../../../constant'

export const useApodAnalysis = (startDate: string, endDate: string) => {
  return useQuery({
    queryKey: ['apod-analysis', startDate, endDate],
    queryFn: async () => {
      const { data } = await api.get('apod/analysis', {
        params: {
          startDate: startDate,
          endDate: endDate,
        },
      })
      return data
    },
    enabled: !!startDate && !!endDate,
    ...cacheConfig,
  })
}
