import { createClient } from '@supabase/supabase-js';

const supabaseUrl = globalThis.process.env.VITE_SUPABASE_URL;
const supabaseKey = globalThis.process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return res.status(401).json({ message: error.message });
    }

    return res.status(200).json({ user: data.user, session: data.session });
  } catch {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}