import { UserButton } from "@clerk/react";
import {
  createFileRoute,
  Outlet,
  redirect,
  Link,
} from "@tanstack/react-router";
UserButton;

//用 beforeLoad 保護整個 admin dashboard
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

//這段的意思是：
// 使用者進入 /admindashboard
// TanStack Router 先執行 beforeLoad
// 從 context 拿出 Clerk 的 auth
// 如果沒有登入：導去 /signin/$
// 如果有登入：允許進入，並把 userId 傳給子路由
