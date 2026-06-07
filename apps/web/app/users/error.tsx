"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Users</h1>
      <p style={{ color: "#c00" }}>Failed to load users.</p>
      <button onClick={reset} style={{ marginTop: "1rem" }}>Try again</button>
    </main>
  );
}
