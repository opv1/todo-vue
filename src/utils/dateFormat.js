export const dateFormat = () => {
  const date = new Date()

  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return date.toLocaleDateString('en-US', dateOptions)
}
