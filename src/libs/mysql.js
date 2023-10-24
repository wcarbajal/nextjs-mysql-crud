import mysql from 'serverless-mysql'

export const conn = mysql({
  config: {
    host: 'localhost',
    user: 'root',
    password: 'Adriano30',
    port: 3306,
    database: 'nextjsmysqlcrud'
  }
})