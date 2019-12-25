import { mount, createLocalVue } from "@vue/test-utils";
import App from "../src/app";

test("Testing css #app class", () => {
  const vue = createLocalVue();
  const app = mount(App, { vue });
  expect(app.classes()).toContain("app");
});
