# OverGuild Landing Page

Landing page for **OverGuild** — The Ultimate Quest Board for Web3 Builders. Meet-to-Earn ecosystem where builders level up by contributing to the world's leading blockchain foundations.

**Connect. Contribute. Conquer.**

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** (Radix)
- **Framer Motion** (animations)
- **React Router**
- **Prisma** + **PostgreSQL** (Supabase)
- **Vercel Serverless Functions** (API)

## Quick Start

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Setup Supabase Database

1. Create account at https://supabase.com (Free)
2. Create new project
3. Go to **SQL Editor** and run `supabase-schema.sql`
4. Get connection string from **Settings > Database > Connection string > Session pooler**
5. Copy `.env.example` to `.env.local` and update `DATABASE_URL`

### 3. Generate Prisma Client

```bash
npx prisma generate
```

### 4. Run Development

```bash
pnpm dev
```

Frontend: http://localhost:8080

**Note:** API routes (`/api/*`) only work when deployed to Vercel. For local API testing, use `vercel dev` instead of `pnpm dev`.

## Project Structure

```
quest-valley-vault/
├── api/                      # Vercel Serverless Functions
│   ├── blog/
│   │   ├── index.ts         # GET /api/blog
│   │   └── [id].ts          # GET /api/blog/:id
│   └── _lib/
│       └── db.ts            # Prisma client
├── prisma/
│   ├── schema.prisma        # Database schema
│   └── seed.ts              # Seed data (optional)
├── src/
│   ├── components/          # React components
│   ├── pages/               # Page components
│   │   ├── Index.tsx        # Home page
│   │   ├── Blog.tsx         # Blog listing
│   │   └── BlogPost.tsx     # Blog detail
│   ├── lib/
│   │   ├── api.ts          # API client
│   │   └── utils.ts        # Utilities
│   └── main.tsx            # Entry point
├── supabase-schema.sql      # Database schema SQL
├── vercel.json              # Vercel config
└── package.json
```

## Scripts

```bash
pnpm dev          # Start Vite dev server (frontend only)
pnpm build        # Production build
pnpm preview      # Preview build

# Database (requires .env.local with DATABASE_URL)
pnpm db:generate  # Generate Prisma Client
pnpm db:studio    # Open Prisma Studio (GUI)
```

## API Endpoints

### GET /api/blog

List all published blog posts

Query params:

- `page` (default: 1)
- `limit` (default: 10)
- `category` (optional)

Response:

```json
{
  "posts": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 3,
    "totalPages": 1
  }
}
```

### GET /api/blog/:id

Get single blog post by ID

Response:

```json
{
  "id": "...",
  "title": "...",
  "slug": "...",
  "content": "...",
  "author": { "name": "...", "email": "..." },
  ...
}
```

## Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Environment Variables

Add on Vercel dashboard:

- `DATABASE_URL` — Supabase connection string (Session pooler)

Vercel automatically:

- ✅ Detects API routes in `api/` folder
- ✅ Deploys as serverless functions
- ✅ Serves frontend and API from same domain
- ✅ No CORS configuration needed

## Features

### Frontend

- Hero section with waitlist form
- Video demo section
- Social links (Twitter, Telegram)
- Blog listing and detail pages
- Pixel art / retro gaming theme
- Responsive design

### Backend API

- RESTful API with Vercel Serverless Functions
- PostgreSQL database via Supabase
- Prisma ORM
- Blog CRUD operations (read-only for now)

## Links

- **Twitter:** [x.com/overguildOG](https://x.com/overguildOG)
- **Telegram:** [t.me/OverGuildVN](https://t.me/OverGuildVN)
- **The Valley:** [the-valley.xyz](https://www.the-valley.xyz/)
- **Repo:** [github.com/OverGuild/Landing_Page_Farm](https://github.com/OverGuild/Landing_Page_Farm)

## Documentation

- [API Setup Guide](./API_SETUP.md) — Detailed API setup instructions
- [Supabase Schema](./supabase-schema.sql) — Database schema SQL

## License

MIT
