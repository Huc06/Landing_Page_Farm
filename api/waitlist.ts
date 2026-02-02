import type { VercelRequest, VercelResponse } from '@vercel/node';

const BACKEND_URL = 'http://dev.overguild.com/waitlist';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const backendRes = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await backendRes.text();
    const contentType = backendRes.headers.get('content-type');

    res.status(backendRes.status);
    if (contentType?.includes('application/json')) {
      res.setHeader('Content-Type', 'application/json');
      res.json(JSON.parse(data));
    } else {
      res.setHeader('Content-Type', contentType || 'text/plain');
      res.send(data);
    }
  } catch (error) {
    console.error('[Vercel API] Waitlist error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
