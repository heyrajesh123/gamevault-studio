import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { appSchema } from "./schemaTypes/game";

export default defineConfig({
  name: "gamevault-studio",
  title: "GameVault Studio",
  projectId: "eq6o0luu",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: [appSchema],
  },
});
