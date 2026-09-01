import { Link } from 'react-router-dom';
import { ArrowLeft, Lock, Mail, Loader2 } from 'lucide-react';
import SEO from '@/components/SEO';
import { useAuthForm } from '@/hooks/useAuthForm';

export default function LoginView() {
  const { isLogin, formData, setFormData, status, errorMsg, handleSubmit, toggleMode } = useAuthForm();

  return (
    <div className="min-h-screen bg-background text-white flex flex-col pt-24 pb-12">
      <SEO title={isLogin ? 'Login' : 'Register'} description="Access your NOCTRA account." />
      
      <div className="p-8">
        <Link to="/" className="inline-flex items-center text-xs tracking-widest text-primary hover:text-white transition-colors uppercase">
          <ArrowLeft size={16} className="mr-2" /> RETURN TO BASE
        </Link>
      </div>

      <div className="grow flex items-center justify-center px-4">
        <div className="w-full max-w-md border border-border p-10 bg-surface shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="text-center mb-10">
            <h1 className="font-bebas text-5xl tracking-widest text-white mb-2">
              {isLogin ? 'ACCESS TERMINAL' : 'NEW REGISTRATION'}
            </h1>
            <p className="text-gray-400 text-xs tracking-widest uppercase">
              {isLogin ? 'Enter your credentials to continue' : 'Create a new operator profile'}
            </p>
          </div>

          {status === 'error' && (
            <div className="bg-red-500/20 border border-red-500 text-red-500 p-4 mb-6 text-sm font-bold tracking-widest uppercase text-center">
              {errorMsg}
            </div>
          )}

          {status === 'success' && (
            <div className="bg-primary/20 border border-primary text-primary p-4 mb-6 text-sm font-bold tracking-widest uppercase text-center">
              {isLogin ? 'ACCESS GRANTED' : 'REGISTRATION SUCCESSFUL'}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-xs text-gray-400 tracking-widest uppercase">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={16} className="text-gray-400" />
                </div>
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-background border border-border pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white" 
                  placeholder="CREW@NOCTRA.CC"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-400 tracking-widest uppercase">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={16} className="text-gray-400" />
                </div>
                <input 
                  type="password" 
                  required 
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full bg-background border border-border pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white" 
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading' || status === 'success'}
              className="w-full bg-primary text-black py-4 text-sm font-bold tracking-widest hover:bg-white transition-colors uppercase disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {status === 'loading' ? <Loader2 className="animate-spin" size={20} /> : (isLogin ? 'AUTHENTICATE' : 'REGISTER PROFILE')}
            </button>
          </form>

          <div className="mt-8 text-center">
            <button 
              type="button"
              onClick={toggleMode}
              className="text-xs text-gray-400 hover:text-primary transition-colors tracking-widest uppercase"
            >
              {isLogin ? 'Create new account' : 'Already have an account? Login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}