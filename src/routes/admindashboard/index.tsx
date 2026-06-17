import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admindashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { userId } = Route.useRouteContext();
  //子頁面用 Route.useRouteContext() 取得 userId
  return (
    <>
      <div className="h-dvh flex flex-col items-center justify-between py-50">
        <h1 className="text-accent">Hello my UserID is {userId}</h1>
        <div className="flex p-7 m-7">
          <ul className="steps steps-vertical lg:steps-horizontal">
            <li className="step step-primary">Register</li>
            <li className="step step-primary">Choose plan</li>
            <li className="step">Purchase</li>
            <li className="step">Receive Product</li>
          </ul>
        </div>
      </div>
    </>
  );
}
