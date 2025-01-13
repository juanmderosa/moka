import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), (await import("@playform/compress")).default()],
});
