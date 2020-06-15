const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const pet = {
    name:'Hat'
}

pet.toJSON = function(){
    console.log(this)
    return this
}
console.log(JSON.stringify(pet))

const Task = require("./models/task");

const main = async ()=>{
    const task = await Task.findById('5ee724cf85b3ed7c90385e07');
    await task.populate('owner').execPopulate()
    console.log(task.owner);
}

main();