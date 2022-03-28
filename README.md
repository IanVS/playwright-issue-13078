This demonstrates https://github.com/microsoft/playwright/issues/13078

Run `npm i` then `npm test`, you should see:

```
Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/xxx/playwright-issue-13078/e2e/config/print-hi' imported from /xxx/playwright-issue-13078/e2e/config/global-setup.ts
```

If you apply this diff, the test should pass:

```diff
diff --git a/e2e/config/global-setup.ts b/e2e/config/global-setup.ts
index fb7a27e..76620e0 100644
--- a/e2e/config/global-setup.ts
+++ b/e2e/config/global-setup.ts
@@ -1,4 +1,4 @@
-import {printHi} from './print-hi'
+import {printHi} from './print-hi.ts'

 function globalSetup() {
   printHi();
```

But, I don't think I should need to specify `.ts`, and it causes a typescript error when I do.
