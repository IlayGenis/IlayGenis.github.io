# Ilay Genis — portfolio

The source of my portfolio site: **[ilaygenis.github.io](https://ilaygenis.github.io)**

I'm an AI Solutions Engineer. I start from the business need, design the solution, and build AI agents, integrations and operational systems that actually work.

- **CV (PDF):** [ilay-genis-cv-en.pdf](https://ilaygenis.github.io/cv/ilay-genis-cv-en.pdf)
- **LinkedIn:** [linkedin.com/in/ilaygenis](https://www.linkedin.com/in/ilaygenis/)

## What's on the site

Four examples from my first production role, each with what was needed, what I did, and how it works:

- [Agents that hold up on the real call](https://ilaygenis.github.io/work/hebrew-voice-agents/)
- [Delivery operations, connected](https://ilaygenis.github.io/work/delivery-operations/)
- [Campaign oversight with code and AI](https://ilaygenis.github.io/work/campaign-review/)
- [Measurements that lead to insights](https://ilaygenis.github.io/work/voice-agent-playbook/)

The descriptions are public and anonymized. No client names, client data or internal code.

## How the site is built

- A static export of Next.js, deployed to GitHub Pages on every push to `main`.
- All content comes from one file (`data/resume.ts`).
- The CV is a page on the site, printed to PDF at build time. The build fails if the PDF runs past one page.
- Every page has its own share image, written by Chrome at build time from the same content file. The build fails if the text doesn't fit.
- The site used to have a Hebrew version; its old addresses under `/he/` forward to the English pages.
- Pages render at build time and work without JavaScript.

Coding agents wrote most of the code. I set the requirements and the behavior, and checked the result.

## Running it locally

```bash
npm ci
npm run dev
```

`npm run build` writes the site to `out/` and prints the CV PDF; that step needs Chrome installed.
