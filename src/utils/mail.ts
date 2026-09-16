import { companyConfig } from '../config/company';

export interface EmailOptions {
  to?: string;
  subject?: string;
  body?: string;
}

/**
 * Builds the official Gmail web compose URL with pre-filled parameters.
 * Using this direct HTTPS URL guarantees that the email opens in Gmail inside
 * the web browser, completely avoiding the operating system's default mailto
 * client prompt (such as "Open Outlook?").
 */
export const getGmailUrl = (options?: EmailOptions): string => {
  const to = options?.to || companyConfig.email || 'Workscapsule@gmail.com';
  const subject = options?.subject || 'Free Consultation & Project Estimate - Capsule Company';
  const body =
    options?.body ||
`Hi Capsule Company Team,

I would like to book a Free Consultation / Site Visit and get a project estimate.

My Project Details:
• Full Name: 
• Phone Number: 
• Project Location (Area in Bengaluru): 
• Service Required: (Turnkey Construction / Interior Design / Modular Kitchen / Renovation / Carpentry / Exteriors)
• Approximate Area / Dimensions (sq. ft.): 
• Tentative Budget / Handover Timeline: 
• Additional Requirements / Message: 

Looking forward to connecting with your team.

Thank you!`;

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

/**
 * Opens Gmail compose directly in a new browser tab with predefined content.
 */
export const openGmail = (options?: EmailOptions): void => {
  const url = getGmailUrl(options);
  window.open(url, '_blank', 'noopener,noreferrer');
};
