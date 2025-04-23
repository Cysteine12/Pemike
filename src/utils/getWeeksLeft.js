const getWeeksLeft = (date) => {
  const now = new Date()

  const targetDate = new Date(date)

  const diffInMs = targetDate.getTime() - now.getTime()

  if (diffInMs <= 0) return 0

  const diffInWeeks = diffInMs / (1000 * 60 * 60 * 24 * 7)

  return diffInWeeks
}

export { getWeeksLeft }
