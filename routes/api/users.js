const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')

// Load input validation
const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login')

// Load User model
const User = require('../../models/UserSchema')

// @route POST api/users/register
// @desc Register user
// @access Public

router.post('/register', (req, res) => {
  console.log('register user on server')
  //Form validation
  const { errors, isValid } = validateRegisterInput(req.body)

  if (!isValid) {
    return res.status(400).send(errors)
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).send({ email: 'Email already exists' })
      //   return res.send({ error: true, email: 'Email already exists' })
    } else {
      const newUser = new User({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      })

      // Hash password before storing in database
      const rounds = 10
      bcrypt.genSalt(rounds, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err
          newUser.password = hash
          newUser
            .save()
            .then((user) => res.send({ success: true }))
            .catch((err) => res.send(err))
        })
      })
    }
  })
})

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public

router.post('/login', (req, res) => {
  //Form Valdiation
  const { errors, isValid } = validateLoginInput(req.body)

  if (!isValid) {
    return res.status(400).send(errors)
  }

  const email = req.body.email
  const password = req.body.password

  //Find user by Email
  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(404).send({ emailnotfound: 'Email not found' })
    }

    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
        }

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926,
          },
          (err, token) => {
            res.send({
              success: true,
              token: 'Bearer ' + token,
            })
          },
        )
      } else {
        return res.status(400).send({ passwordincorrect: 'Password incorrect' })
      }
    })
  })
})

module.exports = router
