import SEO from '@/components/SEO';

const TermsView = () => {
  return (
    <div className="container mx-auto px-6 py-16 mt-20 text-white min-h-screen">
      <SEO title="Terms of Service" description="Syarat dan ketentuan penggunaan layanan serta pembelian produk NOCTRA." />
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="text-gray-400 mb-8">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}</p>
      
      <div className="space-y-6 text-gray-300">
        <p>Dengan mengakses dan menggunakan layanan NOCTRA, Anda menyetujui syarat dan ketentuan berikut ini.</p>
        
        <h2 className="text-2xl font-semibold text-white mt-8">1. Penggunaan Website</h2>
        <p>Konten dan materi yang ada di website ini adalah hak milik NOCTRA. Anda tidak diperkenankan menyalin atau mendistribusikan ulang tanpa izin tertulis.</p>
        
        <h2 className="text-2xl font-semibold text-white mt-8">2. Perubahan Ketentuan</h2>
        <p>NOCTRA berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan langsung berlaku setelah diperbarui di halaman ini.</p>
      </div>
    </div>
  );
};

export default TermsView;