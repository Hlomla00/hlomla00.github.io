# CONTEXT.md — Portfolio Project

**Owner:** Hlomla Moosa Magopeni
**Repo:** `Hlomla00/Portfolio-for-HlomlaM`
**Live:** Auto-deploys to Vercel on every push to `main`
**Last updated:** 2026-04-17

---

## What this is

A personal portfolio and academic submission for **PRP370S Project Presentation 3** at CPUT. Showcases projects, certifications, hackathon wins, STAR reflections, and CV in a single deployable React site.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS + shadcn/ui |
| Animations | Framer Motion |
| Deployment | Vercel (push to `main` = deploy) |
| Screenshots | Puppeteer (`scripts/screenshot.mjs`) |
| PDF → JPG | Python + pdf2image at 150 DPI |

---

## Folder Structure

```
src/
  components/         # One file per section + shared UI (SwipePanel, Navbar, etc.)
  data/               # All content as JSON — edit here, not in components
  pages/Index.tsx     # Single page, mounts all sections in order
public/
  projects/           # Project thumbnail JPGs (one per project)
  certificates/       # PDFs + images/ subfolder (JPGs for display)
  hackathons/         # telkom/ and mict/ image folders
scripts/
  screenshot.mjs      # Puppeteer batch screenshot script
  screenshot-fix.mjs
CV.md                 # Markdown CV — renders on GitHub
CONTEXT.md            # This file
```

---

## Rules We Follow

- **Images only, never iframes** — certificates and project previews use `<img>` tags. Iframes were removed; don't reintroduce them.
- **Don't touch working code** — if a section or feature is working, leave its structure alone. Only change what was asked.
- **No duplicate sections** — each section exists once. Don't add a second Projects or Certifications block.
- **Fix root cause, not symptoms** — if an image doesn't load, fix the path or the file. Don't hide it with CSS.
- **JSON is the source of truth** — all content (projects, certs, reflections, hackathons) lives in `src/data/`. Components read from there.
- **Category is always an array** — `"category": ["Personal"]` not `"category": "Personal"`. Enables multi-category (see GUM).
- **imageUrl takes priority over pdfUrl** — `CertificationsSection` uses `imageUrl` first, falls back to deriving JPG path from `pdfUrl`.
- **Always build before pushing** — run `npm run build` to catch TypeScript errors before `git push`.

---

## Sections (render order in `Index.tsx`)

| # | Section | Component | Data |
|---|---|---|---|
| 1 | Hero | `HeroSection.tsx` | Hardcoded |
| 2 | About | `AboutSection.tsx` | Hardcoded |
| 3 | Projects | `ProjectsSection.tsx` | `projects.json` |
| 4 | Academic | `AcademicSection.tsx` | Hardcoded |
| 5 | Resume | `ResumeSection.tsx` | Hardcoded |
| 6 | Hackathons | `HackathonsSection.tsx` | `hackathons.json` |
| 7 | Certifications | `CertificationsSection.tsx` | `certifications.json` |
| 8 | Agile Portfolio | `AgileSection.tsx` | `agile.json` |
| 9 | Reflections | `ReflectionsSection.tsx` | `reflections.json` |
| 10 | Contact | `ContactSection.tsx` | Hardcoded |

---

## Projects (9 total)

Category filter buttons: **All · Web · Mobile · Personal · Academic**

