const employees = [];

function addEmployee(id, name, department, salary) {
    if (!id || !name || !department || !salary) {
        console.log("All fields are required!");
        return;
    }
    const empExists = employees.find(e => e.id === id);
    if (empExists) {
        console.log("Employee with this ID already exists!");
        return;
    }
    employees.push({ id, name, department, salary });
    console.log(`Employee ${name} added successfully.`);
}

function removeEmployee(id) {
    const index = employees.findIndex(e => e.id === id);
    if (index === -1) {
        console.log("Employee not found!");
        return;
    }
    const removed = employees.splice(index, 1);
    console.log(`Employee ${removed[0].name} removed.`);
}

function updateEmployeeSalary(id, newSalary) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            employees[i].salary = newSalary;
            console.log(`Salary updated for ${employees[i].name}`);
            return;
        }
    }
    console.log("Employee not found!");
}

function getEmployeeDetails(id) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            console.log(employees[i]);
            return employees[i];
        }
    }
    console.log("Employee not found!");
    return null;
}

function departmentReport(department) {
    let totalSalary = 0;
    let count = 0;
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].department === department) {
            totalSalary += employees[i].salary;
            count++;
            console.log(`Employee: ${employees[i].name}, Salary: ${employees[i].salary}`);
        }
    }
    if (count === 0) {
        console.log("No employees in this department.");
        return;
    }
    const average = totalSalary / count;
    console.log(`Average Salary in ${department}: ${average}`);

    let maxSalary = 0;
    let topEmployee = null;
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].department === department) {
            if (employees[i].salary > maxSalary) {
                maxSalary = employees[i].salary;
                topEmployee = employees[i];
            }
        }
    }
    if (topEmployee) {
        console.log(`Highest Paid Employee: ${topEmployee.name}, Salary: ${topEmployee.salary}`);
    }
}


function promoteEmployees(department, increasePercent) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].department === department) {
            if (employees[i].salary < 5000) {
                employees[i].salary += employees[i].salary * (increasePercent / 100);
                console.log(`Promoted ${employees[i].name} to new salary ${employees[i].salary}`);
            } else {
                if (employees[i].salary >= 5000 && employees[i].salary <= 10000) {
                    employees[i].salary += employees[i].salary * (increasePercent / 2 / 100);
                    console.log(`Promoted ${employees[i].name} to new salary ${employees[i].salary}`);
                } else {
                    console.log(`${employees[i].name} is senior, no promotion applied`);
                }
            }
        }
    }
}

// Simulate bad test cases
addEmployee(1, "Ronak", "Engineering", 4000);
addEmployee(2, "Om", "Engineering", 6000);
addEmployee(3, "Harshita", "HR", 4500);
addEmployee(4, "Mayur", "HR", 7000);

departmentReport("Engineering");
promoteEmployees("Engineering", 10);
