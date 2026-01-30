# Deploy lên Cloudflare Pages

Cloudflare Pages hỗ trợ Next.js thông qua adapter.

## Option 1: Cloudflare Pages (Khuyến nghị cho Next.js)

### Bước 1: Install dependencies

```bash
npm install --save-dev @cloudflare/next-on-pages
```

### Bước 2: Update next.config.js

Thêm vào next.config.js:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // For Cloudflare Pages
  output: 'export', // For static export, or
  // Comment out 'output' if using @cloudflare/next-on-pages
}

module.exports = nextConfig
```

### Bước 3: Deploy via Dashboard

1. Vào https://dash.cloudflare.com/
2. Pages > Create a project
3. Connect Git repository
4. Build settings:
   - Framework preset: `Next.js`
   - Build command: `npx @cloudflare/next-on-pages --experimental-minify`
   - Build output directory: `.vercel/output/static`
5. Environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NODE_VERSION`: `18` (hoặc `20`)
6. Save and Deploy

### Bước 4: Setup Wrangler CLI (Optional)

```bash
# Install Wrangler
npm install -g wrangler

# Login
wrangler login

# Deploy
npx @cloudflare/next-on-pages --experimental-minify
wrangler pages deploy .vercel/output/static
```

---

## Option 2: Static Export (Giới hạn features)

Nếu không cần Server Actions, có thể export static:

### Update next.config.js

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

### Build và Deploy

```bash
npm run build

# Deploy với Wrangler
wrangler pages deploy out
```

⚠️ **Lưu ý**: Static export không hỗ trợ:
- Server Actions
- API Routes  
- Dynamic routing với params
- ISR (Incremental Static Regeneration)

---

## Option 3: Cloudflare Workers (Advanced)

Dùng cho full serverless:

### Bước 1: Install dependencies

```bash
npm install -D @cloudflare/workers-types
npm install @cloudflare/next-on-pages
```

### Bước 2: Create wrangler.toml

```toml
name = "expense-tracker"
compatibility_date = "2024-01-01"
pages_build_output_dir = ".vercel/output/static"

[env.production]
vars = { ENVIRONMENT = "production" }
```

### Bước 3: Deploy

```bash
npm run build
npx @cloudflare/next-on-pages
wrangler pages deploy
```

---

## So sánh Options

| Feature | Pages (với next-on-pages) | Static Export | Workers |
|---------|--------------------------|---------------|---------|
| Server Actions | ✅ | ❌ | ✅ |
| API Routes | ✅ | ❌ | ✅ |
| Streaming | ✅ | ❌ | ✅ |
| Edge Runtime | ✅ | N/A | ✅ |
| Setup Complexity | Medium | Easy | Hard |

---

## Khuyến nghị

**Cho dự án này:**
1. **Vercel** - Dễ nhất, zero config ✅
2. **Cloudflare Pages + @cloudflare/next-on-pages** - Good performance, free tier lớn
3. **Static Export** - Nếu ok với việc mất Server Actions

---

## Custom Domain trên Cloudflare

1. Vào Pages > Your Project > Custom domains
2. Thêm domain
3. Update DNS (tự động nếu domain ở Cloudflare)

## Environment Variables

Thêm tại:
- Dashboard > Pages > Project > Settings > Environment variables
- Hoặc qua `wrangler.toml`

## Performance Benefits

Cloudflare:
- ✅ 300+ datacenters globally
- ✅ DDoS protection
- ✅ CDN built-in
- ✅ Free tier: Unlimited bandwidth
- ✅ Workers KV for caching
