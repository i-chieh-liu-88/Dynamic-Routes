import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">關於我</h1>
      <p className="text-base-content">這是關於我的頁面內容。</p>
    </div>
  );
}
