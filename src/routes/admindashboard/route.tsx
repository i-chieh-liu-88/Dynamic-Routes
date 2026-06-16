import { UserButton } from "@clerk/react";
import {
  createFileRoute,
  Outlet,
  redirect,
  Link,
} from "@tanstack/react-router";
UserButton;

export const Route = createFileRoute("/admindashboard")({
  beforeLoad: ({ context }) => {
    const { auth } = context;

    if (!auth.isSignedIn) {
      throw redirect({
        to: "/signin/$",
      });
    }

    return {
      userId: auth.userId,
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div>
        <nav className="flex items-center justify-between px-30">
          {/* 這裡放固定的導覽標籤 */}
          <Link to="/admindashboard">Dashboard</Link>
          <Link to="/admindashboard/settings">Settings</Link>
          <UserButton /> {/* Clerk 提供的超美會員頭像與登出按鈕 */}
        </nav>

        <hr />

        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
