import { createFileRoute } from "@tanstack/react-router";
import SignupPage from "../components/pages/signup.page";

export const Route = createFileRoute("/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex justify-center items-center">
      <SignupPage />
    </div>
  );
}
