const withSass = require('@zeit/next-sass')

module.exports = withSass({
  sassLoaderOptions: {
    includePaths: ['node_modules']
  },
  // Leaving this here for later
  webpack: (config) => {
    return config
  },
  env: {
    API_ROOT: 'http://127.0.0.1:8888/jsonapi/node',
    ASSETS_URL: 'http://127.0.0.1:8888'
  },
  // exportTrailingSlash: true,
  // exportPathMap: async () => {
  //   const paths = {
  //     '/': { page: '/' },
  //     '/jobs': { page: '/jobs' }
  //   }
  //   const res = await fetch(`${process.env.API_ROOT}/jobs/`)
  //   const { data } = await res.json()
  // }
})
