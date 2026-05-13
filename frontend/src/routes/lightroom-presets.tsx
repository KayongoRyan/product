import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/lightroom-presets")({
  component: LightroomPresetsLayout,
});

function LightroomPresetsLayout() {
  return <Outlet />;
}
