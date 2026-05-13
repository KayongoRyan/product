import { serve } from "@hono/node-server";
import { loadEnv } from "./config/env.js";
import { createApp } from "./app.js";

const env = loadEnv();
const app = createApp(env);

serve(
  {
    fetch: app.fetch,
    port: env.PORT,
    hostname: "0.0.0.0",
  },
  (info) => {
    console.log(`API listening on http://127.0.0.1:${info.port}`);
    console.log(`Health: GET http://127.0.0.1:${info.port}/health`);
  },
);
