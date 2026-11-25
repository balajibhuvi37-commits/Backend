struct Task {
    id: i32,
    title: String,
    completed: bool,
}

fn main() {
    let task1 = Task {
        id: 1,
        title: String::from("Learn Rust"),
        completed: false,
    };

    let task2 = Task {
        id: 2,
        title: String::from("Learn React"),
        completed: true,
    };

    println!("Task 1: {}", task1.title);
    println!("Task 2: {}", task2.title);
}