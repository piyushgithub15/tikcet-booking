const mongoose =require('mongoose')

mongoose.set('strictQuery', false)

async function connectDb(){
  mongoose.connect('mongodb://127.0.0.1:27017/ticket-book-backend', {
    useNewUrlParser: true,
    autoIndex: true
  })
}
module.exports = connectDb;