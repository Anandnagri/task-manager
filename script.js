$(document).ready(function(){
    // Sample initial tasks
    const tasks = [
        { id: 1, title: 'Task 1', description: 'Description of Task 1', dueDate: '2024-06-10' },
        { id: 2, title: 'Task 2', description: 'Description of Task 2', dueDate: '2024-06-12' }
    ];

    // Function to render tasks
    function renderTasks() {
        $('#taskList').empty();
        tasks.forEach(task => {
            $('#taskList').append(`
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${task.title}</h5>
                        <p class="card-text">Description: ${task.description}</p>
                        <p class="card-text">Due Date: ${task.dueDate}</p>
                        <button class="btn btn-info viewTaskBtn" data-task-id="${task.id}">View</button>
                        <button class="btn btn-warning editTaskBtn" data-task-id="${task.id}">Edit</button>
                        <button class="btn btn-danger deleteTaskBtn" data-task-id="${task.id}">Delete</button>
                    </div>
                </div>
            `);
        });
    }

    // Initial render
    renderTasks();

    // Add Task button click event
    $('#addTaskBtn').click(function() {
        $('#taskModal').modal('show');
    });

    // Add Task form submission
    $('#addTaskForm').submit(function(event) {
        event.preventDefault();
        const title = $('#title').val();
        const description = $('#description').val();
        const dueDate = $('#dueDate').val();
        const newTask = {
            id: tasks.length + 1,
            title: title,
            description: description,
            dueDate: dueDate
        };
        tasks.push(newTask);
        renderTasks();
        $('#taskModal').modal('hide');
        $('#addTaskForm').trigger('reset');
    });

    // View Task button click event
    $(document).on('click', '.viewTaskBtn', function() {
        const taskId = $(this).data('task-id');
        const task = tasks.find(task => task.id === taskId);
        alert(`Title: ${task.title}\nDescription: ${task.description}\nDue Date: ${task.dueDate}`);
    });

    // Edit Task button click event
    $(document).on('click', '.editTaskBtn', function() {
        const taskId = $(this).data('task-id');
        const task = tasks.find(task => task.id === taskId);
        // You can implement edit functionality here
        // For simplicity, I'm just alerting the task details
        alert(`Editing Task: ${task.title}`);
    });

    // Delete Task button click event
    $(document).on('click', '.deleteTaskBtn', function() {
        const taskId = $(this).data('task-id');
        const index = tasks.findIndex(task => task.id === taskId);
        tasks.splice(index, 1);
        renderTasks();
    });
});
