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
        "I’m Ilay, an AI Solutions Engineer. I turn business requirements into Hebrew voice agents, integrations and working software, then test what actually happens on the call. Now looking for my next team, to keep growing professionally and take on new challenges.",
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
          href: "https://www.linkedin.com/in/ilay-genis-b240a4352",
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
      takeaway: "What I learned",
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
        role: "Inbound service agents and outbound campaign agents: the brief, the prompt, the JavaScript tools, the test calls, and the investigation when the failure is not in the prompt. Some agents I built from the brief; others I took over, tools included.",
        sections: [
          {
            title: "The problem",
            paragraphs: [
              "A voice agent has to hold a real conversation in Hebrew and then do something useful with it: qualify a lead, book a slot, take an order, hand off to a person. A prompt that reads well proves none of that. The agent is judged on the call.",
              "The businesses vary widely: insurance, finance and tax refunds, telecom and TV retention and sales, fitness, hearing care, real estate, automotive, business consulting, restaurants and ordering, healthcare, travel and retail. Each agent has its own success condition, its own stopping points and its own tools, and on a small, young team there was no ready method for getting an agent from the brief to a call that holds up. Much of what follows is how that method took shape, one agent at a time.",
            ],
          },
          {
            title: "From discovery to a brief you can build from",
            paragraphs: [
              "Every agent starts with a discovery conversation, and the brief that comes out of it has to stand on its own, because the person building from it is often someone else, or me a month later. The parts that earn their place are the ones a prompt cannot guess: what counts as success on this particular call, what the agent must never promise, when it hands off to a person, and which questions are still open. The success condition is also what the test calls check later, so it is written to be checkable.",
              "The brief keeps living after launch. Client requests are tracked as numbered items, and decisions are logged with their reasons. When an account changes hands it goes with a handoff document: what happened last, what is blocking, the next step and who owns it. Its closing section lists what the document itself does not know, because the next person needs to know what was never handed over.",
            ],
          },
          {
            title: "Where the prompt ends and code begins",
            paragraphs: [
              "Language and intent belong to the model. Facts, state and anything that must not happen belong to code. The clearest test of that line was an inbound service agent for a fitness studio that I took over. Its job was to act in the gym’s CRM and not only talk: show the live schedule, find a member by phone, book and cancel classes and trial classes, renew or freeze a subscription, send a digital cancellation form. I started with the API. I measured what the documentation said against what the server actually did, pulled the catalogs of identifiers into configuration, and cross-checked the live schedule against the gym’s own documents. The gaps went back to the client as decisions, and one of them drew the first line: the schedule comes from the CRM at call time, never from documents the prompt was given.",
              "Knowledge went the same way. The gym’s manual and PDFs were rebuilt as query-shaped sources for the retrieval engine: titles in the words customers use, a separate source for what the gym does not offer, and a dated list of approved policy changes. A retrieval test in SQL runs the expected questions and checks that each one brings back the right source, so a wrong answer is caught before it is said on a call.",
              "The tools themselves were written with coding agents. The design work was deciding, for each one, which side of the line every behavior sits on. The prompt owns what the agent says before it calls and how it explains a failure. Code owns how many requests a single turn may spend, which business object makes a repeat call a duplicate, and the rule shared with the outbound lead tools built on webhooks and Apps Script: the lead is sent the moment the caller agrees, and if a callback time is added later the same record is updated by call ID instead of a second lead being created. An action counts as done only when the target system confirms it, and a failed attempt stays retryable instead of being blocked as a duplicate. The gym’s outbound campaign agent was cloned from the inbound one, with private tools of its own: lead delivery, a follow-up task in the CRM, and a removal that marks the lead as lost.",
              "A test round showed where the line had to move. The model invented a class identifier, three digits where real ones have eight. Nothing was written: the call ran in the platform’s test environment, with no phone number and no real membership behind it, and the CRM would not have accepted a made-up identifier anyway. But the engine’s confirmation step before a write never fired there, because the test channel sends an empty caller ID, and the model had shown it could invent one. The guards came after that. The schedule the agent reads out had already taught the lesson once: a prompt rule to offer only the next few days had not held, and the cap became structural. The identifiers went the same way. A class identifier is accepted only if the schedule tool returned it in that same call, a customer identifier only if the lookup returned it, and profile fields are written only when empty. The prompt kept the language. The guarantees went to code.",
            ],
          },
          {
            title: "Hebrew, specifically",
            paragraphs: [
              "Hebrew text-to-speech needs a pronunciation lexicon, and the lexicon needs verification. The transcript shows the agent’s text before the lexicon touches it, so a bad rule never appears in the log. It is caught by ear, on a real call. Every corrected word is confirmed that way and recorded, with a separate list of candidates not yet verified.",
              "The move to a new speech vendor did opposite things on two agents. On one, the pronunciation rules died silently: 13 of 15 were doing nothing, and every corrected word had to be verified again. On another, the old vendor’s lexicon did not stop at all. Going through the agent’s sentences from several hours of calls, one rule written to fix a single word had swallowed whole Hebrew words forty times, and nothing in the log said so. Both became one migration checklist: record the voice and pronunciation settings before switching, re-verify every fix on the new vendor, and report to the engine team what the log cannot show.",
              "Gender agreement runs through several layers, from how the caller is identified to what the voice finally says, and gets its own checks, because a wrong form of address can be invisible in the transcript and obvious on the call. And the prompt is written for spoken Hebrew, not written Hebrew: the register a person uses on the phone, not the one they use in a form.",
            ],
          },
          {
            title: "Testing on the call",
            paragraphs: [
              "The unit of testing is a conversation, not a test. The scenarios come from the brief: the success condition first, then everything that can pull the call away from it, an edge case, a caller who changes the subject, one who swears, one who asks for something the agent must refuse. The prompt is checked against what it was written to do, not against how it reads. Each planned call has one main question and carries smaller checks along the way. Success is graded in four tiers: what the agent said, whether the tool actually fired, whether it fired with the right content, and whether the record actually landed in the target system. A scenario is written at the highest tier it allows, and a scenario that cannot be judged from the log is not an evaluation.",
              "Text-only preview rounds, the model without the voice and the phone line, are a filter for iteration. Only a live call counts, and “verified” requires a call identifier. Every call also yields background measurements at no extra cost: time to first response, gender agreement, interruptions.",
              "The findings rarely live where they first appear. A wrong refusal, a caller turned away on medical grounds, that four prompt wordings could not move was fixed by one passage in the knowledge base, found with a retrieval test instead of another prompt edit. A medical gate that fired on the word “health” was fixed by renaming a heading and taking the word out of the prompt entirely. And two gender findings that looked systematic were withdrawn after a check against the engine’s own code showed the test channel had produced them. Where a failure lives decides what the fix is, and finding that out is its own work.",
              "For the outbound campaign agents the scenarios are not service cases but personas: who picks up, what they care about, when they hang up. And when a client complained about their agent, ten real calls were analyzed one by one, and every complaint was traced to a measured source, a tool’s configuration field or a line the prompt required word for word, never to a guess.",
            ],
          },
          {
            title: "Inside the engine",
            paragraphs: [
              "The engine is the platform that runs the calls: the telephony, the speech in both directions, and the loop that feeds the model each turn. Another team builds it, and when a failure is not in the prompt or in a tool, it is in there. To tell those apart I went into the engine’s code in stages, with coding agents doing the reading and every stage reviewed by hand, and came out with a map: what the model actually sees on each turn, the gates it never sees, how each configuration key is really edited and how dangerous a wrong edit is, and which check to run first for each symptom.",
              "The map also settled what belongs to the model and what belongs to the engine. The model runs the conversation. The engine owns the truth: facts and state are injected by code on every turn, gates that must not be crossed are checked in code, and a gate that blocks returns what to do next, never a bare “no”. It is the same line as in the CRM tools, one layer down.",
              "The clearest case was knowledge retrieval. On two agents, the gym’s and a hearing-care clinic’s, the answers started contradicting the prompt, with no change to the prompt at all. The cause was in the engine: retrieval injected four passages into every turn, relevant or not, and the irrelevant ones poisoned the context. The retrieval test could not see that, because it only checks that a known question brings back the right source. Moving the facts the agent must know back into the prompt and turning retrieval off by default brought both agents back to sense, and it became a rule: a conversation that stops making sense is checked for knowledge injection before anyone touches the prompt.",
              "Engine issues are documented with a status and a triage rule: a symptom that would recur on another agent is a system issue, anything specific to one agent’s wording stays with that agent. Each open item gets a short verification plan, a ladder of checks from reading the code up to a live call, and reaches the engine team as a reproducible report.",
            ],
          },
          {
            title: "Outcome",
            paragraphs: [
              "Agents and tools in real business use, and a working method that did not exist when I started: what one account teaches is written down, tagged, and used on the next. That method, with its lessons and their dates, is the fourth case study.",
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
            title: "The problem",
            paragraphs: [
              "A nationwide delivery company needed its customer intake and its courier operations in one connected system. The whole operation already ran on WhatsApp, customers and couriers alike, so the system had to fit into a live business rather than replace it.",
              "The scope was wider than a chat bot: new customer registration, order intake, courier registration on top of an existing courier database, and an operational dashboard. The hard part is not the chat. It is that every message has to become a record the operation can act on: a customer, an order, a courier, a status.",
            ],
          },
          {
            title: "One delivery, end to end",
            paragraphs: [
              "A customer writes on WhatsApp what to send and where. If the number is known, the bot takes the order; if not, it registers the customer first. The order goes out to the couriers’ WhatsApp groups, couriers answer in private, and the system has five minutes to pick the best registered one: time to the pickup, vehicle type, and a rating built from what customers said about their earlier deliveries. A courier the system does not know is asked for details, the vehicle, and a photo of an ID before getting anything. The chosen courier gets the details in private, and the customer gets a message at every status change the courier reports. Customers who prefer a person are left alone by the bot: their orders are entered by the owner in the dashboard, and still go out to the groups the same way.",
            ],
          },
          {
            title: "Flows before code",
            paragraphs: [
              "The flows and the expected behavior were written down before any code, so that there was something to judge the implementation against. They were worked out with the business owner, from their experience of how the operation ran before the system, and they had to match how it actually works, down to details like matching the size of a shipment to the type of vehicle that can carry it.",
              "The data layer was Supabase. I worked on the schemas, tables and indexes, choosing the indexes around the queries the application actually ran, and every schema change shipped as a numbered, forward-only migration: once a change had shipped, it was never edited, only followed by the next one. Application logic was Python and TypeScript.",
            ],
          },
          {
            title: "Building with coding agents",
            paragraphs: [
              "Coding agents wrote most of the system. The loop for each feature was the same: define what it should do in the flow document, let the agent implement it, then read the result and run it, not to admire the code but to find where it does something the flow did not say. What the agent could not know, the operation’s rules and the technical decisions between options, stayed with me.",
              "The operational dashboard was part of the same product and went through the same loop. It gives the business owner full control over the operation: switch the bot on and off, silence its replies for one number, blacklist a courier, enter a delivery by hand, work out what each customer owes for the month, and change the numbers the flows run on, such as pricing per kilometer and per vehicle type.",
            ],
          },
          {
            title: "What the model promises, code checks",
            paragraphs: [
              "The biggest lesson of the project was that a model can promise something and not do it. It tells the customer the order is in, and the record behind it is simply not there. So nothing that matters rests on the model’s word. Every promise it makes has a gate in code that checks whether the thing actually happened, and corrects it when it did not.",
              "The other thing WhatsApp allows, and a voice call does not, is a complete deterministic path for every situation. Every flow has a version that runs without the model at all, step by step, so if the model’s API fails, the conversation continues on rails instead of stopping. Voice does not give you that option: a spoken conversation cannot be put on rails without turning into a menu.",
            ],
          },
          {
            title: "Simulator first, then a real number",
            paragraphs: [
              "Testing started in a simulator, where every flow could be run end to end without a phone, a customer or a courier involved, and stayed there until the behavior matched the flow document. Only then did it move to a real company number, with the same flows run again as real WhatsApp conversations. Anything that broke was judged against the document, not against what the code happened to do.",
            ],
          },
          {
            title: "Outcome",
            paragraphs: [
              "The system went into production and brought customer onboarding, order intake and courier coordination into one product, on WhatsApp, with every message ending up as a record the operation could act on. It was delivered whole: the data layer, the application logic, the conversations and the dashboard. By then the owner was no longer running every order by phone: the bot handled the orders, and the owner supervised from the dashboard.",
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
            title: "The problem",
            paragraphs: [
              "An outbound campaign produces many transcripts in a few hours, and the client is waiting for a verdict. Reading everything through an LLM is expensive, and worse, it invites conclusions the data cannot support: a report can point at an agent problem or a tool problem, but a flagged pattern is still not a finding.",
              "The verdict decides real things: whether the agent’s opening changes, whether a tool gets fixed, whether the campaign keeps dialing. So the question is how to read a campaign without reading every transcript, and without letting a script or a model decide what happened to a person on a call.",
            ],
          },
          {
            title: "Running a campaign",
            paragraphs: [
              "Before the first call there is a list and a process. The dial list is built from the client’s files, with removals applied from every source that has them and invalid numbers set aside in their own file, and one of those passes turned up an engine bug: a removal request said aloud on a call that was never recorded. The lists themselves go through a quality pass with coding agents: every record checked against its source, first names corrected, and the rejected records reviewed in both directions before anyone is dialed. The process I wrote for new outbound clients runs from the discovery call to the client operating on their own, with three gates before any pilot campaign: a check by the account owner after a batch of control calls, the client’s approval, and an end-to-end test of every integration. The pilot then grows in batches.",
              "When a client wanted to know which script works, four variants of the same agent ran side by side into one intake sheet, routed by agent and by outcome type, with a quarantine tab for anything the routing could not identify, so that nothing was guessed. The variants got a private copy of the removal tool, so the experiment never touched a tool shared with a live agent.",
            ],
          },
          {
            title: "What code may count",
            paragraphs: [
              "The line is not code versus eyes. It is what the code is allowed to run on. What the agent says is a near-closed set: the same script lines, call after call, so counting on agent speech and metadata is legitimate. Customer speech is open-ended and corrupted by recognition errors, so it is never measured mechanically. A practical test: if a script’s output is a list of findings, stop.",
              "The limits are declared up front. The stored data has no turn timing, no interruption record and no hang-up cause, so a conclusion can say that the opening is weak, and never say why. And the platform’s own no-answer counter reads zero by design, because an unanswered lead goes back to the queue, so no-answer is measured from another source.",
            ],
          },
          {
            title: "Extract, structure, review, verify",
            paragraphs: [
              "Code does the extraction. Repeated agent speech gets an identifier and a legend, so a line the agent says on every call appears once, with a count; customer utterances and agent deviations are kept verbatim. Then the reading goes in layers. A structural pass over every call, by script, counts how far each conversation got: opening, pitch, closing question, which tool fired and on which turn. A person then reads every call that ended in an outcome, and every call where the closing question was asked and answered without one, because those are the moments where a wrong judgment costs a lead. And a list of every distinct thing customers said, with how often, shows what the counts cannot: what people actually asked, and what the agent never handled.",
              "Only then does targeted LLM analysis run, on the cases that justify it, and a person validates what it says. Metrics are grouped by who has to fix them, and a finding has to pass three gates before it counts: a verbatim quote, a cross-check against the call’s recorded outcome, and a mark of whether it was measured or assumed, because the absence of a tool event is not proof the tool did not fire.",
            ],
          },
          {
            title: "A morning with zero results",
            paragraphs: [
              "One morning a large campaign ran for hours, and the platform recorded zero results while the client’s sheet kept filling up. Everything looked broken at once: the agent, the tools, the engine. The way to narrow it was a control group: another campaign on the same day, on the same engine, whose agent used the built-in tools. Its results were recorded. So the failure lived in the path of the custom tools. Someone else was responsible for that tool, so by the end of the day it reached them as a short list of bugs ordered by severity, each with the call identifiers to reproduce it.",
              "The same day showed why a flag is not a finding. Many rows were marked as callback requests; read against the customer’s actual words, most were not. And every removal request had been marked correctly, which is the first thing to check, because a missed removal is the one mistake a campaign cannot afford.",
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
              "The workflow ran for as long as the outbound clients were my day-to-day: lightweight extraction first, deep analysis only where it was justified, and a person on every finding before it reached the client. When the period ended, every client went to the next person with a handoff document: where things stood, what was blocking, and the next step.",
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
            title: "The problem",
            paragraphs: [
              "Lessons from testing evaporate. A principle without the measurement behind it gets re-derived on the next agent, argued about, and sometimes reversed by accident. The most-broken rule in voice prompts, how spoken lines are quoted for the agent in the prompt, is also the main reason agents sound robotic, and it kept being broken because nobody had written down what actually happened when it was.",
            ],
          },
          {
            title: "One core document, fourteen topics",
            paragraphs: [
              "A core document sets the policy: the language rules, the quoting rule, the governing principle that the prompt is a principle-driven brain and not a script, the six things every prompt has to make the agent understand: who it is and whether it called or was called, what it knows, what it offers, how it says it like a person, which details it collects, and how it runs a natural conversation, a pre-flight checklist, a trace from a bad utterance back to the source that produced it, and a quality gate before any improvement is declared.",
              "Fourteen topic classes hold the lessons: anchors, audio and speech recognition, closing, the measurement gate, identity truth, knowledge, model configuration, prompt craft, prompt versus code, register, system signals, tools, speech prosody and turn flow.",
            ],
          },
          {
            title: "What every lesson must carry",
            paragraphs: [
              "Every lesson carries the same fields: tag, model, context, observation, finding, implication and, when it replaces an older lesson, what it supersedes. A dated lesson beats a stated principle. A lesson is never deleted or reworded; a reversal is a new record that points at the old one. Each lesson has one home, and a lesson measured on a different model is read as a hypothesis whatever its tag. Anything unclassifiable goes to an inbox, so that routing never blocks capture.",
            ],
          },
          {
            title: "One lesson, as recorded",
            paragraphs: [
              "Tag: measured. Context: a support agent had to walk a caller through three checks at home, and read all three in one breath, as a list. Observation: the facts sat in the knowledge base as a list, so they were read as a list; moved into the prompt, the same failure came back from there; rewritten as a numbered sequence, the agent walked the steps as a script and asked the second check after the caller had already answered it. Finding: whether a fact gets read aloud is decided by its form, not by where it lives, and a numbered sequence turns knowledge into a script. Implication: facts are written in a form no sentence can be lifted from, a verb and a noun rather than a ready clause, and the prompt says outright that they are what the agent knows, not what it says.",
            ],
          },
          {
            title: "Checked against what the platforms publish",
            paragraphs: [
              "The base is checked against the guidance the leading voice-agent platforms publish, one topic at a time. Small models do the gathering, and they may only bring back exact quotes: a claim without a quote is thrown out. A strong model then compares every lesson with the quotes and proposes changes, a model from a different family reviews those proposals, and I decide on each one. Before it starts, the base is tagged and frozen, so every proposed change is a diff against a known version, one that can be measured or reverted.",
            ],
          },
          {
            title: "Outcome",
            paragraphs: [
              "Most lessons are measured, about a fifth are still hypotheses, and eighteen are corrections that reversed something I believed earlier. The corrections are the point. The base is personal and private, and it is in daily use: the core document is the first thing a coding agent reads before touching a prompt, and a failed call is looked up by its topic before it is argued about. It is the working method behind every agent in the first case study.",
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
        "אני עילי, AI Solutions Engineer. אני מתרגם צרכים עסקיים לסוכני־קול בעברית, אינטגרציות ותוכנה שעובדת, ובודק מה באמת קורה בשיחה. אני מחפש את הצוות הבא שלי, כדי להמשיך להתפתח מקצועית ולהתמודד עם אתגרים חדשים.",
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
          detail: "תוכנית AI Game Changer בחברת Brain · 2026",
          text: "הכשרה מעשית בהטמעת פתרונות AI ובאוטומציה, שהושלמה תוך כדי עבודתי ב־Callex.",
        },
        {
          title: "קולנוע, צילום ווידאו",
          detail: "2022–2025",
          text: "תואר ראשון בקולנוע וטלוויזיה באוניברסיטת תל אביב, בדגש על צילום קולנועי, ובמקביל עבודה כפרילנסר: צלם ראשי בסרטים קצרים, צילום ועריכה של תוכן וידאו לרשתות החברתיות עבור מוסדות ציבור ותרבות. עבודה על סט היא תכנון סביב אילוצים, בתוך צוות, כשאין עודף זמן ואין תקציב לטעויות.",
        },
        {
          title: "הכשרה בסייבר, מערכות ורשתות",
          detail: "See Security International College · 2021–2022",
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
          href: "https://www.linkedin.com/in/ilay-genis-b240a4352",
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
      takeaway: "מה למדתי",
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
        role: "סוכני שירות נכנסים וסוכני קמפיינים יוצאים: האפיון, הפרומפט, כלי ה־JavaScript, שיחות הבדיקה, והתחקור כשהתקלה לא בפרומפט. חלק מהסוכנים בניתי מאפס לפי האפיון, וחלק ירשתי קיימים, כולל הכלים שלהם.",
        sections: [
          {
            title: "הבעיה",
            paragraphs: [
              "סוכן קול צריך לנהל שיחה אמיתית בעברית ואז לעשות איתה משהו מועיל: לסנן ליד, לקבוע תור, לקלוט הזמנה, להעביר לאדם. פרומפט שנקרא טוב לא מוכיח שום דבר מזה. הסוכן נשפט בשיחה.",
              "העסקים שונים מאוד זה מזה: ביטוח, פיננסים והחזרי מס, שימור ומכירות בתקשורת ובטלוויזיה, כושר, מכשירי שמיעה, נדל״ן, רכב, ייעוץ עסקי, מסעדות והזמנות, בריאות, תיירות וקמעונאות. לכל סוכן יש תנאי הצלחה משלו, נקודות עצירה משלו וכלים משלו, ובצוות קטן בחברה חדשה לא הייתה שיטה מוכנה להגיע מהאפיון לסוכן ששורד שיחה אמיתית. רוב מה שמתואר כאן הוא איך השיטה הזאת התגבשה, סוכן אחרי סוכן.",
            ],
          },
          {
            title: "משיחת האפיון למסמך שאפשר לבנות ממנו",
            paragraphs: [
              "כל סוכן מתחיל בשיחת אפיון, והמסמך שיוצא ממנה צריך לעמוד בפני עצמו, כי מי שבונה ממנו הוא לא פעם מישהו אחר, או אני עצמי חודש אחר כך. החלקים שמצדיקים את מקומם הם אלה שפרומפט לא יכול לנחש לבד: מה נחשב הצלחה בשיחה הספציפית הזאת, מה אסור לסוכן להבטיח, מתי הוא מעביר לאדם, ואילו שאלות עדיין פתוחות. תנאי ההצלחה הוא גם מה ששיחות הבדיקה בודקות אחר כך, ולכן הוא מנוסח כך שאפשר לבדוק אותו.",
              "המסמך ממשיך לחיות אחרי העלייה לאוויר. בקשות של הלקוח נרשמות כפריטים ממוספרים, והחלטות מתועדות עם הנימוק שלהן. כשלקוח עובר לידיים אחרות הוא עובר עם מסמך מסירה: מה קרה לאחרונה, מה חוסם, מה הצעד הבא ומי אחראי עליו. הסעיף האחרון בו הוא מה שהמסמך עצמו לא יודע, כי מי שבא אחריי צריך לדעת גם מה לא נמסר לו.",
            ],
          },
          {
            title: "איפה הפרומפט נגמר ואיפה הקוד מתחיל",
            paragraphs: [
              "השפה והכוונה שייכות למודל. עובדות, מצב, וכל מה שאסור שיקרה, שייכים לקוד. המבחן הכי ברור לקו הזה היה סוכנת שירות נכנסת של מכון כושר שירשתי. התפקיד שלה היה לפעול ב־CRM של המכון ולא רק לדבר: להציג את לוח השיעורים העדכני, לאתר מתאמן לפי מספר הטלפון, לרשום ולבטל שיעורים ושיעורי ניסיון, לחדש או להקפיא מנוי, לשלוח טופס ביטול דיגיטלי. התחלתי מה־API. מדדתי מה התיעוד אומר מול מה שהשרת באמת עושה, משכתי את קטלוגי המזהים לקונפיגורציה, והצלבתי את לוח השיעורים החי מול המסמכים של המכון עצמו. הפערים חזרו ללקוח כהחלטות, ואחת מהן מתחה את הקו הראשון: לוח השיעורים מגיע מה־CRM בזמן השיחה, ולעולם לא מהמסמכים שהפרומפט קיבל.",
              "הידע הלך באותה דרך. ספר הידע של המכון וקובצי ה־PDF נבנו מחדש כמקורות ידע ממוקדי שאילתה למנוע האחזור: כותרות במילים שהלקוחות משתמשים בהן, מקור נפרד למה שהמכון לא מציע, ורשימה מתוארכת של עדכוני מדיניות שאושרו. בדיקת אחזור ב־SQL מריצה את השאלות הצפויות ובודקת שכל אחת מחזירה את המקור הנכון, כדי שתשובה שגויה תיתפס לפני שהיא נאמרת בשיחה.",
              "את הכלים עצמם כתבתי בעזרת סוכני קוד. עבודת התכנון הייתה להחליט, לכל כלי, באיזה צד של הקו יושבת כל התנהגות. הפרומפט אחראי על מה שהסוכנת אומרת לפני שהיא קוראת לכלי, ואיך היא מסבירה כישלון. הקוד אחראי על כמה קריאות מותר לתור אחד להוציא, איזה אובייקט עסקי הופך קריאה חוזרת לכפילות, ועל הכלל שמשותף גם לכלי הלידים של הקמפיינים היוצאים, שבנויים על Webhooks ו־Apps Script: הליד נשלח ברגע ההסכמה, ואם אחר כך נוסף מועד לחזרה, אותה רשומה מתעדכנת לפי מזהה השיחה במקום שייווצר ליד כפול. פעולה נחשבת גמורה רק כשמערכת היעד מאשרת אותה, וניסיון שנכשל נשאר פתוח לניסיון חוזר במקום להיחסם ככפילות. הסוכנת היוצאת של אותו מכון שוכפלה מהנכנסת, עם כלים פרטיים משלה: מסירת ליד ומשימת מעקב ב־CRM, והסרה שמסומנת כליד אבוד.",
              "סבב בדיקות הראה איפה הקו צריך לזוז. המודל המציא מזהה של שיעור, שלוש ספרות כשלאמיתיים יש שמונה. שום דבר לא נכתב: השיחה רצה בסביבת הבדיקות של הפלטפורמה, בלי מספר טלפון ובלי מנוי אמיתי מאחוריה, וה־CRM ממילא לא היה מקבל מזהה מומצא. אבל שלב האישור של המנוע לפני כתיבה לא נדלק שם בכלל, כי ערוץ הבדיקה שולח מזהה מתקשר ריק, והמודל הראה שהוא מסוגל להמציא מזהה. ההגנות נבנו אחרי המקרה הזה. לוח השיעורים שהסוכנת מקריאה כבר לימד את הלקח הזה פעם אחת: כלל בפרומפט להציע רק את הימים הקרובים לא החזיק, והתקרה הפכה למבנית. המזהים הלכו באותה דרך. מזהה שיעור מתקבל רק אם כלי הלוח החזיר אותו באותה שיחה, מזהה לקוח רק אם החיפוש החזיר אותו, ושדות פרופיל נכתבים רק כשהם ריקים. הפרומפט שמר על השפה. מה שחייב להתקיים עבר לקוד.",
            ],
          },
          {
            title: "ספציפית, בעברית",
            paragraphs: [
              "המרת טקסט לדיבור בעברית צריכה לקסיקון הגייה, והלקסיקון צריך אימות. התמליל מציג את הטקסט של הסוכן לפני שהלקסיקון נוגע בו, ולכן כלל פגום לא יופיע בלוג אף פעם. תופסים אותו באוזן, בשיחה אמיתית. כל מילה שתוקנה מאושרת ככה ונרשמת, לצד רשימה נפרדת של מועמדות שעדיין לא אומתו.",
              "המעבר לספק קול חדש עשה שני דברים הפוכים בשני סוכנים. באחד, כללי ההגייה מתו בשקט: 13 מתוך 15 לא עשו כלום, וכל מילה שתוקנה הייתה צריכה אימות מחדש. באחר, הלקסיקון של הספק הישן לא הפסיק בכלל. במעבר על המשפטים של הסוכן מכמה שעות של שיחות התברר שכלל אחד, שנכתב כדי לתקן מילה אחת, בלע מילים שלמות בעברית ארבעים פעם, ושום דבר בלוג לא אמר את זה. משני המקרים יצא צ׳קליסט אחד למעבר בין ספקים: לתעד את הגדרות הקול וההגייה לפני המעבר, לאמת מחדש כל תיקון אצל הספק החדש, ולדווח לצוות המנוע על מה שהלוג לא יכול להראות.",
              "התאמת מגדר עוברת דרך כמה שכבות, מהאופן שבו המתקשר מזוהה ועד מה שהקול אומר בסוף, ומקבלת בדיקות משלה, כי פנייה במגדר הלא נכון יכולה להיות בלתי נראית בתמליל וברורה מאוד בשיחה. והפרומפט נכתב לעברית מדוברת, לא כתובה: השפה שבן אדם מדבר בה בטלפון, לא זו שהוא כותב בה בטופס.",
            ],
          },
          {
            title: "בדיקה בשיחה",
            paragraphs: [
              "יחידת הבדיקה היא שיחה, לא טסט. התרחישים באים מהאפיון. קודם תנאי ההצלחה, ואחריו כל מה שיכול למשוך את השיחה ממנו: מקרי קצה, מתקשר שמחליף נושא, אחד שמקלל, אחד שמבקש משהו שהסוכן חייב לסרב לו. את הפרומפט בודקים מול מה שהוא נכתב לעשות, לא מול איך שהוא נקרא. לכל שיחה מתוכננת יש שאלה מרכזית אחת, ולצידה בדיקות קטנות יותר בדרך. להצלחה ארבע דרגות: מה הסוכן אמר, אם הכלי באמת נורה, אם הוא נורה עם התוכן הנכון, ואם הרשומה באמת נחתה במערכת היעד. תרחיש נכתב בדרגה הגבוהה ביותר שהוא מאפשר, ותרחיש שאי אפשר לשפוט מתוך הלוג הוא לא הערכה.",
              "סבבי preview בטקסט בלבד, המודל בלי הקול ובלי קו הטלפון, הם מסנן לאיטרציה. רק שיחה חיה נחשבת, ו״מאומת״ דורש מזהה שיחה. כל שיחה מניבה גם מדידות רקע בלי עלות נוספת: זמן עד התגובה הראשונה, התאמת מגדר, קטיעות.",
              "הממצאים כמעט אף פעם לא גרים איפה שהם מופיעים בהתחלה. סירוב שגוי, מתקשרת שנדחתה מסיבה רפואית, שארבעה ניסוחי פרומפט לא הזיזו, נפתר בקטע אחד במאגר הידע, שנמצא בבדיקת אחזור במקום עוד עריכה של הפרומפט. שער רפואי שנדלק על המילה ״בריאות״ תוקן בשינוי כותרת ובהוצאת המילה מהפרומפט לגמרי. ושני ממצאי מגדר שנראו שיטתיים בוטלו אחרי שבדיקה מול הקוד של המנוע עצמו הראתה שערוץ הבדיקה הוא שיצר אותם. איפה שהתקלה גרה קובע מה התיקון, והבירור הזה הוא עבודה בפני עצמה.",
              "בסוכני הקמפיינים היוצאים התרחישים הם לא מקרי שירות אלא פרסונות: מי עונה לטלפון, מה מעניין אותו, מתי הוא מנתק. וכשלקוח התלונן על הסוכנת שלו, עשר שיחות אמיתיות נותחו אחת־אחת, וכל תלונה יוחסה למקור מדוד, שדה קונפיגורציה של כלי או שורה שהפרומפט חייב מילה במילה, ולא להשערה.",
            ],
          },
          {
            title: "בתוך המנוע",
            paragraphs: [
              "המנוע הוא הפלטפורמה שמריצה את השיחות: הטלפוניה, הדיבור לשני הכיוונים, והלולאה שמזינה את המודל בכל תור. צוות אחר בונה אותו, וכשתקלה היא לא בפרומפט ולא בכלי, היא שם. כדי להבדיל ביניהן נכנסתי לקוד של המנוע בשלבים, כשסוכני קוד קוראים וכל שלב עובר ביקורת ידנית, ויצאתי עם מפה: מה המודל באמת רואה בכל תור, אילו שערים הוא לא רואה לעולם, איך כל מפתח קונפיגורציה באמת נערך וכמה מסוכנת עריכה שגויה שלו, ואיזו בדיקה מריצים ראשונה לכל תסמין.",
              "המפה גם הכריעה מה שייך למודל ומה שייך למנוע. המודל מנהל את השיחה. המנוע הוא הבעלים של האמת: עובדות ומצב מוזרקים בקוד בכל תור, שערים שאסור לחצות נבדקים בקוד, ושער שחוסם מחזיר מה לעשות עכשיו, ולעולם לא ״לא״ יבש. זה אותו קו כמו בכלים של ה־CRM, שכבה אחת למטה.",
              "המקרה הכי ברור היה אחזור הידע. בשני סוכנים, של מכון הכושר ושל מרכז השמיעה, התשובות התחילו לסתור את הפרומפט, בלי שום שינוי בפרומפט. הסיבה הייתה במנוע: האחזור הזריק ארבעה קטעים לכל תור, רלוונטיים או לא, והלא־רלוונטיים הרעילו את ההקשר. בדיקת האחזור לא יכלה לראות את זה, כי היא בודקת רק ששאלה ידועה מחזירה את המקור הנכון. העברת העובדות שהסוכן חייב לדעת בחזרה לפרומפט וכיבוי האחזור כברירת מחדל החזירו את שני הסוכנים להיגיון, ומזה יצא כלל: שיחה שמפסיקה להיות הגיונית נבדקת קודם על הזרקת ידע, לפני שמישהו נוגע בפרומפט.",
              "תקלות מנוע מתועדות עם סטטוס וכלל טריאז׳: תסמין שיחזור גם בסוכן אחר הוא תקלת מערכת, וכל מה שספציפי לניסוח של סוכן אחד נשאר אצל אותו סוכן. כל פריט פתוח מקבל תוכנית אימות קצרה, סולם בדיקות מקריאת הקוד ועד שיחה חיה, ומגיע לצוות המנוע כדוח שאפשר לשחזר.",
            ],
          },
          {
            title: "התוצאה",
            paragraphs: [
              "סוכנים וכלים בשימוש עסקי אמיתי, ושיטת עבודה שלא הייתה קיימת כשהתחלתי: מה שלקוח אחד מלמד נכתב, מתויג ומשמש אצל הלקוח הבא. השיטה הזאת, עם הלקחים שלה והתאריכים שלהם, היא הפרויקט הרביעי.",
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
            title: "הבעיה",
            paragraphs: [
              "חברת משלוחים ארצית הייתה צריכה את קליטת הלקוחות ואת תפעול השליחים שלה במערכת אחת מחוברת. כל המערך של העסק כבר רץ על וואטסאפ, הלקוחות והשליחים כאחד, אז המערכת הייתה צריכה להתלבש על עסק פעיל, לא להחליף אותו.",
              "ההיקף היה רחב יותר מבוט צ׳אט: רישום לקוחות חדשים, קליטת הזמנות, רישום שליחים על גבי מאגר שליחים קיים, ודשבורד תפעולי. החלק הקשה הוא לא הצ׳אט. הוא שכל הודעה צריכה להפוך לרשומה שהתפעול יכול לפעול לפיה: לקוח, הזמנה, שליח, סטטוס.",
            ],
          },
          {
            title: "משלוח אחד, מההתחלה עד הסוף",
            paragraphs: [
              "לקוח כותב בוואטסאפ מה לשלוח ולאן. אם המספר מוכר, הבוט לוקח את ההזמנה; אם לא, הוא רושם קודם את הלקוח. ההזמנה מופצת בקבוצות הוואטסאפ של השליחים, השליחים פונים בפרטי, ולמערכת יש חמש דקות לבחור את השליח הרשום המתאים ביותר: זמן ההגעה לאיסוף, סוג הרכב, ודירוג שנבנה ממה שלקוחות אמרו על המסירות הקודמות שלו. שליח שהמערכת לא מכירה מתבקש לפרטים, לפרטי הרכב ולצילום תעודת זהות לפני שהוא מקבל משהו. השליח שנבחר מקבל את הפרטים בפרטי, והלקוח מקבל הודעה בכל עדכון סטטוס שהשליח מדווח. לקוחות שמעדיפים בן אדם, הבוט לא עונה להם: את ההזמנות שלהם בעל העסק מזין בדשבורד, והן יוצאות לקבוצות באותה דרך.",
            ],
          },
          {
            title: "תהליכים לפני קוד",
            paragraphs: [
              "התהליכים וההתנהגות הרצויה נכתבו לפני שורת קוד אחת, כדי שיהיה מול מה לשפוט את המימוש. הם נקבעו יחד עם בעל העסק, מתוך הניסיון שלו באיך שהפעילות התנהלה לפני המערכת, ולכן הם היו צריכים להתאים לאיך שהתפעול באמת עובד, עד לפרטים כמו התאמת גודל המשלוח לסוג הרכב שיכול לשאת אותו.",
              "שכבת הנתונים הייתה Supabase. עבדתי על הסכמות, הטבלאות והאינדקסים, בחרתי את האינדקסים לפי השאילתות שהמערכת באמת מריצה, וכל שינוי סכמה יצא כמיגרציה ממוספרת, קדימה בלבד: שינוי שכבר יצא לא נערך אף פעם, רק מגיע אחריו הבא. הלוגיקה עצמה נכתבה ב־Python וב־TypeScript.",
            ],
          },
          {
            title: "בנייה עם סוכני קוד",
            paragraphs: [
              "את רוב המערכת כתבו סוכני קוד. הלולאה לכל פיצ׳ר הייתה אותה לולאה: להגדיר במסמך התהליכים מה הוא צריך לעשות, לתת לסוכן לממש, ואז לקרוא את התוצאה ולהריץ אותה, לא כדי להתפעל מהקוד אלא כדי למצוא איפה הוא עושה משהו שהתהליך לא אמר. מה שהסוכן לא יכול לדעת, הכללים של התפעול וההחלטות הטכניות בין אפשרויות, נשאר אצלי.",
              "הדשבורד התפעולי היה חלק מאותו מוצר ועבר את אותה לולאה. דרכו יש לבעל העסק שליטה מלאה על התפעול: להפעיל ולכבות את הבוט, לבטל את המענה שלו למספר מסוים, לחסום שליח ברשימה שחורה, להזין משלוח בעצמו, לחשב את החובות החודשיים של הלקוחות שלו אליו, ולשנות נתונים שהתהליכים נשענים עליהם, כמו תמחור לפי קילומטר וסוג רכב.",
            ],
          },
          {
            title: "מה שהמודל מבטיח, הקוד בודק",
            paragraphs: [
              "הלקח הכי גדול מהפרויקט היה שמודל יכול להבטיח משהו ולא לבצע אותו. הוא אומר ללקוח שההזמנה נקלטה, והרשומה מאחוריה פשוט לא קיימת. לכן שום דבר שחשוב לא נשען על המילה של המודל. לכל הבטחה שהוא נותן יש שער בקוד שבודק אם הדבר באמת קרה, ומתקן אם לא.",
              "הדבר השני ש־WhatsApp מאפשר, ושיחת קול לא, הוא מסלול דטרמיניסטי מלא לכל סיטואציה. לכל תהליך יש גרסה שרצה בלי המודל בכלל, צעד אחרי צעד, כך שאם ה־API של המודל נופל, השיחה ממשיכה על מסילה במקום להיעצר. בקול אין את האפשרות הזאת: שיחה מדוברת אי אפשר לשים על מסילה בלי שהיא תהפוך לתפריט.",
            ],
          },
          {
            title: "קודם סימולטור, אחר כך מספר אמיתי",
            paragraphs: [
              "הבדיקות התחילו בסימולטור, שבו אפשר להריץ כל תהליך מקצה לקצה בלי טלפון, בלי לקוח ובלי שליח, ונשארו שם עד שההתנהגות התאימה למסמך התהליכים. רק אז הן עברו למספר אמיתי של החברה, ואותם תהליכים רצו שוב כשיחות WhatsApp אמיתיות. כל מה שנשבר נשפט מול המסמך, לא מול מה שהקוד במקרה עשה.",
            ],
          },
          {
            title: "התוצאה",
            paragraphs: [
              "המערכת עלתה לאוויר ואיחדה קליטת לקוחות, קליטת הזמנות ותיאום שליחים למוצר אחד, על WhatsApp, שבו כל הודעה הופכת לרשומה שהתפעול יכול לפעול לפיה. היא נמסרה שלמה: שכבת הנתונים, הלוגיקה, השיחות והדשבורד. עד אז בעל העסק כבר לא ניהל כל הזמנה בעצמו מהטלפון: הבוט טיפל בהזמנות, והוא רק השגיח מהדשבורד.",
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
        status: "בשימוש בקמפיינים היוצאים",
        technologies: ["סקריפטים", "SQL", "LLM", "בדיקה אנושית"],
        diagram: {
          label: "מהנתונים להחלטה",
          steps: ["חילוץ", "מבנה", "סקירה", "אימות"],
          caption: "איך קוראים קמפיין בלי לקרוא כל תמליל",
        },
        role: "במשך תקופה לקוחות הקמפיינים היוצאים היו היום־יום שלי: לקרוא את התוצאות של כל קמפיין, לתחקר כשלים בסוכנים ובכלים שחזרו על עצמם, לתקן את מה שהיה בצד שלי, ולדווח ללקוח.",
        sections: [
          {
            title: "הבעיה",
            paragraphs: [
              "קמפיין יוצא מייצר הרבה תמלילים בכמה שעות, והלקוח מחכה להכרעה. לקרוא את הכול דרך LLM זה יקר, וגרוע מזה, זה מזמין מסקנות שהדאטה לא יכולה לתמוך בהן: דוח יכול להצביע על בעיה בסוכן או על בעיה בכלי, אבל דפוס שסומן עדיין לא ממצא.",
              "ההכרעה הזאת קובעת דברים אמיתיים: אם הפתיח של הסוכן משתנה, אם כלי מתוקן, אם הקמפיין ממשיך לחייג. אז השאלה היא איך קוראים קמפיין בלי לקרוא כל תמליל, ובלי לתת לסקריפט או למודל להחליט מה קרה לבן אדם בשיחה.",
            ],
          },
          {
            title: "להריץ קמפיין",
            paragraphs: [
              "לפני השיחה הראשונה יש רשימה ותהליך. רשימת החיוג נבנית מהקבצים של הלקוח, עם הסרות מכל מקור שיש בו הסרות ומספרים לא תקינים בקובץ נפרד, ובאחד המעברים האלה צץ באג מנוע: בקשת הסרה שנאמרה בקול בשיחה ולא נרשמה. הרשימות עצמן עוברות בקרת איכות בעזרת סוכני קוד: כל רשומה נבדקת מול המקור, שמות פרטיים מתוקנים, והרשומות שנפסלו נסקרות לשני הכיוונים לפני שמחייגים למישהו. התהליך שכתבתי ללקוחות חדשים של שיחות יוצאות הולך משיחת האפיון ועד שהלקוח מפעיל לבד, עם שלושה שערים לפני כל קמפיין פיילוט: בדיקה של בעל התיק אחרי סבב שיחות בקרה, אישור הלקוח, ובדיקה מקצה לקצה של כל החיבורים. אחר כך הפיילוט גדל בסבבים.",
              "כשלקוח רצה לדעת איזה תסריט עובד, ארבעה וריאנטים של אותו סוכן רצו זה לצד זה לתוך גיליון קליטה אחד, מנותבים לפי סוכן ולפי סוג תוצאה, עם טאב הסגר לכל מה שהניתוב לא זיהה, כדי ששום דבר לא ינוחש. הווריאנטים קיבלו עותק פרטי של כלי ההסרה, כדי שהניסוי לא ייגע בכלי שמשותף עם סוכן חי.",
            ],
          },
          {
            title: "מה סופרים בקוד, ומה לא",
            paragraphs: [
              "הקו הוא לא קוד מול עיניים. הקו הוא על מה מותר לקוד לרוץ. מה שהסוכן אומר הוא קבוצה כמעט סגורה: אותן שורות תסריט, שיחה אחרי שיחה, ולכן ספירה על דיבור הסוכן ועל מטא־דאטה היא לגיטימית. דיבור הלקוח פתוח ומשובש בשגיאות זיהוי, ולכן הוא אף פעם לא נמדד מכנית. מבחן מעשי: אם הפלט של הסקריפט הוא רשימת ממצאים, עוצרים.",
              "המגבלות מוצהרות מראש. בדאטה השמורה אין תזמון תורים, אין רישום קטיעות ואין סיבת ניתוק, ולכן מסקנה יכולה לומר שהפתיח חלש, ולעולם לא למה. ומונה ה״לא נענו״ של הפלטפורמה מציג אפס בכוונה, כי ליד שלא נענה חוזר לתור, אז אי־מענה נמדד ממקור אחר.",
            ],
          },
          {
            title: "חילוץ, מבנה, סקירה, אימות",
            paragraphs: [
              "הקוד עושה את החילוץ. דיבור סוכן שחוזר על עצמו מקבל מזהה ומקרא, כך ששורה שהסוכן אומר בכל שיחה מופיעה פעם אחת, עם ספירה; אמירות של לקוחות וחריגות של הסוכן נשמרות מילה במילה. ואז הקריאה הולכת בשכבות. מעבר מבני על כל שיחה, בסקריפט, סופר עד לאן כל שיחה הגיעה: פתיח, פיץ׳, שאלת הסגירה, איזה כלי נורה ובאיזה תור. אחר כך אדם קורא כל שיחה שנגמרה בתוצאה, וכל שיחה שבה שאלת הסגירה נשאלה ונענתה בלי תוצאה, כי אלה הרגעים שבהם שיפוט שגוי עולה ליד. ורשימה של כל אמירה ייחודית של לקוחות, עם כמה פעמים נאמרה, מראה מה שהספירות לא יכולות: מה אנשים באמת שאלו, ומה הסוכן אף פעם לא טיפל בו.",
              "רק אז רץ ניתוח LLM ממוקד, על המקרים שמצדיקים אותו, ואדם מאמת מה שהוא אומר. המדדים מקובצים לפי מי שצריך לתקן אותם, וממצא חייב לעבור שלושה שערים לפני שהוא נספר: ציטוט מילה במילה, הצלבה מול התוצאה שנרשמה לשיחה, וסימון אם הוא נמדד או הונח, כי היעדר אירוע של כלי הוא לא הוכחה שהכלי לא נורה.",
            ],
          },
          {
            title: "בוקר עם אפס תוצאות",
            paragraphs: [
              "בוקר אחד קמפיין גדול רץ במשך שעות, והפלטפורמה רשמה אפס תוצאות בזמן שהגיליון של הלקוח המשיך להתמלא. הכול נראה שבור בבת אחת: הסוכן, הכלים, המנוע. הדרך לצמצם הייתה קבוצת ביקורת: קמפיין אחר מאותו יום, על אותו מנוע, שהסוכן שלו השתמש בכלים המובנים. התוצאות שלו נרשמו. אז התקלה גרה במסלול של הכלים המותאמים. על הכלי הזה היה אחראי מישהו אחר, אז עד סוף היום זה הגיע אליו כרשימה קצרה של באגים לפי חומרה, כל אחד עם מזהי השיחה כדי לשחזר אותו.",
              "אותו יום הראה גם למה דגל הוא לא ממצא. הרבה שורות סומנו כבקשות לחזור; כשקוראים אותן מול המילים של הלקוח עצמו, רוב הבקשות לא היו כאלה. וכל בקשות ההסרה סומנו נכון, וזה הדבר הראשון שבודקים, כי הסרה שפוספסה היא הטעות האחת שקמפיין לא יכול להרשות לעצמו.",
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
              "התהליך רץ כל עוד לקוחות הקמפיינים היוצאים היו היום־יום שלי: קודם חילוץ קל, ניתוח מעמיק רק איפה שהיה מוצדק, ואדם על כל ממצא לפני שהגיע ללקוח. כשהתקופה נגמרה, כל לקוח עבר למי שבא אחריי עם מסמך מסירה: איפה הדברים עומדים, מה חוסם, ומה הצעד הבא.",
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
            title: "הבעיה",
            paragraphs: [
              "לקחים מבדיקות הולכים לאיבוד. עיקרון בלי המדידה שמאחוריו נגזר מחדש בסוכן הבא, מתווכחים עליו, ולפעמים הופכים אותו בטעות. הכלל שנשבר הכי הרבה בפרומפטים קוליים, איך שורות דיבור מצוטטות לסוכן בתוך הפרומפט, הוא גם הסיבה העיקרית לסוכנים שנשמעים רובוטיים, והוא המשיך להישבר כי אף אחד לא כתב מה באמת קרה כשהוא נשבר.",
            ],
          },
          {
            title: "מסמך ליבה אחד, ארבעה־עשר נושאים",
            paragraphs: [
              "מסמך ליבה קובע את המדיניות: כללי השפה, כלל הציטוט, העיקרון המנחה שהפרומפט הוא מוח מונחה־עקרונות ולא תסריט, ששת הדברים שכל פרומפט חייב לגרום לסוכן להבין: מי הוא והאם הוא התקשר או שהתקשרו אליו, מה הוא יודע, מה הוא מציע, איך הוא אומר את זה כמו בן אדם, אילו פרטים הוא אוסף, ואיך הוא מנהל שיחה טבעית, צ׳קליסט לפני העלייה, מעקב מאמירה גרועה בחזרה למקור שיצר אותה, ושער איכות לפני שמכריזים על שיפור.",
              "ארבע־עשרה מחלקות נושא מחזיקות את הלקחים: עוגנים, אודיו וזיהוי דיבור, סיום השיחה, שער המדידה, אמת של זהות, ידע, קונפיגורציית מודל, מלאכת הפרומפט, פרומפט מול קוד, סגנון הדיבור, אותות מערכת, כלים, פרוזודיה של הדיבור וזרימת תורים.",
            ],
          },
          {
            title: "מה כל לקח חייב לשאת",
            paragraphs: [
              "לכל לקח אותם שדות: תג, מודל, הקשר, תצפית, ממצא, השלכה, וכשהוא מחליף לקח ישן, מה הוא מחליף. לקח מתוארך מנצח עיקרון מוצהר. לקח לעולם לא נמחק ולא מנוסח מחדש; היפוך הוא רשומה חדשה שמצביעה על הישנה. לכל לקח בית אחד, ולקח שנמדד על מודל אחר נקרא כהשערה, לא משנה מה התג שלו. מה שאי אפשר לסווג הולך לתיבת כניסה, כדי שהניתוב לעולם לא יחסום את הקליטה.",
            ],
          },
          {
            title: "לקח אחד, כמו שהוא רשום",
            paragraphs: [
              "תג: מדוד. הקשר: סוכנת תמיכה הייתה צריכה להעביר מתקשר שלוש בדיקות בבית, והקריאה את שלושתן בנשימה אחת, כרשימה. תצפית: העובדות ישבו במאגר הידע כרשימה, אז הן הוקראו כרשימה; כשהועברו לפרומפט, אותו כשל חזר משם; וכשנכתבו מחדש כרצף ממוספר, הסוכנת צעדה את השלבים כתסריט ושאלה את הבדיקה השנייה אחרי שהמתקשר כבר ענה עליה. ממצא: אם עובדה תוקרא בקול קובעת הצורה שלה, לא המקום שלה, ורצף ממוספר הופך ידע לתסריט. השלכה: עובדות נכתבות בצורה שאי אפשר להרים ממנה משפט, שם פועל ולא פסוקית מוכנה, והפרומפט אומר במפורש שהן מה שהסוכנת יודעת, לא מה שהיא אומרת.",
            ],
          },
          {
            title: "מול מה שמקובל בתחום",
            paragraphs: [
              "המאגר נבדק מול ההנחיות שהפלטפורמות המובילות לסוכני קול מפרסמות, נושא אחד בכל פעם. מודלים קטנים עושים את האיסוף, ומותר להם להביא רק ציטוטים מדויקים: טענה בלי ציטוט נזרקת. מודל חזק משווה אז כל לקח לציטוטים ומציע שינויים, מודל ממשפחה אחרת סוקר את ההצעות האלה, ואני מכריע על כל אחת. לפני שזה מתחיל, המאגר מקבל תג ונשאר קפוא, כך שכל שינוי מוצע הוא diff מול גרסה ידועה, כזה שאפשר למדוד או לבטל.",
            ],
          },
          {
            title: "התוצאה",
            paragraphs: [
              "רוב הלקחים מדודים, כחמישית עדיין השערות, ושמונה־עשר הם תיקונים שהפכו משהו שהאמנתי בו קודם. התיקונים הם העניין. המאגר אישי ופרטי, והוא בשימוש יומי: מסמך הליבה הוא הדבר הראשון שסוכן קוד קורא לפני שנוגעים בפרומפט, ושיחה שנכשלה נבדקת מול הנושא שלה לפני שמתווכחים עליה. הוא שיטת העבודה שמאחורי כל סוכן בפרויקט הראשון.",
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
