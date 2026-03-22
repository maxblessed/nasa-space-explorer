import { useQuery } from '@tanstack/react-query'
import { api } from '../../../api/nasaApi'

export const useApod = () => {
  return useQuery({
    queryKey: ['apod'],
    queryFn: async () => {
      const { data } = await api.get('/apod')
      return data
    },
  })
}
