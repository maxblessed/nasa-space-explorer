export const cacheConfig = {
  refetchOnWindowFocus: false,
  staleTime: 1000 * 60 * 60 * 23, // 23 hours
  gcTime: 1000 * 60 * 60 * 24, // 24 hours
  refetchOnReconnect: true,
}
