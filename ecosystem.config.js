module.exports = {
  apps: [{
    name: 'JayCeeCodes',
    script: './main.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: process.env.addy,
      key: process.env.key,
      ref: 'origin/master',
      repo: 'https://github.com/iamjoncannon/JayCeeCodes',
      path: '/home/ubuntu/JayCeeCodes',
      'post-deploy': 'sudo npm install && sudo pm2 startOrRestart ecosystem.config.js'
    }
  }
}