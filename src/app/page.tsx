import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            💰 Expense Tracker
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Quản lý chi tiêu cá nhân một cách thông minh
          </p>
          
          <div className="flex gap-4 justify-center mb-12">
            <Link
              href="/dashboard"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Bắt đầu sử dụng
            </Link>
            <Link
              href="/transactions"
              className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border-2 border-gray-200 transition-colors"
            >
              Xem giao dịch
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Dashboard</h3>
              <p className="text-gray-600">
                Theo dõi thu chi theo ngày, tuần, tháng
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🏷️</div>
              <h3 className="text-xl font-semibold mb-2">Phân loại</h3>
              <p className="text-gray-600">
                Quản lý categories cho từng giao dịch
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">📥</div>
              <h3 className="text-xl font-semibold mb-2">Export CSV</h3>
              <p className="text-gray-600">
                Xuất dữ liệu để phân tích chi tiết
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
