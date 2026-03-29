export const businessTypes = [
  { id: 'family', label: 'A small family-run type business' },
  { id: 'employees', label: 'A business with employees' },
  { id: 'multifaceted', label: 'A multi-faceted organisation' }
];

export const branchedQuestions = {
  family: [
    { id: 'f1', text: 'What is the primary bottleneck preventing your business from growing?', options: ['Capital/Funding', 'Time/Bandwidth', 'Market Knowledge', 'Finding Good Help'] },
    { id: 'f2', text: 'How do you handle the separation of personal and business finances?', options: ['Strictly separated', 'Somewhat mixed', 'Highly mingled'] },
    { id: 'f3', text: 'What does your current succession or exit plan look like?', options: ['Clear, documented plan', 'Vague ideas/Not formalised', 'No plan yet'] },
    { id: 'f4', text: 'How would you describe your current work-life balance?', options: ['Excellent', 'Manageable but demanding', 'High risk of burnout'] },
    { id: 'f5', text: 'How comfortable are you with delegating operational tasks?', options: ['Very comfortable', 'I struggle but try', 'I prefer to do everything myself'] },
    { id: 'f6', text: 'What is your primary approach to marketing and acquiring new customers?', options: ['Word of mouth / Referrals', 'Active local networking', 'Digital presence / Ads'] },
    { id: 'f7', text: 'What is your ultimate long-term goal for the business?', options: ['Sell to a third party', 'Pass down to family members', 'Maintain as a lifestyle business'] }
  ],
  employees: [
    { id: 'e1', text: 'What is your most significant human resources challenge?', options: ['Attracting top talent', 'Retaining good employees', 'Training and onboarding', 'Performance management'] },
    { id: 'e2', text: 'How standardised are your daily operational processes?', options: ['Highly documented and followed', 'Ad-hoc but functional', 'Mostly chaotic/reliant on specific people'] },
    { id: 'e3', text: 'How would you describe your cash flow management?', options: ['Strong reserves (6+ months)', 'Month-to-month stability', 'Frequent cash flow crunches'] },
    { id: 'e4', text: 'Where does the leadership team spend most of its time?', options: ['High-level strategy and growth', 'Putting out daily fires', 'Stuck in middle-management tasks'] },
    { id: 'e5', text: 'How would you describe your company culture?', options: ['Strong, positive, and aligned', 'Indifferent/Neutral', 'Strained or toxic'] },
    { id: 'e6', text: 'How effectively does your business utilise technology?', options: ['Leading edge / highly automated', 'Adequate for our current needs', 'Outdated systems holding us back'] },
    { id: 'e7', text: 'What is the primary objective for the next 3 years?', options: ['Expand to new locations/markets', 'Optimise profit margins', 'Prepare for acquisition/merger'] }
  ],
  multifaceted: [
    { id: 'm1', text: 'How well do your different departments or units collaborate?', options: ['Seamless synergy', 'Occasional silos', 'Highly siloed and disconnected'] },
    { id: 'm2', text: 'How aligned are the various facets of your organisation with the core strategic vision?', options: ['KPIs tracked across the board', 'Loose alignment', 'Units operate almost independently'] },
    { id: 'm3', text: 'How would you assess your corporate governance and compliance frameworks?', options: ['Robust and scalable', 'Experiencing growing pains', 'Reactive and currently inadequate'] },
    { id: 'm4', text: 'What is your primary engine for market expansion?', options: ['Organic growth / R&D', 'Mergers & Acquisitions (M&A)', 'Diversification into new sectors'] },
    { id: 'm5', text: 'How is data utilised in your executive decision-making?', options: ['Predictive analytics and real-time dashboards', 'Basic historical reporting', 'Fragmented spreadsheets'] },
    { id: 'm6', text: 'How quickly can your organisation innovate or pivot?', options: ['Highly agile', 'Moderate pace', 'Slow and bureaucratic'] },
    { id: 'm7', text: 'What is the primary focus for the executive board right now?', options: ['Maximising shareholder value', 'Massive operational transformation', 'Aggressive market share acquisition'] }
  ]
};
