import { type JSX } from "react";

interface UserCardProps {
  name: string;
  email: string;
  company: string;
}

export function UserCard({ name, email, company }: UserCardProps): JSX.Element {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "16px", border: "1px solid #eee", borderRadius: "8px" }}>
      <span style={{ fontWeight: "bold" }}>{name}</span>
      <span>{email}</span>
      <span style={{ color: "#666" }}>{company}</span>
    </div>
  );
}
