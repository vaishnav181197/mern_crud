const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/ems')


const Employee=mongoose.model('Employee',{
    id:String,
    name:String,
    age:Number,
    desig:String,
    salary:Number
})

module.exports={
    Employee
}