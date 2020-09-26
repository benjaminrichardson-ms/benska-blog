export default {
  title: process.env.npm_package_name || '',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: process.env.npm_package_description || ''
    }
  ],
  link: [
    { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: 'icon',
      sizes: '192x192',
      type: 'image/png',
      href: '/android-chrome-192x192.png'
    },
    {
      rel: 'icon',
      sizes: '512x512',
      type: 'image/png',
      href: '/android-chrome-512x512.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      type: 'image/png',
      href: '/apple-touch-icon.png'
    },
    {
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Caveat+Brush&display=swap'
    }
  ],
  script: [
    {
      src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
      defer: true,
      id: 'netlify-identity-widget-script'
    }
  ]
}
