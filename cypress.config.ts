import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1000,
  viewportHeight: 600,
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    supportFile: "cypress/support/component.tsx"
  },
});
