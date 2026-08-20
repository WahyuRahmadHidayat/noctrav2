const PrivacyPolicyView = () => {
  return (
    <div className="container mx-auto px-6 py-16 mt-20 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-400 mb-8">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}</p>
      
      <div className="space-y-6 text-gray-300">
        <p>Kebijakan privasi ini menjelaskan bagaimana NOCTRA mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat mengunjungi website kami.</p>
        
        <h2 className="text-2xl font-semibold text-white mt-8">1. Informasi yang Kami Kumpulkan</h2>
        <p>Kami dapat mengumpulkan informasi seperti nama, alamat email, dan data interaksi Anda dengan website kami untuk keperluan peningkatan layanan.</p>
        
        <h2 className="text-2xl font-semibold text-white mt-8">2. Penggunaan Data</h2>
        <p>Data yang terkumpul tidak akan disebarluaskan dan hanya digunakan untuk mengoptimalkan pengalaman pengguna di platform NOCTRA.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicyView;