import * as dotenv from 'dotenv'
// import * as moduleAlias from 'module-alias/register';
import path from 'path'
import express, { Application, Errback, Request, Response, NextFunction } from 'express' // eslint-disable-line
import router from './routes'
import getCurrentIP from './libs/getCurrentIP'
import { errorHandler } from './libs/ErrorHandler'

class App {
  private dotenv: any
  private app: Application
  private port: string | number
  private localIP: string | number

  constructor() {
    this.dotenv = dotenv.config()
    this.port = process.env.PORT || 4444
    this.localIP = getCurrentIP()
    this.app = express()
    this.loadMiddlewares()
    this.loadRoutes()
    this.assets()
    this.template()
    this.errorMiddleware()
  }

  private loadMiddlewares(): void {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  private loadRoutes(): void {
    this.app.use(router)
  }

  private assets(): void {
    this.app.use('assets', express.static(`${process.env.PWD}/public/assets`))
  }

  private template(): void {
    this.app.set('views', path.join(`${process.env.PWD}/public`, 'views'))
    this.app.set('view engine', 'pug')
  }

  private errorMiddleware(): void {
    this.app.use(errorHandler)
  }

  public listen(): void {
    this.app.listen(this.port, (): void => {
      console.log(`Server listening on ${this.localIP}:${this.port}`)
    })
  }
}

new App().listen()
