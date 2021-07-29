module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'api-joselpadronc'),
        username: env('DATABASE_USERNAME', 'joselpadronc'),
        password: env('DATABASE_PASSWORD', '176605**'),
      },
      options: {},
    },
  },
});