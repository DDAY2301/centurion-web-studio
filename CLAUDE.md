# Lumeli — autonomous engineering brief

## Repository and identity
- Repository: `DDAY2301/centurion-web-studio`
- Production branch: `main`
- Public canonical domain: `https://lumeli.net` (registered; DNS/hosting must be verified)
- Brand: Lumeli; associated legal entity: Centurion d.o.o.
- Framework: Next.js 16 App Router, TypeScript, React 19.
- Only Lumeli repo is in scope. Portfolio source sites are read-only references.

## User authorization and operating style
- The owner authorizes routine source-code maintenance directly on `main`, provided working behavior and checks are preserved.
- Work independently on file changes, navigation, visual corrections, tests, build and deployment configuration; avoid repetitive permission requests for routine repository edits.
- Always fetch the latest GitHub branch before writing. If branch heads changed, reconcile changes. Never force-push, erase someone else's work or overwrite secrets.
- Do not bypass sandbox security controls. If an external tool blocks a command, use authorized GitHub connector operations or report the exact blocker.
- Never claim a site is live solely because GitHub CI passed; check actual HTTP availability and the production URL.
- Do not register domains, spend money, configure DNS in external accounts, send outreach emails, or expose secrets without the required owner/account authorization.

## Mandatory verification
Before reporting success: `npm ci`, `npm run typecheck`, `npm run lint`, `npm test`, `npm run build`, `npm audit --omit=dev`.
Ensure GitHub Actions is green for the exact final revision. Recover and fix failures, rather than leaving the user to debug basic mistakes.

## Site requirements
- Every navigation item leads to a real route (including mobile).
- Four portfolio case studies: bloglab.eu, blackraven.solutions, zavod-zzt.eu and mojglassteje.eu.
- Do not display GitHub repository links publicly. Do not invent portfolio screenshots.
- Black Friday code BLACKFRIDAY30: 30% discount on Lumeli services and packages from Nov 20 through Nov 30, 2026 (Europe/Ljubljana). Automatically expire.
- `/kuponi` must deliver real SVG, PNG and PDF files; the generator `scripts/render_coupons.py` produces and verifies downloads.
- Unconfigured API endpoints must fail safely, not pretend a form or coupon redemption succeeded. Configure contact delivery only after authorized provider credentials and privacy data are available.
- All public copy should use natural Slovenian and Lumeli branding.

## Hosting deployment
- Prefer Git-linked Netlify for low-cost commercial Next.js hosting; `netlify.toml` is included.
- One-time owner login/authorization to a hosting platform and NEOSERV DNS changes are prerequisites for going live; GitHub writes alone cannot satisfy them.
- When the account is connected, deploy from `main`, attach lumeli.net and www.lumeli.net, follow the host's project-specific DNS instructions, confirm HTTPS, and test all public routes.
- Never use GitHub Pages as the production host for the Next.js API runtime.
