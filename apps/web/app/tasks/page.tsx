import { TaskItem } from "@repo/ui/task-item";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

async function getTodos(): Promise<Todo[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
  if (!res.ok) throw new Error("Failed to fetch todos");
  return res.json() as Promise<Todo[]>;
}

export default async function TasksPage() {
  const todos = await getTodos();

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Tasks</h1>
      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TaskItem title={todo.title} completed={todo.completed} />
          </li>
        ))}
      </ul>
    </main>
  );
}
