// File: api/run.js (Serverless function for Vercel)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { header_text, original_text, separator = "\n" } = req.body;

    if (!header_text || !original_text) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const text_with_header = `${header_text}${separator}${original_text}`;

    return res.status(200).json({ text_with_header });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
