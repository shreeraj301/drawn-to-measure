/**
 * Shared live-preview OAuth client (server-only. Never import this from the client).
 *
 * The sandbox serves each live preview on a dynamic `https://*.grok-sandbox.com`
 * URL, which can't be pre-registered per app. The broker instead exposes one
 * shared preview client that accepts any
 * `https://*.grok-sandbox.com/api/auth/oauth2/callback/*`.
 * When deployed, the deployer injects a per-app `GROK_AUTH_*` that overrides
 * these (see `server.ts`).
 *
 * The preview client id is public. The secret is not stored in this repo.
 * Set `GROK_PREVIEW_CLIENT_SECRET` in the environment. There is no committed
 * fallback. See `.env.example`.
 */

function readEnv(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

export const PREVIEW_CLIENT_ID = "grok_preview";

/** Empty when `GROK_PREVIEW_CLIENT_SECRET` is unset. Never a hardcoded secret. */
export const PREVIEW_CLIENT_SECRET = readEnv("GROK_PREVIEW_CLIENT_SECRET");

/** The shared auth broker issuer (OIDC discovery lives under it). */
export const GROK_ISSUER_DEFAULT = "https://auth.grok.me";

/**
 * Host patterns whose callbacks the preview client accepts. Better Auth derives
 * the live preview's real origin from the request host and validates it against
 * this list (wildcard-matched), so the OAuth `redirect_uri` becomes the concrete
 * `https://<preview-host>/api/auth/oauth2/callback/...` the broker allows.
 */
export const PREVIEW_ALLOWED_HOSTS = ["*.grok-sandbox.com"] as const;
