import { createFileRoute } from "@tanstack/react-router";
import SigninPage from "../../components/pages/signin.page";

export const Route = createFileRoute("/_public/signin/$")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex justify-center items-center">
      <SigninPage />
    </div>
  );
}
