import path from 'path'
import glob from 'glob'

export const routeMap = {
  '': 'posts/*.md',
  '/categories': 'categories/*.md'
}

export const otherRoutes = []

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
export const getDynamicPaths = function (urlFilepathTable, trailingSlash = false) {
  const slash = trailingSlash ? '/' : ''
  return [].concat(
    ...Object.keys(urlFilepathTable).map((url) => {
      const filepathGlob = urlFilepathTable[url]
      return glob.sync(filepathGlob, { cwd: 'content' }).map((filepath) => {
        return `${url}/${path.basename(filepath, '.md')}${slash}`
      })
    })
  )
}
