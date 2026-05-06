import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/fashion")({
  beforeLoad: () => {
    throw redirect({ to: "/apparel" });
  },
});
