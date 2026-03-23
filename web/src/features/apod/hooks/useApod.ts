import { useQuery } from '@tanstack/react-query'
import { api } from '../../../api/nasaApi'
import { cacheConfig } from '../../../constant'

export const useApod = () => {
  return useQuery({
    queryKey: ['apod'],
    queryFn: async () => {
      const { data } = await api.get('/apod')
      return data
    },
    ...cacheConfig,
  })
}
