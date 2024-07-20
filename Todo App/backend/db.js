const mongoose = require("mongoose")
const {string} = require("zod")
mongoose.connect('mongodb+srv://anshpethe110:%40mangoanshpethe159@cluster0.702twr0.mongodb.net/todos')
const todoschema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo = mongoose.model('Todos', todoschema)
module.exports = {
    todo
}