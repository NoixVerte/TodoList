export default class list_item {
    constructor(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.changePriority(priority);
        this.completed = false;
    }

    toggleCompletion() {
        this.completed = !this.completed;
    }

    changePriority(newPriority) {
        let priorityOptions = ["low", "medium", "high"];
        if (priorityOptions.includes(newPriority)) {
            this.priority = newPriority;
        } else {
            throw new Error("Invalid priority: " + newPriority + ". Allowed priority values: " + priorityOptions.toString());
        }
    }
}