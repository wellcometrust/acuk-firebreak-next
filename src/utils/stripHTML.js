export const stripHTML = (htmlString) => {
  return htmlString.replace(/<[^>]*>?/gm, '')
}
