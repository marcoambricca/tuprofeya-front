export default function DarClasesLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100 h-16 animate-pulse" />

      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-3">
          <div className="h-10 w-80 bg-white/20 rounded-xl mx-auto animate-pulse" />
          <div className="h-5 w-64 bg-white/10 rounded-lg mx-auto animate-pulse" />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 animate-pulse space-y-6">
          {/* Subjects grid */}
          <div>
            <div className="h-4 w-28 bg-gray-200 rounded mb-3" />
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="h-10 bg-gray-100 rounded-xl" />
              ))}
            </div>
          </div>
          {/* Title */}
          <div>
            <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
            <div className="h-11 bg-gray-100 rounded-xl" />
          </div>
          {/* Description */}
          <div>
            <div className="h-4 w-24 bg-gray-200 rounded mb-2" />
            <div className="h-32 bg-gray-100 rounded-xl" />
          </div>
          {/* Price + type */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="h-4 w-24 bg-gray-200 rounded mb-2" />
              <div className="h-11 bg-gray-100 rounded-xl" />
            </div>
            <div>
              <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
              <div className="h-11 bg-gray-100 rounded-xl" />
            </div>
          </div>
          {/* Submit */}
          <div className="h-14 bg-blue-200 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
