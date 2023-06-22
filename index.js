// Write your solution in this file!
let employee = {
    name: "Sam",
    streetAddress: "11 Broadway"

};

function updateEmployeeWithKeyAndValue(employee, key, value){
    let updatedEmployee={...employee};
    return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee;
}