| ID | Title | Category | Live URL | Thumbnail |
|---|---|---|---|---|
| 1 | SafeRide — Ride Hailing Platform | Academic | https://saferide-system.vercel.app | `/projects/saferide.jpg` |
| 2 | CPUT Clinic Booking System | Academic | https://clinicbookingsystem.netlify.app | `/projects/clinic.jpg` |
| 3 | GUM — Student Marketplace | Academic + Mobile | — | none (letter fallback — intentional) |
| queup | QueUp — Smart Queue Management | Personal | https://que-up1.vercel.app | `/projects/queup.jpg` |
| voucherbridge | VoucherBridge — Multi-Bank Voucher Wallet | Personal | https://voucher-bay.vercel.app | `/projects/voucherbridge.jpg` |
| flowpay | FlowPay — AI Payment Verification Protocol | Personal | https://flowpay-ai-verifier.vercel.app | `/projects/flowpay.jpg` |
| pulse | Pulse — Friend Location & Activity Tracker | Personal | https://pulse-beryl-pi.vercel.app | `/projects/pulse.jpg` |
| bookmzi | BookMzi — SA Digital Book Platform | Personal | https://bookmzi-your-story-stream.vercel.app | `/projects/bookmzi.jpg` |
| gum-ai | GUM AI — Student Copilot | Personal | https://gum-ai-copilot.vercel.app | `/projects/gum-ai.jpg` |

GUM (ID: 3) has `"category": ["Academic", "Mobile"]` — appears in both rows in "All" view and matches both filters.

---

## Certifications (8 total)

| Name | Issuer | Year | Image |
|---|---|---|---|
| Higher Certificate in ICT | CPUT | 2023 | No image — `verifyUrl` only; `note` field explains fee situation |
| Technical Support Fundamentals | Coursera | 2023 | `/certificates/images/technical-support.jpg` |
| Google IT Support Professional | Google / Coursera | 2023 | `/certificates/images/google-it-support.jpg` |
| System Administration & IT Infrastructure | Coursera | 2023 | via pdfUrl fallback |
| Foundations of UX Design | Coursera | 2023 | via pdfUrl fallback |
| Crash Course on Python | Google / Coursera | 2025 | via pdfUrl fallback |
| Database Foundations | LinkedIn Learning | 2025 | via pdfUrl fallback |
| Matric Certificate | Dept of Education | 2017 | via pdfUrl fallback |

---

## Hackathons

| Event | Images |
|---|---|
| Telkom 10X Hackathon 2025 | 14 images in `public/hackathons/telkom/` |
| MICT SETA Western Cape 2026 | 21 images in `public/hackathons/mict/` |

---

## Agile Portfolio — Industry Placement (PRP370S Assessment 2)

Five-panel accordion covering the GitHub Portfolio rubric: Agile Team Charter, User Stories and Tasks, Product Backlog, Sprint Backlog, Agile Logbook. Each panel has an Evidence block and a Reflection paragraph, content in `agile.json`.

Content is generalised from real WIL work (runtime-upgrade initiative, security remediation, internal admin-platform features, QA cross-checks) without naming the host company's specific client campaigns — per the assessment brief's confidentiality instruction. Keep it that way when editing: platform/system type names (e.g. "internal admin platform") are fine, specific client/campaign names are not.

---

## STAR Reflections (PRP370S)

1. Reflection on coding in Markdown
2. Reflection on mock interview experience
3. Reflection on the use of GitHub Pages

All three use the improved entrepreneurship-aware versions referencing QueUp, SafeRide, the Entrepreneurship Game, and the mobile car wash origin story.

---

## Contact

| Channel | Value |
|---|---|
| WhatsApp | +27 69 857 0219 |
| Email | 218070349@mycput.ac.za |
| LinkedIn | https://www.linkedin.com/in/hlomlamagopeni |
| GitHub | https://github.com/Hlomla00 |

---

## Entrepreneurial Background

- Mobile Car Wash (Dec 2023) — residential suburb, zero budget, WhatsApp marketing, ran for 3 months with a partner
- CPUT Entrepreneurship Game — informed current problem-solving approach
- Documented in `CV.md` (Entrepreneurial Background section) and woven into all STAR reflections

---

## Known Non-Issues (do not fix)

| Item | Reason |
|---|---|
| GUM (ID: 3) has no thumbnail | Intentional — letter fallback is fine |
| Higher Certificate has no image | Intentional — fee situation; `note` field handles it |
| Tailwind `delay-[Xms]` build warnings | Cosmetic only, no effect on output |

---

## Todo / Still Needed

- [ ] Diploma in ICT: Application Development certificate (expected 2026 — not yet issued)
- [ ] Add SafeRide project documentation / README to GitHub repo
