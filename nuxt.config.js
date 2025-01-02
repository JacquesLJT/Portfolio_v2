export default {
  // Your existing config stays the same up to the link array
  head: {
    title: "Landon Thibodeau's Portfolio",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Welcome to my digital workspace where I showcase my journey as a software engineer, featuring full-stack projects, cloud solutions, and my passion for creating impactful applications.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300;400;500;600;700&display=swap' },
    ]
  },
  // Rest of your existing config stays the same
  css: [
    '~/assets/css/main.css'
  ],
  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'G-XXXXXXXXXX'
  },
  fontawesome: {
    icons: {
      solid: [
        'faArrowDown',
        'faMapLocationDot',
        'faCheck',
        'faArrowUpRightFromSquare',
        'faBars',
        'faXmark',
      ],
      brands: [
        'faGithub',
        'faLinkedin',
        'faXTwitter',
      ],
      regular: [
        'faFilePdf',
        'faEnvelope'
      ]
    }
  },
  modules: [
    '@chakra-ui/nuxt',
    '@nuxtjs/emotion'
  ],
  // Added basic performance optimizations
  render: {
    resourceHints: true
  },
  build: {
    optimizeCSS: true,
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  }
}