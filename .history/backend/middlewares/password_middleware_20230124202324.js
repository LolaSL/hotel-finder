import { use } from 'passport'
import { Strategy } from 'passport-jwt'

import { query } from '../db'
const SECRET  = process.env.SECRET
const cookieExtractor = function (req) {
  let token = null
  if (req && req.cookies) token = req.cookies['token']
  return token
}

const options = {
  secretOrKey: SECRET,
  jwtFromRequest: cookieExtractor,
}

use(
  new Strategy(options, async ({ id }, done) => {
    try {
      const { rows } = await query(
        'SELECT user_id, email FROM users WHERE user_id = $1',
        [id]
      )

      if (!rows.length) {
        throw new Error('401 not authorized')
      }

      let user = { id: rows[0].user_id, email: rows[0].email }

      return done(null, user)
    } catch (error) {
      console.log(error.message)
      done(null, false)
    }
  })
)