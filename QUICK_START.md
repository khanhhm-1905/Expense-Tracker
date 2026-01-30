## Hướng dẫn setup nhanh

### 1. Supabase Setup (Quan trọng!)

Trước khi chạy project, bạn PHẢI setup Supabase:

#### Cách 1: Sử dụng Supabase Cloud (Khuyến nghị)

1. Truy cập https://supabase.com và đăng nhập
2. Tạo project mới (miễn phí)
3. Đợi project khởi tạo (khoảng 2 phút)
4. Vào **SQL Editor** và chạy script từ `supabase/schema.sql`
5. Vào **Settings > API**, copy:
   - Project URL → `.env.local` → `NEXT_PUBLIC_SUPABASE_URL`
   - anon public key → `.env.local` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

#### Cách 2: Supabase Local (Development)

```bash
# Cài Supabase CLI
npm install -g supabase

# Khởi động Supabase local
supabase start

# Copy credentials hiển thị vào .env.local
```

### 2. Cài đặt và chạy

```bash
# Cài dependencies
npm install

# Tạo .env.local và cập nhật credentials
cp .env.local.example .env.local
# Sửa .env.local với credentials từ Supabase

# Chạy dev server
npm run dev
```

### 3. Truy cập ứng dụng

- Home: http://localhost:3000
- Dashboard: http://localhost:3000/dashboard  
- Transactions: http://localhost:3000/transactions

### Troubleshooting

**Lỗi: Cannot find module 'next'**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Lỗi Supabase connection**
- Kiểm tra `.env.local` có đúng credentials không
- Đảm bảo đã chạy SQL script trong `supabase/schema.sql`
- Check project Supabase có đang active không

**Port 3000 đã được sử dụng**
```bash
npm run dev -- -p 3001
```

### MCP Server Setup (Optional)

Xem hướng dẫn chi tiết tại `.mcp/README.md`

### Demo Data

Sau khi setup database, bạn đã có sẵn:
- 9 categories mặc định (thu nhập + chi tiêu)
- Có thể tạo transaction ngay

### Next Steps

1. ✅ Setup Supabase và chạy SQL script
2. ✅ Cập nhật `.env.local`
3. ✅ `npm install`
4. ✅ `npm run dev`
5. 🎉 Mở browser và test!

### Features to test

- Tạo transaction mới (thu/chi)
- Xem dashboard với filters (day/week/month)
- Lọc transactions theo category/type/date
- Export transactions ra CSV
- Xem charts và statistics
