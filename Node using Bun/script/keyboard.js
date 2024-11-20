var readline = require("readline-sync");


var message = "keyboard application app";


function askUser() {
    var id = readline.question("Enter user ID:   ");
    console.log(id);
    var firstName = readline.question("Enter user First Name: ");
    console.log(firstName);
    var lastName = readline.question("Enter user Last Name: ");
    console.log(lastName);
    var age = readline.question("Enter user age: ");
    console.log(age);
    var salary = readline.question("Enter user salary: ");
    console.log(salary);
    try {
        var p = new Employee();
        p.Id = Number.parseInt(age);
        p.FirstName= firstName;
        p.LastName = lastName;
        p.Age= Number.parseInt(age);
        p.Salary = Number.parseFloat(salary);
        console.log(p.Id, p.FirstName, p.LastName, p.Age, p.Salary)
    } catch (error) {
        console.log(error);
        
    }
}


class Employee {
    #id = 0;
    #firstName = "";
    #lastname = "";
    #age = 0;
    #salary = 0;
  
    get Id() {
        return this.#id;
    }
  
    set Id(id) {
        this.#id = id;
    }
  
    get FirstName() {
        return this.#firstName;
    }
  
    set FirstName(firstName) {
        this.#firstName = firstName;
    }
  
    get LastName() {
        return this.#lastname;
    }
  
    set LastName(lastname) {
        this.#lastname = lastname;
    }
  
    get Age() {
        return this.#age;
    }
  
    set Age(age) {
        this.#age = age;
    }
  
    get Salary() {
        return this.#salary;
    }
  
    set Salary(salary) {
        this.#salary = salary;
    }
  

    #computeInterest(rate) {
        this.account += this.account * rate;
        console.log(this.account);
    }
}


module.exports = {
    message: message,
    askUser: askUser,
    Employee: Employee
};
