const BASE_URL = "http://127.0.0.1:8000/api";


async function loginUser() {

    const username = document.getElementById("username").value;

    const password = document.getElementById("password").value;

    const response = await fetch(`${BASE_URL}/login/`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            username,
            password
        })
    });

    const data = await response.json();

    localStorage.setItem("token", data.access);

    alert("Login Successful");
}


async function createTask() {

    const title = document.getElementById("title").value;

    const description = document.getElementById("description").value;

    const response = await fetch(`${BASE_URL}/tasks/`, {

        method: "POST",

        headers: {

            "Content-Type": "application/json",

            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },

        body: JSON.stringify({

            title,
            description,
            status: "pending"
        })
    });

    const data = await response.json();

    console.log(data);

    alert("Task Created");
}


async function getTasks() {

    const response = await fetch(`${BASE_URL}/tasks/`, {

        headers: {

            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    });

    const tasks = await response.json();

    const taskList = document.getElementById("task-list");

    taskList.innerHTML = "";

    tasks.forEach(task => {

        const li = document.createElement("li");

        li.innerText = `${task.title} - ${task.status}`;

        taskList.appendChild(li);
    });
    function logoutUser() {

    localStorage.removeItem("token");

    alert("Logged Out");
}
}