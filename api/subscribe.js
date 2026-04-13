export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email, name, businessType, surveyResponses } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const LOOPS_API_KEY = process.env.LOOPS_API_KEY;
  const TRANSACTIONAL_ID = process.env.LOOPS_TRANSACTIONAL_ID; // Your "Report" template ID from Loops

  try {
    // 1. Add to Audience (Single Opt-in)
    await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${LOOPS_API_KEY}`, 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ 
        email, 
        firstName: name.split(' ')[0], 
        lastName: name.split(' ').slice(1).join(' '),
        userGroup: 'SME Diagnostic',
        source: 'Website Diagnostic tool',
        subscribed: true 
      }), 
    });

    // 2. Format the Report Data professionally for the email
    // We create a clean summary of the responses
    const reportSummary = surveyResponses.map((r, i) => {
      return `### ${i + 1}. ${r.question}\n**Response:** ${r.selectedOption}${r.furtherInfo ? `\n**Additional Context:** ${r.furtherInfo}` : ''}`;
    }).join('\n\n---\n\n');

    // 3. Send Transactional Email
    const loopsResponse = await fetch('https://app.loops.so/api/v1/transactional', {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${LOOPS_API_KEY}`, 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({
        transactionalId: TRANSACTIONAL_ID,
        email: email,
        addToAudience: true, // Secondary check to ensure they are added
        dataVariables: {
          name: name,
          businessType: businessType,
          reportContent: reportSummary,
          date: new Date().toLocaleDateString('en-AU')
        },
      }),
    });

    if (!loopsResponse.ok) {
      const errorData = await loopsResponse.json();
      console.error('Loops Error:', errorData);
      return res.status(500).json({ error: 'Failed to send transactional email via Loops' });
    }

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
