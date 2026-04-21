'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import { useAuth } from '../../context/AuthContext';
import { users as usersApi } from '../../lib/api';
import toast from 'react-hot-toast';
import { Bell, Trash2, Shield, ChevronRight, AlertTriangle } from 'lucide-react';

const DEFAULT_NOTIFICATIONS = {
  new_request: true,
  request_accepted: true,
  new_message: true,
  new_review: true,
};

export default function ConfiguracionPage() {
  const router = useRouter();
  const { user, loading: authLoading, logout } = useAuth();
  const [notifications, setNotifications] = useState(DEFAULT_NOTIFICATIONS);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [deleteInput, setDeleteInput] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) router.push('/auth/login');
  }, [user, authLoading]);

  useEffect(() => {
    const saved = typeof window !== 'undefined' && localStorage.getItem('notification_prefs');
    if (saved) {
      try { setNotifications({ ...DEFAULT_NOTIFICATIONS, ...JSON.parse(saved) }); } catch {}
    }
  }, []);

  const toggleNotification = (key) => {
    const updated = { ...notifications, [key]: !notifications[key] };
    setNotifications(updated);
    localStorage.setItem('notification_prefs', JSON.stringify(updated));
    toast.success('Preferencias guardadas');
  };

  const handleDeleteAccount = async () => {
    if (deleteInput !== 'ELIMINAR') {
      toast.error('Escribí ELIMINAR para confirmar');
      return;
    }
    setDeleting(true);
    try {
      await usersApi.deleteAccount();
      toast.success('Cuenta eliminada');
      logout();
      router.push('/');
    } catch {
      toast.error('Error al eliminar la cuenta');
    } finally {
      setDeleting(false);
    }
  };

  if (authLoading || !user) return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-4">
        <div className="h-8 w-48 bg-white rounded-xl animate-pulse" />
        <div className="h-48 bg-white rounded-2xl animate-pulse" />
        <div className="h-32 bg-white rounded-2xl animate-pulse" />
      </div>
    </div>
  );

  const NOTIFICATION_LABELS = {
    new_request: {
      label: user.role === 'teacher' ? 'Nueva solicitud de alumno' : 'Solicitud aceptada por profesor',
      desc: 'Email cuando recibas una nueva solicitud',
    },
    request_accepted: {
      label: 'Solicitud procesada',
      desc: 'Email cuando tu solicitud sea aceptada o rechazada',
    },
    new_message: {
      label: 'Nuevo mensaje',
      desc: 'Notificación de mensajes en tus chats activos',
    },
    new_review: {
      label: 'Nueva reseña',
      desc: user.role === 'teacher' ? 'Email cuando un alumno te deje una reseña' : 'Notificaciones de reseñas',
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Configuración</h1>

        {/* Notifications */}
        <div className="card p-6">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Bell size={16} className="text-blue-600" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">Notificaciones</h2>
              <p className="text-xs text-gray-500">Elegí qué notificaciones recibir por email</p>
            </div>
          </div>
          <div className="space-y-4">
            {Object.entries(NOTIFICATION_LABELS).map(([key, info]) => (
              <div key={key} className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-medium text-gray-800 text-sm">{info.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{info.desc}</p>
                </div>
                <button
                  onClick={() => toggleNotification(key)}
                  className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${notifications[key] ? 'bg-blue-600' : 'bg-gray-200'}`}
                >
                  <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${notifications[key] ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-5 pt-4 border-t border-gray-100">
            Las preferencias se guardan en este navegador. Los emails del sistema siempre se enviarán.
          </p>
        </div>

        {/* Account info */}
        <div className="card p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <Shield size={16} className="text-gray-600" />
            </div>
            <h2 className="font-semibold text-gray-900">Cuenta</h2>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Email</span>
              <span className="font-medium text-gray-900">{user.email}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Rol</span>
              <span className="font-medium text-gray-900 capitalize">{user.role === 'teacher' ? 'Profesor' : 'Alumno'}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Estado</span>
              <span className={`font-medium ${user.is_verified ? 'text-green-600' : 'text-yellow-600'}`}>
                {user.is_verified ? 'Verificado' : 'Pendiente de verificación'}
              </span>
            </div>
          </div>
        </div>

        {/* Danger zone */}
        <div className="card p-6 border-red-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
              <Trash2 size={16} className="text-red-600" />
            </div>
            <div>
              <h2 className="font-semibold text-red-700">Zona de peligro</h2>
              <p className="text-xs text-gray-500">Esta acción no se puede deshacer</p>
            </div>
          </div>

          {!deleteConfirm ? (
            <button
              onClick={() => setDeleteConfirm(true)}
              className="flex items-center gap-2 text-sm text-red-600 border border-red-200 hover:bg-red-50 px-4 py-2.5 rounded-xl transition-all font-medium"
            >
              <Trash2 size={15} /> Eliminar mi cuenta
            </button>
          ) : (
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-200">
                <AlertTriangle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-red-700">
                  <p className="font-semibold mb-1">¿Estás seguro?</p>
                  <p>Se eliminarán permanentemente tu cuenta, anuncios, solicitudes y chats. Esta acción no se puede deshacer.</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Escribí <span className="font-bold text-red-600">ELIMINAR</span> para confirmar
                </label>
                <input
                  type="text"
                  value={deleteInput}
                  onChange={(e) => setDeleteInput(e.target.value)}
                  placeholder="ELIMINAR"
                  className="input-field border-red-300 focus:ring-red-500"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => { setDeleteConfirm(false); setDeleteInput(''); }}
                  className="btn-ghost flex-1"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleDeleteAccount}
                  disabled={deleting || deleteInput !== 'ELIMINAR'}
                  className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white font-semibold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  {deleting
                    ? <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />Eliminando...</>
                    : <><Trash2 size={15} />Eliminar cuenta</>
                  }
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
