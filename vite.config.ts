import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "front_blogr_landing_page",
    server: {
        port: 5173
    },
    preview: {
        port: 8080
    }
});



