import { useAuth } from "@clerk/react";
import type { useAuth as useAuthType } from "@clerk/react";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import Spinner from "./components/atoms/spinner.atm";

//定義 RouterContext 型別
export type RouterContext = {
  auth: ReturnType<typeof useAuthType>;
};
//我的 router context 裡面有一個 auth，它的型別跟 Clerk 的 useAuth() 回傳值一樣。

// Create a new router instance
const router = createRouter({ routeTree, context: { auth: undefined! } });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const auth = useAuth();

  if (!auth.isLoaded) {
    return <Spinner isFullScreen={true} />;
  }
  return (
    <>
      <RouterProvider router={router} context={{ auth }} />
    </>
  );
}

export default App;

//取得 Clerk auth，丟進 TanStack Router context
//把 Clerk 的登入資料交給 TanStack Router，所以每個 route 的 beforeLoad 都可以拿到 auth。
