import { test, expect } from "@playwright/test";

import { TRYME } from "./constants.js";

test("should pass", () => {
  expect(true).toBe(true);
  console.log(TRYME);
});
