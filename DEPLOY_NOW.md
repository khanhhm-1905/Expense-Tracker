# 🚀 Deploy NGAY - Chọn 1 trong 2 cách

## ⚡ CÁCH 1: VERCEL (Khuyến nghị - 2 phút)

### Qua Website (Dễ nhất):
1. Push code lên GitHub:
   ```bash
   git add .
   git commit -m "Ready to deploy"
   git push
   ```

2. Vào https://vercel.com/new
3. Click "Import Git Repository"
4. Chọn repo `Expense-Tracker`
5. Thêm Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = (URL từ Supabase)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = (Anon key từ Supabase)
6. Click "Deploy"
7. ✅ XONG! Link deploy sẽ hiện sau 1-2 phút

### Hoặc dùng CLI:
```bash
# Cài Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (lần đầu sẽ setup project)
vercel

# Deploy production
vercel --prod

# Thêm env vars trong dashboard sau đó redeploy
```

---

## ⚡ CÁCH 2: CLOUDFLARE PAGES (5 phút)

### Qua Dashboard:
1. Push code lên GitHub
2. Vào https://dash.cloudflare.com/
3. Pages > Create a project > Connect to Git
4. Chọn repo `Expense-Tracker`
5. Build settings:
   - **Framework preset**: Next.js (Static Exports)  
   - **Build command**: `npm run build`
   - **Build output**: `.next`
6. Environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NODE_VERSION` = `18`
7. Save and Deploy
8. ✅ XONG!

### Hoặc dùng Wrangler:
```bash
# Cài Wrangler
npm i -g wrangler

# Login Cloudflare
wrangler login

# Deploy
npm run build
wrangler pages deploy .next --project-name=expense-tracker
```

---

## ✅ Checklist trước khi deploy

- [x] Code build thành công (`npm run build` - ĐÃ TEST OK ✓)
- [ ] Đã setup Supabase project
- [ ] Đã chạy SQL trong `supabase/schema.sql`
- [ ] Có Supabase URL và Anon Key
- [ ] Code đã push lên GitHub (nếu dùng Git integration)

---

## 🔑 Lấy Supabase Credentials

1. Vào https://supabase.com/dashboard
2. Chọn project (hoặc tạo mới)
3. Settings > API
4. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## 🎯 URL sau khi deploy

**Vercel**: `https://expense-tracker-username.vercel.app`
**Cloudflare**: `https://expense-tracker.pages.dev`

Có thể add custom domain sau!

---

## ⚠️ Troubleshooting

**Build failed**:
- Check environment variables đã thêm đúng chưa
- Verify Supabase URL không có trailing slash

**"Cannot connect to database"**:
- Check Supabase project đang active
- Verify credentials đúng
- Đảm bảo đã chạy schema.sql

**Vercel deploy timeout**:
- Try deploy lại
- Check vercel.json có đúng không

---

## 📱 Test sau khi deploy

1. Mở URL được cung cấp
2. Test navigation giữa các trang
3. Thử thêm transaction (cần Supabase setup)
4. Check responsive trên mobile

---

## 🎉 Done!

App của bạn giờ đã live trên internet!

**Share với bạn bè**: Copy URL và gửi đi 😊
