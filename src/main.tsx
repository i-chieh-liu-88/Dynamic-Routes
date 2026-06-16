import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ClerkProvider } from "@clerk/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey="pk_test_bmV3LWdpYmJvbi0xMC5jbGVyay5hY2NvdW50cy5kZXYk">
      <App />
    </ClerkProvider>
  </StrictMode>,
);
