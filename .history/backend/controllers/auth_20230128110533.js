require("dotenv").config();
const db = require('../db');
const { hash } = require('bcryptjs')
const { sign } = require('jsonwebtoken');
const SECRET = process.env.SECRET;

exports.getUsers = async (req, res) => {
  try {
    const { rows } = await db.query('select user_id, name, email, created_at from users')

    return res.status(200).json({
      success: true,
      users: rows
    })
  } catch (error) {
    console.log(error.message)
  }
}

exports.register = async (req, res) => {
  const { name, email, password } = req.body
  try {
    const hashedPassword = await hash(password, 10)

    await db.query('insert into users(name, email, password) values ($1 , $2, $3)', [
      name,
      email,
      hashedPassword,
    ])


    return res.status(201).json({
      success: true,
      message: 'The registraion was successfull',
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.login = async (req, res) => {
  let user = req.user

  let payload = {
    id: user.user_id,
    email: user.email,
  }

  try {
    const token = await sign(payload, SECRET)
    console.log(JSON.stringify(token))
    return res.status(200).cookie('token', token, { httpOnly: true }).json({
      success: true,
      message: 'Logged in successfully',
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.protected = async (req, res) => {
  try {
    return res.status(200).json({
      info: 'protected info',
    })
  } catch (error) {
    console.log(error.message)
  }
}

exports.logout = async (req, res) => {
  try {
    return res.status(200).clearCookie('token', { httpOnly: true }).json({
      success: true,
      message: 'Logged out successfully',
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}
exports.check = async (req, res) => {
  const {id} = req.query
  res.JSON(id)
}