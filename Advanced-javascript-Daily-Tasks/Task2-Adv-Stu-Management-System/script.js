const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");

let students = JSON.parse(localStorage.getItem("studentRecords")) || [];
let editingId = null;

function calculateResult(marks) {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const average = total / marks.length;
    const passed = marks.every(mark => mark >= 35);

    let grade = "F";

    if (passed) {
        if (average >= 90) grade = "A+";
        else if (average >= 80) grade = "A";
        else if (average >= 70) grade = "B";
        else if (average >= 60) grade = "C";
        else if (average >= 50) grade = "D";
        else grade = "E";
    }

    return {
        total,
        average,
        grade,
        status: passed ? "Pass" : "Fail"
    };
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const id = document.getElementById("studentId").value.trim();
    const name = document.getElementById("studentName").value.trim();
    const studentClass = document.getElementById("studentClass").value.trim();

    const marks = ["mark1", "mark2", "mark3"].map(id =>
        Number(document.getElementById(id).value)
    );

    if (marks.some(mark => !Number.isFinite(mark) || mark < 0 || mark > 100)) {
        alert("Each mark must be between 0 and 100.");
        return;
    }

    const duplicate = students.some(student =>
        student.id.toLowerCase() === id.toLowerCase() &&
        student.id !== editingId
    );

    if (duplicate) {
        alert("Student ID already exists.");
        return;
    }

    const student = {
        id,
        name,
        studentClass,
        marks,
        ...calculateResult(marks)
    };

    if (editingId !== null) {
        students = students.map(item =>
            item.id === editingId ? student : item
        );
        alert("Student updated successfully.");
    } else {
        students.push(student);
        alert("Student added successfully.");
    }

    saveStudents();
    resetForm();
    renderStudents();
});

function editStudent(id) {
    const student = students.find(item => item.id === id);
    if (!student) return;

    editingId = id;

    document.getElementById("studentId").value = student.id;
    document.getElementById("studentName").value = student.name;
    document.getElementById("studentClass").value = student.studentClass;
    document.getElementById("mark1").value = student.marks[0];
    document.getElementById("mark2").value = student.marks[1];
    document.getElementById("mark3").value = student.marks[2];

    document.getElementById("formTitle").textContent = "Edit Student";
    document.getElementById("submitButton").textContent = "Update Student";
    form.scrollIntoView({ behavior: "smooth" });
}

function deleteStudent(id) {
    const student = students.find(item => item.id === id);
    if (!student) return;

    if (!confirm(`Delete student ${student.name}?`)) return;

    students = students.filter(item => item.id !== id);

    if (editingId === id) resetForm();

    saveStudents();
    renderStudents();
}

function resetForm() {
    form.reset();
    editingId = null;
    document.getElementById("formTitle").textContent = "Add Student";
    document.getElementById("submitButton").textContent = "Add Student";
}

document.getElementById("clearButton").addEventListener("click", resetForm);

function saveStudents() {
    localStorage.setItem("studentRecords", JSON.stringify(students));
}

function renderStudents() {
    const search = document.getElementById("searchInput").value.toLowerCase().trim();
    const filter = document.getElementById("resultFilter").value;
    const sort = document.getElementById("sortOption").value;

    let list = students.filter(student => {
        const matchesSearch =
            student.id.toLowerCase().includes(search) ||
            student.name.toLowerCase().includes(search);

        return matchesSearch && (filter === "all" || student.status === filter);
    });

    if (sort === "name") {
        list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "high") {
        list.sort((a, b) => b.average - a.average);
    } else if (sort === "low") {
        list.sort((a, b) => a.average - b.average);
    } else {
        list.sort((a, b) => a.id.localeCompare(b.id));
    }

    table.innerHTML = "";

    document.getElementById("emptyMessage").style.display =
        list.length ? "none" : "block";

    list.forEach(student => {
        const row = document.createElement("tr");

        [
            student.id,
            student.name,
            student.studentClass,
            `${student.total}/300`,
            `${student.average.toFixed(2)}%`,
            student.grade,
            student.status
        ].forEach((value, index) => {
            const cell = document.createElement("td");
            cell.textContent = value;

            if (index === 6) {
                cell.className = student.status === "Pass" ? "pass" : "fail";
            }

            row.appendChild(cell);
        });

        const actions = document.createElement("td");
        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        editButton.textContent = "Edit";
        editButton.className = "edit-btn";
        editButton.dataset.action = "edit";
        editButton.dataset.id = student.id;

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.dataset.action = "delete";
        deleteButton.dataset.id = student.id;

        actions.append(editButton, deleteButton);
        row.appendChild(actions);
        table.appendChild(row);
    });

    updateDashboard();
}

table.addEventListener("click", function(event) {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    if (button.dataset.action === "edit") {
        editStudent(button.dataset.id);
    } else if (button.dataset.action === "delete") {
        deleteStudent(button.dataset.id);
    }
});

function updateDashboard() {
    const passed = students.filter(student => student.status === "Pass").length;
    const failed = students.filter(student => student.status === "Fail").length;

    const average = students.length
        ? students.reduce((sum, student) => sum + student.average, 0) / students.length
        : 0;

    document.getElementById("totalStudents").textContent = students.length;
    document.getElementById("passedStudents").textContent = passed;
    document.getElementById("failedStudents").textContent = failed;
    document.getElementById("classAverage").textContent = `${average.toFixed(2)}%`;
}

["searchInput", "resultFilter", "sortOption"].forEach(id => {
    document.getElementById(id).addEventListener(
        id === "searchInput" ? "input" : "change",
        renderStudents
    );
});

renderStudents();
