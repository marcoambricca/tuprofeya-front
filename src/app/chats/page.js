'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { useAuth } from '../../context/AuthContext';
import { chats as chatsApi } from '../../lib/api';
import { MessageSquare, Search } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

export default function ChatsPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [chatList, setChatList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!authLoading && !user) router.push('/auth/login');
  }, [user, authLoading]);

  useEffect(() => {
    if (!user) return;
    chatsApi.list()
      .then((r) => setChatList(r.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [user]);

  if (authLoading || !user) return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-20 bg-white rounded-2xl animate-pulse" />
        ))}
      </div>
    </div>
  );

  const filtered = chatList.filter((c) => {
    const other = user.role === 'teacher' ? c.student_name : c.teacher_name;
    return other?.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Mis conversaciones</h1>
          <span className="badge bg-blue-50 text-blue-700">{chatList.length}</span>
        </div>

        {/* Search */}
        {chatList.length > 3 && (
          <div className="relative mb-4">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar conversación..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field pl-9"
            />
          </div>
        )}

        {loading ? (
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-20 bg-white rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="card p-16 text-center text-gray-400">
            <MessageSquare size={48} className="mx-auto mb-4 opacity-30" />
            <p className="font-medium text-gray-500">
              {search ? 'No se encontraron conversaciones' : 'No tenés conversaciones activas'}
            </p>
            {!search && (
              <Link href="/buscar" className="btn-primary inline-block mt-4 text-sm">
                Buscar profesores
              </Link>
            )}
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map((chat) => {
              const otherName = user.role === 'teacher' ? chat.student_name : chat.teacher_name;
              const otherAvatar = user.role === 'teacher' ? chat.student_avatar : chat.teacher_avatar;
              const hasUnread = parseInt(chat.unread_count) > 0;
              return (
                <Link
                  key={chat.id}
                  href={`/chats/${chat.id}`}
                  className={`card p-4 flex items-center gap-3 hover:border-blue-200 transition-all ${hasUnread ? 'border-blue-200 bg-blue-50/30' : ''}`}
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center overflow-hidden">
                      {otherAvatar
                        ? <img src={otherAvatar} alt={otherName} className="w-full h-full object-cover" />
                        : <span className="text-white font-semibold">{otherName?.[0]}</span>
                      }
                    </div>
                    {hasUnread && (
                      <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-blue-600 rounded-full border-2 border-white" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <p className={`font-semibold ${hasUnread ? 'text-gray-900' : 'text-gray-700'}`}>{otherName}</p>
                      {chat.last_message_at && (
                        <span className="text-xs text-gray-400 flex-shrink-0 ml-2">
                          {formatDistanceToNow(new Date(chat.last_message_at), { addSuffix: true, locale: es })}
                        </span>
                      )}
                    </div>
                    <p className={`text-sm truncate ${hasUnread ? 'text-gray-700 font-medium' : 'text-gray-400'}`}>
                      {chat.last_message || 'Nueva conversación'}
                    </p>
                  </div>
                  {hasUnread && (
                    <span className="w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center flex-shrink-0 font-medium">
                      {chat.unread_count}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
