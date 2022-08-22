// // Write your solution in this file!
var employee ={};
function updateEmployeeWithKeyAndValue(employee= 'Sam', key= 'streetAddress', value= '11 Broadway'){
    return Object.assign({}, employee, {[key]: value});
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee= 'Sam', key= 'streetAddress', value= '12 Broadway'){
  employee[key] = value;
    return employee;
  }
function deleteFromEmployeeByKey(employee, key) {
    var clone = Object.assign({}, employee);
    delete clone[key];
    return clone;
  }
  
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}


