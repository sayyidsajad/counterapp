import React from 'react'

function Employee() {
    const employee = [
        {username:'John',age:23},
        {username:'Manu',age:23},
        {username:'Arun',age:23},
        {username:'Athul',age:23}
    ]
  return (
    <div>
        {
            employee.map(item=>(
                <div>
                    <h4>Username : {item.username}</h4>
                    <h4>age : {item.age}</h4>
                </div>
            ))
        }
    </div>
  )
}

export default Employee