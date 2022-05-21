class Company{

    constructor(){
        this.departments = {};
    }
    addEmployee(name, salary, position, department){
        if(!name || !position || !department || !salary || salary <0){
            throw new Error('Invalid input!');
        }
        if (!this.departments[department]){
            this.departments[department] = [];
        }
        this.departments[department].push({name, position, salary})
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment(){
        let currentBest = {
            name: "",
            salary: 0
        }
        for (let depKey in this.departments){
            let averageSalary = 0;

            for (let empKey in this.departments[depKey]){
                averageSalary += this.departments[depKey][empKey].salary;

            }
            
            averageSalary = averageSalary / this.departments[depKey].length;

            if (currentBest.salary < averageSalary){
                currentBest.name = depKey;
                currentBest.salary = averageSalary;

            }

        }
        this.departments[currentBest.name].sort((a, b) => {
           return b.salary - a.salary || a.name.localeCompare(b.name);
        })
        let bestDepString = '';
        bestDepString += `Best Department is: ${currentBest.name}\n`;
        bestDepString += `Average salary: ${currentBest.salary.toFixed(2)}\n`;
        this.departments[currentBest.name].forEach((el) => {
        /*   if (this.departments[currentBest.name].indexOf(el) == this.departments[currentBest.name].length - 1){
                bestDepString += `${el.name} ${el.salary} ${el.position}`

            } else {
                bestDepString += `${el.name} ${el.salary} ${el.position}\n`
            }
        */
            

            
        });
        return bestDepString.trim();
        
    }
}
let company = new Company();
company.addEmployee("Stanimir", 2000, "engineer", "Construction");
company.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
company.addEmployee("Slavi", 500, "dyer", "Construction");
company.addEmployee("Stan", 2000, "architect", "Construction");
company.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
company.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
company.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(company.bestDepartment());

/*
class Company {
    constructor() {
        this.departments = new Map();
    }
    addEmployee(username, salary, position, department) {
 
        if (!username || !salary || salary < 0 || !position || !department) {
            throw new Error("Invalid input!");
        }
 
        let newEmployee = { username, salary, position, department };
 
        if (this.departments.has(department)) {
            this.departments.get(department).push(newEmployee);
        } else {
            this.departments.set(department, [newEmployee]);
        }
 
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }
 
    bestDepartment() {
        let totalSalary = (department) => {
            let totalSalary = department[1].reduce((acc, b) => { return acc += b.salary }, 0);
            let averageSalary = (totalSalary / department[1].length).toFixed(2);
            department.push(averageSalary);
            return averageSalary;
        };
        let bestDepartment = [...this.departments].sort((a, b) => totalSalary(b) - totalSalary(a))[0];
        let sortBySalaryAndName = bestDepartment[1].sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));
 
        let result = `Best Department is: ${bestDepartment.shift()}\n`;
        result += `Average salary: ${bestDepartment.pop()}\n`;
        sortBySalaryAndName.forEach(e => result += `${e.username} ${e.salary} ${e.position}\n`);
 
        return result.trim();
    }
}
*/
