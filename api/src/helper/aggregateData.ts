export const aggregateData = <T extends { media_type: string }>(
  response: T[],
) => {
  const data = response

  const total = data.length

  const images = data.filter((d) => d.media_type === 'image').length

  const videos = data.filter((d) => d.media_type === 'video').length

  return {
    total,
    images,
    videos,
  }
}
