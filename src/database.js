const mongoose = require('mongoose')

const URI = 'mongodb+srv://jozef:jozef@cluster0.trrjhin.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URI)
    .then(db => console.log('database connected'))
    .catch(err => console.error(err))

module.exports = mongoose
