import { UserCard } from "@repo/ui/user-card";

interface User {
  id: number;
  name: string;
  email: string;
  company: { name: string };
}

async function getUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json() as Promise<User[]>;
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Users</h1>
      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
        {users.map((user) => (
          <li key={user.id}>
            <UserCard name={user.name} email={user.email} company={user.company.name} />
          </li>
        ))}
      </ul>
    </main>
  );
}
