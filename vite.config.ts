// import path from "path";
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), TanStackRouterVite()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });



import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    historyApiFallback: true, // Ensures client-side routing works on refresh
  },
});
