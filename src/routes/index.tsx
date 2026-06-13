import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-5xl font-bold">歡迎來到 MyApp</h1>
          <p className="py-6">這是首頁內容</p>
        </div>
      </div>
    </div>
  );
}
