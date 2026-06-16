import { useAuth } from "@clerk/react";
import type { useAuth as useAuthType } from "@clerk/react";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import Spinner from "./components/atoms/spinner.atm";

export type RouterContext = {
  auth: ReturnType<typeof useAuthType>;
};

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
