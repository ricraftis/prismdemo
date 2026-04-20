# Changelog

All notable changes to this project will be documented in this file.
 
## [1.3.9] - 2026-04-21

### Added
- **AI Report Generation:** Created a new Vercel serverless function (`/api/generate-report/route.ts`) to handle the Prism Financial Health Check report generation using the `gemini-2.5-flash` model and the Prism Master Prompt logic.

## [1.3.8] - 2026-03-28

### Changed
- **Navigation Update:** Renamed "Book Consultation" to "Contact Us" in the primary navigation and sub-pages for clearer intent.
- **Global Brand Connectivity:** Linked all "Prism Business Initiatives" logos throughout the application to the home page, ensuring a consistent return-to-base experience for users.

## [1.3.7] - 2026-03-28

### Added
- **Premium Contact Page:** Launched a dedicated Contact page (`Contact.jsx`) featuring a custom query form, preferred contact method logic, and Recaptcha provision.
- **Strategic Visuals:** Integrated `rebecaaHearn.jpg` as the central hero visual to foster a personal and professional connection.
- **Navigation Update:** Re-routed all "Book Consultation" and "Contact" CTAs throughout the application to the new dedicated Contact page.

## [1.3.6] - 2026-03-28

### Added
- **Global Link Audit:** Conducted a comprehensive audit of all internal navigation and call-to-action buttons across the Home, Hub, and detail pages. Connected multiple previously inactive buttons (Book Consultation, Start Diagnostic, Footer Links).
- **Sub-page Navigation Enhancement:** Added `onConsultation` and `onDiagnostic` capabilities to all service detail pages for seamless flow back to the central diagnostic tool.
- **BAS Asset Update:** Replaced default hero visual with `PrismBAS_Systems.jpg` as requested.

## [1.3.5] - 2026-03-28

### Added
- **BAS Completion & Lodging Page:** Launched the final governance-level landing page, focusing on ATO compliance, strategic tax positioning, and audit readiness.
- **Custom Visuals:** Generated a bespoke orchard-themed hero visual (`bas_hero.png`) featuring a professional regional aesthetic.

## [1.3.4] - 2026-03-28

### Added
- **Compliant Payroll Page:** Launched a dedicated landing page for payroll services, featuring automated accuracy, governance protocols, and employee self-service integrations.
- **Custom Visuals:** Generated and integrated premium imagery for the Payroll hero section.

## [1.3.3] - 2026-03-28

### Changed
- **Bookkeeping Integration:** Expanded software mastery to explicitly include both **MYOB and Xero** across all high-impact sections.
- **Navigation Reliability:** Improved smooth-scroll navigation reliability by optimizing cross-view transition timeouts.

## [1.3.2] - 2026-03-27

### Added
- **Bookkeeping Services Page:** Launched a dedicated, high-impact landing page for bookkeeping services, featuring MYOB expertise and outcome-focused content.
- **Bespoke Visuals:** Generated and integrated premium imagery for the Bookkeeping hero section.

## [1.3.1] - 2026-03-27
 
### Changed
- **Fractional CFO Hero:** Updated hero image format from `.png` to `.jpg` and converted existing assets for optimization.
- **Project Assets:** Integrated additional photography assets (`becFractionalCFO.jpg`, `rebecaaHearn.jpg`) into the public directory.

## [1.3.0] - 2026-03-19
 
- **Fractional CFO & Digital Transformation Pages:** Implemented high-conversion landing pages following strict B2B copywriting standards.
- **Benefit-Focused Methodology:** Introduced outcome-driven sections ("Identify Profit Leaks", "The Cost of the Digital Divide", etc.) to replace feature-only descriptions.
- **Premium Internal Assets:** Generated bespoke professional imagery for all level-specific service contexts.
 
### Changed
- **Enhanced Navigation:** Replaced text links with prominent "Explore" buttons in the ecosystem section for better discoverability.
- **Refined Copywriting:** Optimized all site content for Australian English and removed technical PAS structural labels.
 

## [1.2.0] - 2026-03-16

### Added
- Integrated official **Prism Business Initiatives** logo in header and footer.
- Applied brand color scheme: **Teal** (#00c1cf), **Magenta** (#be70ae), and **Dark Neutral** (#202020).
- Implemented a **Hybrid Logo/Text Approach** for improved brand identification and readability.
- Added **Spectrum Gradient** motif to hero text and CTA highlights.

### Changed
- Refined **Diagnostic Section** text and improved contrast for better legibility.
- Doubled logo size and adjusted navigation height for clearer brand presence.
- Updated footer layout with consistent branding and explicit text.


## [1.1.0] - 2026-03-16

### Added
- Integrated `frontend-design` skill to elevate aesthetics.
- Added **Plus Jakarta Sans** (body) and **Outfit** (display) typography.
- Implemented **CSS Noise Texture** overlay for tactile depth.
- Added **Gradient Mesh** background to the hero section.
- Orchestrated **Staggered Page-Load Animations** for hero and data elements.
- Refined **Spatial Composition** with overlapping cards and asymmetrical layouts.

## [1.0.0] - 2026-03-16

### Added
- Initial build of Prism Business Initiatives landing page.
- React + Vite + Tailwind CSS setup.
- Lucide Icons integration.
- Responsive navigation with mobile menu.
- Hero, Pain Points, Diagnostic Tool, and Service Ecosystem sections.
- Smooth scrolling and basic hover interactions.
