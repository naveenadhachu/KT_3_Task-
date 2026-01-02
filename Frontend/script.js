const API_URL = "http://localhost:3000/students";

// GET students
function getStudents() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("studentList");
      list.innerHTML = "";

      data.forEach(s => {
        const li = document.createElement("li");
        li.innerText = `ID: ${s.id}, Name: ${s.name}, Class: ${s.class}, Fees: ${s.fees_status}`;
        list.appendChild(li);
      });
    });
}

// POST student
function addStudent() {
  const student = {
    students: [
      {
        id: Number(document.getElementById("id").value),
        name: document.getElementById("name").value,
        class: document.getElementById("class").value,
        fees_status: document.getElementById("fees").value
      }
    ]
  };

  fetch(API_URL + "/batch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
  })
  .then(res => res.json())
  .then(() => {
    alert("Student Added Successfully");
    getStudents();
  });
}
