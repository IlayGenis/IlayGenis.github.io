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
      work: "Selected work",
      about: "About",
      contact: "Contact",
      label: "Main navigation",
      language: "Switch to Hebrew",
      skip: "Skip to content",
    },
    hero: {
      eyebrow: "AI SOLUTIONS / SOFTWARE",
      lines: ["Real problems.", "Practical AI."],
      intro:
        "I’m Ilay, an AI Solutions Engineer at Callex. I turn business requirements into Hebrew voice agents, integrations and working software, then test what actually happens on the call.",
      availability: "Open to AI solutions & software roles",
      work: "Explore my work",
      contact: "Get in touch",
      note: "Working remotely. Hebrew native, fluent English.",
      focusLabel: "WHERE I WORK",
      focus: ["Hebrew voice AI", "Integrations", "AI-assisted development"],
    },
    work: {
      label: "01 / SELECTED WORK",
      title: "From requirements\nto real use.",
      intro:
        "Four closer looks at the problems I work on, the decisions I own and how I check the result.",
      read: "Read case study",
      confidentiality:
        "Cases 1–3 are work at Callex, anonymized. Diagrams are high-level illustrations.",
    },
    experience: {
      label: "02 / EXPERIENCE",
      title: "Learning through\nproduction work.",
      company: "Callex",
      period: "May 2026 – present",
      intro:
        "AI Solutions Engineer in a small, early-stage team. My work runs from the first client conversation to the verified agent: discovery, agent development, tools and integrations, evaluation and engine-level investigation.",
      items: [
        {
          title: "Business needs → technical requirements",
          text: "Discovery and specification conversations with dozens of clients. Each one becomes a standalone brief the builder can work from: the goal of the call, what counts as success, what the agent collects and delivers, its boundaries and the questions still open.",
        },
        {
          title: "Build, test, investigate",
          text: "Developing and debugging 30+ Hebrew voice agents for 20+ businesses across insurance, finance and tax refunds, telecom and TV retention and sales, fitness, hearing care, real estate, automotive, business consulting, restaurants and ordering, healthcare, travel and retail. Scenario-based evaluations, and engine issues reproduced and reported to the engine team.",
        },
        {
          title: "Tools that connect the work",
          text: "JavaScript tools for lead submission, removal requests and CRM connections, with Make webhooks and Google Apps Script / Sheets workflows. Since August, full technical ownership of the tools behind the outbound campaign agents: code, descriptions, parameter schemas and webhook targets.",
        },
        {
          title: "Campaign analysis & data",
          text: "A campaign review workflow that keeps mechanical measurement on the agent’s side of the conversation and a person on the verdict. A transactional SQL recovery of campaign data with a rollback path. Database changes shipped as numbered, forward-only migrations.",
        },
        {
          title: "Beyond the conversation",
          text: "A WhatsApp operations system for a delivery company, delivered to production. The company website, a bilingual client dashboard, and the cross-project documents that hold it together: integration maps, API contracts and architecture decision records. A written spec of the company’s delivery process, from sale to live.",
        },
      ],
      ownershipTitle: "How I work with coding agents",
      ownership:
        "Claude Code and Codex are a significant part of my workflow. Agents generate code; I own the requirements, the system’s behavior, the testing and the decision whether the result meets the need. Four practices keep that honest. One source-of-truth document per project, with the code map updated in the same change. A “done” gate: nothing is finished until the checks run and the raw output is reported, failures included. A simulator before any live system, and database changes as numbered, forward-only migrations reviewed before they run. Lessons tagged as measured or hypothesis, and changes only after measurement. I’m still building the fundamentals behind some of these decisions, and I say so when it matters.",
    },
    capabilities: {
      label: "03 / CAPABILITIES",
      title: "What I bring\nto the work.",
      groups: [
        {
          title: "Hebrew voice AI",
          text: "Agents that hold a real conversation in Hebrew and do something useful with it.",
          items: [
            "Hebrew voice agents",
            "Prompt architecture",
            "Conversational QA & evals",
            "TTS pronunciation & prosody",
            "Failure analysis",
            "Client discovery",
          ],
        },
        {
          title: "Integration & data",
          text: "Connecting the conversation to business systems, and keeping the data trustworthy.",
          items: [
            "Webhooks",
            "Make",
            "CRM integrations",
            "Google Apps Script / Sheets",
            "Supabase",
            "SQL: migrations, recovery",
            "Git workflows",
          ],
        },
        {
          title: "AI-assisted software",
          text: "Technologies I use in real projects with coding-agent support.",
          items: [
            "Claude Code",
            "Codex",
            "JavaScript / TypeScript",
            "Next.js",
            "Python",
            "WhatsApp bots",
          ],
        },
      ],
      learningTitle: "Working principles",
      learning:
        "The simplest check that narrows the question comes first. A simulator before any live system. Evidence before a change, and a real call before “fixed”. A failure gets an address, prompt, tool or engine, before it gets a fix.",
    },
    background: {
      label: "04 / BACKGROUND",
      title: "A different route\ninto software.",
      intro:
        "My background is in film and cinematography. Software pulls me toward the same kind of problem: understand the intended result, work through the constraints and find a practical way to get there.",
      items: [
        {
          title: "Film & cinematography",
          detail: "Tel Aviv University · 2022–2025",
          text: "BA in Film and Television, with a focus on cinematography. A foundation in visual thinking, collaboration and solving problems inside constraints.",
        },
        {
          title: "Freelance cinematography & video",
          detail: "2022–2025",
          text: "Director of photography on short films, and freelance shooting and editing of social video for public and cultural institutions.",
        },
        {
          title: "Applied AI training",
          detail: "AI Game Changer · Brain · Completed 2026",
          text: "Practical training in AI implementation and automation. By the time the course reached coding agents I was already working in the field, and the final project overlapped with the company website and dashboard work.",
        },
        {
          title: "Technical support",
          detail: "Bezeq International · 2021",
          text: "Customer-facing technical service at an internet provider. Early practice in diagnosing a problem from a description and explaining the fix clearly.",
        },
      ],
      nextTitle: "What I’m looking for next",
      next: "An AI solutions, implementation, integration or software role in a mature engineering team, working remotely. I want experienced developers and real code review around me, so the fundamentals grow as fast as the delivery.",
    },
    contact: {
      label: "05 / CONTACT",
      title: "Let’s build\nsomething useful.",
      intro:
        "Looking for someone who takes AI solutions from a client conversation to real use, and tests what happens in between? I’d be glad to talk.",
      email: "genisilay@gmail.com",
      links: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/ilay-genis-b240a4352",
        },
        { label: "GitHub", href: "https://github.com/IlayGenis" },
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
    },
    footer:
      "AI solutions. A visual background. A growing engineering practice.",
    projects: [
      {
        slug: "hebrew-voice-agents",
        number: "01",
        category: "HEBREW VOICE AI",
        title: "Agents that survive the real call.",
        summary:
          "Building, testing and debugging 30+ Hebrew voice agents for 20+ businesses: discovery, prompt architecture, tools, evaluation and engine-level investigation.",
        status: "In production, ongoing",
        technologies: [
          "Hebrew voice AI",
          "JavaScript",
          "Webhooks",
          "Make",
          "Apps Script",
        ],
        diagram: {
          label: "FROM CONVERSATION TO EVIDENCE",
          steps: ["Discovery", "Spec", "Prompt + tools", "Evidence"],
          caption: "From a client conversation to a verified agent",
        },
        role: "Client discovery, prompt architecture, JavaScript tools, conversational QA and evaluations, engine-level investigation and reporting. Since August, full technical ownership of the tools behind the outbound campaign agents.",
        sections: [
          {
            title: "The problem",
            paragraphs: [
              "A voice agent has to hold a real conversation in Hebrew and then do something useful with it: qualify a lead, book a slot, take an order, hand off to a person. A prompt that reads well proves none of that. The agent is judged on the call.",
              "I work on 30+ agents for 20+ businesses across insurance, finance and tax refunds, telecom and TV retention and sales, fitness, hearing care, real estate, automotive, business consulting, restaurants and ordering, healthcare, travel and retail. Inbound service agents and outbound campaign agents, each with its own tools.",
            ],
          },
          {
            title: "From discovery to a buildable spec",
            paragraphs: [
              "Every agent starts with a discovery conversation. I turn it into a standalone brief the builder can work from without me in the room: the goal of the call, what counts as success, what the agent collects and what it delivers, where it must stop, and the questions still open.",
              "The brief keeps living after launch. Client requests are tracked as numbered items, decisions are logged with their reasons, and a handoff document accompanies every account that changes hands.",
            ],
          },
          {
            title: "Prompt architecture and tools",
            paragraphs: [
              "The prompt is a principle-driven brain, not a script. Language and intent belong to the model. Facts and state are re-injected by code on every turn, and gates that must not be crossed are validated in code. When a gate blocks, it returns what to do next, never a bare “no”.",
              "The tools are JavaScript. One lead tool submits at the moment of consent and updates the same record when a callback time is added later, keyed by the call and protected by a write lock: no duplicate leads, no lost lead when a call is cut. Removal requests, CRM connections, Make webhooks and Google Apps Script / Sheets follow the same rule. An action counts as done only when the target system confirms it, and a failed attempt stays retryable instead of being blocked as a duplicate.",
            ],
          },
          {
            title: "Hebrew, specifically",
            paragraphs: [
              "Hebrew text-to-speech needs a pronunciation lexicon, and the lexicon needs verification: every corrected word is confirmed on a real call and recorded, with a separate list of candidates not yet verified.",
              "When the agents moved to a new speech vendor, the old rules died silently. On one account, 13 of 15 rules were doing nothing. That became a migration checklist: record the voice and pronunciation settings before switching, and re-verify every fix per vendor. Gender agreement runs through several layers and gets its own checks, and the prompt is written for spoken Hebrew, not written Hebrew.",
            ],
          },
          {
            title: "Testing as evidence",
            paragraphs: [
              "The unit of testing is a conversation, not a test. Every planned call has one terminal spine and carries secondary checks as riders. Success has four tiers, and a scenario that cannot be judged from the log is not an evaluation.",
              "Model-only preview rounds are a filter for iteration. A live call is the only admissible evidence, and “verified” requires a call identifier. Every call also yields background measurements at no extra cost: time to first response, gender agreement, interruptions.",
            ],
          },
          {
            title: "Inside the engine",
            paragraphs: [
              "Failures can come from the prompt, from an integration or from the engine. To tell them apart I mapped the engine from the outside: what the model actually sees on each turn, the gates it never sees, how every configuration key is really edited and how dangerous each one is, and which check to run first for each symptom.",
              "Close to 70 engine issues are documented with a status and a triage rule: a symptom that would recur on another agent is a system issue, anything specific to one agent’s wording stays with that agent. Each open item becomes a verification card with an evidence ladder, from code reading to a live call, and reaches the engine team as a reproducible report.",
            ],
          },
          {
            title: "Outcome",
            paragraphs: [
              "Agents and tools in real business use, and a working method that compounds: what one account teaches is recorded, tagged and reused on the next. That method is the fourth case study.",
            ],
          },
        ],
        takeaway:
          "A useful fix starts with knowing where the failure lives: prompt, tool or engine. Each needs its own investigation, and the result still needs a real call.",
      },
      {
        slug: "delivery-operations",
        number: "02",
        category: "AI-ASSISTED SOFTWARE DELIVERY",
        title: "Delivery operations, connected.",
        summary:
          "A WhatsApp-based operations system for a nationwide delivery company, from customer onboarding to courier coordination.",
        status: "Delivered to production",
        technologies: ["WhatsApp", "Python", "TypeScript", "Supabase"],
        diagram: {
          label: "THE OPERATION, AT A GLANCE",
          steps: ["Customer", "Order", "Coordination", "Courier"],
          caption: "Illustrative service flow",
        },
        role: "Owned requirements, product behavior, system flows and validation. Used AI coding agents extensively for implementation, and was responsible for judging the generated code against the intended behavior.",
        sections: [
          {
            title: "The problem",
            paragraphs: [
              "A nationwide delivery company needed a WhatsApp-based way to bring customer intake and courier operations into a connected system.",
              "The scope covered new customer registration, order intake, courier registration, an existing courier database, courier sourcing and an operational dashboard.",
            ],
          },
          {
            title: "Constraints & decisions",
            paragraphs: [
              "The system had to reflect real operational requirements, including matching shipment size to an appropriate vehicle type. I defined the flows and expected behavior before judging the implementation.",
              "Supabase supported the data layer. I worked on schemas, tables and indexes, choosing indexes around the application’s query patterns, and shipped schema changes as numbered, forward-only migrations. Application logic involved Python and TypeScript.",
            ],
          },
          {
            title: "Approach",
            paragraphs: [
              "I used Claude Code extensively to develop the system. Coding agents generated the code, while I directed feature definition, product behavior, system flows and the technical decisions.",
              "My responsibility included inspecting the result, investigating incorrect behavior and deciding whether the implementation actually met the requirements. The dashboard was part of the same operational product.",
            ],
          },
          {
            title: "Validation",
            paragraphs: [
              "Testing began in a simulated environment and later moved to a real company phone number. I owned the testing strategy, validated the flows and debugged behavior against the intended requirements.",
            ],
          },
          {
            title: "Outcome",
            paragraphs: [
              "The system went into production. It brought customer onboarding, order intake and courier coordination into one delivered product.",
            ],
          },
        ],
        takeaway:
          "Generating code is one part of delivery. Defining correct behavior, testing it against real constraints and investigating where it breaks require their own deliberate work.",
      },
      {
        slug: "campaign-review",
        number: "03",
        category: "ANALYSIS & DATA",
        title: "Code extracts. A person judges.",
        summary:
          "A campaign review workflow that compresses repeated agent speech, keeps every customer utterance verbatim and puts a human on the verdict, plus a transactional SQL recovery of campaign data.",
        status: "Used across outbound campaigns",
        technologies: ["Scripts", "SQL", "Claude", "Human review"],
        diagram: {
          label: "FROM RESULTS TO VERDICT",
          steps: ["Extract", "Structure", "Review", "Verify"],
          caption: "General analysis approach",
        },
        role: "Temporarily responsible for the outbound campaign clients: analyzing results, investigating repeated agent and tool failures, applying fixes and reporting to the client.",
        sections: [
          {
            title: "The problem",
            paragraphs: [
              "An outbound campaign produces many transcripts. Reading all of them through an LLM is expensive, and worse, it invites conclusions the data cannot support. A report can point at an agent or a tool problem, but a flagged pattern is still not a finding.",
            ],
          },
          {
            title: "Constraints & decisions",
            paragraphs: [
              "The boundary is not code versus eyes. It is what the code runs on. The agent’s turns are a near-closed set of strings, so mechanical counting on agent speech and metadata is legitimate. Customer speech is open-ended and corrupted by recognition errors, so it is never measured mechanically. A practical test: if a script’s output is a list of findings, stop.",
              "The limits are declared up front. The stored data has no turn timing, no interruption record and no hang-up cause, so a conclusion can say that the opening is weak, and never say why.",
            ],
          },
          {
            title: "Approach",
            paragraphs: [
              "Code does the extraction. Repeated agent speech gets an identifier and a legend; customer utterances and agent deviations are kept verbatim. A structural layer, a review of outcome calls and missed cases, and a digest of unique customer statements complete the picture without reading every transcript in full.",
              "Only then does targeted LLM analysis run, on the cases that justify it, followed by manual validation. Metrics are grouped by who fixes them, and a round has to pass three admissibility gates before it counts.",
            ],
          },
          {
            title: "Data recovery",
            paragraphs: [
              "One campaign’s records had to be rebuilt from the sources that survived. I prepared the recovery in SQL: a staging area, a single transaction, preconditions, checks before commit, a guard that prevents dialing any restored record, and a separate rollback file. What could not be recovered was documented as such.",
            ],
          },
          {
            title: "Outcome",
            paragraphs: [
              "The workflow ran throughout the period I was responsible for campaign analysis and for fixing recurring problems. Lightweight extraction came before deep transcript analysis, and every finding was validated by a person before it reached the client.",
            ],
          },
        ],
        takeaway:
          "Use the simplest check that narrows the question, measure only what the data can actually answer, and keep a person on the verdict.",
      },
      {
        slug: "voice-agent-playbook",
        number: "04",
        category: "METHOD & KNOWLEDGE",
        title: "Lessons that carry their evidence.",
        summary:
          "A private, structured knowledge base for Hebrew voice-agent prompts: 14 topic classes and 250+ dated lessons, each tagged as measured or hypothesis.",
        status: "Personal, private, in daily use",
        technologies: ["Markdown", "Git", "Claude Code", "Evaluation records"],
        diagram: {
          label: "THE LIFE OF A LESSON",
          steps: ["Observe", "Record", "Tag", "Supersede"],
          caption: "How a lesson enters, and how it leaves",
        },
        role: "Author and maintainer.",
        sections: [
          {
            title: "The problem",
            paragraphs: [
              "Lessons from testing evaporate. A principle without its evidence gets re-derived on the next agent, argued about, and sometimes reversed by accident. The single most-broken rule in voice prompts, how the agent quotes spoken lines, is also the main reason agents sound robotic, and it kept being broken because nobody had written down what actually happened when it was.",
            ],
          },
          {
            title: "Structure",
            paragraphs: [
              "A core document sets the policy: the language rules, the quoting rule, the governing principle that the prompt is a principle-driven brain and not a script, the six pillars every prompt must cover, a pre-flight checklist, a trace from a bad utterance back to the source that produced it, and a quality gate before any improvement is declared.",
              "Fourteen topic classes hold the lessons: anchors, audio and speech recognition, closing, the evidence gate, identity truth, knowledge, model configuration, prompt craft, prompt versus code, register, system signals, tools, speech prosody and turn flow.",
            ],
          },
          {
            title: "The record contract",
            paragraphs: [
              "Every lesson carries the same fields: tag, model, context, evidence, finding, implication and, when it replaces an older lesson, what it supersedes. A dated lesson beats a stated principle. A lesson is never deleted or reworded; a reversal is a new record that points at the old one. Each lesson has one home, and a lesson measured on a different model is read as a hypothesis whatever its tag. Anything unclassifiable goes to an inbox, so that routing never blocks capture.",
            ],
          },
          {
            title: "Audit",
            paragraphs: [
              "The base is audited against published guidance from the leading voice-agent platforms, topic by topic. Cheap models collect verbatim quotes only, and a claim without a quote is not collected. One strong model judges every row, a model from a different family reviews the resulting diff, and I decide per row. A tagged baseline stays frozen, so every proposed change is a measurable diff against it.",
            ],
          },
          {
            title: "Outcome",
            paragraphs: [
              "Most lessons are validated, about a fifth are still hypotheses, and two dozen are corrections that reversed something I believed earlier. The corrections are the point. The base is personal and private, and it is the working method behind every agent in the first case study.",
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
      work: "עבודות נבחרות",
      about: "קצת עליי",
      contact: "יצירת קשר",
      label: "ניווט ראשי",
      language: "Switch to English",
      skip: "דילוג לתוכן",
    },
    hero: {
      eyebrow: "AI SOLUTIONS / SOFTWARE",
      lines: ["בעיות אמיתיות.", "AI שעובד."],
      intro:
        "אני עילי, AI Solutions Engineer ב־Callex. אני מתרגם צרכים עסקיים לסוכני־קול בעברית, לאינטגרציות ולתוכנה שעובדת, ובודק מה באמת קורה בשיחה.",
      availability: "פתוח לתפקידי AI Solutions ופיתוח",
      work: "לעבודות שלי",
      contact: "בואו נדבר",
      note: "עבודה מרחוק. עברית שפת־אם, אנגלית שוטפת.",
      focusLabel: "תחומי העשייה שלי",
      focus: ["סוכני־קול בעברית", "אינטגרציות", "פיתוח בעזרת AI"],
    },
    work: {
      label: "01 / עבודות נבחרות",
      title: "מדרישות\nלשימוש בפועל.",
      intro:
        "ארבעה מבטים מקרוב על הבעיות שאני עובד עליהן, ההחלטות שבאחריותי והדרך שבה אני בודק את התוצאה.",
      read: "למקרה הבוחן",
      confidentiality:
        "מקרים 1–3 הם עבודה ב־Callex, אנונימית. התרשימים הם המחשות כלליות בלבד.",
    },
    experience: {
      label: "02 / ניסיון",
      title: "לומד מתוך\nעבודה בשטח.",
      company: "Callex",
      period: "מאי 2026–היום",
      intro:
        "AI Solutions Engineer בצוות קטן ובשלב מוקדם. העבודה שלי נמתחת משיחת האפיון הראשונה ועד לסוכן מאומת: אפיון, בניית סוכנים, כלים ואינטגרציות, הערכה ותחקור ברמת המנוע.",
      items: [
        {
          title: "מצורך עסקי לדרישה טכנית",
          text: "שיחות אפיון עם עשרות לקוחות. כל שיחה הופכת למסמך עצמאי שבונה יכול לעבוד ממנו: מטרת השיחה, מה נחשב הצלחה, מה הסוכן אוסף ומה הוא מוסר, איפה הוא עוצר, ואילו שאלות עדיין פתוחות.",
        },
        {
          title: "בנייה, בדיקה ותחקור",
          text: "פיתוח ותיקון של יותר מ־30 סוכני־קול בעברית ליותר מ־20 עסקים: ביטוח, פיננסים והחזרי מס, שימור ומכירות בתקשורת ובטלוויזיה, כושר, שמיעה, נדל״ן, רכב, ייעוץ עסקי, מסעדות והזמנות, בריאות, תיירות וקמעונאות. הערכות מבוססות תרחישים, ושחזור תקלות מנוע ודיווח עליהן לצוות המנוע.",
        },
        {
          title: "כלים שמחברים בין מערכות",
          text: "כלי JavaScript לשליחת לידים, לבקשות הסרה ולחיבורי CRM, לצד Webhooks ב־Make ותהליכים ב־Google Apps Script וב־Sheets. מאוגוסט, אחריות טכנית מלאה על הכלים של סוכני הקמפיינים היוצאים: קוד, תיאורים, סכמות פרמטרים ויעדי webhook.",
        },
        {
          title: "ניתוח קמפיינים ודאטה",
          text: "תהליך סקירת קמפיינים שמשאיר את המדידה המכנית בצד של הסוכן ואת ההכרעה אצל אדם. שחזור טרנזקציוני של נתוני קמפיין ב־SQL, עם מסלול rollback מוכן מראש. שינויי מסד נתונים יוצאים כמיגרציות ממוספרות, קדימה בלבד.",
        },
        {
          title: "מעבר לשיחה עצמה",
          text: "מערכת תפעול ב־WhatsApp לחברת משלוחים, שנמסרה ועלתה לייצור. אתר החברה, דשבורד לקוחות דו־לשוני, והמסמכים חוצי־הפרויקטים שמחזיקים את כל זה יחד: מפות אינטגרציה, חוזי API ורשומות החלטה ארכיטקטוניות. מפרט כתוב של תהליך המסירה בחברה, ממכירה ועד עלייה לאוויר.",
        },
      ],
      ownershipTitle: "איך אני עובד עם סוכני קוד",
      ownership:
        "Claude Code ו־Codex הם חלק משמעותי מתהליך העבודה שלי. הסוכנים מייצרים קוד; אני אחראי לדרישות, להתנהגות המערכת, לבדיקות ולהכרעה אם התוצאה עונה על הצורך. ארבע פרקטיקות שומרות על זה כן. מסמך אמת אחד לכל פרויקט, ומפת קוד שמתעדכנת באותו שינוי. שער ״בוצע״: שום דבר לא מסתיים לפני שהבדיקות רצות והפלט הגולמי מדווח, כולל כשלים. סימולטור לפני כל מערכת חיה, ושינויי מסד נתונים כמיגרציות ממוספרות שעוברות ביקורת לפני שהן רצות. לקחים מתויגים כמדוד או כהשערה, ושינוי רק אחרי מדידה. את חלק מהיסודות שמאחורי ההחלטות האלה אני עדיין בונה, ואני אומר את זה כשזה משנה.",
    },
    capabilities: {
      label: "03 / יכולות",
      title: "מה אני מביא\nלעבודה.",
      groups: [
        {
          title: "סוכני־קול בעברית",
          text: "סוכנים שמנהלים שיחה אמיתית בעברית ועושים איתה משהו מועיל.",
          items: [
            "סוכני־קול בעברית",
            "ארכיטקטורת פרומפט",
            "בדיקות שיחה והערכות",
            "הגייה ופרוזודיה ל־TTS",
            "ניתוח תקלות",
            "אפיון מול לקוחות",
          ],
        },
        {
          title: "אינטגרציות ודאטה",
          text: "חיבור השיחה למערכות העסקיות, ושמירה על דאטה שאפשר לסמוך עליה.",
          items: [
            "Webhooks",
            "Make",
            "חיבורי CRM",
            "Google Apps Script / Sheets",
            "Supabase",
            "SQL: מיגרציות ושחזור",
            "עבודה עם Git",
          ],
        },
        {
          title: "פיתוח תוכנה בעזרת AI",
          text: "טכנולוגיות שאני עובד איתן בפרויקטים אמיתיים, בסיוע סוכני קוד.",
          items: [
            "Claude Code",
            "Codex",
            "JavaScript / TypeScript",
            "Next.js",
            "Python",
            "בוטים ל־WhatsApp",
          ],
        },
      ],
      learningTitle: "עקרונות עבודה",
      learning:
        "קודם הבדיקה הפשוטה ביותר שמצמצמת את השאלה. סימולטור לפני כל מערכת חיה. ראיה לפני שינוי, ושיחה אמיתית לפני ״תוקן״. תקלה מקבלת כתובת, פרומפט, כלי או מנוע, לפני שהיא מקבלת תיקון.",
    },
    background: {
      label: "04 / רקע",
      title: "דרך אחרת\nאל התוכנה.",
      intro:
        "הרקע שלי הוא בקולנוע ובצילום קולנועי. בתוכנה אני נמשך לאותו סוג של בעיה: להבין מה רוצים להשיג, לעבור דרך האילוצים ולמצוא דרך מעשית להגיע לשם.",
      items: [
        {
          title: "קולנוע וצילום",
          detail: "אוניברסיטת תל אביב · 2022–2025",
          text: "תואר ראשון בקולנוע וטלוויזיה, בדגש על צילום קולנועי. בסיס לחשיבה חזותית, לעבודת צוות ולפתרון בעיות בתוך אילוצים.",
        },
        {
          title: "צילום ווידאו כפרילנסר",
          detail: "2022–2025",
          text: "צלם ראשי בסרטים קצרים, וצילום ועריכה של תוכן וידאו לרשתות החברתיות עבור מוסדות ציבור ותרבות.",
        },
        {
          title: "הכשרה ב־AI יישומי",
          detail: "AI Game Changer · Brain · הושלם 2026",
          text: "הכשרה מעשית ביישום פתרונות AI ובאוטומציה. כשהקורס הגיע לסוכני קוד כבר עבדתי בתחום, ופרויקט הסיום חפף לעבודה על אתר החברה ועל הדשבורדים.",
        },
        {
          title: "תמיכה טכנית",
          detail: "בזק בינלאומי · 2021",
          text: "שירות טכני מול לקוחות בספקית אינטרנט. תרגול מוקדם באבחון בעיה מתוך תיאור, ובהסבר ברור של הפתרון.",
        },
      ],
      nextTitle: "מה אני מחפש בשלב הבא",
      next: "תפקיד בפתרונות AI, ביישום, באינטגרציות או בפיתוח תוכנה, בצוות הנדסי בוגר ובעבודה מרחוק. אני רוצה סביבי מפתחים מנוסים וביקורת קוד אמיתית, כדי שהיסודות יצמחו מהר כמו המסירה.",
    },
    contact: {
      label: "05 / יצירת קשר",
      title: "בואו נבנה\nמשהו שימושי.",
      intro:
        "מחפשים מישהו שלוקח פתרונות AI משיחה עם לקוח ועד לשימוש בפועל, ובודק מה קורה בדרך? אשמח לדבר.",
      email: "genisilay@gmail.com",
      links: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/ilay-genis-b240a4352",
        },
        { label: "GitHub", href: "https://github.com/IlayGenis" },
      ],
    },
    case: {
      back: "עבודות נבחרות",
      label: "מקרה בוחן",
      role: "התפקיד שלי",
      tools: "טכנולוגיות וכלים",
      takeaway: "מה למדתי",
      next: "מקרה הבוחן הבא",
      all: "חזרה לכל העבודות",
      confidentiality:
        "אנונימי. התרשימים מציגים רעיונות כלליים, ללא ארכיטקטורה קניינית. לא נכללים קוד פנימי, פרומפטים, נתוני לקוחות או צילומי מסך.",
      contents: "במקרה הבוחן הזה",
    },
    footer: "פתרונות AI. רקע חזותי. התפתחות הנדסית.",
    projects: [
      {
        slug: "hebrew-voice-agents",
        number: "01",
        category: "סוכני־קול בעברית",
        title: "סוכנים ששורדים שיחה אמיתית.",
        summary:
          "בנייה, בדיקה ותחקור של יותר מ־30 סוכני־קול בעברית ליותר מ־20 עסקים: אפיון, ארכיטקטורת פרומפט, כלים, הערכה ותחקור ברמת המנוע.",
        status: "בייצור, עבודה שוטפת",
        technologies: [
          "Voice AI בעברית",
          "JavaScript",
          "Webhooks",
          "Make",
          "Apps Script",
        ],
        diagram: {
          label: "משיחה לראיה",
          steps: ["אפיון", "מפרט", "פרומפט וכלים", "ראיה"],
          caption: "משיחה עם לקוח ועד לסוכן מאומת",
        },
        role: "אפיון מול לקוחות, ארכיטקטורת פרומפט, כלי JavaScript, בדיקות שיחה והערכות, תחקור ברמת המנוע ודיווח. מאוגוסט, אחריות טכנית מלאה על הכלים של סוכני הקמפיינים היוצאים.",
        sections: [
          {
            title: "הבעיה",
            paragraphs: [
              "סוכן קול צריך לנהל שיחה אמיתית בעברית ואז לעשות איתה משהו מועיל: לסנן ליד, לקבוע תור, לקלוט הזמנה, להעביר לאדם. פרומפט שנקרא טוב לא מוכיח שום דבר מזה. הסוכן נשפט בשיחה.",
              "אני עובד על יותר מ־30 סוכנים ליותר מ־20 עסקים: ביטוח, פיננסים והחזרי מס, שימור ומכירות בתקשורת ובטלוויזיה, כושר, שמיעה, נדל״ן, רכב, ייעוץ עסקי, מסעדות והזמנות, בריאות, תיירות וקמעונאות. סוכני שירות נכנסים וסוכני קמפיינים יוצאים, ולכל אחד הכלים שלו.",
            ],
          },
          {
            title: "מאפיון למפרט שאפשר לבנות ממנו",
            paragraphs: [
              "כל סוכן מתחיל בשיחת אפיון. אני הופך אותה למסמך עצמאי שבונה יכול לעבוד ממנו גם בלעדיי: מטרת השיחה, מה נחשב הצלחה, מה הסוכן אוסף ומה הוא מוסר, איפה הוא חייב לעצור, ואילו שאלות עדיין פתוחות.",
              "המסמך ממשיך לחיות אחרי העלייה לאוויר. בקשות לקוח נרשמות כפריטים ממוספרים, החלטות מתועדות עם הנימוק שלהן, ולכל חשבון שעובר ידיים מצורף מסמך מסירה.",
            ],
          },
          {
            title: "ארכיטקטורת פרומפט וכלים",
            paragraphs: [
              "הפרומפט הוא מוח מונחה־עקרונות, לא תסריט. שפה וכוונה שייכות למודל. עובדות ומצב מוזרקים על ידי קוד בכל תור מחדש, ושערים שאסור לחצות מאומתים בקוד. כשהשער חוסם, הוא מחזיר מה לעשות עכשיו, ולעולם לא ״לא״ יבש.",
              "הכלים כתובים ב־JavaScript. כלי הלידים שולח ברגע ההסכמה ומעדכן את אותה רשומה כשנוסף אחר כך מועד חזרה, לפי מזהה השיחה ועם נעילת כתיבה: אין לידים כפולים, ואין ליד שהולך לאיבוד כשהשיחה נקטעת. בקשות הסרה, חיבורי CRM, Webhooks ב־Make ו־Google Apps Script / Sheets פועלים לפי אותו כלל. פעולה נחשבת הושלמה רק כשמערכת היעד מאשרת אותה, וניסיון שנכשל נשאר זמין לניסיון חוזר במקום להיחסם ככפילות.",
            ],
          },
          {
            title: "עברית, ספציפית",
            paragraphs: [
              "המרת טקסט לדיבור בעברית צריכה לקסיקון הגייה, והלקסיקון צריך אימות: כל מילה שתוקנה מאושרת בשיחה אמיתית ונרשמת, לצד רשימה נפרדת של מועמדות שעדיין לא אומתו.",
              "כשהסוכנים עברו לספק קול חדש, הכללים הישנים מתו בשקט. בחשבון אחד, 13 מתוך 15 כללים לא עשו כלום. מזה נולד צ׳קליסט הגירה: לתעד את הגדרות הקול וההגייה לפני המעבר, ולאמת מחדש כל תיקון אצל כל ספק. התאמת מגדר עוברת דרך כמה שכבות ומקבלת בדיקות משלה, והפרומפט נכתב לעברית מדוברת, לא כתובה.",
            ],
          },
          {
            title: "בדיקות כראיה",
            paragraphs: [
              "יחידת הבדיקה היא שיחה, לא טסט. לכל שיחה מתוכננת יש עמוד שדרה אחד, ובדיקות משניות נוסעות עליה כרוכבים. להצלחה ארבע דרגות, ותרחיש שאי אפשר לשפוט מתוך הלוג אינו הערכה.",
              "סבבי preview על המודל בלבד הם מסנן לאיטרציה. שיחה חיה היא הראיה היחידה שקבילה, ו״מאומת״ דורש מזהה שיחה. כל שיחה מניבה גם מדידות רקע בלי עלות נוספת: זמן עד התגובה הראשונה, התאמת מגדר, הפרעות.",
            ],
          },
          {
            title: "בתוך המנוע",
            paragraphs: [
              "תקלה יכולה להגיע מהפרומפט, מאינטגרציה או מהמנוע. כדי להבדיל ביניהם מיפיתי את המנוע מבחוץ: מה המודל באמת רואה בכל תור, אילו שערים הוא לא רואה לעולם, איך כל מפתח קונפיגורציה באמת נערך וכמה הוא מסוכן, ואיזו בדיקה מריצים ראשונה לכל תסמין.",
              "קרוב ל־70 תקלות מנוע מתועדות עם סטטוס וכלל טריאז׳: תסמין שיחזור בסוכן אחר הוא תקלת מערכת, וכל מה שספציפי לניסוח של סוכן אחד נשאר אצל אותו סוכן. כל פריט פתוח הופך לכרטיס אימות עם סולם ראיות, מקריאת קוד ועד שיחה חיה, ומגיע לצוות המנוע כדוח שאפשר לשחזר.",
            ],
          },
          {
            title: "התוצאה",
            paragraphs: [
              "סוכנים וכלים בשימוש עסקי אמיתי, ושיטת עבודה שמצטברת: מה שחשבון אחד מלמד נרשם, מתויג ומשמש בחשבון הבא. השיטה הזאת היא מקרה הבוחן הרביעי.",
            ],
          },
        ],
        takeaway:
          "תיקון מועיל מתחיל בידיעה איפה התקלה גרה: פרומפט, כלי או מנוע. כל אחד דורש תחקור משלו, והתוצאה עדיין צריכה שיחה אמיתית.",
      },
      {
        slug: "delivery-operations",
        number: "02",
        category: "פיתוח תוכנה בעזרת AI",
        title: "מחברים את תפעול המשלוחים.",
        summary:
          "מערכת תפעול ב־WhatsApp לחברת משלוחים ארצית, מקליטת לקוחות ועד לתיאום שליחים.",
        status: "נמסרה ועלתה לייצור",
        technologies: ["WhatsApp", "Python", "TypeScript", "Supabase"],
        diagram: {
          label: "התהליך במבט כללי",
          steps: ["לקוח", "הזמנה", "תיאום", "שליח"],
          caption: "המחשה כללית של תהליך השירות",
        },
        role: "אחריות לדרישות, להתנהגות המוצר, לתהליכי המערכת ולבדיקות. שימוש נרחב בסוכני קוד למימוש, ואחריות לשפוט את הקוד שנוצר מול ההתנהגות הנדרשת.",
        sections: [
          {
            title: "הבעיה",
            paragraphs: [
              "חברת משלוחים ארצית הייתה צריכה לחבר בין קליטת לקוחות לבין תפעול שליחים, באמצעות מערכת מבוססת WhatsApp.",
              "היקף המוצר כלל רישום לקוחות חדשים, קליטת הזמנות, רישום שליחים, מאגר שליחים קיים, איתור שליחים ודשבורד תפעולי.",
            ],
          },
          {
            title: "אילוצים והחלטות",
            paragraphs: [
              "המערכת הייתה צריכה לענות על דרישות תפעול אמיתיות, כולל התאמת גודל המשלוח לסוג הרכב. הגדרתי את התהליכים ואת ההתנהגות הרצויה כבסיס לבדיקת המימוש.",
              "שכבת הנתונים נשענה על Supabase. עבדתי על סכמות, טבלאות ואינדקסים, בחרתי אינדקסים לפי דפוסי השאילתות של היישום, ושינויי הסכמה יצאו כמיגרציות ממוספרות, קדימה בלבד. לוגיקת היישום כללה Python ו־TypeScript.",
            ],
          },
          {
            title: "הגישה",
            paragraphs: [
              "נעזרתי רבות ב־Claude Code בפיתוח המערכת. סוכני הקוד ייצרו את הקוד, ואני הובלתי את הגדרת היכולות, התנהגות המוצר, תהליכי המערכת וההחלטות הטכניות.",
              "האחריות שלי כללה בדיקת התוצאה, תחקור התנהגות לא תקינה והכרעה אם המימוש עומד בדרישות. הדשבורד היה חלק מאותו מוצר תפעולי.",
            ],
          },
          {
            title: "בדיקות",
            paragraphs: [
              "הבדיקות התחילו בסביבה מדומה, ובהמשך עברו למספר טלפון אמיתי של החברה. הייתי אחראי לאסטרטגיית הבדיקות, לבדיקת התהליכים ולתחקור התנהגות ביחס לדרישות.",
            ],
          },
          {
            title: "התוצאה",
            paragraphs: [
              "המערכת עלתה לייצור. היא איחדה קליטת לקוחות, קליטת הזמנות ותיאום שליחים למוצר אחד שנמסר.",
            ],
          },
        ],
        takeaway:
          "יצירת קוד היא חלק אחד מהמסירה. הגדרת התנהגות נכונה, בדיקתה מול אילוצים אמיתיים ותחקור המקומות שבהם היא נשברת דורשים עבודה בפני עצמם.",
      },
      {
        slug: "campaign-review",
        number: "03",
        category: "ניתוח ודאטה",
        title: "הקוד מחלץ. אדם שופט.",
        summary:
          "תהליך סקירת קמפיינים שמכווץ דיבור סוכן חוזר, שומר כל אמירת לקוח מילה במילה ומשאיר את ההכרעה אצל אדם, ולצידו שחזור טרנזקציוני של נתוני קמפיין ב־SQL.",
        status: "שימש בקמפיינים היוצאים",
        technologies: ["סקריפטים", "SQL", "Claude", "בדיקה אנושית"],
        diagram: {
          label: "מתוצאות להכרעה",
          steps: ["חילוץ", "מבנה", "סקירה", "אימות"],
          caption: "גישת הניתוח ברמה כללית",
        },
        role: "אחריות זמנית על לקוחות הקמפיינים היוצאים: ניתוח תוצאות, תחקור כשלים חוזרים בסוכנים ובכלים, תיקונים ודיווח ללקוח.",
        sections: [
          {
            title: "הבעיה",
            paragraphs: [
              "קמפיין יוצא מייצר הרבה תמלילים. לקרוא את כולם דרך LLM זה יקר, וגרוע מזה, זה מזמין מסקנות שהדאטה לא יכולה לתמוך בהן. דוח יכול להצביע על בעיה בסוכן או בכלי, אבל דפוס שסומן עדיין אינו ממצא.",
            ],
          },
          {
            title: "אילוצים והחלטות",
            paragraphs: [
              "הגבול אינו קוד מול עין אנושית. הגבול הוא על מה הקוד רץ. התורים של הסוכן הם קבוצה כמעט סגורה של מחרוזות, ולכן ספירה מכנית על דיבור הסוכן ועל מטא־דאטה היא לגיטימית. דיבור הלקוח פתוח ומשובש בשגיאות זיהוי, ולכן הוא לעולם לא נמדד מכנית. מבחן מעשי: אם הפלט של הסקריפט הוא רשימת ממצאים, עוצרים.",
              "המגבלות מוצהרות מראש. בדאטה השמורה אין תזמון תורים, אין רישום הפרעות ואין סיבת ניתוק, ולכן מסקנה יכולה לומר שהפתיח חלש, ולעולם לא למה.",
            ],
          },
          {
            title: "הגישה",
            paragraphs: [
              "הקוד עושה את החילוץ. דיבור סוכן חוזר מקבל מזהה ומקרא; אמירות לקוח וחריגות של הסוכן נשמרות מילה במילה. שכבה מבנית, סקירה של שיחות התוצאה ושל מקרי ההחמצה, ותקציר של אמירות לקוח ייחודיות משלימים את התמונה בלי לקרוא כל תמליל במלואו.",
              "רק אז רץ ניתוח LLM ממוקד, על המקרים שמצדיקים אותו, ואחריו אימות ידני. המדדים מקובצים לפי מי שמתקן אותם, וסבב חייב לעבור שלושה שערי קבילות לפני שהוא נספר.",
            ],
          },
          {
            title: "שחזור דאטה",
            paragraphs: [
              "את הרשומות של קמפיין אחד היה צריך לבנות מחדש מהמקורות ששרדו. הכנתי את השחזור ב־SQL: אזור staging, טרנזקציה אחת, תנאי קדם, בדיקות לפני commit, הגנה שמונעת חיוג לכל רשומה משוחזרת, וקובץ rollback נפרד. מה שלא ניתן היה לשחזר תועד ככזה.",
            ],
          },
          {
            title: "התוצאה",
            paragraphs: [
              "התהליך רץ לאורך כל התקופה שבה הייתי אחראי לניתוח הקמפיינים ולתיקון בעיות חוזרות. חילוץ קל קדם לניתוח תמלילים מעמיק, וכל ממצא אומת על ידי אדם לפני שהגיע ללקוח.",
            ],
          },
        ],
        takeaway:
          "מתחילים בבדיקה הפשוטה ביותר שמצמצמת את השאלה, מודדים רק מה שהדאטה באמת יכולה לענות עליו, ומשאירים אדם על ההכרעה.",
      },
      {
        slug: "voice-agent-playbook",
        number: "04",
        category: "שיטה וידע",
        title: "לקחים שנושאים את הראיה שלהם.",
        summary:
          "מאגר ידע פרטי ומובנה לפרומפטים של סוכני־קול בעברית: 14 מחלקות נושא ויותר מ־250 לקחים מתוארכים, כל אחד מתויג כמדוד או כהשערה.",
        status: "אישי, פרטי, בשימוש יומי",
        technologies: ["Markdown", "Git", "Claude Code", "רשומות הערכה"],
        diagram: {
          label: "חייו של לקח",
          steps: ["תצפית", "רישום", "תיוג", "החלפה"],
          caption: "איך לקח נכנס, ואיך הוא יוצא",
        },
        role: "מחבר ומתחזק.",
        sections: [
          {
            title: "הבעיה",
            paragraphs: [
              "לקחים מבדיקות מתאדים. עיקרון בלי הראיה שלו נגזר מחדש בסוכן הבא, מתווכחים עליו, ולפעמים הופכים אותו בטעות. הכלל שנשבר הכי הרבה בפרומפטים קוליים, איך הסוכן מצטט שורות דיבור, הוא גם הסיבה העיקרית לסוכנים שנשמעים רובוטיים, והוא המשיך להישבר כי אף אחד לא כתב מה באמת קרה כשהוא נשבר.",
            ],
          },
          {
            title: "מבנה",
            paragraphs: [
              "מסמך ליבה קובע את המדיניות: כללי השפה, כלל הציטוט, העיקרון המנחה שהפרומפט הוא מוח מונחה־עקרונות ולא תסריט, ששת העמודים שכל פרומפט חייב לכסות, צ׳קליסט לפני העלייה, מעקב מאמירה גרועה בחזרה למקור שיצר אותה, ושער איכות לפני שמכריזים על שיפור.",
              "ארבע־עשרה מחלקות נושא מחזיקות את הלקחים: עוגנים, אודיו וזיהוי דיבור, סגירה, שער הראיות, אמת של זהות, ידע, קונפיגורציית מודל, מלאכת הפרומפט, פרומפט מול קוד, משלב, אותות מערכת, כלים, פרוזודיה של הדיבור וזרימת תורים.",
            ],
          },
          {
            title: "חוזה הרשומה",
            paragraphs: [
              "לכל לקח אותם שדות: תג, מודל, הקשר, ראיה, ממצא, השלכה, וכשהוא מחליף לקח ישן, מה הוא מחליף. לקח מתוארך מנצח עיקרון מוצהר. לקח לעולם לא נמחק ולא מנוסח מחדש; היפוך הוא רשומה חדשה שמצביעה על הישנה. לכל לקח בית אחד, ולקח שנמדד על מודל אחר נקרא כהשערה, יהיה התג שלו אשר יהיה. מה שאי אפשר לסווג הולך לתיבת כניסה, כדי שהניתוב לעולם לא יחסום את הקליטה.",
            ],
          },
          {
            title: "ביקורת",
            paragraphs: [
              "המאגר עובר ביקורת מול הנחיות מפורסמות של הפלטפורמות המובילות לסוכני קול, נושא אחר נושא. מודלים זולים אוספים ציטוטים מילוליים בלבד, וטענה בלי ציטוט אינה נאספת. מודל חזק אחד שופט כל שורה, מודל ממשפחה אחרת סוקר את ההבדלים שנוצרו, ואני מכריע שורה־שורה. baseline מתויג נשאר קפוא, כך שכל שינוי מוצע הוא הבדל מדיד מולו.",
            ],
          },
          {
            title: "התוצאה",
            paragraphs: [
              "רוב הלקחים מאומתים, כחמישית עדיין השערות, ושני תריסר הם תיקונים שהפכו משהו שהאמנתי בו קודם. התיקונים הם העניין. המאגר אישי ופרטי, והוא שיטת העבודה שמאחורי כל סוכן במקרה הבוחן הראשון.",
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
