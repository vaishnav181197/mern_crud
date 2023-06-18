const express=require("express")
const service=require('./services/data')
const cors=require("cors")

const server=express()

server.use(express.json())

server.use(cors({
    origin:"http://localhost:3000"
}))

//all-employees
server.get('/all-employees',(req,res)=>{
    service.allEmployees().then(
        (result)=>{
            res.status(result.statusCode).send(result)
        }
    )

})

//add-employee
server.post('/add-employee',(req,res)=>{
    service.createEmployee(req.body.id,req.body.name,req.body.age,req.body.desig,req.body.salary).
    then((result)=>{
        res.status(result.statusCode).send(result)
    })
})

//remove-emp
server.delete('/remove-employee/:id',(req,res)=>{
    service.removeEmployee(req.params.id).
    then((result)=>{
        res.status(result.statusCode).send(result)
    })
    
})

//get-employee
server.get('/get-employee/:id',(req,res)=>{
    service.getEmployee(req.params.id).
    then((result)=>{
            res.status(result.statusCode).send(result)
        } 
    )

})
//update-employee
server.post('/update-employee',(req,res)=>{
    service.updateEmployee(req.body.id,req.body.name,req.body.age,req.body.desig,req.body.salary).
    then((result)=>{
        res.status(result.statusCode).send(result)
    })
})

server.listen(4200,()=>{
    console.log("EMS Server running on",4200)
})