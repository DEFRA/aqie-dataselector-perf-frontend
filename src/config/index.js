import convict from 'convict'
// import path from 'path'

const oneWeek = 7 * 24 * 60 * 60 * 1000

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 3000,
    env: 'PORT'
  },
  staticCacheTimeout: {
    doc: 'Static cache timeout in milliseconds',
    format: Number,
    default: oneWeek,
    env: 'STATIC_CACHE_TIMEOUT'
  },
  serviceName: {
    doc: 'Applications Service Name',
    format: String,
    default: 'Get air pollution data'
  },
  backendApiUrl: {
    doc: 'Backend api url',
    format: String,
    default: 'https://aiqe-dataservice-backend.dev.cdp-int.defra.cloud',
    env: 'BACKEND_API_URL'
  },
  OS_NAMES_API_URL: {
    doc: 'Osname api url',
    format: String,
    default: `https://aqie-location-backend.${process.env.ENVIRONMENT}.cdp-int.defra.cloud/osnameplaces/userLocation=`,
    env: 'Osname api url'
  },
  OS_NAMES_API_URL_1: {
    doc: 'Osname api url',
    format: String,
    default: `https://aqie-monitoringstation-backend.${process.env.ENVIRONMENT}.cdp-int.defra.cloud/monitoringstation/location=`,
    env: 'Osname api url'
  },
  Download_URL: {
    doc: 'Osname api url',
    format: String,
    default: `https://aqie-historicaldata-backend.${process.env.ENVIRONMENT}.cdp-int.defra.cloud/AtomHistoryHourlydata/`,
    env: 'Osname api url'
  },
  Table_URL: {
    doc: 'Osname api url',
    format: String,
    default: `https://aqie-historicaldata-backend.${process.env.ENVIRONMENT}.cdp-int.defra.cloud/AtomHistoryexceedence/`,
    env: 'Osname api url'
  },

  // dev //
  // OS_NAMES_API_URL: {
  //   doc: 'Osname api url',
  //   format: String,

  //   default: `https://aqie-location-backend.dev.cdp-int.defra.cloud/osnameplaces/userLocation=`,

  //   env: 'Osname api url'
  // },
  // OS_NAMES_API_URL_1: {
  //   doc: 'Osname api url',
  //   format: String,
  //   default: `https://aqie-monitoringstation-backend.dev.cdp-int.defra.cloud/monitoringstation/location=`,
  //   env: 'Osname api url'
  // },
  // Download_URL: {
  //   doc: 'Osname api url',
  //   format: String,
  //   default: `https://aqie-historicaldata-backend.dev.cdp-int.defra.cloud/AtomHistoryHourlydata/`,
  //   env: 'Osname api url'
  // },
  // Table_URL: {
  //   doc: 'Osname api url',
  //   format: String,
  //   default: `https://aqie-historicaldata-backend.dev.cdp-int.defra.cloud/AtomHistoryexceedence/`,
  //   env: 'Osname api url'
  // },

  assetPath: {
    doc: 'Asset path',
    format: String,
    default: 'public',
    env: 'ASSET_PATH'
  },
  isProduction: {
    doc: 'If this application running in the production environment',
    format: Boolean,
    default: process.env.NODE_ENV === 'production'
  },
  isDevelopment: {
    doc: 'If this application running in the development environment',
    format: Boolean,
    default: process.env.NODE_ENV !== 'production'
  },
  isTest: {
    doc: 'If this application running in the test environment',
    format: Boolean,
    default: process.env.NODE_ENV === 'test'
  },
  logLevel: {
    doc: 'Logging level',
    format: ['fatal', 'error', 'warn', 'info', 'debug', 'trace', 'silent'],
    default: 'info',
    env: 'LOG_LEVEL'
  },
  httpProxy: {
    doc: 'HTTP Proxy',
    format: String,
    nullable: true,
    default: null,
    env: 'CDP_HTTP_PROXY'
  },
  httpsProxy: {
    doc: 'HTTPS Proxy',
    format: String,
    nullable: true,
    default: null,
    env: 'CDP_HTTPS_PROXY'
  }
})

config.validate({ allowed: 'strict' })

export { config }
