export default function ProfesorLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100 h-16 animate-pulse" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Profile header */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 animate-pulse">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-24 h-24 bg-gray-200 rounded-3xl flex-shrink-0" />
            <div className="flex-1 space-y-3">
              <div className="h-8 w-56 bg-gray-200 rounded-lg" />
              <div className="h-4 w-32 bg-gray-100 rounded" />
              <div className="flex gap-2 mt-2">
                <div className="h-6 w-20 bg-gray-100 rounded-full" />
                <div className="h-6 w-24 bg-gray-100 rounded-full" />
                <div className="h-6 w-16 bg-gray-100 rounded-full" />
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100 space-y-2">
            <div className="h-4 bg-gray-100 rounded w-full" />
            <div className="h-4 bg-gray-100 rounded w-4/5" />
            <div className="h-4 bg-gray-100 rounded w-3/4" />
          </div>
        </div>

        {/* Announcements */}
        <div className="space-y-4">
          <div className="h-7 w-48 bg-gray-200 rounded-lg animate-pulse" />
          {[...Array(2)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 animate-pulse">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex gap-2">
                    <div className="h-5 w-20 bg-gray-100 rounded-full" />
                    <div className="h-5 w-16 bg-gray-100 rounded-full" />
                  </div>
                  <div className="h-5 w-3/4 bg-gray-200 rounded" />
                  <div className="h-4 w-full bg-gray-100 rounded" />
                  <div className="h-4 w-2/3 bg-gray-100 rounded" />
                </div>
                <div className="flex sm:flex-col items-center sm:items-end gap-3">
                  <div className="h-9 w-20 bg-gray-200 rounded-lg" />
                  <div className="h-10 w-32 bg-blue-200 rounded-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div className="space-y-3">
          <div className="h-7 w-40 bg-gray-200 rounded-lg animate-pulse" />
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-4 animate-pulse">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-32 bg-gray-200 rounded" />
                  <div className="h-3 w-full bg-gray-100 rounded" />
                  <div className="h-3 w-4/5 bg-gray-100 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
