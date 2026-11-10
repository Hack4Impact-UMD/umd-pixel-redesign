// Fails the deploy if public env vars that Next.js inlines at build time are missing.
import nextEnv from "@next/env";

nextEnv.loadEnvConfig(process.cwd(), false);

const required = ["NEXT_PUBLIC_SLACK_CLIENT_ID"];
const missing = required.filter((name) => !process.env[name]);

if (missing.length) {
  console.error(
    `Missing required env vars: ${missing.join(", ")}.\n` +
      "Set them in .env.local (or .env.production.local) before deploying."
  );
  process.exit(1);
}
console.log("Env check passed.");
