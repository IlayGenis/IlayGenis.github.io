# Ilay Genis — portfolio

The source of my portfolio site: **[ilaygenis.github.io](https://ilaygenis.github.io)** · [עברית](https://ilaygenis.github.io/he/)

I'm an AI Solutions Engineer. I turn business requirements into voice agents, integrations and AI solutions, working with clients from discovery to deployment.

- **CV (PDF):** [English](https://ilaygenis.github.io/cv/ilay-genis-cv-en.pdf) · [עברית](https://ilaygenis.github.io/cv/ilay-genis-cv-he.pdf)
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
- English and Hebrew from the same content file (`data/resume.ts`), with right-to-left layout in Hebrew.
- The CV is a page on the site, printed to PDF at build time in both languages. The build fails if either PDF runs past one page.
- Pages render at build time and work without JavaScript.

Coding agents wrote most of the code. I set the requirements and the behavior, and checked the result.

## Running it locally

```bash
npm ci
npm run dev
```

`npm run build` writes the site to `out/` and prints the CV PDFs; that step needs Chrome installed.
