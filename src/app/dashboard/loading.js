export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar skeleton */}
      <div className="bg-white border-b border-gray-100 h-16 animate-pulse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="space-y-2">
            <div className="h-7 w-40 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-4 w-20 bg-gray-100 rounded animate-pulse" />
          </div>
          <div className="h-10 w-36 bg-gray-200 rounded-xl animate-pulse" />
        </div>

        {/* Tabs */}
        <div className="h-12 bg-white rounded-xl border border-gray-100 mb-6 animate-pulse" />

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-4 animate-pulse">
              <div className="w-10 h-10 bg-gray-100 rounded-xl mb-3" />
              <div className="h-7 w-12 bg-gray-200 rounded mb-1" />
              <div className="h-4 w-24 bg-gray-100 rounded" />
            </div>
          ))}
        </div>

        {/* Subscription bar */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-6 animate-pulse">
          <div className="flex justify-between mb-3">
            <div className="space-y-2">
              <div className="h-5 w-24 bg-gray-200 rounded" />
              <div className="h-4 w-40 bg-gray-100 rounded" />
            </div>
            <div className="h-9 w-28 bg-gray-100 rounded-xl" />
          </div>
          <div className="h-2 bg-gray-100 rounded-full" />
        </div>

        {/* Requests */}
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-4 animate-pulse flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-32 bg-gray-200 rounded" />
                <div className="h-3 w-48 bg-gray-100 rounded" />
              </div>
              <div className="flex gap-2">
                <div className="h-8 w-20 bg-gray-100 rounded-lg" />
                <div className="h-8 w-20 bg-gray-100 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
