// AI-generated code by GitHub Copilot - Start
export default function DashboardSkeleton() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header skeleton */}
        <div className="mb-8">
          <div className="h-8 w-48 bg-gray-200 rounded skeleton mb-2"></div>
          <div className="h-5 w-64 bg-gray-200 rounded skeleton"></div>
        </div>

        {/* Filter buttons skeleton */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="h-10 w-24 bg-gray-200 rounded-lg skeleton"></div>
          ))}
        </div>

        {/* Stats cards skeleton */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6">
              <div className="h-4 w-20 bg-gray-200 rounded skeleton mb-4"></div>
              <div className="h-8 w-32 bg-gray-200 rounded skeleton"></div>
            </div>
          ))}
        </div>

        {/* Charts skeleton */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="h-6 w-32 bg-gray-200 rounded skeleton mb-4"></div>
            <div className="h-64 bg-gray-100 rounded skeleton"></div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="h-6 w-32 bg-gray-200 rounded skeleton mb-4"></div>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="flex justify-between items-center">
                  <div className="h-4 w-32 bg-gray-200 rounded skeleton"></div>
                  <div className="h-4 w-24 bg-gray-200 rounded skeleton"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent transactions skeleton */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="h-6 w-40 bg-gray-200 rounded skeleton mb-4"></div>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex justify-between items-center p-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full skeleton"></div>
                  <div>
                    <div className="h-4 w-32 bg-gray-200 rounded skeleton mb-2"></div>
                    <div className="h-3 w-48 bg-gray-200 rounded skeleton"></div>
                  </div>
                </div>
                <div className="h-5 w-24 bg-gray-200 rounded skeleton"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
// AI-generated code by GitHub Copilot - End
