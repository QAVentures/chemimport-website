const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/chemimport-website/' : '',
  basePath: isProd ? '/chemimport-website' : '',
  images: {
    unoptimized: true,
  },
}