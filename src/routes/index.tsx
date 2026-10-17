import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/ui/AppShell";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="sn-root">
      <h1 className="sr-only">Shreeraj Narwade, drawn to measure</h1>
      <AppShell />
    </main>
  );
}
