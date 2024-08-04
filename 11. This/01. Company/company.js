class Company {

    constructor() {
        this.departments = [];
        this.realDepartments = {};
    }

    addEmployee(username, salary, position, department) {
        if (!username || (!salary && salary !== 0) || !position || !department) {
            throw new Error('Invalid input!');
        }

        if (salary < 0 ) {
            throw new Error('Invalid input!');
        }

        if (!this.realDepartments[department]) {
            this.realDepartments[department] = [
                {
                    username,
                    salary,
                    position,
                    department
                }
            ];
        }
        else {
            this.realDepartments[department].push(
                {
                    username,
                    salary,
                    position
                }
            );
        }

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    getHighestAvgSalary(departments) {
        let highestAvgSalaryDepartment = Object.keys(this.realDepartments).sort((a, b) => {
            let avgA = this.realDepartments[a].reduce((acc, employee) => acc + Number(employee.salary), 0) / this.realDepartments[a].length;
            let avgB = this.realDepartments[b].reduce((acc, employee) => acc + Number(employee.salary), 0) / this.realDepartments[b].length;

            return avgB - avgA;
        })[0];

        let highestAvg = this.realDepartments[highestAvgSalaryDepartment]
            .reduce((acc, employee) => acc + Number(employee.salary), 0) / this.realDepartments[highestAvgSalaryDepartment].length;

        return {
            highestAvgSalaryDepartment,
            highestAvg
        };
    }

    bestDepartment() {
        let highestAvg = this.getHighestAvgSalary(this.realDepartments);

        let result = '';

        result += `Best department is: ${highestAvg.highestAvgSalaryDepartment}\n`;
        result += `Average salary: ${highestAvg.highestAvg.toFixed(2)}\n`;
        result += this.realDepartments[highestAvg.highestAvgSalaryDepartment].sort((a, b) => {
            return b.salary - a.salary || a.username.localeCompare(b.username);
        }).map(element => {
            return `${element.username} ${element.salary} ${element.position}`;
        }).join('\n');

        return result;
    }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());