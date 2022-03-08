const ToDo = require('./TodoListItemSchema')
const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

 let todoList = [ ]


app.get('/', (req, res) => {
  res.send(' <h1> Hello World! </h1>')

})

app.get('/api/todos', (req, res) => {
    res.send(todoList)
  
  })


  app.get('/api/todos/:id', (req, res) => {
    // calling diff variables which has its own variables. Ex. param has id variable, id (which is in the url)
    let info = req.params.id
    res.send(todoList[info])
  

  })




  
app.post('/api/todos', (req, res) => {
   
  // getting data from the client/user, storing it in variable
  
   let info = req.body
   



  let job = new ToDo (info.complete, info.task)
  todoList.push (job)

  

  res.send(' <h2> New To Do Item created </h2>')
   
  })
  
app.put('/api/todos/:id', (req, res) => {
    let info = req.params.id
    let newInfo = req.body
    todoList[info].complete = newInfo.complete
    todoList[info].task = newInfo.task
    res.send(' <h2> Task Updated  </h2>')
  })


  
app.delete('/api/todos/:id', (req, res) => {
  
  //get id from url and store into variable 
  let info = req.params.id
  todoList.splice(info,1)
    res.send(' <h2> Task deleted </h2>')
  
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

