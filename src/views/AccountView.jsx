import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Lock, Mail, Loader2, LogOut } from 'lucide-react';
import SEO from '@/components/SEO';
import { useAuth } from '@/hooks/useAuth';
import { useProfile } from '@/hooks/useProfile';
import { usePasswordChange } from '@/hooks/usePasswordChange';

export default function AccountView() {
  const navigate = useNavigate();
  const { currentUser, signOut } = useAuth();
  const { profileData, setProfileData, isFetching, status: profileStatus, errorMsg: profileError, updateProfile } = useProfile();
  const { formData: passData, setFormData: setPassData, status: passStatus, errorMsg: passError, handlePasswordChange } = usePasswordChange();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background text-white pt-24 pb-12 px-4 md:px-8">
      <SEO title="My Account" description="Manage your NOCTRA account settings and profile." />
      
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center text-xs tracking-widest text-primary hover:text-white transition-colors uppercase mb-8">
          <ArrowLeft size={16} className="mr-2" /> RETURN TO BASE
        </Link>
        
        <div className="mb-12">
          <h1 className="font-bebas text-5xl md:text-7xl mb-2 text-white">MY ACCOUNT</h1>
          <p className="text-gray-400 text-xs tracking-widest uppercase">Manage your operator profile and security</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-10">
            <div className="bg-surface border border-border p-8">
              <div className="flex items-center mb-6">
                <User className="text-primary mr-3" size={24} />
                <h2 className="font-bebas text-3xl tracking-widest text-white">PROFILE INFORMATION</h2>
              </div>

              {profileStatus === 'success' && (
                <div className="bg-primary/20 border border-primary text-primary p-4 mb-6 text-sm font-bold tracking-widest uppercase text-center">
                  PROFILE UPDATED SUCCESSFULLY
                </div>
              )}
              {profileStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500 text-red-500 p-4 mb-6 text-sm font-bold tracking-widest uppercase text-center">
                  {profileError}
                </div>
              )}

              {isFetching ? (
                <div className="flex justify-center items-center h-40">
                  <Loader2 className="animate-spin text-primary" size={32} />
                </div>
              ) : (
                <form className="space-y-6" onSubmit={updateProfile}>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 tracking-widest uppercase">Full Name</label>
                    <input 
                      type="text" 
                      value={profileData.full_name}
                      onChange={(e) => setProfileData({...profileData, full_name: e.target.value})}
                      className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white" 
                      placeholder="ENTER FULL NAME"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 tracking-widest uppercase">Phone Number</label>
                    <input 
                      type="tel" 
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white" 
                      placeholder="+62 8..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 tracking-widest uppercase">Shipping Address</label>
                    <textarea 
                      rows="4"
                      value={profileData.address}
                      onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                      className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white resize-none" 
                      placeholder="ENTER SHIPPING ADDRESS"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={profileStatus === 'loading'}
                    className="w-full bg-primary text-black py-4 text-sm font-bold tracking-widest hover:bg-white transition-colors uppercase disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center cursor-pointer"
                  >
                    {profileStatus === 'loading' ? <Loader2 className="animate-spin" size={20} /> : 'SAVE CHANGES'}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-10">
            <div className="bg-surface border border-border p-8">
              <div className="flex items-center mb-6">
                <Lock className="text-primary mr-3" size={24} />
                <h2 className="font-bebas text-3xl tracking-widest text-white">SECURITY</h2>
              </div>

              {passStatus === 'success' && (
                <div className="bg-primary/20 border border-primary text-primary p-4 mb-6 text-sm font-bold tracking-widest uppercase text-center">
                  PASSWORD UPDATED SUCCESSFULLY
                </div>
              )}
              {passStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500 text-red-500 p-4 mb-6 text-sm font-bold tracking-widest uppercase text-center">
                  {passError}
                </div>
              )}

              <form className="space-y-6" onSubmit={handlePasswordChange}>
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 tracking-widest uppercase">New Password</label>
                  <input 
                    type="password" 
                    required
                    value={passData.newPassword}
                    onChange={(e) => setPassData({...passData, newPassword: e.target.value})}
                    className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white" 
                    placeholder="••••••••"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 tracking-widest uppercase">Confirm New Password</label>
                  <input 
                    type="password" 
                    required
                    value={passData.confirmPassword}
                    onChange={(e) => setPassData({...passData, confirmPassword: e.target.value})}
                    className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white" 
                    placeholder="••••••••"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={passStatus === 'loading'}
                  className="w-full bg-background border border-border text-white py-4 text-sm font-bold tracking-widest hover:border-primary hover:text-primary transition-colors uppercase disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center cursor-pointer"
                >
                  {passStatus === 'loading' ? <Loader2 className="animate-spin" size={20} /> : 'UPDATE PASSWORD'}
                </button>
              </form>
            </div>

            <div className="bg-surface border border-border p-8">
              <div className="flex items-center mb-6">
                <Mail className="text-primary mr-3" size={24} />
                <h2 className="font-bebas text-3xl tracking-widest text-white">ACCOUNT CREDENTIALS</h2>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 tracking-widest uppercase">Registered Email</label>
                  <div className="w-full bg-background border border-border px-4 py-3 text-sm text-gray-400 cursor-not-allowed">
                    {currentUser?.email}
                  </div>
                </div>
                <button 
                  onClick={handleSignOut}
                  className="w-full bg-red-900/20 border border-red-900/50 text-red-500 py-4 text-sm font-bold tracking-widest hover:bg-red-900/40 hover:border-red-500 transition-colors uppercase flex justify-center items-center cursor-pointer"
                >
                  <LogOut size={16} className="mr-2" /> SIGN OUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}