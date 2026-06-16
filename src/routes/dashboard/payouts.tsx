import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/payouts")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Your payouts </h1>
    </div>
  );
}
