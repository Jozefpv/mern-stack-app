const express = require('express')
const morgan = require('morgan')

const {mongoose} = require('./database')

const path = require('path')
const app = express()

const Task = require('../models/task')

//settings
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'))
app.use(express.json())

//routes
app.get('/', async(req, res) => {
    const task = await Task.find()
    console.log(task)
    res.json(task)
   
})
app.use('/api/tasks', require('./routes/task.routes'))

//static files
app.use(express.static(path.join(__dirname, 'public')))

//inicio del servidor
app.listen(app.get('port'), () => { 
    console.log(`Server on port ${app.get('port')}`)
    
})