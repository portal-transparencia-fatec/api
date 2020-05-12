module.exports = {
  apps: [
    {
      name: 'neorodas',
      script: './index.js',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
