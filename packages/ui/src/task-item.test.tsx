import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TaskItem } from "./task-item";

describe("TaskItem", () => {
  it("renders the task title", () => {
    render(<TaskItem title="Buy milk" completed={false} />);
    expect(screen.getByText("Buy milk")).toBeInTheDocument();
  });

  it("renders checkbox as checked when completed", () => {
    render(<TaskItem title="Done task" completed={true} />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("renders checkbox as unchecked when not completed", () => {
    render(<TaskItem title="Pending task" completed={false} />);
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("applies line-through style when completed", () => {
    render(<TaskItem title="Done task" completed={true} />);
    expect(screen.getByText("Done task")).toHaveStyle({ textDecoration: "line-through" });
  });
});
