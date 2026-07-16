const students = [
    {
        id: 1,
        name: "Om Patil",
        course: "AWS Cloud",
        status: "Present"
    },
    {
        id: 2,
        name: "Mahesh Bhadane",
        course: "Java",
        status: "Present"
    },
    {
        id: 3,
        name: "Gaurav Kiran",
        course: "Python",
        status: "Absent"
    },
    {
        id: 4,
        name: "Sneha Sharma",
        course: "Web Development",
        status: "Present"
    },
    {
        id: 5,
        name: "Rahul Patil",
        course: "Machine Learning",
        status: "Present"
    },
    {
        id: 6,
        name: "Priya Verma",
        course: "Data Science",
        status: "Absent"
    },
    {
        id: 7,
        name: "Amit Joshi",
        course: "DevOps",
        status: "Present"
    },
    {
        id: 8,
        name: "Neha Gupta",
        course: "Cyber Security",
        status: "Present"
    },
    {
        id: 9,
        name: "Rohit Singh",
        course: "Artificial Intelligence",
        status: "Present"
    },
    {
        id: 10,
        name: "Pooja Kulkarni",
        course: "Cloud Computing",
        status: "Present"
    }
];

const table = document.getElementById("studentTable");
const search = document.getElementById("search");

function loadStudents(list) {

    table.innerHTML = "";

    list.forEach(student => {

        const badge =
            student.status === "Present"
                ? '<span class="badge bg-success">Present</span>'
                : '<span class="badge bg-danger">Absent</span>';

        table.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.course}</td>
                <td>${badge}</td>
            </tr>
        `;
    });
}

loadStudents(students);

search.addEventListener("keyup", () => {

    const keyword = search.value.toLowerCase();

    const filtered = students.filter(student =>
        student.name.toLowerCase().includes(keyword) ||
        student.course.toLowerCase().includes(keyword)
    );

    loadStudents(filtered);

});