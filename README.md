# Expense Tracker - Ứng dụng quản lý chi tiêu cá nhân

Ứng dụng fullstack được xây dựng với Next.js, TypeScript, Supabase để theo dõi thu chi, phân loại và báo cáo chi tiêu hằng tháng.

## 🚀 Tính năng

- ✅ Tạo, sửa, xóa giao dịch thu/chi
- 🏷️ Phân loại giao dịch theo categories
- 📊 Dashboard hiển thị tổng quan theo ngày/tuần/tháng/năm
- 🔍 Lọc và tìm kiếm giao dịch
- 📥 Export dữ liệu ra file CSV
- 📈 Biểu đồ trực quan hóa thu chi
- 🎨 Giao diện đẹp với Tailwind CSS

## 🛠️ Công nghệ sử dụng

- **Frontend & Backend**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Date Handling**: date-fns
- **Deployment**: Vercel / Cloudflare Workers ready
- **MCP Server**: Context7, Filesystem, GitHub

## 📦 Cài đặt

### 1. Clone repository

```bash
cd Expense-Tracker
```

### 2. Cài đặt dependencies

```bash
npm install
```

### 3. Setup Supabase

1. Tạo project mới tại [supabase.com](https://supabase.com)
2. Chạy SQL script trong `supabase/schema.sql` ở SQL Editor
3. Copy URL và Anon Key từ Settings > API

### 4. Cấu hình môi trường

Tạo file `.env.local`:

```bash
cp .env.local.example .env.local
```

Cập nhật các giá trị:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 5. Chạy development server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trên browser.

## 📁 Cấu trúc dự án

```
expense-tracker/
├── src/
│   ├── app/
│   │   ├── actions.ts          # Server Actions
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   └── transactions/
│   │       └── page.tsx
│   ├── components/
│   │   ├── StatsCards.tsx
│   │   ├── TransactionChart.tsx
│   │   ├── TransactionList.tsx
│   │   ├── TransactionModal.tsx
│   │   ├── TransactionFilters.tsx
│   │   ├── DateFilterButtons.tsx
│   │   ├── AddTransactionButton.tsx
│   │   └── ExportButton.tsx
│   ├── lib/
│   │   └── supabase/
│   │       ├── client.ts
│   │       └── server.ts
│   └── types/
│       └── index.ts
├── supabase/
│   └── schema.sql
├── .mcp/
│   ├── config.json
│   └── README.md
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🎯 Các trang chính

- **Home** (`/`): Trang giới thiệu
- **Dashboard** (`/dashboard`): Tổng quan thu chi với biểu đồ
- **Transactions** (`/transactions`): Danh sách và quản lý giao dịch

## 🔧 Scripts

```bash
npm run dev      # Chạy development server
npm run build    # Build production
npm run start    # Chạy production server
npm run lint     # Check linting
```

## 🚀 Deploy

### Vercel

```bash
vercel deploy
```

### Cloudflare Workers (với @cloudflare/next-on-pages)

```bash
npm install -g wrangler
npm run build
wrangler pages deploy .vercel/output/static
```

## 📊 Database Schema

### Categories
- id (UUID)
- user_id (UUID)
- name (TEXT)
- icon (TEXT)
- color (TEXT)
- type (income/expense)
- created_at (TIMESTAMP)

### Transactions
- id (UUID)
- user_id (UUID)
- category_id (UUID)
- type (income/expense)
- amount (DECIMAL)
- description (TEXT)
- date (DATE)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

## 🤖 MCP Server Integration

Dự án đã được cấu hình sẵn MCP servers trong `.mcp/config.json`:

- **Context7**: Search và phân tích code context
- **Filesystem**: Truy cập filesystem
- **GitHub**: Quản lý GitHub repos (optional)

Xem chi tiết tại [.mcp/README.md](.mcp/README.md)

## 🔐 Authentication

Hiện tại dự án sử dụng demo user ID. Để thêm authentication, có thể tích hợp:
- Supabase Auth
- NextAuth.js
- Clerk

## 🎨 Customization

- Màu sắc: Chỉnh sửa `tailwind.config.ts`
- Categories mặc định: Chỉnh sửa `supabase/schema.sql`
- Icons: Thêm/sửa emoji trong categories

## 📝 License

MIT
