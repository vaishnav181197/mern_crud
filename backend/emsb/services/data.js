const db=require('./db')

//get all employees
const allEmployees=()=>{
    return db.Employee.find().then(
        (result)=>{
            if(result){
                return {
                    statusCode:200,
                    employee:result
                }
            }
            else{
                return {
                    statusCode:404,
                    message:'No data Available!'
                }
            }
        }
    )
}

const createEmployee=(id,name,age,desig,salary)=>{
    return db.Employee.findOne({
        id
    }).then((result)=>{
        if(result){
            return {
                statusCode:404,
                message:"Employee with same ID already Exists!!"
            }
        }
        else{
            const newEmp=new db.Employee({
                id,
                name,
                age,
                desig,
                salary
            })
            newEmp.save()
            return {
                statusCode:200,
                message:"New Employee Registered!!"
            }
        }
    })

}

const removeEmployee=(id)=>{
    return db.Employee.deleteOne({
        id
    }).then((result)=>{
        if(result){
            return {
                statusCode:200,
                message:"Employee Removed!"
            }
        }
        else{
            return {
                statusCode:404,
                message:"Employee Removal Failed!!"
            }
        }
    })
}

const getEmployee=(id)=>{
    return db.Employee.findOne({
        id
    }).then((result)=>{
        if(result){
            return {
                statusCode:200,
                employee:result
            }
        }
        else{
            return {
                statusCode:404,
                message:"Invalid Employee ID!!"
            }
        }
    })
}

const updateEmployee=(id,name,age,desig,salary)=>{
    return db.Employee.findOne({
        id
    }).then((result)=>{
        if(result){
            result.name=name
            result.age=age
            result.desig=desig
            result.salary=salary
            result.save()
            return {
                statusCode:200,
                message:"Employee Details Updated!!"
            }
        }
        else{
            return {
                statusCode:404,
                message:"Employee not valid!"
            }
        }
    })
}

module.exports={
    allEmployees,
    createEmployee,
    removeEmployee,
    getEmployee,
    updateEmployee
}