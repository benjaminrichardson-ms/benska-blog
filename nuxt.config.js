/* eslint-disable import/first */
require('dotenv').config()

import head from './config/head'
import { buildModules, modules, modulesSettings } from './config/modules'
import plugins from './config/plugins'
import build from './config/build'
import css from './config/css'
import { routeMap, otherRoutes, getDynamicPaths } from './config/generate'

export default {
  mode: 'universal',
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Headers of the page
   */
  head: head,
  router: {
    trailingSlash: true
  },
  generate: {
    routes: otherRoutes.concat(getDynamicPaths(routeMap))
  },
  /*
   ** Global CSS
   */
  css: css,
  /*
   ** Plugins to load before mounting the App
   */
  plugins: plugins,
  /*
   ** Nuxt.js modules
   */
  buildModules: buildModules,
  modules: modules,
  ...modulesSettings,
  /*
   ** Build configuration
   */
  build: build
}
