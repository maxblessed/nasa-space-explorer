export const paginate = <T>(data: T[], page: number = 1, limit: number = 8) => {
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit

  return {
    data: data.slice(startIndex, endIndex),
    total: data.length,
    page,
    totalPages: Math.ceil(data.length / limit),
  }
}
