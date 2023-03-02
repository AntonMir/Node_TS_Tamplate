import { Pool } from 'pg'

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  port: 5433,
  password: 'Qwerty12',
  database: 'node_ts',
})

export default pool



// pool.connect()
// pool.query('SELECT * FROM users', (err, res) => {
//   if(!err) {
//     console.log(res.rows)
//   } else {
//     console.log(err.message)
//   }
//   pool.end
// })