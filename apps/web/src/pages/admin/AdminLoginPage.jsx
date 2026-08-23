import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAdminAuth } from '../../contexts/AdminAuthContext.jsx';
import { Lock, ArrowRight } from 'lucide-react';

const AdminLoginPage = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/admin/posts';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const success = await login(password);
      if (success) {
        navigate(from, { replace: true });
      } else {
        setError('Invalid password');
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0E27] flex items-center justify-center px-6">
      <Helmet>
        <title>Admin Login | DBOWEN</title>
      </Helmet>

      <div className="w-full max-w-md p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-[#00D9FF]/10 flex items-center justify-center border border-[#00D9FF]/30">
            <Lock className="w-8 h-8 text-[#00D9FF]" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-white text-center mb-8">Admin Access</h1>

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/50 text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D9FF] transition-colors"
              placeholder="Enter admin password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#00D9FF] text-[#0A0E27] font-bold hover:bg-[#00b8e6] transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Authenticating...' : 'Login'}
            {!isSubmitting && <ArrowRight className="w-5 h-5" />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;