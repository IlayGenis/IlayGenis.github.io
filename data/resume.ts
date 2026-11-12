import type { ResumeData } from "@/lib/types";

// Public portfolio content only. Do not add private code, client identifiers,
// internal screenshots, operational metrics, or proprietary implementation details.
export const resume: ResumeData = {
  name: "Ilay Genis",
  title: "AI Solutions Engineer",
  summary:
    "AI Solutions Engineer with hands-on production experience delivering AI agents, integrations and operational systems for real clients.",
  nav: {
    work: "Work",
    about: "Experience",
    contact: "Contact",
    cv: "CV",
    label: "Main navigation",
    skip: "Skip to content",
  },
  hero: {
    eyebrow: "AI SOLUTIONS / FORWARD DEPLOYED ENGINEER",
    lines: ["Real problems.", "Practical AI."],
    intro: [
      "I’m Ilay, an AI Solutions Engineer. I work from the business problem to a system people can actually use: understanding requirements, designing how it should behave, building agents and integrations, and testing the results against real workflows.",
      "My production work includes Hebrew voice agents, CRM-connected tools, and a WhatsApp operations system for a delivery company. Across these projects, I focus on what happens beyond the demo: how the system behaves, where it fails, and what it takes to make it reliable.",
    ],
    contact: "Get in touch",
    about: {
      label: "ABOUT ME",
      location: "Tel Aviv, Israel. Temporarily abroad; returning in early January 2027.",
      personal: "Native Hebrew, fluent English.",
    },
    traits: {
      label: "HOW I WORK",
      text: "I work from observable behavior, not just convincing AI responses: what the agent said, which tools ran, and what the connected system actually recorded. When something fails, I trace it to the prompt, tool, integration, or platform before deciding what to change.",
    },
    focusLabel: "WHAT I WORK ON",
    focus: ["AI agents & systems", "Integrations", "Testing & reliability"],
  },
  work: {
    label: "01 / SELECTED WORK",
    title: "What I built, and how\nI checked its quality.",
    intro:
      "Four examples from my first production role: what was needed, what I did, and how it works.",
    read: "Read case study",
    confidentiality:
      "Cases A–C are work at Callex, anonymized. Diagrams are general illustrations, not internal architecture.",
  },
  experience: {
    label: "02 / EXPERIENCE",
    title: "Hands-on experience,\nwith real clients.",
    company: "Callex",
    tagline: "a voice-AI startup",
    period: "2026 – present",
    intro:
      "At Callex, I work in a small team delivering production AI solutions for clients, while developing reusable briefs, testing practices, and handoff documentation across projects.",
    items: [
      {
        title: "Business needs → technical requirements",
        text: "Discovery conversations with clients, turned into a brief the builder can work from: the goal, what counts as success, what the agent collects and delivers, and where it stops.",
      },
      {
        title: "Build, test, investigate",
        text: "Voice agents for inbound service and outbound campaigns, evaluated scenario by scenario before any live call. Each failure logged with the call, the turn and the root cause. Issues in the engine, the platform that runs the calls, reproduced and reported to the team that builds it.",
      },
      {
        title: "Tools and integrations",
        text: "JavaScript tools that connect the agent to the business: leads, removal requests and CRM actions, through webhooks and Google Apps Script.",
      },
      {
        title: "Campaign analysis and data",
        text: "Reviewing outbound campaign results with scripts and targeted LLM analysis, with written rules for what counts as a finding.",
      },
      {
        title: "Complete systems with coding agents",
        text: "A WhatsApp agent for a delivery company, delivered to production. Callex’s website in Next.js, and the design and build of a bilingual client dashboard for the voice-agent platform.",
      },
    ],
    ownershipTitle: "How I work with coding agents",
    ownership:
      "Claude Code and Codex write much of the code I ship. My part is the requirements and expected behavior, the integration plan, the trade-offs between technical options, and deciding which rules are enforced in code rather than left to the model. Testing, debugging and validation are on me too. Working practices I developed include project briefs, scenario-based testing checklists, a simulator built for the WhatsApp operations system, and database changes tested in a separate schema before production.",
  },
  background: {
    label: "03 / BACKGROUND",
    title: "A different route\ninto AI.",
    intro:
      "My background is in film and cinematography. What drew me to AI solutions is the same kind of challenge: understand the required result, work inside the constraints, and find a practical way to get there.",
    // Newest first, as on a CV.
    items: [
      {
        title: "AI implementation training",
        detail: "AI Game Changer — AI Solutions Developer · Brain AI School · 2026",
        text: "A 12-week practical program focused on translating business needs into AI solutions using Claude Code, Make, and Supabase. Completed alongside my work at Callex.",
      },
      {
        title: "Film, cinematography & video",
        detail: "2022–2025",
        text: "BA in Film and Television at Tel Aviv University, focused on cinematography. Alongside my studies, I worked as a freelance director of photography on short films and shot and edited social video for public and cultural institutions. Set work involved turning creative requirements into practical plans, coordinating with a crew, and adapting to production constraints.",
      },
      {
        title: "Cyber, systems & networks training",
        detail: "See Security International College · 2021–2022",
        text: "Completed training in system administration, networking, Linux, Python, and information-security fundamentals, as well as a Cyber SOC Analyst course covering incident response and SOC operations.",
      },
      {
        title: "Technical support",
        detail: "Bezeq International · 2021",
        text: "Customer-facing technical service at an internet provider. Early practice in diagnosing a problem from a description and explaining the fix clearly.",
      },
    ],
  },
  contact: {
    label: "04 / CONTACT",
    title: "If this sounds\nright for your team.",
    intro:
      "If you’re building AI solutions, I’d be glad to talk and show you how I work.",
    email: "genisilay@gmail.com",
    copy: "Copy address",
    copied: "Copied",
    cv: "CV (PDF)",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ilaygenis/",
      },
      { label: "GitHub", href: "https://github.com/IlayGenis" },
      {
        label: "WhatsApp · +972 52-383-8610",
        href: "https://wa.me/972523838610",
      },
    ],
  },
  case: {
    back: "Selected work",
    label: "CASE STUDY",
    role: "My role",
    tools: "Worked with",
    takeaway: "The bottom line",
    next: "Next case study",
    all: "Back to all work",
    confidentiality:
      "Anonymized. Diagrams describe general concepts, not proprietary architecture. No internal code, prompts, client data or screenshots are included.",
    contents: "In this case study",
    contactLabel: "CONTACT",
    contactTitle: "Working on\nsomething like this?",
    contactIntro:
      "If your team is working on problems like these, I’d be glad to talk, and to hear how you approach them.",
  },
  cv: {
    title: "CV",
    download: "Download PDF",
    back: "Back to the site",
    summary:
      "AI Solutions Engineer with hands-on production experience delivering AI agents, integrations, and operational systems for businesses. Worked across client discovery, solution design, implementation, testing, and debugging on Hebrew voice agents and a WhatsApp delivery operations system.",
    available: "Open to work",
    location: "Tel Aviv, Israel · Temporarily abroad; returning in early January 2027",
    personal: "Native Hebrew · Fluent English.",
    caseLink: "View case study",
    experience: {
      intro:
        "Within weeks of starting my first production role, I was handling client-facing AI agent projects independently, and building the briefs, test scenarios, and handoff documents I reused from one client to the next.",
      items: [
        {
          title: "Solution Design",
          text: "Translated client discovery into implementation briefs defining success criteria, agent behavior, handoffs, and integration requirements.",
        },
        {
          title: "AI Agent Development & Evaluation",
          text: "Built and improved Hebrew voice agents for inbound service and outbound campaigns; tested real-call scenarios, investigated failures across prompts, tools, knowledge retrieval, and platform behavior, and sent reproducible reports to the platform team.",
        },
        {
          title: "APIs & Integrations",
          text: "Built JavaScript tools connecting AI agents to client CRM systems through APIs and webhooks: lead and data transfer for several clients, and member, class, and subscription actions for one.",
        },
        {
          title: "Outbound Campaign Operations & Troubleshooting",
          text: "Managed outbound voice-agent campaigns, reviewed dial lists and results, investigated agent and tool failures, implemented fixes within my scope, and reported findings to clients.",
        },
      ],
      methodTitle: "AI-Assisted Development",
      method:
        "Claude Code and Codex write much of the code. I am responsible for defining requirements and expected behavior, making integration decisions, and determining which safeguards belong in code rather than the model. I validate the results against written briefs and scenario-based checklists, debug what fails, and test database changes in a separate test schema before production.",
    },
    work: {
      "hebrew-voice-agents": {
        title: "Hebrew Voice AI Agents & API Integrations",
        summary:
          "Built CRM integrations for a fitness studio’s voice agent. After the model invented a class ID in testing, added code guards limiting actions to IDs returned by tools in the same call.",
      },
      "delivery-operations": {
        title: "WhatsApp Delivery Operations System",
        summary:
          "Designed and shipped a production WhatsApp system for a nationwide delivery client, connecting onboarding, orders, and courier coordination (Python, TypeScript, Supabase), and built a simulator to test it. The system moved the owner from running every order by phone to supervising from a dashboard.",
      },
      "campaign-review": {
        title: "Outbound Campaign Analysis & Failure Diagnosis",
        summary:
          "Developed a campaign analysis process: two code-based transcript filters (length, call stage), LLM analysis, and findings review. Also diagnosed a result-recording failure using a same-day control campaign.",
      },
      "voice-agent-playbook": {
        title: "Voice Agent Evaluation Playbook",
        summary:
          "Built and maintain a private playbook of 200+ dated voice-agent insights, tagged as measured or hypothesis, including 18 corrections that reversed earlier conclusions; coding agents read it before touching a prompt.",
      },
    },
    skills: [
      "Prompt design",
      "Knowledge retrieval",
      "LLM tool calling",
      "Agent evaluation",
      "JavaScript / TypeScript",
      "Python",
      "SQL",
      "REST APIs",
      "Webhooks",
      "Supabase",
      "Claude Code",
      "Git",
    ],
    // Newest first.
    education: [
      {
        title: "AI Game Changer — AI Solutions Developer",
        detail: "Brain AI School · 2026 · 12 weeks",
        text: "Practical training in translating business needs into AI solutions using Claude Code, Make, and Supabase.",
      },
      {
        title: "BA in Film and Television — Cinematography",
        detail: "Tel Aviv University · 2022–2025",
        text: "Freelance director of photography on short films; shot and edited social video for public and cultural institutions. Set work is planning around constraints, in a crew, with no spare time and no budget for mistakes.",
      },
      {
        title: "Systems, Networks & Cybersecurity Training",
        detail: "See Security International College\n2021–2022",
        text: "Two courses: System and Network Practitioner & Cyber Security Preparation, and Cyber SOC Analyst. Covered networking, Linux, Python, security fundamentals, and incident response.",
      },
    ],
    labels: {
      experience: "Experience",
      work: "Selected work",
      background: "Education & Background",
      tools: "Technical Skills",
      contact: "Contact",
      site: "Portfolio",
    },
  },
  footer:
    "AI solutions. A visual background. Real clients.",
  projects: [
    {
      slug: "hebrew-voice-agents",
      number: "A",
      category: "VOICE AI",
      title: "Agents that hold up on the real call.",
      summary:
        "Building, testing and debugging voice agents: from the client conversation to a brief, a prompt and its tools, until it works on a real call.",
      status: "Callex, in production",
      technologies: [
        "JavaScript",
        "Webhooks",
        "Apps Script",
        "CRM API",
      ],
      diagram: {
        label: "FROM CLIENT TO WORKING AGENT",
        steps: ["Client call", "Brief", "Prompt + tools", "Tested live"],
        caption: "From the brief to an agent tested on a real call",
      },
      role: "Inbound service agents and outbound campaign agents, working with the client on one side and the engine team on the other. Some agents I built from the brief; others I took over as they were, tools included, and brought them to a call that works. When the failure was not in the prompt, the investigation was mine.",
      sections: [
        {
          title: "What was needed",
          paragraphs: [
            "A voice agent has to hold a real conversation and then do something useful with it: qualify a lead, book a slot, take an order, hand off to a person. A prompt that reads well proves none of that. The agent is judged on the call. Behind every agent is an engine, the platform that runs the calls. Another team builds it. The work described here is what runs on it: the brief, the prompt, the tools and the knowledge.",
            "The businesses vary widely: insurance, finance and tax refunds, telecom and TV retention and sales, fitness, hearing care, real estate, automotive, business consulting, restaurants and ordering, healthcare, travel and retail. Each agent has its own success condition, its own stopping points and its own tools, and on a small, young team there was no ready method for getting an agent from the brief to a call that holds up. What follows is the method that came out of that, one agent at a time.",
          ],
        },
        {
          title: "From discovery to a brief you can build from",
          paragraphs: [
            "Every agent starts with a discovery conversation I hold with the client. The brief I write from it has to stand on its own, because the person building from it is often someone else, or me a month later. The parts that must be in it are the ones a prompt cannot guess: what counts as success on this particular call, what the agent must never promise, when it hands off to a person, and which questions are still open. The success condition is also what the test calls check later, so it is written to be checkable.",
            "The brief keeps living after launch. Client requests are tracked as numbered items, and decisions are logged with their reasons. When an account changes hands it goes with a handoff document: what happened last, what is blocking, the next step and who owns it. Its closing section lists what the document itself does not know, because the next person needs to know what was never handed over.",
          ],
        },
        {
          title: "Where the prompt ends and code begins",
          paragraphs: [
            "Language and intent belong to the model. Facts, state and anything that must not happen belong to code. The clearest test of that line was an inbound service agent for a fitness studio that I took over. Its job was to act in the gym’s CRM and not only talk: show the live schedule, find a member by phone, book and cancel classes and trial classes, renew or freeze a subscription, send a digital cancellation form. I started with the API. I measured what the documentation said against what the server actually did, pulled the catalogs of identifiers into configuration, and cross-checked the live schedule against the gym’s own documents. The gaps went back to the client as decisions, and one of them drew the first line: the schedule comes from the CRM at call time, never from documents the prompt was given.",
            "Knowledge went the same way. I rebuilt the gym’s manual and PDFs as query-shaped sources for the engine’s knowledge base: titles in the words customers use, a separate source for what the gym does not offer, and a dated list of approved policy changes. A retrieval test in SQL runs the expected questions and checks that each one brings back the right source, so a wrong answer is caught before it is said on a call. What that knowledge base did later, on a real call, is in section 06.",
            "The tools themselves were written with coding agents. The design work was deciding, for each one, which side of the line every behavior sits on. The prompt owns what the agent says before it calls and how it explains a failure. Code owns how many tool calls a single reply may make, what makes a repeat call a duplicate, and the rule shared with the outbound lead tools built on webhooks and Apps Script: the lead is sent the moment the caller agrees, and if a callback time is added later the same record is updated by call ID instead of a second lead being created. An action counts as done only when the target system confirms it, and a failed attempt stays retryable instead of being blocked as a duplicate. The gym’s outbound campaign agent was cloned from the inbound one, with private tools of its own: lead delivery, a follow-up task in the CRM, and a removal that marks the lead as lost.",
            "The line moved after two cases. The first was small: a prompt rule to offer only the next few days of the schedule had not held, and the cap moved to code. The second showed the risk. In a test round the model invented a class identifier, three digits where real ones have eight. It happened in the platform’s test environment, with no real membership behind the call, so nothing was written, and the CRM would not have accepted such an identifier anyway. But the engine’s confirmation step, which is meant to stop a write like that, never fired in the test channel at all, and the model had proved it could invent an identifier. After that I built the guards in code: a class identifier is accepted only if the schedule tool returned it in that same call, a customer identifier only if the lookup returned it, and profile fields are written only when empty. The prompt kept the language. The guarantees went to code.",
            "A third case came with a move to another company’s model. It sounded more human and responded faster, but its accuracy with tools was much worse: it recorded leads and removals when it should not have, and it also failed to record a lead or a removal after saying itself that it was doing so. I proposed a two-model setup: one runs the conversation, and a second, more accurate with tools, follows the context and decides whether this is the moment to fire a tool or to cancel. What went in eventually is an option to run such a model inside the tool itself, as a gate that blocks fake leads and removals.",
          ],
        },
        {
          title: "Hebrew, specifically",
          paragraphs: [
            "Hebrew text-to-speech needs a pronunciation lexicon, and the lexicon needs verification. The regular transcript shows the agent’s text before the correction. The log does show the word the TTS was told to say, but not how it sounded. Whether a fix really sounds like the right word, you only know by ear, on a real call. Every corrected word is confirmed that way and recorded, with a separate list of candidates not yet verified.",
            "Moving to a new speech vendor means verifying everything again, because each vendor’s accuracy with Hebrew is different: words one vendor could not pronounce as written, the next pronounces correctly, and the other way around. Problems that did not exist can appear, and existing ones can disappear. In practice the move did opposite things on two agents. On one, the pronunciation rules died silently: 13 of 15 were doing nothing, and every corrected word had to be verified again. On another, the old vendor’s lexicon did not stop at all. I heard it on a call, then went through the agent’s sentences in the log from several hours of calls: one rule written to fix a single word had swallowed whole Hebrew words forty times. It was there in the log, but nothing flagged it. From the two cases I wrote one migration checklist: record the voice and pronunciation settings before switching, re-verify every fix by ear on the new vendor, and report to the engine team what the log cannot show.",
            "Gender agreement runs through several layers, from how the caller is identified to what the voice finally says, and gets its own checks, because a wrong form of address can be invisible in the transcript and obvious on the call. And the prompt is written for spoken Hebrew, not written Hebrew: the register a person uses on the phone, not the one they use in a form.",
          ],
        },
        {
          title: "Testing on the call",
          paragraphs: [
            "The unit of testing is a conversation, not a test. The scenarios come from the brief: the success condition first, then everything that can pull the call away from it, an edge case, a caller who changes the subject, one who swears, one who asks for something the agent must refuse. The prompt is checked against what it was written to do, not against how it reads. Each planned call has one main question and carries smaller checks along the way. Success is graded in four tiers: what the agent said, whether the tool actually fired, whether it fired with the right content, and whether the record actually landed in the target system. A scenario is written at the highest tier it allows, and a scenario that cannot be judged from the log is not an evaluation.",
            "Text-only preview rounds, the model without the voice and the phone line, are a filter for quick fixes. Only a live call counts, and “verified” requires a call identifier. Every call also yields background measurements at no extra cost: time to first response, gender agreement, interruptions.",
            "The findings rarely live where they first appear. A wrong refusal, a caller turned away on medical grounds, that four prompt wordings could not move was fixed by one passage in the knowledge base, found with a retrieval test instead of another prompt edit. A medical gate that fired on the word “health” was fixed by renaming a heading and taking the word out of the prompt entirely. And I withdrew two gender findings that looked systematic, after checking against the engine’s own code and seeing that the test channel had produced them. Where a failure lives decides what the fix is, and finding that out is its own work.",
            "With the outbound campaign agents, the agent is the one calling, and testing starts from what it has to know: who the leads are, what the call is for, the limits of the offer, and when to end the call, for example when the wrong person answers or after a repeated refusal. There is no handoff to a person here; most calls end with details taken for a callback. So the scenarios are not service cases but the kinds of people who answer the phone, including the difference between “not interested” and a request to be removed from the list, which get different handling. And here too, not everything is in the prompt: voicemail cannot always be detected by the prompt, because in some cases the engine plays fixed lines from the configuration before the model is involved, and even when the model is involved it sometimes misses the link between what its prompt says and what is actually heard, so the engine needs a detection mechanism of its own.",
            "When a client complained about their agent, I analyzed ten real calls one by one. For every complaint I found a cause I could point to: a configuration field of a tool, a line the prompt required the agent to say word for word, or an engine issue. Not a guess at what was wrong.",
          ],
        },
        {
          title: "Inside the engine",
          paragraphs: [
            "The engine is the platform that runs the calls: the telephony, the speech in both directions, and the loop that feeds the model each turn. Another team builds it, and when a failure is not in the prompt or in a tool, it is in there. To tell those apart I went into the engine’s code in stages, with coding agents doing the reading and every stage reviewed by hand, and came out with a map: what the model actually sees on each turn, the gates it never sees, how each configuration key is really edited and how dangerous a wrong edit is, and which check to run first for each symptom.",
            "The map also settled what belongs to the model and what belongs to the engine. The model runs the conversation. The engine owns the truth: facts and state are injected by code on every turn, gates that must not be crossed are checked in code, and a gate that blocks tells the model what to do next, not just that the action was blocked. It is the same line as in the CRM tools, one layer down.",
            "The clearest case was the knowledge base from section 03. On two agents, the gym’s and a hearing-care clinic’s, the answers started contradicting the prompt, with no change to the prompt at all. I found the cause in the engine: it injected four passages from the knowledge base into every turn, relevant or not, and the irrelevant ones poisoned the context. The retrieval test could not see that, because it only checks that a known question brings back the right source. I moved the facts the agent must know back into the prompt and turned the knowledge base off by default. Both agents came back to sense, and it became a rule: a conversation that stops making sense is checked for knowledge injection before anyone touches the prompt.",
            "I document engine issues with a status and a triage rule: a symptom that would recur on another agent is a system issue, anything specific to one agent’s wording stays with that agent. Each open item gets a short verification plan, a ladder of checks from reading the code up to a live call, and reaches the engine team as a reproducible report.",
          ],
        },
        {
          title: "Outcome",
          paragraphs: [
            "Agents and tools in real business use, and a working method that did not exist when I started: I write down and tag what one account teaches, and use it on the next. That method, with its insights and their dates, is the fourth case study.",
            "When an account changes hands, so does the state of its testing. On the gym’s agent, some of the tools had not yet run on a live call when I handed it over, and the handoff document says which ones, because a tool that was written but never heard on a call is not done.",
          ],
        },
      ],
      takeaway:
        "A useful fix starts with knowing where the failure lives: prompt, tool or engine. Each needs its own investigation, and the result still needs a real call.",
    },
    {
      slug: "delivery-operations",
      number: "B",
      category: "WHATSAPP AGENT",
      title: "Delivery operations, connected.",
      summary:
        "A WhatsApp operations system for a nationwide delivery company: customer onboarding, order intake and courier coordination, built with coding agents and delivered to production.",
      status: "Delivered to production",
      technologies: ["Python", "TypeScript", "Supabase"],
      diagram: {
        label: "THE PATH OF A DELIVERY",
        steps: ["Customer", "Order", "Coordination", "Courier"],
        caption: "Every message becomes a record: customer, order, courier, status",
      },
      role: "Requirements, product behavior, the flows and the testing, on my own from start to finish. Coding agents wrote most of the code; I decided what it should do and checked whether it did, first in a simulator and then on the company’s real number.",
      sections: [
        {
          title: "What was needed",
          paragraphs: [
            "A nationwide delivery company needed its customer intake and its courier operations in one connected system. The whole operation already ran on WhatsApp, customers and couriers alike, so the system had to fit into a live business rather than replace it.",
            "The scope was wider than a chat bot: new customer registration, order intake, courier registration on top of an existing courier database, and an operational dashboard. The hard part is not the chat. It is that every message has to become a record the operation can act on: a customer, an order, a courier, a status.",
          ],
        },
        {
          title: "One delivery, end to end",
          paragraphs: [
            "A customer writes on WhatsApp what to send and where. If the number is known, the bot takes the order; if not, it registers the customer first. The order goes out to the couriers’ WhatsApp groups, couriers answer in private, and the system has five minutes to pick the best registered one: time to the pickup, vehicle type, and a rating built from what customers said about their earlier deliveries.",
            "A courier the system does not know is asked for details, the vehicle, and a photo of an ID before getting anything. The chosen courier gets the details in private, and the customer gets a message at every status change the courier reports. Customers who prefer a person are not answered by the bot at all: the owner enters their orders in the dashboard, and they go out to the groups the same way.",
          ],
        },
        {
          title: "Flows before code",
          paragraphs: [
            "I wrote the flows and the expected behavior before any code, so that there was something to judge the implementation against. I worked them out with the business owner, from their experience of how the operation ran before the system, and they had to match how it actually works, down to details like matching the size of a shipment to the type of vehicle that can carry it.",
            "The data layer was Supabase. I worked on the schemas, tables and indexes, choosing the indexes around the queries the application actually ran, and every schema change shipped as a numbered, forward-only migration: once a change had shipped, it was never edited, only followed by the next one. Application logic was Python and TypeScript.",
          ],
        },
        {
          title: "Building with coding agents",
          paragraphs: [
            "Coding agents wrote most of the system. Each feature went through the same loop: define what it should do in the flow document, let the agent implement it, then read the result and run it, not to admire the code but to find where it does something the flow did not say. What the agent could not know, the operation’s rules and the technical decisions between options, stayed with me.",
            "The operational dashboard was part of the same product and went through the same loop. It gives the business owner full control over the operation: switch the bot on and off, silence its replies for one number, blacklist a courier, enter a delivery by hand, work out what each customer owes for the month, and change the numbers the flows run on, such as pricing per kilometer and per vehicle type.",
          ],
        },
        {
          title: "What the model promises, code checks",
          paragraphs: [
            "What this project showed most clearly: a model can promise something and not do it. It tells the customer the order is in, and the record behind it is simply not there. So nothing that matters rests on the model’s word. For every promise it makes I built a gate in code that checks whether the thing actually happened, and corrects it when it did not.",
            "Something WhatsApp allows and a voice call does not: a path fixed in advance for every situation. Every flow has a version that runs without the model at all, step by step, so if the model’s API fails, the conversation continues on rails instead of stopping. Voice does not give you that option: a spoken conversation cannot be put on rails without turning into a menu.",
          ],
        },
        {
          title: "Simulator first, then a real number",
          paragraphs: [
            "Testing started in a simulator I built, where every flow could be run end to end without a phone, a customer or a courier involved, and stayed there until the behavior matched the flow document. Only then did it move to a real company number, with the same flows run again as real WhatsApp conversations. Anything that broke was judged against the document, not against what the code happened to do.",
          ],
        },
        {
          title: "Outcome",
          paragraphs: [
            "The system went into production and brought customer onboarding, order intake and courier coordination into one product, on WhatsApp, with every message ending up as a record the operation could act on. It was delivered whole: the data layer, the application logic, the conversations and the dashboard. From that point the owner was no longer running every order by phone: the bot handled the orders, and the owner supervised from the dashboard.",
          ],
        },
      ],
      takeaway:
        "A model can promise something and not do it. Anything that matters is checked in code, and anything that must always work has a path that does not need the model at all.",
    },
    {
      slug: "campaign-review",
      number: "C",
      category: "OUTBOUND CAMPAIGNS",
      title: "Campaign oversight with code and AI.",
      summary:
        "Running outbound campaigns and analyzing their results: a layered workflow of scripts and LLM analysis, written rules for what counts as a finding, and the diagnosis of a failure in recording results.",
      cardSummary:
        "Developed a two-stage filtering workflow for outbound campaign transcripts, followed by LLM analysis. I personally reviewed the model’s findings before reporting to clients, and investigated failures in campaign result recording.",
      status: "Used across outbound campaigns",
      technologies: ["Scripts", "LLM", "Findings review"],
      diagram: {
        label: "FROM DATA TO DECISION",
        steps: ["Extract", "Filter", "Analyze", "Findings"],
        caption: "How to read a campaign without reading every transcript",
      },
      role: "For a period, the outbound campaign clients were my day-to-day: analyzing each campaign’s results, investigating agent and tool failures that kept coming back, applying the fixes that were on my side, and reporting to the client.",
      sections: [
        {
          title: "What was needed",
          paragraphs: [
            "An outbound campaign produces many transcripts in a few hours, and the client is waiting for a verdict. Reading everything through an LLM is expensive, and worse, it invites conclusions the data cannot support: a report can point at an agent problem or a tool problem, but a pattern a script flagged is still not a finding.",
            "The verdict decides real things: whether the agent’s opening changes, whether a tool gets fixed, whether the campaign keeps dialing. So the question is how to analyze a campaign without running everything through a model, and without letting a script decide what happened to a person on a call.",
          ],
        },
        {
          title: "Running a campaign",
          paragraphs: [
            "Before the first call there is a list and a process. The dial list is built from the client’s files: everyone who asked to be removed comes off it, from every source that has removals, and invalid numbers go to a separate file. On one of those passes I found a bug in the engine, the platform that runs the calls: a removal request said aloud on a call that was never recorded. The lists themselves go through a quality pass with coding agents: every record checked against its source, first names corrected, and the rejected records reviewed in both directions before anyone is dialed.",
            "The process I wrote for new outbound clients runs from the discovery call to the client operating on their own, with three gates before any pilot campaign: a check by whoever is responsible for the client after a batch of control calls, the client’s approval, and an end-to-end test of every integration. The pilot then grows in batches, with fixes between batches and under my supervision, until the agent has been through enough pilots and passes to the client’s control.",
            "When a client wanted to know which script works, four variants of the same agent ran side by side into one intake sheet, routed by agent and by outcome type, with a quarantine tab for anything the routing could not identify, so that nothing was guessed. The variants got a private copy of the removal tool, so the experiment never touched a tool shared with a live agent.",
          ],
        },
        {
          title: "What code may count",
          paragraphs: [
            "The real question was which data code could reliably count. What the agent says is almost always the same: the same script lines, call after call, so counting on agent speech and metadata is legitimate. Customer speech is open-ended and corrupted by recognition errors: code can organize utterances and measure how often each one appears, but keyword matching alone cannot decide what they mean. A practical test: if a script produces a list of findings instead of counts, it has crossed the line.",
            "The limits are declared up front. The stored data has no turn timing, no interruption record and no hang-up cause, so a conclusion can say that the opening is weak, and never say why. And the platform’s own no-answer counter reads zero by design, because an unanswered lead goes back to the queue, so no-answer is measured from another source.",
          ],
        },
        {
          title: "From transcripts to findings",
          paragraphs: [
            "Filtering was needed for two reasons. Many calls never became a real conversation, and most of the text in a campaign was the agent repeating its own script, so sending everything to a model meant paying mostly for the same lines. Word-list shortcuts did not hold up either: matching customer speech against a list missed most removal requests.",
            "So scripts filtered the transcripts in two layers before any model saw them. The first looked at transcript length. The second looked at how far the conversation got: the opening, the pitch, the closing question. The filtering improved as the work went on: an early cut by turn count alone was dropped once it turned out to skip calls the agent had ended itself, and the criteria were refined from there.",
            "The transcripts that passed both filters went to an LLM, which analyzed them and presented its findings. I read those findings before reporting to the client.",
            "The written method went further than the scripts. It directed the analysis to calls with a recorded outcome, calls where the closing question got an answer but no outcome followed, and the distinct things customers said. It called for checking that the data was complete, for writing definitions before the analysis, and for a bar on any finding: a verbatim quote, a cross-check against the recorded outcome, and a mark of whether it was measured or assumed, because the absence of a tool event is not proof the tool did not fire. I describe these as written rules, not as automated checks. Metrics are grouped by who has to fix them.",
          ],
        },
        {
          title: "A morning with zero results",
          paragraphs: [
            "One morning a large campaign ran for hours, and the platform recorded zero results while the client’s sheet kept filling up. Everything looked broken at once: the agent, the tools, the engine. I narrowed it with a control group: another campaign on the same day, on the same engine, whose agent used the engine’s built-in tools. Its results were recorded. So the failure lived in the path of the custom tools. Someone else was responsible for that tool, so by the end of the day I sent them a short list of bugs ordered by severity, each with the call identifiers to reproduce it.",
            "The same day showed why a flag is not a finding. The analysis documented that most rows marked as callback requests did not match what the customer actually said. In the data it covered, removal requests had been marked correctly. That part matters most, because a missed removal is the one mistake a campaign cannot afford. That day is where the version of campaign review described here came from.",
          ],
        },
        {
          title: "Outcome",
          paragraphs: [
            "The workflow ran for as long as the outbound clients were my day-to-day: filtering first, LLM analysis of what remained, and reading the findings before reporting to the client. When the period ended, every client went to the next person with a handoff document: where things stood, what was blocking, and the next step.",
          ],
        },
      ],
      takeaway:
        "Use the simplest check that narrows the question, measure only what the data can actually answer, and decide up front what a finding must carry.",
    },
    {
      slug: "voice-agent-playbook",
      number: "D",
      category: "MY WORKING METHOD",
      title: "Measurements that lead to insights.",
      summary:
        "A private knowledge base of what I learn from testing voice agents: 14 topic classes and 200+ dated insights, each tagged as measured or hypothesis, never deleted, only superseded.",
      status: "Personal, private, in daily use",
      technologies: ["Markdown", "Git", "Claude Code", "Evals"],
      diagram: {
        label: "THE LIFE OF AN INSIGHT",
        steps: ["Observe", "Record", "Tag", "Supersede"],
        caption: "From an observation on a call to a tagged insight, with the measurement behind it",
      },
      role: "Author and maintainer.",
      sections: [
        {
          title: "What was needed",
          paragraphs: [
            "Insights from testing get lost. A principle without the measurement behind it gets re-derived on the next agent, argued about, and sometimes reversed by accident. The most-broken rule in voice prompts, how spoken lines are quoted for the agent in the prompt, is also the main reason agents sound robotic, and it kept being broken because nobody had written down what actually happened when it was.",
          ],
        },
        {
          title: "One core document, fourteen topics",
          paragraphs: [
            "The base is built as a skill for coding agents. One core document I wrote sets the policy: the language rules, the quoting rule, and the principle that the prompt is a set of principles the agent acts on, not a script it reads out. It defines six things every prompt has to make the agent understand: who it is and whether it called or was called, what it knows, what it offers, how it says it like a person, which details it collects, and how it runs a natural conversation. And it holds a pre-flight checklist, a quality gate before any improvement is declared, and a trace from a bad utterance back to the source that produced it: the fix goes in at the highest layer that explains it, and when the source is the engine, the platform that runs the calls, the prompt is left alone.",
            "Fourteen topic classes hold the insights: anchors, audio and speech recognition, closing, the measurement gate, identity truth, knowledge, model configuration, prompt craft, prompt versus code, register, system signals, tools, speech prosody and turn flow. In the hierarchy the topics beat the core: on every piece of work the coding agent reads the topic related to what is being solved and looks for a relevant insight. If there is one, it overrides what the core says; if there is none, it gets created when the problem is solved.",
            "Two examples from the core. The quoting rule: no example sentences in the prompt, neither on the side of what the customer says nor on the side of what the agent answers. Quoting the customer teaches the model string matching instead of a situation, and several example answers do not produce variety, they produce a wrong choice. What used to be an example is written as what has to get through to the customer, in my own words, and the wording stays the model’s. And the pace rule: one change, one call, one change. A pile of fixes with no call between them makes it impossible to attribute anything, and on one night three of the fixes themselves were the source of the next failure.",
          ],
        },
        {
          title: "What every insight must carry",
          paragraphs: [
            "Every insight carries the same fields: tag, model, context, observation, finding, implication and, when it replaces an older insight, what it supersedes. A dated insight beats a stated principle. An insight is never deleted or reworded; a reversal is a new record that points at the old one. Each insight has one home, and an insight measured on a different model is read as a hypothesis whatever its tag. Anything unclassifiable goes to an inbox, so that deciding where it belongs never delays writing it down.",
          ],
        },
        {
          title: "One insight, as recorded",
          paragraphs: [
            "Tag: measured. Context: a support agent had to walk a caller through three checks at home, and read all three in one breath, as a list. Observation: the facts sat in the knowledge base as a list, so they were read as a list; moved into the prompt, the same failure came back from there; rewritten as a numbered sequence, the agent walked the steps as a script and asked the second check after the caller had already answered it. Finding: the form of a fact, not where it lives, decides whether it gets read aloud, and a numbered sequence turns knowledge into a script. Implication: facts are written in a form no sentence can be lifted from, a verb and a noun rather than a ready-made sentence, and the prompt says outright that they are what the agent knows, not what it says.",
          ],
        },
        {
          title: "Checked against what the platforms publish",
          paragraphs: [
            "I check the base against the guidance the leading voice-agent platforms publish, one topic at a time. Small models do the gathering, and they may only bring back exact quotes: a claim without a quote is thrown out. A strong model then compares every insight with the quotes and proposes changes, a model from a different family reviews those proposals, and I decide on each one. Before it starts, the base is tagged and frozen, so every proposed change is a diff against a known version, one that can be measured or reverted. A change I accept does not go in because a platform says it works better: it is tested on calls like any other insight. Some of the guidance already matched what had been measured anyway.",
          ],
        },
        {
          title: "Outcome",
          paragraphs: [
            "Most insights are measured, about a fifth are still hypotheses, and eighteen are corrections that reversed something I believed earlier. The corrections are the point. For example, the decision on which language to write the prompt in: it moved to English to save tokens, and came back to Hebrew when a whole campaign showed no difference in quality, because a prompt in Hebrew demonstrates the spoken language instead of describing it. The cost in tokens was measured and accepted, also because the prompt is cached anyway, so the difference did not justify English alone. Teaching the model how to speak the language won. The base is personal and private, and it is in daily use: the core document is the first thing a coding agent reads before touching a prompt, and a failed call is looked up by its topic before it is argued about. It is the working method behind every agent in the first case study.",
          ],
        },
      ],
      takeaway:
        "A principle without a date and a measurement is an opinion. The value is in the corrections.",
    },
  ],
};

// Trailing slashes match the exported directory structure, so links resolve
// without a redirect hop and agree with the canonical URLs.
export const homePath = "/";
export const casePath = (slug: string) => `/work/${slug}/`;
export const cvPath = "/cv/";
// The PDF is written by scripts/build-cv.mjs after `next build`, which also
// copies it to the old address, /cv/ilay-genis-cv-en.pdf, so links already
// shared there still work.
export const cvFile = "/cv/ilay-genis-cv.pdf";
// Share images are written by scripts/build-og.mjs after `next build`, one per
// page: `page` is "home", "cv" or a project slug. They stay under /og/en/ so
// previews already shared keep their image.
export const ogFile = (page: string) =>
  page === "home" || page === "cv" ? `/og/en/${page}.png` : `/og/en/work/${page}.png`;
