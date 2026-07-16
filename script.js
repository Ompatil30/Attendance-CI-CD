const form = document.getElementById("attendanceForm");
const table = document.getElementById("attendanceTable");

const totalStudents = document.getElementById("totalStudents");
const presentStudents = document.getElementById("presentStudents");
const absentStudents = document.getElementById("absentStudents");

let total = 0;
let present = 0;
let absent = 0;

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const department = document.getElementById("department").value.trim();
    const status = document.getElementById("status").value;

    if(name==="" || roll==="" || department==="")
    {
        alert("Please fill all fields.");
        return;
    }

    total++;

    if(status==="Present")
    {
        present++;
    }
    else
    {
        absent++;
    }

    totalStudents.innerText = total;
    presentStudents.innerText = present;
    absentStudents.innerText = absent;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${total}</td>
        <td>${name}</td>
        <td>${roll}</td>
        <td>${department}</td>
        <td>
            ${
                status==="Present"
                ? '<span class="badge bg-success">Present</span>'
                : '<span class="badge bg-danger">Absent</span>'
            }
        </td>
    `;

    table.appendChild(row);

    form.reset();

});