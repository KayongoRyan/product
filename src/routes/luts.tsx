import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/luts")({
  component: LutsLayout,
});

function LutsLayout() {
  return <Outlet />;
}
