import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  component: ImpressumComponent,
});

function ImpressumComponent() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">版權聲明</h1>
      <p className="text-base-content">這是版權聲明頁面內容。</p>
    </div>
  );
}
