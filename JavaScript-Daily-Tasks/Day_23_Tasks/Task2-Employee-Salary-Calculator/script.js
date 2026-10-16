
function calculateSalary() {
    let name = document.getElementById("name").value.trim();
    let salaryInput = document.getElementById("salary").value;
    let salary = Number(salaryInput);
    let result = document.getElementById("result");

    if (name === "" || salaryInput === "" || salary <= 0) {
        result.innerHTML = "Please enter valid employee details";
        return;
    }

    let hra = salary * 20 / 100;
    let da = salary * 10 / 100;
    let pf = salary * 12 / 100;

    let grossSalary = salary + hra + da;
    let netSalary = grossSalary - pf;

    result.innerHTML =
        "Employee Name: " + name + "<br>" +
        "Basic Salary: ₹" + salary.toFixed(2) + "<br>" +
        "HRA: ₹" + hra.toFixed(2) + "<br>" +
        "DA: ₹" + da.toFixed(2) + "<br>" +
        "PF Deduction: ₹" + pf.toFixed(2) + "<br>" +
        "Gross Salary: ₹" + grossSalary.toFixed(2) + "<br>" +
        "Net Salary: ₹" + netSalary.toFixed(2);
}
