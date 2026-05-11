const taskInput =
document.getElementById("taskInput");

const taskDate =
document.getElementById("taskDate");

const taskTime =
document.getElementById("taskTime");

const taskPriority =
document.getElementById("taskPriority");

const addBtn =
document.getElementById("addBtn");

const taskList =
document.getElementById("taskList");

const totalTasks =
document.getElementById("totalTasks");

const completedTasks =
document.getElementById("completedTasks");

const pendingTasks =
document.getElementById("pendingTasks");

const highPriorityTasks =
document.getElementById("highPriorityTasks");

const searchInput =
document.getElementById("searchInput");

const filterBtns =
document.querySelectorAll(".filter-btn");

const themeToggle =
document.getElementById("themeToggle");

const progressPercent =
document.getElementById("progressPercent");

const progressCircle =
document.querySelector(".progress-circle");

/* TASKS */

let tasks =
JSON.parse(
localStorage.getItem("tasks")
) || [];

let currentFilter = "all";

/* SAVE */

function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}

/* RENDER */

function renderTasks(){

    taskList.innerHTML = "";

    let filtered =
    tasks.filter(task => {

        if(currentFilter === "completed"){

            return task.completed;
        }

        if(currentFilter === "pending"){

            return !task.completed;
        }

        return true;

    });

    const searchText =
    searchInput.value.toLowerCase();

    filtered =
    filtered.filter(task =>

        task.text.toLowerCase()
        .includes(searchText)

    );

    filtered.forEach((task,index) => {

        const li =
        document.createElement("li");

        li.className = "task-item";

        let priorityColor = "#22c55e";

        if(task.priority === "Medium"){

            priorityColor = "#f59e0b";
        }

        if(task.priority === "High"){

            priorityColor = "#ef4444";
        }

        li.innerHTML = `

            <div class="task-left">

                <input type="checkbox"
                ${task.completed ? "checked" : ""}>

                <div>

                    <div class="${task.completed ? "completed" : ""}">

                        ${task.text}

                    </div>

                    <div class="task-details">

                        📅 ${task.date || "No Date"}

                        <br>

                        ⏰ ${task.time || "No Time"}

                    </div>

                    <div class="priority-tag"
                    style="background:${priorityColor}">

                        ${task.priority}

                    </div>

                </div>

            </div>

            <div class="task-actions">

                <button class="edit-btn">

                    <i class="fa-solid fa-pen"></i>

                </button>

                <button class="delete-btn">

                    <i class="fa-solid fa-trash"></i>

                </button>

            </div>

        `;

        /* COMPLETE */

        const checkbox =
        li.querySelector("input");

        checkbox.addEventListener(
            "change",
            () => {

                task.completed =
                checkbox.checked;

                saveTasks();

                renderTasks();

            }
        );

        /* DELETE */

        const deleteBtn =
        li.querySelector(".delete-btn");

        deleteBtn.addEventListener(
            "click",
            () => {

                tasks.splice(index,1);

                saveTasks();

                renderTasks();

            }
        );

        /* EDIT */

        const editBtn =
        li.querySelector(".edit-btn");

        editBtn.addEventListener(
            "click",
            () => {

                const updated =
                prompt(
                    "Edit Task",
                    task.text
                );

                if(updated){

                    task.text = updated;

                    saveTasks();

                    renderTasks();

                }

            }
        );

        taskList.appendChild(li);

    });

    updateStats();

    updateChart();

}

/* STATS */

function updateStats(){

    totalTasks.textContent =
    tasks.length;

    const completed =
    tasks.filter(
        t => t.completed
    ).length;

    completedTasks.textContent =
    completed;

    pendingTasks.textContent =
    tasks.length - completed;

    const high =
    tasks.filter(
        t => t.priority === "High"
    ).length;

    highPriorityTasks.textContent =
    high;

    const percentage =
    tasks.length === 0
    ? 0
    : Math.round(
    (completed / tasks.length) * 100
    );

    progressPercent.textContent =
    `${percentage}%`;

    progressCircle.style.background =
    `conic-gradient(
    #3b82f6 ${percentage * 3.6}deg,
    #1e293b 0deg
    )`;

}

/* ADD TASK */

function addTask(){

    const taskText =
    taskInput.value.trim();

    if(taskText === ""){

        alert(
            "Please enter a task"
        );

        return;
    }

    const task = {

        text:taskText,

        date:taskDate.value,

        time:taskTime.value,

        priority:taskPriority.value,

        completed:false

    };

    tasks.push(task);

    saveTasks();

    renderTasks();

    taskInput.value = "";

    taskDate.value = "";

    taskTime.value = "";

}

addBtn.addEventListener(
    "click",
    addTask
);

/* SEARCH */

searchInput.addEventListener(
    "keyup",
    renderTasks
);

/* FILTER */

filterBtns.forEach(btn => {

    btn.addEventListener(
        "click",
        () => {

            document
            .querySelector(".active")
            .classList.remove("active");

            btn.classList.add("active");

            currentFilter =
            btn.dataset.filter;

            renderTasks();

        }
    );

});

/* THEME */

themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light-mode"
        );

    }
);

/* DRAG DROP */

new Sortable(taskList, {

    animation:150

});

/* CHART */

const ctx =
document.getElementById("taskChart");

let chart =
new Chart(ctx, {

    type:"doughnut",

    data:{

        labels:[
            "Completed",
            "Pending",
            "High Priority"
        ],

        datasets:[{

            data:[0,0,0],

            backgroundColor:[
                "#3b82f6",
                "#ef4444",
                "#f59e0b"
            ],

            borderWidth:0

        }]

    },

    options:{

        plugins:{

            legend:{

                labels:{

                    color:"white"
                }

            }

        }

    }

});

function updateChart(){

    const completed =
    tasks.filter(
        t => t.completed
    ).length;

    const pending =
    tasks.length - completed;

    const high =
    tasks.filter(
        t => t.priority === "High"
    ).length;

    chart.data.datasets[0].data = [
        completed,
        pending,
        high
    ];

    chart.update();

}

/* TIMER */

const timer =
document.getElementById("timer");

const startTimer =
document.getElementById("startTimer");

const pauseTimer =
document.getElementById("pauseTimer");

const resetTimer =
document.getElementById("resetTimer");

let timeLeft = 1500;

let timerInterval;

/* UPDATE TIMER */

function updateTimer(){

    const minutes =
    Math.floor(timeLeft / 60);

    const seconds =
    timeLeft % 60;

    timer.textContent =
    `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;

}

/* START */

startTimer.addEventListener(
    "click",
    () => {

        clearInterval(timerInterval);

        timerInterval =
        setInterval(() => {

            timeLeft--;

            updateTimer();

            if(timeLeft <= 0){

                clearInterval(timerInterval);

                alert(
                    "Focus Session Completed!"
                );

            }

        },1000);

    }
);

/* PAUSE */

pauseTimer.addEventListener(
    "click",
    () => {

        clearInterval(timerInterval);

    }
);

/* RESET */

resetTimer.addEventListener(
    "click",
    () => {

        clearInterval(timerInterval);

        timeLeft = 1500;

        updateTimer();

    }
);

/* INITIAL */

renderTasks();

updateTimer();