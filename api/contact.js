export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email, name, phone, preferredMethod, message } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const LOOPS_API_KEY = process.env.LOOPS_API_KEY;
  if (!LOOPS_API_KEY) {
    return res.status(500).json({ error: 'Loops API key not configured' });
  }

  const nameParts = (name || '').trim().split(/\s+/).filter(Boolean);
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ');
  const preferred =
    Array.isArray(preferredMethod) && preferredMethod.length > 0
      ? preferredMethod.join(', ')
      : 'Not specified';

  try {
    const contactResponse = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${LOOPS_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        userGroup: 'Contact Form',
        source: 'Website Contact Form',
        subscribed: true,
      }),
    });

    if (!contactResponse.ok) {
      const errorData = await contactResponse.json().catch(() => ({}));
      console.error('Loops contact error:', errorData);
      return res.status(500).json({ error: 'Failed to register contact with Loops' });
    }

    const TRANSACTIONAL_ID = process.env.LOOPS_CONTACT_TRANSACTIONAL_ID;
    if (TRANSACTIONAL_ID) {
      const loopsResponse = await fetch('https://app.loops.so/api/v1/transactional', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${LOOPS_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          transactionalId: TRANSACTIONAL_ID,
          email,
          addToAudience: true,
          dataVariables: {
            name: name || email,
            phone: phone || 'Not provided',
            preferredMethod: preferred,
            message: message || 'No message provided',
            date: new Date().toLocaleDateString('en-AU'),
          },
        }),
      });

      if (!loopsResponse.ok) {
        const errorData = await loopsResponse.json().catch(() => ({}));
        console.error('Loops transactional error:', errorData);
        return res.status(500).json({ error: 'Contact saved but notification email failed' });
      }
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
