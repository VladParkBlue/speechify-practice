import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { UserCard } from "./user-card";

describe("UserCard", () => {
  it("renders the user name", () => {
    render(<UserCard name="John Doe" email="john@example.com" company="Acme" />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("renders the user email", () => {
    render(<UserCard name="John Doe" email="john@example.com" company="Acme" />);
    expect(screen.getByText("john@example.com")).toBeInTheDocument();
  });

  it("renders the company name", () => {
    render(<UserCard name="John Doe" email="john@example.com" company="Acme" />);
    expect(screen.getByText("Acme")).toBeInTheDocument();
  });

  it("applies bold style to name", () => {
    render(<UserCard name="John Doe" email="john@example.com" company="Acme" />);
    expect(screen.getByText("John Doe")).toHaveStyle({ fontWeight: "bold" });
  });
});
