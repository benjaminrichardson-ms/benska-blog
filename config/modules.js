import URL from 'url-parse'
import siteConfig from './_siteConfig'
import { routeMap, getDynamicPaths } from './generate'
let url = false
let axiosSettings = {}
if (process.env.URL && process.argv[2] === 'generate') {
  url = new URL(process.env.URL)
  axiosSettings = {
    baseURL: url
  }
}

export const buildModules = []

if (process.env.GOOGLE_ANALYTICS_ID) {
  buildModules.push('@nuxtjs/google-analytics')
}

export const modules = [
  // Doc: https://axios.nuxtjs.org/usage
  '@nuxtjs/axios',
  '@nuxtjs/eslint-module',
  '@nuxtjs/style-resources',
  '@nuxtjs/robots',
  'nuxt-fontawesome',
  'nuxt-responsive-loader',
  '@nuxtjs/sitemap'
]

export const modulesSettings = {
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faTimes', 'faSearch', 'faEnvelope', 'faUser', 'faBriefcase']
      }
    ]
  },
  styleResources: {
    scss: ['./assets/scss/_vars.scss']
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://wanderingprius.com/sitemap.xml'
  },
  sitemap: {
    hostname: 'https://wanderingprius.com',
    gzip: true,
    routes: [...getDynamicPaths(routeMap)]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: axiosSettings,
  responsiveLoader: {
    name: 'uploads/[hash:7]-[width].[ext]',
    min: 640, // minimum image width generated
    max: 1800, // maximum image width generated
    steps: 4, // five sizes per image will be generated
    placeholder: false, // no placeholder will be generated
    quality: 65, // images are compressed with medium quality
    adapter: require('responsive-loader/sharp'),
    disable: process.env.NODE_ENV === 'development'
  }
}
