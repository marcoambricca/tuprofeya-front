export default function ConfiguracionLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100 h-16 animate-pulse" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        <div className="h-8 w-44 bg-gray-200 rounded-lg animate-pulse" />

        <div className="bg-white rounded-2xl border border-gray-100 p-6 animate-pulse space-y-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-100 rounded-lg" />
            <div className="h-5 w-36 bg-gray-200 rounded" />
          </div>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="h-4 w-48 bg-gray-200 rounded" />
                <div className="h-3 w-64 bg-gray-100 rounded" />
              </div>
              <div className="w-11 h-6 bg-gray-200 rounded-full" />
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 animate-pulse space-y-3">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gray-100 rounded-lg" />
            <div className="h-5 w-24 bg-gray-200 rounded" />
          </div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex justify-between">
              <div className="h-4 w-16 bg-gray-100 rounded" />
              <div className="h-4 w-32 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
