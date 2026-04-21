export default function ChatLoading() {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3 shadow-sm animate-pulse">
        <div className="w-9 h-9 bg-gray-100 rounded-lg" />
        <div className="w-10 h-10 bg-gray-200 rounded-full" />
        <div className="space-y-1.5">
          <div className="h-4 w-28 bg-gray-200 rounded" />
          <div className="h-3 w-20 bg-gray-100 rounded" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-hidden px-4 py-4 space-y-3">
        {[
          { mine: false, w: 'w-2/3' },
          { mine: true, w: 'w-1/2' },
          { mine: false, w: 'w-3/4' },
          { mine: true, w: 'w-2/5' },
          { mine: false, w: 'w-3/5' },
          { mine: true, w: 'w-1/3' },
        ].map((m, i) => (
          <div key={i} className={`flex ${m.mine ? 'justify-end' : 'justify-start'} animate-pulse`}>
            <div className={`${m.w} h-10 ${m.mine ? 'bg-blue-200' : 'bg-white border border-gray-100'} rounded-2xl`} />
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-100 px-4 py-3 flex gap-2 animate-pulse">
        <div className="flex-1 h-10 bg-gray-100 rounded-xl" />
        <div className="w-10 h-10 bg-blue-200 rounded-xl" />
      </div>
    </div>
  );
}
