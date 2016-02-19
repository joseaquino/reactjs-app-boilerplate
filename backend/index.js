import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackDev from 'webpack-dev-middleware'
import webpackHot from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config.babel'

const app = express()
const compiler = webpack(webpackConfig)
const port = 8080

app.set('view engine', 'jade')
app.set('views', path.join(__dirname, '/views'))
//app.use(express.static(path.resolve(__dirname, 'public')))
app.use(webpackDev(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHot(compiler))

app.get('/', (req, res) => res.render('index', {}))

app.listen(port, () => {
	console.log('Application in running in localhost:' + port)
})
