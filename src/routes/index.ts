import express from 'express'
import upload from '../libs/multerStorage'
import { HomeController, TestController, PruebaController } from '../controllers'
import webRouter from './web'
import apiRouter from './web'
import { loggerMid } from '../libs/winstonLogger'

const router = express.Router() // eslint-disable-line

// router.route permite agrupar rutas

router.use('/api', loggerMid('test winston middleware'), apiRouter)
router.use('/web', webRouter)

router.get('/favicon.ico', HomeController.index)
router.get('/upload', TestController.uploadView)
router.post('/upload', upload.any(), TestController.upload)
router.get('/:path?', PruebaController.downloadView)

export default router
