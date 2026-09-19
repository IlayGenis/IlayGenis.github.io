import type { Locale, ResumeData } from "@/lib/types";

// Public portfolio content only. Do not add private code, client identifiers,
// internal screenshots, operational metrics, or proprietary implementation details.
export const resumes: Record<Locale, ResumeData> = {
  en: {
    name: "Ilay Genis",
    title: "AI Solutions Engineer",
    summary:
      "AI Solutions Engineer with production experience in Hebrew voice agents, integrations and AI-assisted software delivery.",
    nav: {
      work: "Work",
      about: "Experience",
      contact: "Contact",
      cv: "PDF",
      label: "Main navigation",
      language: "Switch to Hebrew",
      skip: "Skip to content",
    },
    hero: {
      eyebrow: "AI SOLUTIONS / SOFTWARE",
      lines: ["Real problems.", "Practical AI."],
      intro:
        "I’m Ilay, an AI Solutions Engineer. I turn business requirements into Hebrew voice agents, integrations and software. Now looking for my next role, to keep growing professionally and take on new challenges.",
      availability: "Open to AI solutions & software roles",
      work: "Explore my work",
      contact: "Get in touch",
      about: {
        label: "ABOUT ME",
        text: "Tel Aviv–Bangkok, working remotely. Age 27. Hebrew native, fluent English.",
      },
      // Provisional English, pending Ilay's approval after the Hebrew round.
      traits: {
        label: "HOW I WORK",
        items: ["Hard-working", "Invested in the work", "Fast learner", "Good in a team"],
      },
      focusLabel: "WHAT I WORK ON",
      focus: ["Hebrew voice AI", "Integrations", "AI-assisted development"],
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
      // Provisional English, pending Ilay's approval after the Hebrew round.
      title: "Hands-on experience,\nwith real clients.",
      company: "Callex",
      tagline: "a Hebrew voice-AI startup",
      period: "May 2026 – present",
      intro:
        "A new company and a small team, building the processes and methods alongside the work.",
      items: [
        {
          title: "Business needs → technical requirements",
          text: "Discovery conversations with clients, turned into a brief the builder can work from: the goal, what counts as success, what the agent collects and delivers, and where it stops.",
        },
        {
          title: "Build, test, investigate",
          text: "Hebrew voice agents for inbound service and outbound campaigns, evaluated scenario by scenario before any live call. Each failure logged with the call, the turn and the root cause. Issues in the engine, the platform that runs the calls, reproduced and reported to the team that builds it.",
        },
        {
          title: "Tools and integrations",
          text: "JavaScript tools that connect the agent to the business: leads, removal requests and CRM actions, through webhooks and Google Apps Script.",
        },
        {
          title: "Campaign analysis and data",
          text: "Reviewing outbound campaign results with a person on the verdict, and campaign data recovered in SQL with a rollback path.",
        },
        {
          title: "Full-stack development",
          text: "A WhatsApp agent for a delivery company, delivered to production. The company’s website in Next.js, and the design and build of a bilingual client dashboard for the voice-agent platform.",
        },
      ],
      ownershipTitle: "How I work with coding agents",
      ownership:
        "Claude Code and Codex write much of the code I ship. My part is the requirements, the behavior, the testing, and the call on whether the result actually meets the need. Working habits I built: one document per project that says what the system should do, a checklist of checks and a simulator before anything goes live, and database changes tested on a copy before they reach the real database.",
    },
    capabilities: {
      label: "WORKED WITH",
      title: "Worked with",
      groups: [
        {
          title: "Languages, frameworks and platforms",
          items: [
            "JavaScript / TypeScript",
            "Python",
            "SQL",
            "Next.js",
            "Supabase",
            "Google Apps Script / Sheets",
            "Webhooks",
            "Git",
            "Claude Code",
            "Codex",
          ],
        },
      ],
    },
    background: {
      label: "03 / BACKGROUND",
      // Provisional English, pending Ilay's approval after the Hebrew round.
      title: "A different route\ninto software.",
      intro:
        "My background is in film and cinematography. What drew me to software is the same kind of challenge: understand the required result, work inside the constraints, and find a practical way to get there.",
      // Newest first, as on a CV.
      items: [
        {
          title: "Applied AI training",
          detail: "AI Game Changer program at Brain · 2026",
          text: "Practical training in AI implementation and automation, completed while working at Callex.",
        },
        {
          title: "Film, cinematography & video",
          detail: "2022–2025",
          text: "BA in Film and Television at Tel Aviv University, with a focus on cinematography, alongside freelance work: director of photography on short films, shooting and editing social video for public and cultural institutions. Set work is planning around constraints, in a crew, with no spare time and no budget for mistakes.",
        },
        {
          title: "Cyber, systems & networks training",
          detail: "See Security International College · 2021–2022",
          text: "A ten-month cyber-security preparation program: systems, networks and information-security fundamentals, covering MCSA, CCNA, CCSA, Linux and Python, plus a Cyber SOC Analyst course in incident response and SOC operations.",
        },
        {
          title: "Technical support",
          detail: "Bezeq International · 2021",
          text: "Customer-facing technical service at an internet provider. Early practice in diagnosing a problem from a description and explaining the fix clearly.",
        },
      ],
      nextTitle: "The next role I’m looking for",
      next: "An entry-level role in AI implementation or backend development. I want to take the work I learned in production, with real clients, to the next stage: deeper professional knowledge and stronger capabilities.",
    },
    contact: {
      label: "04 / CONTACT",
      // Provisional English, pending Ilay's approval after the Hebrew round.
      title: "If this sounds\nright for your team.",
      intro:
        "If you’re building AI solutions and need a hard-working professional who learned the job in production, with real clients, and works well in a team, I’d be glad to hear from you.",
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
      labels: {
        experience: "Experience",
        work: "Selected work",
        background: "Background",
        tools: "Worked with",
        contact: "Contact",
        site: "Portfolio",
      },
    },
    footer:
      "AI solutions. A visual background. A growing engineering practice.",
    projects: [
      {
        slug: "hebrew-voice-agents",
        number: "A",
        category: "HEBREW VOICE AI",
        title: "Agents that hold up on the real call.",
        summary:
          "Building, testing and debugging Hebrew voice agents: from the client conversation to a brief, a prompt and its tools, until it works on a real call.",
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
              "A voice agent has to hold a real conversation in Hebrew and then do something useful with it: qualify a lead, book a slot, take an order, hand off to a person. A prompt that reads well proves none of that. The agent is judged on the call. Behind every agent is an engine, the platform that runs the calls. Another team builds it. The work described here is what runs on it: the brief, the prompt, the tools and the knowledge.",
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
        category: "AI-ASSISTED SOFTWARE DELIVERY",
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
          "Running outbound campaigns and reading their results: a review workflow that keeps a person on the verdict, the diagnosis of a failure in recording results, and a recovery of campaign data in SQL.",
        status: "Used across outbound campaigns",
        technologies: ["Scripts", "SQL", "LLM", "Human review"],
        diagram: {
          label: "FROM DATA TO DECISION",
          steps: ["Extract", "Structure", "Review", "Verify"],
          caption: "How to read a campaign without reading every transcript",
        },
        role: "For a period, the outbound campaign clients were my day-to-day: reading each campaign’s results, investigating agent and tool failures that kept coming back, applying the fixes that were on my side, and reporting to the client.",
        sections: [
          {
            title: "What was needed",
            paragraphs: [
              "An outbound campaign produces many transcripts in a few hours, and the client is waiting for a verdict. Reading everything through an LLM is expensive, and worse, it invites conclusions the data cannot support: a report can point at an agent problem or a tool problem, but a pattern a script flagged is still not a finding.",
              "The verdict decides real things: whether the agent’s opening changes, whether a tool gets fixed, whether the campaign keeps dialing. So the question is how to read a campaign without reading every transcript, and without letting a script or a model decide what happened to a person on a call.",
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
              "The question is not what to check in code and what to check by eye, but what code is allowed to run on at all. What the agent says is almost always the same: the same script lines, call after call, so counting on agent speech and metadata is legitimate. Customer speech is open-ended and corrupted by recognition errors, so it is never measured mechanically. A practical test: if a script produces a list of findings instead of counts, it has crossed the line.",
              "The limits are declared up front. The stored data has no turn timing, no interruption record and no hang-up cause, so a conclusion can say that the opening is weak, and never say why. And the platform’s own no-answer counter reads zero by design, because an unanswered lead goes back to the queue, so no-answer is measured from another source.",
            ],
          },
          {
            title: "Extract, structure, review, verify",
            paragraphs: [
              "Code does the extraction. A line the agent says on every call gets an identifier and appears once, with a count of how often it was said; customer utterances and agent deviations are kept verbatim. Then the reading goes in layers. A structural pass over every call, by a script, counts how far each conversation got: opening, pitch, closing question, which tool fired and on which turn. I then read every call that ended in an outcome, and every call where the closing question was asked but the call still ended without one, because those are the moments where a wrong judgment costs a lead. And a list of every distinct thing customers said, with how often, shows what the counts cannot: what people actually asked, and what the agent never handled.",
              "Only then does targeted LLM analysis run, on the cases that justify it, and I validate what it says. Metrics are grouped by who has to fix them, and a finding has to pass three gates before it counts: a verbatim quote, a cross-check against the call’s recorded outcome, and a mark of whether it was measured or assumed, because the absence of a tool event is not proof the tool did not fire.",
            ],
          },
          {
            title: "A morning with zero results",
            paragraphs: [
              "One morning a large campaign ran for hours, and the platform recorded zero results while the client’s sheet kept filling up. Everything looked broken at once: the agent, the tools, the engine. I narrowed it with a control group: another campaign on the same day, on the same engine, whose agent used the engine’s built-in tools. Its results were recorded. So the failure lived in the path of the custom tools. Someone else was responsible for that tool, so by the end of the day I sent them a short list of bugs ordered by severity, each with the call identifiers to reproduce it.",
              "The same day showed why a flag is not a finding. Many rows were marked as callback requests; when I read them against the customer’s actual words, most were not. And every removal request had been marked correctly, which is the first thing I checked, because a missed removal is the one mistake a campaign cannot afford. That day is where the version of campaign review described here came from.",
            ],
          },
          {
            title: "Rebuilding a campaign’s records",
            paragraphs: [
              "One campaign’s records had to be rebuilt from the sources that survived. I prepared the recovery in SQL so that it would run once, as a whole or not at all: a staging area, a single transaction, preconditions, checks before commit, a guard that prevents dialing any restored record, and a separate rollback file. What could not be recovered was documented as such, not filled in.",
            ],
          },
          {
            title: "Outcome",
            paragraphs: [
              "The workflow ran for as long as the outbound clients were my day-to-day: lightweight extraction first, deep analysis only where it was justified, and my own review of every finding before it reached the client. When the period ended, every client went to the next person with a handoff document: where things stood, what was blocking, and the next step.",
            ],
          },
        ],
        takeaway:
          "Use the simplest check that narrows the question, measure only what the data can actually answer, and keep a person on the verdict.",
      },
      {
        slug: "voice-agent-playbook",
        number: "D",
        category: "MY WORKING METHOD",
        title: "Measurements that lead to insights.",
        summary:
          "A private knowledge base of what I learn from testing Hebrew voice agents: 14 topic classes and 200+ dated insights, each tagged as measured or hypothesis, never deleted, only superseded.",
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
  },
  he: {
    name: "עילי גניס",
    title: "AI Solutions Engineer",
    summary:
      "AI Solutions Engineer עם ניסיון ייצור בסוכני־קול בעברית, באינטגרציות ובפיתוח תוכנה בעזרת סוכני קוד.",
    nav: {
      work: "עבודות",
      about: "ניסיון",
      contact: "יצירת קשר",
      cv: "PDF",
      label: "ניווט ראשי",
      language: "Switch to English",
      skip: "דילוג לתוכן",
    },
    hero: {
      eyebrow: "AI SOLUTIONS / SOFTWARE",
      lines: ["בעיות אמיתיות.", "פתרונות AI שעובדים."],
      intro:
        "אני עילי, AI Solutions Engineer. אני מתרגם צרכים עסקיים לסוכני־קול בעברית, אינטגרציות ותוכנה. אני מחפש את התפקיד הבא שלי, כדי להמשיך להתפתח מקצועית ולהתמודד עם אתגרים חדשים.",
      availability: "פתוח לתפקידי AI Solutions ופיתוח תוכנה",
      work: "לעבודות",
      contact: "דברו איתי",
      about: {
        label: "עליי",
        text: "תל אביב–בנגקוק, עבודה מרחוק. בן 27. עברית שפת־אם, אנגלית שוטפת.",
      },
      traits: {
        label: "איך אני בעבודה",
        items: ["חרוץ", "משקיע בעבודה", "לומד מהר", "עובד טוב בצוות"],
      },
      focusLabel: "במה אני עוסק",
      focus: ["סוכני־קול בעברית", "אינטגרציות", "פיתוח בעזרת AI"],
    },
    work: {
      label: "01 / עבודות נבחרות",
      title: "מה בניתי,\nואיך בדקתי איכות.",
      intro:
        "ארבע דוגמאות מהעבודה שלי בתפקיד הראשון בפרודקשן: מה היה הצורך, מה עשיתי ואיך זה עובד.",
      read: "לפרויקט המלא",
      confidentiality:
        "פרויקטים א–ג הם עבודה ב־Callex, בלי פרטים מזהים. התרשימים הם המחשה כללית ולא ארכיטקטורה פנימית.",
    },
    experience: {
      label: "02 / ניסיון",
      title: "ניסיון מהשטח,\nמול לקוחות אמיתיים.",
      company: "Callex",
      tagline: "סטארט־אפ של סוכני קול בעברית",
      period: "מאי 2026–היום",
      intro:
        "עבודה בחברה חדשה בצוות קטן, בניית תהליכים ושיטות תוך כדי העבודה.",
      items: [
        {
          title: "מצורך עסקי לדרישה טכנית",
          text: "שיחות אפיון עם לקוחות, שהופכות למסמך שאפשר לבנות ממנו: מה המטרה, מה נחשב הצלחה, מה הסוכן אוסף, מה הוא מוסר, ואיפה הוא עוצר.",
        },
        {
          title: "בנייה, בדיקה ותחקור",
          text: "סוכני קול בעברית לשירות נכנס ולקמפיינים יוצאים, שנבדקים תרחיש אחרי תרחיש לפני כל שיחה אמיתית. כל כשל נרשם עם השיחה, התור והסיבה. תקלות במנוע, הפלטפורמה שמריצה את השיחות, משוחזרות ומדווחות לצוות שבונה אותו.",
        },
        {
          title: "כלים ואינטגרציות",
          text: "כלי JavaScript שמחברים את הסוכן לעסק: לידים, בקשות הסרה ופעולות ב־CRM, דרך Webhooks ו־Google Apps Script.",
        },
        {
          title: "ניתוח קמפיינים ודאטה",
          text: "סקירת תוצאות של קמפיינים יוצאים, כשההחלטה נשארת אצל אדם, ושחזור נתוני קמפיין ב־SQL עם rollback מוכן מראש.",
        },
        {
          title: "פיתוח פול־סטאק",
          text: "סוכן WhatsApp לחברת משלוחים, שעלה לאוויר. בניית אתר החברה ב־Next.js, ותכנון והקמה של דשבורד לקוחות דו־לשוני לפלטפורמת סוכני הקול.",
        },
      ],
      ownershipTitle: "איך אני עובד עם סוכני קוד",
      ownership:
        "Claude Code ו־Codex כותבים חלק גדול מהקוד שלי. אני אחראי על הדרישות, על ההתנהגות, על הבדיקות ועל ההחלטה אם התוצאה באמת עונה על הצורך. הרגלי עבודה שפיתחתי: מסמך אחד לכל פרויקט שמגדיר מה המערכת אמורה לעשות, צ׳קליסט של בדיקות וסימולטור לפני כל עלייה לאוויר, ובדיקת שינויים במסד נתונים דמה לפני הטמעתם במסד האמיתי.",
    },
    capabilities: {
      label: "03 / כלים",
      title: "עבדתי עם.",
      groups: [
        {
          title: "שפות, פריימוורקים ופלטפורמות",
          items: [
            "JavaScript / TypeScript",
            "Python",
            "SQL",
            "Next.js",
            "Supabase",
            "Google Apps Script / Sheets",
            "Webhooks",
            "Git",
            "Claude Code",
            "Codex",
          ],
        },
      ],
    },
    background: {
      label: "03 / הרקע שלי",
      title: "דרך אחרת\nאל עולם הפיתוח.",
      intro:
        "הגעתי מעולם הקולנוע והצילום. מה שמשך אותי לפיתוח הוא אותו סוג של אתגר: להבין מה התוצאה הנדרשת, לעבוד בתוך האילוצים, ולמצוא דרך מעשית להגיע לשם.",
      // מהחדש לישן, כמו בקורות חיים.
      items: [
        {
          title: "הכשרה ב־AI יישומי",
          detail: "תוכנית AI Game Changer בחברת Brain\u200F · 2026",
          text: "הכשרה מעשית בהטמעת פתרונות AI ובאוטומציה, שהושלמה תוך כדי עבודתי ב־Callex.",
        },
        {
          title: "קולנוע, צילום ווידאו",
          detail: "\u20662022–2025\u2069",
          text: "תואר ראשון בקולנוע וטלוויזיה באוניברסיטת תל אביב, בדגש על צילום קולנועי, ובמקביל עבודה כפרילנסר: צלם ראשי בסרטים קצרים, צילום ועריכה של תוכן וידאו לרשתות החברתיות עבור מוסדות ציבור ותרבות. עבודה על סט היא תכנון סביב אילוצים, בתוך צוות, כשאין עודף זמן ואין תקציב לטעויות.",
        },
        {
          title: "הכשרה בסייבר, מערכות ורשתות",
          detail: "See Security International College\u200F · \u20662021–2022\u2069",
          text: "תוכנית הכנה לסייבר של עשרה חודשים: יסודות מערכות, רשתות ואבטחת מידע, בתכנים של MCSA, CCNA, CCSA, Linux ו־Python, וקורס Cyber SOC Analyst בתגובה לאירועי סייבר ובתפעול SOC.",
        },
        {
          title: "תמיכה טכנית",
          detail: "בזק בינלאומי · 2021",
          text: "שירות טכני ללקוחות בספקית אינטרנט. שם למדתי לאבחן בעיה מתוך תיאור של הלקוח, ולהסביר את הפתרון בצורה ברורה.",
        },
      ],
      nextTitle: "התפקיד הבא שאני מחפש",
      next: "תפקיד התחלתי בהטמעת AI או בפיתוח בקאנד. אני רוצה לקחת קדימה את העבודה שלמדתי בפרודקשן, מול לקוחות אמיתיים, לשלב הבא: העמקת הידע המקצועי ופיתוח יכולות גבוהות יותר.",
    },
    contact: {
      label: "04 / יצירת קשר",
      title: "אם זה נשמע\nמתאים לצוות שלכם.",
      intro:
        "אם אתם בונים פתרונות AI ויש לכם צורך באיש מקצוע חרוץ, שלמד את העבודה בפרודקשן מול לקוחות אמיתיים ועובד טוב בצוות, אשמח שתיצרו קשר.",
      email: "genisilay@gmail.com",
      copy: "העתקת הכתובת",
      copied: "הועתק",
      cv: "קורות חיים (PDF)",
      links: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/ilaygenis/",
        },
        { label: "GitHub", href: "https://github.com/IlayGenis" },
        {
          label: "וואטסאפ · ‎+972 52-383-8610",
          href: "https://wa.me/972523838610",
        },
      ],
    },
    case: {
      back: "עבודות נבחרות",
      label: "פרויקט",
      role: "התפקיד שלי",
      tools: "טכנולוגיות וכלים",
      takeaway: "השורה התחתונה",
      next: "הפרויקט הבא",
      all: "חזרה לכל העבודות",
      confidentiality:
        "אנונימי. התרשימים מציגים רעיונות כלליים, ללא ארכיטקטורה קניינית. לא נכללים קוד פנימי, פרומפטים, נתוני לקוחות או צילומי מסך.",
      contents: "בפרויקט הזה",
      contactLabel: "יצירת קשר",
      contactTitle: "עובדים על\nמשהו דומה?",
      contactIntro:
        "אם הצוות שלכם מתמודד עם בעיות כאלה, אשמח לדבר, וגם לשמוע איך אתם ניגשים אליהן.",
    },
    cv: {
      title: "קורות חיים",
      download: "הורדת PDF",
      back: "חזרה לאתר",
      labels: {
        experience: "ניסיון",
        work: "עבודות נבחרות",
        background: "הרקע שלי",
        tools: "עבדתי עם",
        contact: "יצירת קשר",
        site: "האתר",
      },
    },
    footer: "פתרונות AI. רקע חזותי. התפתחות הנדסית.",
    projects: [
      {
        slug: "hebrew-voice-agents",
        number: "א",
        category: "סוכני־קול בעברית",
        title: "סוכנים שעומדים במבחן השיחה האמיתית.",
        summary:
          "בנייה, בדיקה ותחקור של סוכני קול בעברית: מהשיחה עם הלקוח, דרך האפיון, הפרומפט והכלים, ועד שזה עובד בשיחה אמיתית.",
        status: "באוויר ב־Callex",
        technologies: [
          "JavaScript",
          "Webhooks",
          "Apps Script",
          "CRM API",
        ],
        diagram: {
          label: "מהלקוח לסוכן שעובד",
          steps: ["שיחה עם הלקוח", "אפיון", "פרומפט וכלים", "בדיקה בשיחה"],
          caption: "מאפיון הצורך ועד סוכן שנבדק בשיחה אמיתית",
        },
        role: "סוכני שירות נכנסים וסוכני קמפיינים יוצאים, מול הלקוח ומול צוות המנוע. חלק מהסוכנים בניתי מאפס לפי האפיון, וחלק קיבלתי קיימים, כולל הכלים שלהם, והבאתי אותם לשיחה שעובדת. כשהתקלה לא בפרומפט, התחקור היה שלי.",
        sections: [
          {
            title: "הצורך",
            paragraphs: [
              "סוכן קול צריך לנהל שיחה אמיתית בעברית ואז לעשות איתה משהו מועיל: לסנן ליד, לקבוע תור, לקלוט הזמנה, להעביר לאדם. פרומפט שנקרא טוב לא מוכיח שום דבר מזה. הסוכן נשפט בשיחה. מאחורי כל סוכן יש מנוע, הפלטפורמה שמריצה את השיחות. צוות אחר בונה אותו. העבודה שמתוארת כאן היא מה שרץ עליו: האפיון, הפרומפט, הכלים והידע.",
              "העסקים שונים מאוד זה מזה: ביטוח, פיננסים והחזרי מס, שימור ומכירות בתקשורת ובטלוויזיה, כושר, מכשירי שמיעה, נדל״ן, רכב, ייעוץ עסקי, מסעדות והזמנות, בריאות, תיירות וקמעונאות. לכל סוכן יש תנאי הצלחה משלו, נקודות עצירה משלו וכלים משלו, ובצוות קטן בחברה חדשה לא הייתה שיטה מוכנה להגיע מהאפיון לסוכן שעומד במבחן של שיחה אמיתית. מה שמתואר כאן הוא השיטה שנבנתה מזה, סוכן אחרי סוכן.",
            ],
          },
          {
            title: "משיחת האפיון למסמך שאפשר לבנות ממנו",
            paragraphs: [
              "כל סוכן מתחיל בשיחת אפיון שאני עושה עם הלקוח. המסמך שאני כותב ממנה צריך לעמוד בפני עצמו, כי מי שבונה ממנו הוא לא פעם מישהו אחר, או אני עצמי חודש אחר כך. החלקים שחייבים להיות בו הם אלה שפרומפט לא יכול לנחש לבד: מה נחשב הצלחה בשיחה הספציפית הזאת, מה אסור לסוכן להבטיח, מתי הוא מעביר לאדם, ואילו שאלות עדיין פתוחות. תנאי ההצלחה הוא גם מה ששיחות הבדיקה בודקות אחר כך, ולכן הוא מנוסח כך שאפשר לבדוק אותו.",
              "המסמך ממשיך לחיות אחרי העלייה לאוויר. בקשות של הלקוח נרשמות כפריטים ממוספרים, והחלטות מתועדות עם הנימוק שלהן. כשלקוח עובר לידיים אחרות הוא עובר עם מסמך מסירה: מה קרה לאחרונה, מה חוסם, מה הצעד הבא ומי אחראי עליו. הסעיף האחרון בו הוא מה שהמסמך עצמו לא יודע, כי מי שבא אחריי צריך לדעת גם מה לא נמסר לו.",
            ],
          },
          {
            title: "איפה הפרומפט נגמר ואיפה הקוד מתחיל",
            paragraphs: [
              "השפה והכוונה שייכות למודל. עובדות, מצב, וכל מה שאסור שיקרה, שייכים לקוד. המבחן הכי ברור לקו הזה היה סוכנת שירות נכנסת של מכון כושר שעברה אליי. התפקיד שלה היה לפעול ב־CRM של המכון ולא רק לדבר: להציג את לוח השיעורים העדכני, לאתר מתאמן לפי מספר הטלפון, לרשום ולבטל שיעורים ושיעורי ניסיון, לחדש או להקפיא מנוי, לשלוח טופס ביטול דיגיטלי. התחלתי מה־API. מדדתי מה התיעוד אומר מול מה שהשרת באמת עושה, משכתי את קטלוגי המזהים לקונפיגורציה, והצלבתי את לוח השיעורים החי מול המסמכים של המכון עצמו. הפערים חזרו ללקוח כהחלטות, ואחת מהן מתחה את הקו הראשון: לוח השיעורים מגיע מה־CRM בזמן השיחה, ולעולם לא מהמסמכים שהפרומפט קיבל.",
              "הידע הלך באותה דרך. את ספר הידע של המכון ואת קובצי ה־PDF בניתי מחדש כמקורות ידע ממוקדי שאילתה למאגר הידע של המנוע: כותרות במילים שהלקוחות משתמשים בהן, מקור נפרד למה שהמכון לא מציע, ורשימה מתוארכת של עדכוני מדיניות שאושרו. בדיקת אחזור ב־SQL מריצה את השאלות הצפויות ובודקת שכל אחת מחזירה את המקור הנכון, כדי שתשובה שגויה תיתפס לפני שהיא נאמרת בשיחה. מה שמאגר הידע הזה עשה אחר כך בשיחה אמיתית, בסעיף 06.",
              "את הכלים עצמם כתבתי בעזרת סוכני קוד. עבודת התכנון הייתה להחליט, לכל כלי, באיזה צד של הקו יושבת כל התנהגות. הפרומפט אחראי על מה שהסוכנת אומרת לפני שהיא קוראת לכלי, ואיך היא מסבירה כישלון. הקוד אחראי על כמה קריאות לכלי מותר לתשובה אחת של הסוכנת להוציא, לפי מה קריאה חוזרת נחשבת כפילות, ועל הכלל שמשותף גם לכלי הלידים של הקמפיינים היוצאים, שבנויים על Webhooks ו־Apps Script: הליד נשלח ברגע ההסכמה, ואם אחר כך נוסף מועד לחזרה, אותה רשומה מתעדכנת לפי מזהה השיחה במקום שייווצר ליד כפול. פעולה נחשבת גמורה רק כשמערכת היעד מאשרת אותה, וניסיון שנכשל נשאר פתוח לניסיון חוזר במקום להיחסם ככפילות. הסוכנת היוצאת של אותו מכון שוכפלה מהנכנסת, עם כלים פרטיים משלה: מסירת ליד ומשימת מעקב ב־CRM, והסרה שמסומנת כליד אבוד.",
              "הקו זז בעקבות שני מקרים. הראשון קטן: כלל בפרומפט להציע רק את הימים הקרובים בלוח השיעורים לא החזיק, והתקרה עברה לקוד. השני הראה מה הסיכון. בסבב בדיקות המודל המציא מזהה של שיעור, שלוש ספרות כשלאמיתיים יש שמונה. זה קרה בסביבת הבדיקות של הפלטפורמה, בלי מנוי אמיתי מאחורי השיחה, אז שום דבר לא נכתב, וה־CRM ממילא לא היה מקבל מזהה כזה. אבל שלב האישור של המנוע, שאמור לעצור כתיבה כזאת, לא נדלק בערוץ הבדיקה בכלל, והמודל הוכיח שהוא מסוגל להמציא מזהה. אחרי זה בניתי את ההגנות בקוד: מזהה שיעור מתקבל רק אם כלי הלוח החזיר אותו באותה שיחה, מזהה לקוח רק אם החיפוש החזיר אותו, ושדות פרופיל נכתבים רק כשהם ריקים. הפרומפט שמר על השפה. מה שחייב להתקיים עבר לקוד.",
              "מקרה שלישי הגיע עם מעבר למודל של חברה אחרת. הוא נשמע יותר אנושי והגיב מהר יותר, אבל הדיוק שלו מול כלים היה הרבה פחות טוב: הוא רשם לידים והסרות כשלא היה צריך, וגם לא רשם ליד או הסרה אחרי שאמר בעצמו שהוא מבצע את זה. הצעתי מבנה של שני מודלים: אחד מנהל את השיחה, ושני, מדויק יותר מול כלים, עוקב אחרי ההקשר ומחליט אם זה הרגע לירות כלי או לבטל. מה שנכנס בסוף הוא אפשרות להפעיל מודל כזה בתוך הכלי עצמו, כשער שחוסם לידים והסרות מזויפים.",
            ],
          },
          {
            title: "ספציפית, בעברית",
            paragraphs: [
              "המרת טקסט לדיבור בעברית צריכה לקסיקון הגייה, והלקסיקון צריך אימות. התמליל הרגיל מציג את הטקסט של הסוכן לפני התיקון. הלוג כן מראה את המילה שנרשמה ל־TTS להגיד, אבל לא איך היא נשמעה. אם התיקון באמת נשמע כמו המילה הנכונה יודעים רק באוזן, בשיחה אמיתית. כל מילה שתוקנה מאושרת ככה ונרשמת, לצד רשימה נפרדת של מועמדות שעדיין לא אומתו.",
              "מעבר לספק קול חדש דורש אימות מחדש של הכול, כי הדיוק של כל ספק מול העברית שונה: מילים שספק אחד לא הצליח לבטא כמו שהן כתובות, השני מבטא נכון, ולהפך. בעיות שלא היו קיימות יכולות לצוץ, ובעיות קיימות יכולות להיעלם. בפועל המעבר עשה שני דברים הפוכים בשני סוכנים. באחד, כללי ההגייה מתו בשקט: 13 מתוך 15 לא עשו כלום, וכל מילה שתוקנה הייתה צריכה אימות מחדש. באחר, הלקסיקון של הספק הישן לא הפסיק בכלל. שמעתי את זה בשיחה, ואז עברתי בלוג על המשפטים של הסוכן מכמה שעות של שיחות: כלל אחד, שנכתב כדי לתקן מילה אחת, בלע מילים שלמות בעברית ארבעים פעם. זה היה כתוב שם, אבל שום דבר לא התריע על זה. משני המקרים כתבתי צ׳קליסט אחד למעבר בין ספקים: לתעד את הגדרות הקול וההגייה לפני המעבר, לאמת מחדש באוזן כל תיקון אצל הספק החדש, ולדווח לצוות המנוע על מה שהלוג לא יכול להראות.",
              "התאמת מגדר עוברת דרך כמה שכבות, מהאופן שבו המתקשר מזוהה ועד מה שהקול אומר בסוף, ומקבלת בדיקות משלה, כי פנייה במגדר הלא נכון יכולה להיות בלתי נראית בתמליל וברורה מאוד בשיחה. והפרומפט נכתב לעברית מדוברת, לא כתובה: השפה שבן אדם מדבר בה בטלפון, לא זו שהוא כותב בה בטופס.",
            ],
          },
          {
            title: "בדיקה בשיחה",
            paragraphs: [
              "יחידת הבדיקה היא שיחה, לא טסט. התרחישים באים מהאפיון. קודם תנאי ההצלחה, ואחריו כל מה שיכול למשוך את השיחה ממנו: מקרי קצה, מתקשר שמחליף נושא, אחד שמקלל, אחד שמבקש משהו שהסוכן חייב לסרב לו. את הפרומפט בודקים מול מה שהוא נכתב לעשות, לא מול איך שהוא נקרא. לכל שיחה מתוכננת יש שאלה מרכזית אחת, ולצידה בדיקות קטנות יותר בדרך. להצלחה ארבע דרגות: מה הסוכן אמר, אם הכלי באמת נורה, אם הוא נורה עם התוכן הנכון, ואם הרשומה באמת נחתה במערכת היעד. תרחיש נכתב בדרגה הגבוהה ביותר שהוא מאפשר, ותרחיש שאי אפשר לשפוט מתוך הלוג הוא לא הערכה.",
              "סבבי preview בטקסט בלבד, המודל בלי הקול ובלי קו הטלפון, הם מסנן לתיקונים מהירים. נחשבת רק שיחה חיה, ו״מאומת״ דורש מזהה שיחה. כל שיחה מניבה גם מדידות רקע בלי עלות נוספת: זמן עד התגובה הראשונה, התאמת מגדר, קטיעות.",
              "הממצאים כמעט אף פעם לא גרים איפה שהם מופיעים בהתחלה. סירוב שגוי, מתקשרת שנדחתה מסיבה רפואית, שארבעה ניסוחי פרומפט לא הזיזו, נפתר בקטע אחד במאגר הידע, שנמצא בבדיקת אחזור במקום עוד עריכה של הפרומפט. שער רפואי שנדלק על המילה ״בריאות״ תוקן בשינוי כותרת ובהוצאת המילה מהפרומפט לגמרי. ושני ממצאי מגדר שנראו שיטתיים ביטלתי אחרי שבדקתי מול הקוד של המנוע עצמו וראיתי שערוץ הבדיקה הוא שיצר אותם. איפה שהתקלה גרה קובע מה התיקון, והבירור הזה הוא עבודה בפני עצמה.",
              "בסוכני הקמפיינים היוצאים הסוכן הוא שמתקשר, והבדיקה מתחילה ממה שהוא צריך לדעת: מי הלידים, מה מטרת השיחה, מה גבולות ההצעה, ומתי לסיים, למשל כשעונה אדם אחר או אחרי סירוב חוזר. אין כאן העברה לאדם; רוב השיחות נגמרות ברישום פרטים לחזרה. לכן התרחישים הם לא מקרי שירות אלא סוגי אנשים שעונים לטלפון, כולל ההבדל בין ״לא מעוניין״ לבקשה להסרה מהרשימה, שמקבלים טיפול שונה. וגם כאן לא הכול בפרומפט: תא קולי לא תמיד אפשר לזהות משם, כי בחלק מהמקרים המנוע משמיע משפטים קבועים מהקונפיגורציה לפני שהמודל מעורב, וגם כשהמודל מעורב הוא לפעמים מפספס את הקשר בין מה שכתוב לו בפרומפט לבין מה שנשמע בפועל, לכן חייב מנגנון זיהוי נוסף במנוע.",
              "כשלקוח התלונן על הסוכנת שלו, ניתחתי עשר שיחות אמיתיות אחת־אחת. לכל תלונה מצאתי סיבה שאפשר להצביע עליה, שדה בקונפיגורציה של כלי, שורה שהפרומפט חייב את הסוכנת להגיד מילה במילה, או תקלה במנוע, במקום לנחש מה לא בסדר.",
            ],
          },
          {
            title: "בתוך המנוע",
            paragraphs: [
              "המנוע הוא הפלטפורמה שמריצה את השיחות: הטלפוניה, הדיבור לשני הכיוונים, והלולאה שמזינה את המודל בכל תור. צוות אחר בונה אותו, וכשתקלה היא לא בפרומפט ולא בכלי, היא שם. כדי להבדיל ביניהן נכנסתי לקוד של המנוע בשלבים, כשסוכני קוד קוראים וכל שלב עובר ביקורת ידנית, ויצאתי עם מפה: מה המודל באמת רואה בכל תור, אילו שערים הוא לא רואה לעולם, איך כל מפתח קונפיגורציה באמת נערך וכמה מסוכנת עריכה שגויה שלו, ואיזו בדיקה מריצים ראשונה לכל תסמין.",
              "המפה גם הכריעה מה שייך למודל ומה שייך למנוע. המודל מנהל את השיחה. המנוע הוא הבעלים של האמת: עובדות ומצב מוזרקים בקוד בכל תור, שערים שאסור לחצות נבדקים בקוד, ושער שחוסם מחזיר למודל מה לעשות עכשיו, לא רק שהפעולה נחסמה. זה אותו קו כמו בכלים של ה־CRM, שכבה אחת למטה.",
              "המקרה הכי ברור היה מאגר הידע מסעיף 03. בשני סוכנים, של מכון הכושר ושל מרכז השמיעה, התשובות התחילו לסתור את הפרומפט, בלי שום שינוי בפרומפט. את הסיבה מצאתי במנוע: הוא הזריק ארבעה קטעים מהמאגר לכל תור, רלוונטיים או לא, והלא־רלוונטיים הרעילו את ההקשר. בדיקת האחזור לא יכלה לראות את זה, כי היא בודקת רק ששאלה ידועה מחזירה את המקור הנכון. העברתי את העובדות שהסוכן חייב לדעת בחזרה לפרומפט וכיביתי את מאגר הידע כברירת מחדל, שני הסוכנים חזרו להיגיון, ומזה יצא כלל: שיחה שמפסיקה להיות הגיונית נבדקת קודם על הזרקת ידע, לפני שמישהו נוגע בפרומפט.",
              "תקלות מנוע אני מתעד עם סטטוס וכלל טריאז׳: תסמין שיחזור גם בסוכן אחר הוא תקלת מערכת, וכל מה שספציפי לניסוח של סוכן אחד נשאר אצל אותו סוכן. כל פריט פתוח מקבל תוכנית אימות קצרה, סולם בדיקות מקריאת הקוד ועד שיחה חיה, ומגיע לצוות המנוע כדוח שאפשר לשחזר.",
            ],
          },
          {
            title: "התוצאה",
            paragraphs: [
              "סוכנים וכלים בשימוש עסקי אמיתי, ושיטת עבודה שלא הייתה קיימת כשהתחלתי: מה שלקוח אחד מלמד אני כותב ומתייג, ומשתמש בו אצל הלקוח הבא. השיטה הזאת, עם התובנות שלה והתאריכים שלהן, היא הפרויקט הרביעי.",
              "כשלקוח עובר לידיים אחרות, עובר איתו גם מצב הבדיקות שלו. בסוכנת של מכון הכושר, חלק מהכלים עוד לא רצו בשיחה חיה כשמסרתי אותה, ומסמך המסירה אומר אילו, כי כלי שנכתב אבל אף פעם לא נשמע בשיחה הוא לא גמור.",
            ],
          },
        ],
        takeaway:
          "תיקון מועיל מתחיל בידיעה איפה התקלה גרה: פרומפט, כלי או מנוע. כל אחד דורש תחקור משלו, והתוצאה עדיין צריכה שיחה אמיתית.",
      },
      {
        slug: "delivery-operations",
        number: "ב",
        category: "פיתוח תוכנה בעזרת AI",
        title: "תפעול משלוחים במקום אחד.",
        summary:
          "מערכת תפעול ב־WhatsApp לחברת משלוחים ארצית: קליטת לקוחות, הזמנות ותיאום שליחים. נבנתה בעזרת סוכני קוד ועלתה לאוויר.",
        status: "עלתה לאוויר",
        technologies: ["Python", "TypeScript", "Supabase"],
        diagram: {
          label: "המסלול של משלוח",
          steps: ["לקוח", "הזמנה", "תיאום", "שליח"],
          caption: "כל הודעה הופכת לרשומה: לקוח, הזמנה, שליח, סטטוס",
        },
        role: "הדרישות, התנהגות המוצר, התהליכים והבדיקות, לבד מההתחלה עד הסוף. את רוב הקוד כתבו סוכני קוד; אני החלטתי מה המערכת צריכה לעשות ובדקתי אם היא עושה את זה, קודם בסימולטור ואז על המספר האמיתי של החברה.",
        sections: [
          {
            title: "הצורך",
            paragraphs: [
              "חברת משלוחים ארצית הייתה צריכה את קליטת הלקוחות ואת תפעול השליחים שלה במערכת אחת מחוברת. כל המערך של העסק כבר רץ על WhatsApp, הלקוחות והשליחים כאחד, אז המערכת הייתה צריכה להתלבש על עסק פעיל, לא להחליף אותו.",
              "ההיקף היה רחב יותר מבוט צ׳אט: רישום לקוחות חדשים, קליטת הזמנות, רישום שליחים על גבי מאגר שליחים קיים, ודשבורד תפעולי. החלק הקשה הוא לא הצ׳אט. הוא שכל הודעה צריכה להפוך לרשומה שהתפעול יכול לפעול לפיה: לקוח, הזמנה, שליח, סטטוס.",
            ],
          },
          {
            title: "משלוח אחד, מההתחלה עד הסוף",
            paragraphs: [
              "לקוח כותב ב־WhatsApp מה לשלוח ולאן. אם המספר מוכר, הבוט לוקח את ההזמנה; אם לא, הוא רושם קודם את הלקוח. ההזמנה מופצת בקבוצות ה־WhatsApp של השליחים, השליחים פונים בפרטי, ולמערכת יש חמש דקות לבחור את השליח הרשום המתאים ביותר: זמן ההגעה לאיסוף, סוג הרכב, ודירוג שנבנה ממה שלקוחות אמרו על המסירות הקודמות שלו.",
              "שליח שהמערכת לא מכירה מתבקש לפרטים, לפרטי הרכב ולצילום תעודת זהות לפני שהוא מקבל משהו. השליח שנבחר מקבל את הפרטים בפרטי, והלקוח מקבל הודעה בכל עדכון סטטוס שהשליח מדווח. ללקוחות שמעדיפים בן אדם הבוט לא עונה בכלל: בעל העסק מזין את ההזמנות שלהם בדשבורד, והן יוצאות לקבוצות באותה דרך.",
            ],
          },
          {
            title: "תהליכים לפני קוד",
            paragraphs: [
              "את התהליכים ואת ההתנהגות הרצויה כתבתי לפני שורת קוד אחת, כדי שיהיה מול מה לשפוט את המימוש. קבעתי אותם יחד עם בעל העסק, מתוך הניסיון שלו באיך שהפעילות התנהלה לפני המערכת, והם היו צריכים להתאים לאיך שהתפעול באמת עובד, עד לפרטים כמו התאמת גודל המשלוח לסוג הרכב שיכול לשאת אותו.",
              "שכבת הנתונים הייתה Supabase. עבדתי על הסכמות, הטבלאות והאינדקסים, בחרתי את האינדקסים לפי השאילתות שהמערכת באמת מריצה, וכל שינוי סכמה יצא כמיגרציה ממוספרת, קדימה בלבד: שינוי שכבר יצא לא נערך אף פעם, רק מגיע אחריו הבא. הלוגיקה עצמה נכתבה ב־Python וב־TypeScript.",
            ],
          },
          {
            title: "בנייה עם סוכני קוד",
            paragraphs: [
              "את רוב המערכת כתבו סוכני קוד. לכל פיצ׳ר אותה לולאה: להגדיר במסמך התהליכים מה הוא צריך לעשות, לתת לסוכן לממש, ואז לקרוא את התוצאה ולהריץ אותה, לא כדי להתפעל מהקוד אלא כדי למצוא איפה הוא עושה משהו שהתהליך לא אמר. מה שהסוכן לא יכול לדעת, הכללים של התפעול וההחלטות הטכניות בין אפשרויות, נשאר אצלי.",
              "הדשבורד התפעולי היה חלק מאותו מוצר ועבר את אותה לולאה. דרכו יש לבעל העסק שליטה מלאה על התפעול: להפעיל ולכבות את הבוט, לבטל את המענה שלו למספר מסוים, לחסום שליח ברשימה שחורה, להזין משלוח בעצמו, לחשב את החובות החודשיים של הלקוחות שלו אליו, ולשנות נתונים שהתהליכים נשענים עליהם, כמו תמחור לפי קילומטר וסוג רכב.",
            ],
          },
          {
            title: "מה שהמודל מבטיח, הקוד בודק",
            paragraphs: [
              "מה שהפרויקט הזה הראה הכי ברור: מודל יכול להבטיח משהו ולא לבצע אותו. הוא אומר ללקוח שההזמנה נקלטה, והרשומה מאחוריה פשוט לא קיימת. לכן שום דבר שחשוב לא נשען על המילה של המודל. לכל הבטחה שהוא נותן בניתי שער בקוד שבודק אם הדבר באמת קרה, ומתקן אם לא.",
              "דבר שאפשר ב־WhatsApp ולא בשיחת קול: מסלול קבוע מראש לכל סיטואציה. לכל תהליך יש גרסה שרצה בלי המודל בכלל, צעד אחרי צעד, כך שאם ה־API של המודל נופל, השיחה ממשיכה על מסילה במקום להיעצר. בקול אין את האפשרות הזאת: שיחה מדוברת אי אפשר לשים על מסילה בלי שהיא תהפוך לתפריט.",
            ],
          },
          {
            title: "קודם סימולטור, אחר כך מספר אמיתי",
            paragraphs: [
              "הבדיקות התחילו בסימולטור שבניתי, שבו אפשר להריץ כל תהליך מקצה לקצה בלי טלפון, בלי לקוח ובלי שליח, ונשארו שם עד שההתנהגות התאימה למסמך התהליכים. רק אז הן עברו למספר אמיתי של החברה, ואותם תהליכים רצו שוב כשיחות WhatsApp אמיתיות. כל מה שנשבר נשפט מול המסמך, לא מול מה שהקוד במקרה עשה.",
            ],
          },
          {
            title: "התוצאה",
            paragraphs: [
              "המערכת עלתה לאוויר ואיחדה קליטת לקוחות, קליטת הזמנות ותיאום שליחים למוצר אחד, על WhatsApp, שבו כל הודעה הופכת לרשומה שהתפעול יכול לפעול לפיה. היא נמסרה שלמה: שכבת הנתונים, הלוגיקה, השיחות והדשבורד. מאותו שלב בעל העסק כבר לא ניהל כל הזמנה בעצמו מהטלפון: הבוט טיפל בהזמנות, והוא רק השגיח מהדשבורד.",
            ],
          },
        ],
        takeaway:
          "מודל יכול להבטיח משהו ולא לבצע אותו. כל מה שחשוב נבדק בקוד, ולכל מה שחייב לעבוד תמיד יש מסלול שלא צריך את המודל בכלל.",
      },
      {
        slug: "campaign-review",
        number: "ג",
        category: "קמפיינים יוצאים",
        title: "בקרת קמפיינים בעזרת קוד ו־AI.",
        summary:
          "ניהול קמפיינים יוצאים וניתוח התוצאות: תהליך סקירה שבו ההכרעה נשארת אצל אדם, אבחון של כשל ברישום תוצאות, ושחזור נתוני קמפיין ב־SQL.",
        status: "שימש בקמפיינים היוצאים",
        technologies: ["סקריפטים", "SQL", "LLM", "בדיקה אנושית"],
        diagram: {
          label: "מהנתונים להחלטה",
          steps: ["חילוץ", "מבנה", "סקירה", "אימות"],
          caption: "איך קוראים קמפיין בלי לקרוא כל תמליל",
        },
        role: "במשך תקופה לקוחות הקמפיינים היוצאים היו היום־יום שלי: לקרוא את התוצאות של כל קמפיין, לתחקר כשלים בסוכנים ובכלים שחזרו על עצמם, לתקן את מה שהיה בצד שלי, ולדווח ללקוח.",
        sections: [
          {
            title: "הצורך",
            paragraphs: [
              "קמפיין יוצא מייצר הרבה תמלילים בכמה שעות, והלקוח מחכה להכרעה. לקרוא את הכול דרך LLM זה יקר, וגרוע מזה, זה מזמין מסקנות שהדאטה לא יכולה לתמוך בהן: דוח יכול להצביע על בעיה בסוכן או על בעיה בכלי, אבל דפוס שסקריפט סימן הוא עדיין לא ממצא.",
              "ההכרעה הזאת קובעת דברים אמיתיים: האם הפתיח של הסוכן משתנה, האם כלי מתוקן, האם הקמפיין ממשיך לחייג. אז השאלה היא איך קוראים קמפיין בלי לקרוא כל תמליל, ובלי לתת לסקריפט או למודל להחליט מה קרה לבן אדם בשיחה.",
            ],
          },
          {
            title: "להריץ קמפיין",
            paragraphs: [
              "לפני השיחה הראשונה יש רשימה ותהליך. רשימת החיוג נבנית מהקבצים של הלקוח: יורד ממנה כל מי שביקש הסרה, מכל מקור שיש בו הסרות, ומספרים לא תקינים יוצאים לקובץ נפרד. באחד המעברים האלה מצאתי באג במנוע, הפלטפורמה שמריצה את השיחות: בקשת הסרה שנאמרה בקול בשיחה ולא נרשמה. הרשימות עצמן עוברות בקרת איכות בעזרת סוכני קוד: כל רשומה נבדקת מול המקור, שמות פרטיים מתוקנים, והרשומות שנפסלו נסקרות לשני הכיוונים לפני שמחייגים למישהו.",
              "התהליך שכתבתי ללקוחות חדשים של שיחות יוצאות הולך משיחת האפיון ועד שהלקוח מפעיל לבד, עם שלושה שערים לפני כל קמפיין פיילוט: בדיקה של מי שאחראי על הלקוח אחרי סבב שיחות בקרה, אישור הלקוח, ובדיקה מקצה לקצה של כל החיבורים. אחר כך הפיילוט גדל בסבבים, עם תיקונים בין סבב לסבב ובהשגחה שלי, עד שהסוכן עבר מספיק פיילוטים ועובר לשליטת הלקוח.",
              "כשלקוח רצה לדעת איזה תסריט עובד, ארבעה וריאנטים של אותו סוכן רצו זה לצד זה לתוך גיליון קליטה אחד, מנותבים לפי סוכן ולפי סוג תוצאה, עם טאב הסגר לכל מה שהניתוב לא זיהה, כדי ששום דבר לא ינוחש. הווריאנטים קיבלו עותק פרטי של כלי ההסרה, כדי שהניסוי לא ייגע בכלי שמשותף עם סוכן חי.",
            ],
          },
          {
            title: "מה סופרים בקוד, ומה לא",
            paragraphs: [
              "השאלה היא לא מה בודקים בקוד ומה בודקים בעיניים, אלא על מה מותר לקוד לרוץ בכלל. מה שהסוכן אומר חוזר על עצמו כמעט תמיד: אותן שורות תסריט, שיחה אחרי שיחה, ולכן ספירה על דיבור הסוכן ועל מטא־דאטה היא לגיטימית. דיבור הלקוח פתוח ומשובש בשגיאות זיהוי, ולכן הוא אף פעם לא נמדד מכנית. מבחן מעשי: אם סקריפט מוציא רשימת ממצאים במקום ספירות, הוא עבר את הקו.",
              "המגבלות מוצהרות מראש. בדאטה השמורה אין תזמון תורים, אין רישום קטיעות ואין סיבת ניתוק, ולכן מסקנה יכולה לומר שהפתיח חלש, ולעולם לא למה. ומונה ה״לא נענו״ של הפלטפורמה מציג אפס בכוונה, כי ליד שלא נענה חוזר לתור, אז אי־מענה נמדד ממקור אחר.",
            ],
          },
          {
            title: "חילוץ, מבנה, סקירה, אימות",
            paragraphs: [
              "הקוד עושה את החילוץ. שורה שהסוכן אומר בכל שיחה מקבלת מזהה ומופיעה פעם אחת, עם ספירה של כמה פעמים נאמרה; אמירות של לקוחות וחריגות של הסוכן נשמרות מילה במילה. ואז הקריאה הולכת בשכבות. מעבר מבני על כל שיחה, בסקריפט, סופר עד לאן כל שיחה הגיעה: פתיח, פיץ׳, שאלת הסגירה, איזה כלי נורה ובאיזה תור. אחר כך אני קורא כל שיחה שנגמרה בתוצאה, וכל שיחה שבה שאלת הסגירה נשאלה ובכל זאת השיחה נגמרה בלי תוצאה, כי אלה הרגעים שבהם שיפוט שגוי עולה בליד. ורשימה של כל אמירה ייחודית של לקוחות, עם כמה פעמים נאמרה, מראה מה שהספירות לא יכולות: מה אנשים באמת שאלו, ומה הסוכן אף פעם לא טיפל בו.",
              "רק אז רץ ניתוח LLM ממוקד, על המקרים שמצדיקים אותו, ואני מאמת מה שהוא אומר. המדדים מקובצים לפי מי שצריך לתקן אותם, וממצא חייב לעבור שלושה שערים לפני שהוא נספר: ציטוט מילה במילה, הצלבה מול התוצאה שנרשמה לשיחה, וסימון אם הוא נמדד או הונח, כי היעדר אירוע של כלי הוא לא הוכחה שהכלי לא נורה.",
            ],
          },
          {
            title: "בוקר עם אפס תוצאות",
            paragraphs: [
              "בוקר אחד קמפיין גדול רץ במשך שעות, והפלטפורמה רשמה אפס תוצאות בזמן שהגיליון של הלקוח המשיך להתמלא. הכול נראה שבור בבת אחת: הסוכן, הכלים, המנוע. צמצמתי את זה עם קבוצת ביקורת: קמפיין אחר מאותו יום, על אותו מנוע, שהסוכן שלו השתמש בכלים המובנים של המנוע. התוצאות שלו נרשמו. אז התקלה גרה במסלול של הכלים המותאמים. על הכלי הזה היה אחראי מישהו אחר, אז עד סוף היום העברתי לו רשימה קצרה של באגים לפי חומרה, כל אחד עם מזהי השיחה כדי לשחזר אותו.",
              "אותו יום הראה גם למה דגל הוא לא ממצא. הרבה שורות סומנו כבקשות לחזור; כשקראתי אותן מול המילים של הלקוח עצמו, רוב הבקשות לא היו כאלה. וכל בקשות ההסרה סומנו נכון, וזה הדבר הראשון שבדקתי, כי הסרה שפוספסה היא הטעות האחת שקמפיין לא יכול להרשות לעצמו. מהיום הזה יצאה הגרסה של סקירת הקמפיין שמתוארת כאן.",
            ],
          },
          {
            title: "בנייה מחדש של רשומות קמפיין",
            paragraphs: [
              "את הרשומות של קמפיין אחד היה צריך לבנות מחדש מהמקורות ששרדו. הכנתי את השחזור ב־SQL כך שירוץ פעם אחת, כולו או כלום: אזור staging, טרנזקציה אחת, תנאי קדם, בדיקות לפני commit, הגנה שמונעת חיוג לכל רשומה משוחזרת, וקובץ rollback נפרד. מה שלא ניתן היה לשחזר תועד ככזה, ולא הושלם בניחוש.",
            ],
          },
          {
            title: "התוצאה",
            paragraphs: [
              "התהליך רץ כל עוד לקוחות הקמפיינים היוצאים היו היום־יום שלי: קודם חילוץ קל, ניתוח מעמיק רק איפה שהיה מוצדק, ואני על כל ממצא לפני שהגיע ללקוח. כשהתקופה נגמרה, כל לקוח עבר למי שבא אחריי עם מסמך מסירה: איפה הדברים עומדים, מה חוסם, ומה הצעד הבא.",
            ],
          },
        ],
        takeaway:
          "מתחילים בבדיקה הפשוטה ביותר שמצמצמת את השאלה, מודדים רק מה שהדאטה באמת יכולה לענות עליו, ומשאירים אדם על ההכרעה.",
      },
      {
        slug: "voice-agent-playbook",
        number: "ד",
        category: "שיטת העבודה שלי",
        title: "מדידות שמובילות לתובנות.",
        summary:
          "מאגר ידע פרטי של מה שלמדתי מבדיקות של סוכני קול בעברית: 14 נושאים ויותר מ־200 תובנות מתוארכות, כל אחת מסומנת כמדודה או כהשערה. תובנה לא נמחקת, רק מוחלפת בחדשה.",
        status: "אישי, פרטי, בשימוש יומי",
        technologies: ["Markdown", "Git", "Claude Code", "Evals"],
        diagram: {
          label: "חייה של תובנה",
          steps: ["תצפית", "רישום", "תיוג", "החלפה"],
          caption: "מתצפית בשיחה ועד תובנה מתויגת, עם המדידה שמאחוריה",
        },
        role: "מחבר ומתחזק.",
        sections: [
          {
            title: "הצורך",
            paragraphs: [
              "תובנות מבדיקות הולכות לאיבוד. עיקרון בלי המדידה שמאחוריו נגזר מחדש בסוכן הבא, מתווכחים עליו, ולפעמים הופכים אותו בטעות. הכלל שנשבר הכי הרבה בפרומפטים קוליים, איך שורות דיבור מצוטטות לסוכן בתוך הפרומפט, הוא גם הסיבה העיקרית לסוכנים שנשמעים רובוטיים, והוא המשיך להישבר כי אף אחד לא כתב מה באמת קרה כשהוא נשבר.",
            ],
          },
          {
            title: "מסמך ליבה אחד, ארבעה־עשר נושאים",
            paragraphs: [
              "המאגר בנוי כ־skill לסוכני קוד. מסמך ליבה אחד שכתבתי קובע את המדיניות: כללי השפה, כלל הציטוט, והעיקרון שהפרומפט הוא סט עקרונות שהסוכן פועל לפיהם, לא תסריט שהוא מקריא. הוא מגדיר ששה דברים שכל פרומפט חייב לגרום לסוכן להבין: מי הוא והאם הוא התקשר או שהתקשרו אליו, מה הוא יודע, מה הוא מציע, איך הוא אומר את זה כמו בן אדם, אילו פרטים הוא אוסף, ואיך הוא מנהל שיחה טבעית. ויש בו צ׳קליסט לפני העלייה לאוויר, שער איכות לפני שמכריזים על שיפור, ומעקב מאמירה גרועה בחזרה למקור שיצר אותה: מתקנים בשכבה הגבוהה ביותר שמסבירה אותה, ואם המקור במנוע, הפלטפורמה שמריצה את השיחות, לא נוגעים בפרומפט.",
              "ארבע־עשרה מחלקות נושא מחזיקות את התובנות: עוגנים, אודיו וזיהוי דיבור, סיום השיחה, שער המדידה, אמת של זהות, ידע, קונפיגורציית מודל, מלאכת הפרומפט, פרומפט מול קוד, סגנון הדיבור, אותות מערכת, כלים, פרוזודיה של הדיבור וזרימת תורים. בהיררכיה הנושאים מנצחים את הליבה: בכל עבודה סוכן הקוד קורא את הנושא שקשור למה שמנסים לפתור ומחפש בו תובנה רלוונטית. אם יש כזאת, היא גוברת על מה שכתוב בליבה; אם אין, היא נוצרת כשהבעיה נפתרת.",
              "שתי דוגמאות מהליבה. כלל הציטוט: אין משפטי דוגמה בפרומפט, לא בצד של מה שהלקוח אומר ולא בצד של מה שהסוכן עונה. ציטוט של הלקוח מלמד את המודל התאמת מחרוזת במקום סיטואציה, וכמה דוגמאות תשובה לא מייצרות גיוון אלא בחירה שגויה. מה שהיה דוגמה נכתב כמה שחייב לעבור ללקוח, במילים שלי, והניסוח נשאר של המודל. וכלל הקצב: שינוי אחד, שיחה, שינוי אחד. ערימה של תיקונים בלי שיחה ביניהם מבטלת את היכולת לייחס, ובלילה אחד שלושה מהתיקונים עצמם היו המקור לכשל הבא.",
            ],
          },
          {
            title: "מה כל תובנה חייבת לשאת",
            paragraphs: [
              "לכל תובנה אותם שדות: תג, מודל, הקשר, תצפית, ממצא, השלכה, וכשהיא מחליפה תובנה ישנה, מה היא מחליפה. תובנה מתוארכת מנצחת עיקרון מוצהר. תובנה לעולם לא נמחקת ולא מנוסחת מחדש; היפוך הוא רשומה חדשה שמצביעה על הישנה. לכל תובנה בית אחד, ותובנה שנמדדה על מודל אחר נקראת כהשערה, לא משנה מה התג שלה. מה שאי אפשר לסווג הולך לתיבת כניסה, כדי שהשאלה לאן זה שייך לא תעכב את הרישום.",
            ],
          },
          {
            title: "תובנה אחת, כמו שהיא רשומה",
            paragraphs: [
              "תג: מדוד. הקשר: סוכנת תמיכה הייתה צריכה להעביר מתקשר שלוש בדיקות בבית, והקריאה את שלושתן בנשימה אחת, כרשימה. תצפית: העובדות ישבו במאגר הידע כרשימה, אז הן הוקראו כרשימה; כשהועברו לפרומפט, אותו כשל חזר משם; וכשנכתבו מחדש כרצף ממוספר, הסוכנת צעדה את השלבים כתסריט ושאלה את הבדיקה השנייה אחרי שהמתקשר כבר ענה עליה. ממצא: הצורה של עובדה, לא המקום שלה, היא שקובעת אם היא תוקרא בקול, ורצף ממוספר הופך ידע לתסריט. השלכה: עובדות נכתבות בצורה שאי אפשר להרים ממנה משפט, שם פועל ולא משפט מוכן, והפרומפט אומר במפורש שהן מה שהסוכנת יודעת, לא מה שהיא אומרת.",
            ],
          },
          {
            title: "מול מה שמקובל בתחום",
            paragraphs: [
              "את המאגר אני בודק מול ההנחיות שהפלטפורמות המובילות לסוכני קול מפרסמות, נושא אחד בכל פעם. מודלים קטנים עושים את האיסוף, ומותר להם להביא רק ציטוטים מדויקים: טענה בלי ציטוט נזרקת. מודל חזק משווה אז כל תובנה לציטוטים ומציע שינויים, מודל ממשפחה אחרת סוקר את ההצעות האלה, ואני מכריע על כל אחת. לפני שזה מתחיל, המאגר מקבל תג ונשאר קפוא, כך שכל שינוי מוצע הוא diff מול גרסה ידועה, כזה שאפשר למדוד או לבטל. שינוי שאני מקבל לא נכנס כי פלטפורמה אמרה שככה זה עובד טוב יותר: הוא נבדק בשיחות כמו כל תובנה אחרת. חלק מההנחיות ממילא כבר חפפו למה שנמדד.",
            ],
          },
          {
            title: "התוצאה",
            paragraphs: [
              "רוב התובנות מדודות, כחמישית עדיין השערות, ושמונה־עשר הן תיקונים שהפכו משהו שהאמנתי בו קודם. התיקונים הם העניין. למשל, ההחלטה באיזו שפה לכתוב את הפרומפט: היא עברה לאנגלית בגלל חיסכון בטוקנים, וחזרה לעברית כשקמפיין שלם לא הראה הבדל באיכות, כי פרומפט בעברית מדגים את השפה המדוברת במקום לתאר אותה. העלות בטוקנים נמדדה והתקבלה, גם כי הפרומפט ממילא נכנס למטמון, אז ההפרש לא הצדיק אנגלית בלבד. ללמד את המודל איך לדבר בשפה ניצח. המאגר אישי ופרטי, והוא בשימוש יומי: מסמך הליבה הוא הדבר הראשון שסוכן קוד קורא לפני שנוגעים בפרומפט, ושיחה שנכשלה נבדקת מול הנושא שלה לפני שמתווכחים עליה. הוא שיטת העבודה שמאחורי כל סוכן בפרויקט הראשון.",
            ],
          },
        ],
        takeaway:
          "עיקרון בלי תאריך ומדידה הוא דעה. הערך הוא בתיקונים.",
      },
    ],
  },
};

export const resume = resumes.en;
// Trailing slashes match the exported directory structure, so links resolve
// without a redirect hop and agree with the canonical URLs.
export const homePath = (locale: Locale) => (locale === "he" ? "/he/" : "/");
export const casePath = (locale: Locale, slug: string) =>
  `${locale === "he" ? "/he" : ""}/work/${slug}/`;
export const cvPath = (locale: Locale) =>
  `${locale === "he" ? "/he" : ""}/cv/`;
// The PDFs are written by scripts/build-cv.mjs after `next build`; both
// languages sit in out/cv/ so the file name, not the folder, says the language.
export const cvFile = (locale: Locale) => `/cv/ilay-genis-cv-${locale}.pdf`;
