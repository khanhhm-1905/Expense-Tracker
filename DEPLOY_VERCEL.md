# Deploy lên Vercel

## Bước 1: Install Vercel CLI

```bash
npm i -g vercel
```

## Bước 2: Login

```bash
vercel login
```

## Bước 3: Deploy

```bash
# Deploy preview
vercel

# Deploy production
vercel --prod
```

## Bước 4: Cấu hình Environment Variables

Sau khi deploy, vào Vercel Dashboard và thêm:

1. Vào Project Settings
2. Environment Variables
3. Thêm:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Bước 5: Redeploy

```bash
vercel --prod
```

---

# Hoặc deploy qua GitHub

## Bước 1: Push code lên GitHub

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

## Bước 2: Import vào Vercel

1. Vào https://vercel.com
2. Click "New Project"
3. Import GitHub repository
4. Thêm Environment Variables
5. Click "Deploy"

---

## Auto Deploy

Vercel sẽ tự động deploy khi:
- Push lên branch main
- Merge pull request
- Update environment variables

## Custom Domain

1. Vào Project Settings > Domains
2. Thêm domain của bạn
3. Update DNS records

## Build Settings (Đã có sẵn)

- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`
- Development Command: `npm run dev`

## Performance

Vercel tự động:
- ✅ Edge caching
- ✅ CDN global
- ✅ Automatic HTTPS
- ✅ Serverless functions
- ✅ Image optimization

## Monitoring

Dashboard Vercel hiển thị:
- Build logs
- Runtime logs
- Analytics
- Performance metrics
