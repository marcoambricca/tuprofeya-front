export default function SuscripcionLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100 h-16 animate-pulse" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="h-10 w-72 bg-gray-200 rounded-xl mx-auto animate-pulse" />
          <div className="h-5 w-96 bg-gray-100 rounded-lg mx-auto animate-pulse" />
        </div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden animate-pulse">
              <div className="p-6 bg-gray-50">
                <div className="h-6 w-24 bg-gray-200 rounded mb-3" />
                <div className="h-9 w-20 bg-gray-200 rounded" />
              </div>
              <div className="p-6 space-y-3">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-100 rounded-full flex-shrink-0" />
                    <div className="h-4 bg-gray-100 rounded flex-1" />
                  </div>
                ))}
                <div className="h-11 bg-gray-200 rounded-xl mt-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
