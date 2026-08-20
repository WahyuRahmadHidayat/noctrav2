export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;
    
    //buat nyimpan ke database nanti
    console.log('Subscriber baru masuk:', email);
    
    res.status(200).json({ success: true, message: 'Berhasil subscribe newsletter NOCTRA!' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}