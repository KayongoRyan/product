import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/apparel")({
  component: ApparelLayout,
});

function ApparelLayout() {
  return <Outlet />;
}
