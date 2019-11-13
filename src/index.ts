import { Application, ApplicationFunction } from 'probot' // eslint-disable-line no-unused-vars
import express from 'express'

const hello:ApplicationFunction = (app: Application) => {
  // Get an express router to expose new HTTP endpoints
  const router:express.Router = app.route('/my-app')

  // Use any middleware
  router.use(express.static('public'))

  // Add a new route
  router.get('/hello-world', (_req, res) => {
    res.send('Hello world!')
  })
}

export default hello