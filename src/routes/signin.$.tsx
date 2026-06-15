import { createFileRoute } from "@tanstack/react-router";
import SigninPage from "../components/pages/signin.page";

export const Route = createFileRoute("/signin/$")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex justify-center items-center">
      <SigninPage />
    </div>
  );
}
