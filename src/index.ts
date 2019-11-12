import { Application } from 'probot' // eslint-disable-line no-unused-vars
import express from 'express'

export = (app: Application) => {
  // Get an express router to expose new HTTP endpoints
  const router:express.Router = app.route('/my-app')

  // Use any middleware
  router.use(express.static('public'))

  // Add a new route
  router.get('/hello-world', (_req, res) => {
    res.send('Hello world!')
  })
}
