# Quick Deploy Guide

## 🚀 Deploy trong 5 phút

### Cách 1: Vercel (Khuyến nghị - Dễ nhất)

```bash
# Cài Vercel CLI
npm i -g vercel

# Deploy
vercel

# Thêm env vars trong dashboard, sau đó deploy production
vercel --prod
```

### Cách 2: Vercel via GitHub

1. Push code lên GitHub
2. Vào https://vercel.com/new
3. Import repository
4. Thêm Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Deploy

### Cách 3: Cloudflare Pages

```bash
# Cài dependencies
npm install

# Cài Wrangler
npm i -g wrangler

# Login
wrangler login

# Build
npm run build

# Deploy
npm run pages:deploy
```

**Hoặc via Dashboard:**
1. https://dash.cloudflare.com/
2. Pages > Create project
3. Connect GitHub
4. Framework: Next.js
5. Build command: `npx @cloudflare/next-on-pages`
6. Thêm env vars
7. Deploy

---

## ⚙️ Environment Variables (BẮT BUỘC)

Cả Vercel và Cloudflare đều cần:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

---

## ✅ Pre-deployment Checklist

- [ ] Code chạy tốt ở local (`npm run dev`)
- [ ] Build thành công (`npm run build`)
- [ ] Đã setup Supabase database
- [ ] Đã có Supabase credentials
- [ ] Code đã commit lên Git

---

## 🔍 Troubleshooting

**Build failed:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Environment variables không hoạt động:**
- Check tên variables có đúng `NEXT_PUBLIC_` prefix
- Redeploy sau khi thêm env vars

**Supabase connection error:**
- Verify credentials trong env vars
- Check Supabase project status

---

## 📊 So sánh Platforms

| Feature | Vercel | Cloudflare Pages |
|---------|--------|------------------|
| Setup | ⭐⭐⭐ Dễ nhất | ⭐⭐ Medium |
| Free Tier | 100GB bandwidth | Unlimited bandwidth |
| Build Time | Fast | Fast |
| Edge Network | ✅ Global | ✅ 300+ locations |
| Auto HTTPS | ✅ | ✅ |
| Custom Domain | ✅ Free | ✅ Free |
| Analytics | ✅ Built-in | ✅ Web Analytics |
| Support | Excellent | Good |

---

## 🎯 Khuyến nghị

**Dùng Vercel nếu:**
- Muốn deploy nhanh nhất
- Cần support tốt
- OK với 100GB bandwidth/month

**Dùng Cloudflare nếu:**
- Cần unlimited bandwidth
- Đã dùng Cloudflare cho DNS/CDN
- Muốn performance tốt hơn (có thể)

---

## 🔗 Links hữu ích

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Cloudflare Dashboard](https://dash.cloudflare.com/)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Supabase Setup](https://supabase.com/docs)
