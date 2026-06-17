import * as React from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import type { RouterContext } from "../App";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

//讓 TanStack Router 知道 context 型別
export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});
//如果你沒有用：那 beforeLoad({ context }) 裡面的 context.auth 可能就沒有正確型別提示。

function RootComponent() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Outlet /> {/* 子頁面顯示在這裡 */}
      </main>
      <Footer />
    </React.Fragment>
  );
}
