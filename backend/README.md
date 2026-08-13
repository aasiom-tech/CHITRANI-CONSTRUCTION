# Chitrani Construction Backend

Express + TypeScript backend for Chitrani Construction.

## Current Status

Runtime foundation with Supabase client foundation. No project connection has been verified. Migrations/seed are NOT automatically executed by npm commands.

## Prerequisites

- Node.js 22+

## Setup

```bash
npm install
```

## Environment

Copy `.env.example` to `.env` and configure:

- `NODE_ENV` — development/test/production
- `PORT` — HTTP listen port (default 4000)
- `FRONTEND_ORIGINS` — comma-separated allowed origins
- `SUPABASE_URL` — Supabase project URL
- `SUPABASE_PUBLISHABLE_KEY` — low-privilege key for RLS-compatible operations
- `SUPABASE_SECRET_KEY` — privileged server-only key that bypasses RLS

**Never expose `SUPABASE_SECRET_KEY` to frontend or browser code.**

## Development

```bash
npm run dev
```

## Type Check

```bash
npm run typecheck
```

## Build

```bash
npm run build
```

## Production-style Local Start

```bash
npm run build
npm start
```

## Health Check

```bash
curl http://localhost:4000/api/v1/health
```

## Supabase Client Architecture

Two explicit client roles:

- **Public client** (`getSupabasePublicClient`) — low-privilege, RLS-compatible operations
- **Admin client** (`getSupabaseAdminClient`) — server-only privileged client, bypasses RLS

Both clients are lazy-initialized on first use. The server starts without Supabase credentials.

## Important Notes

- No npm script automatically executes migrations or seed.sql
- Supabase integration is lazy — health endpoint works without Supabase env
