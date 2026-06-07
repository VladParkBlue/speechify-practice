import { type JSX } from "react";

interface TaskItemProps {
  title: string;
  completed: boolean;
}

export function TaskItem({ title, completed }: TaskItemProps): JSX.Element {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <input type="checkbox" checked={completed} readOnly aria-label={title} />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {title}
      </span>
    </div>
  );
}
