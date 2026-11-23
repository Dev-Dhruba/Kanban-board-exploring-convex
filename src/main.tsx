import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { SidebarProvider } from "./components/ui/sidebar";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
      <SidebarProvider >
        <AppSidebar />
    
      <App />
        </SidebarProvider>
    </ConvexProvider>
  </React.StrictMode>,
);