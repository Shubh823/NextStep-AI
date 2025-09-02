import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },                  // required function ID
  { event: "test/hello.world" },          // trigger (or use cron below)
  async ({ event, step }) => {
    // Every step needs an ID in v3
    await step.sleep("wait-a-moment", "1s");
    const greeting = await step.run("build-greeting", async () => {
      return `Hello ${event.data.email}!`;
    });
    return { message: greeting };
  }
);
