import * as React from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import type { RouterContext } from "../App";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

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
