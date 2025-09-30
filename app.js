const express = require('express')
const app = express()
const path = require('path')

const userRouters = require('./routers/userRouters')
const morgan = require('morgan')
const userLogin = require('./middlewares/userLogin')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(express.json())
app.use(userLogin)

app.get('/', (req, res) => {
    const data = {
        title: "titulo de la pagina",
        message: "bienvenido a la pagina",
        showMessage: true,
        items: [1, 2, 3, 4, 5]
    }
    res.render('index', data);
});
app.use('/users', userRouters)

app.listen(4000, () => {
    console.log('Aplicación con Express escuchando en el puerto 4000')
})