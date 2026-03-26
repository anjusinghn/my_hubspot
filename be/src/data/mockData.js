export const mockData = {
  dashboard: {
    pipelineSummary: [
      { label: "Qualified pipeline", value: "$1.2M", delta: "+12%", trend: "up", icon: "pipeline", caption: "Week over week" },
      { label: "Won this quarter", value: "$420k", delta: "+8%", trend: "up", icon: "trophy", caption: "Closed won" },
      { label: "Tickets at risk", value: "6", delta: "-2", trend: "down", icon: "alert", caption: "Require triage" },
      { label: "AI deflection", value: "42%", delta: "+5%", trend: "up", icon: "spark", caption: "Last 7 days" }
    ],
    upcomingMeetings: [
      { id: "mtg-1", title: "Enterprise onboarding sync", when: "Today, 4:30 PM EST", owner: "Janet Walters", attendee: "Nova Analytics" },
      { id: "mtg-2", title: "Quarterly renewal prep", when: "Tomorrow, 9:00 AM EST", owner: "Derrick Wade", attendee: "Blue Ridge Energy" }
    ],
    openTickets: [
      { id: "TCK-1043", subject: "SLA breach: integrations down", priority: "Urgent", owner: "Iris Shah", sla: "4m remaining" },
      { id: "TCK-1044", subject: "Billing export mismatch", priority: "High", owner: "Miles Coleman", sla: "1h 12m" }
    ],
    latestChats: [
      { id: "chat-17", contact: "Lauren Pierce", channel: "Website", snippet: "Thanks Lauren, sending the proposal now…", updatedAt: "3m ago" },
      { id: "chat-21", contact: "ACME Robotics", channel: "WhatsApp", snippet: "AI replied: I'll escalate this to a human agent.", updatedAt: "12m ago" }
    ],
    activity: [
      { id: "act-1", type: "deal", actor: "Derrick Wade", description: "moved SolarOne rollout to Proposal", time: "5 minutes ago" },
      { id: "act-2", type: "ticket", actor: "Iris Shah", description: "resolved ticket #TCK-1021", time: "21 minutes ago" },
      { id: "act-3", type: "chat", actor: "AI Assistant", description: "answered pricing question for Lauren Pierce", time: "32 minutes ago" }
    ]
  },
  contacts: {
    summary: { total: 1824, active: 643, newThisWeek: 58, healthScore: 84 },
    views: ["All", "Active", "Renewals", "Expansion", "Churn risk"],
    filters: {
      owners: ["Janet Walters", "Miles Coleman", "Derrick Wade", "Iris Shah"],
      segments: ["Enterprise", "Mid-market", "Startup"]
    },
    rows: [
      {
        id: "con-1",
        name: "Lauren Pierce",
        title: "Revenue Ops Manager",
        company: "ACME Robotics",
        email: "lauren@acmerobotics.com",
        status: "Active",
        lastSeen: "2 hours ago",
        owner: "Miles Coleman",
        score: 92,
        segments: ["Enterprise", "Expansion"]
      },
      {
        id: "con-2",
        name: "Marta Silva",
        title: "Head of Support",
        company: "Nova Analytics",
        email: "marta@novaanalytics.io",
        status: "Onboarding",
        lastSeen: "1 day ago",
        owner: "Iris Shah",
        score: 78,
        segments: ["Mid-market"]
      },
      {
        id: "con-3",
        name: "Elliot James",
        title: "COO",
        company: "Beacon Logistics",
        email: "elliot@beaconlogistics.com",
        status: "Renewal",
        lastSeen: "35 minutes ago",
        owner: "Janet Walters",
        score: 66,
        segments: ["Enterprise", "Renewal"]
      },
      {
        id: "con-4",
        name: "Priya Nadeem",
        title: "Support Lead",
        company: "Blue Ridge Energy",
        email: "priya@blueridge.energy",
        status: "Churn risk",
        lastSeen: "4 days ago",
        owner: "Derrick Wade",
        score: 48,
        segments: ["Enterprise", "At risk"]
      }
    ]
  },
  deals: {
    columns: [
      { id: "new", title: "New", target: "$240k" },
      { id: "qualified", title: "Qualified", target: "$380k" },
      { id: "proposal", title: "Proposal", target: "$510k" },
      { id: "won", title: "Won", target: "$1.1M" },
      { id: "lost", title: "Lost", target: "$190k" }
    ],
    deals: [
      {
        id: "deal-1",
        name: "SolarOne rollout",
        company: "SolarOne",
        amount: "$120k",
        owner: "Janet Walters",
        stage: "qualified",
        age: "12 days",
        probability: 0.45
      },
      {
        id: "deal-2",
        name: "Aether platform expansion",
        company: "Aether Labs",
        amount: "$210k",
        owner: "Miles Coleman",
        stage: "proposal",
        age: "8 days",
        probability: 0.6
      },
      {
        id: "deal-3",
        name: "Nova Analytics renewal",
        company: "Nova Analytics",
        amount: "$320k",
        owner: "Iris Shah",
        stage: "proposal",
        age: "4 days",
        probability: 0.68
      },
      {
        id: "deal-4",
        name: "Beacon logistics onboarding",
        company: "Beacon Logistics",
        amount: "$75k",
        owner: "Derrick Wade",
        stage: "new",
        age: "2 days",
        probability: 0.25
      },
      {
        id: "deal-5",
        name: "ACME robotics renewal",
        company: "ACME Robotics",
        amount: "$410k",
        owner: "Janet Walters",
        stage: "won",
        age: "45 days",
        probability: 1
      }
    ]
  },
  reports: {
    charts: [
      { id: "velocity", title: "Pipeline velocity", current: "28 days", prev: "34 days", delta: "+6", unit: "days faster" },
      { id: "conversion", title: "Stage conversion", current: "32%", prev: "27%", delta: "+5", unit: "pt" },
      { id: "expansion", title: "Expansion ARR", current: "$620k", prev: "$480k", delta: "+29", unit: "%" }
    ],
    table: [
      { id: "report-1", name: "Enterprise pipeline coverage", frequency: "Weekly", owner: "RevOps", viewers: 24 },
      { id: "report-2", name: "Renewal risk heatmap", frequency: "Daily", owner: "Customer Success", viewers: 31 },
      { id: "report-3", name: "Support deflection by AI", frequency: "Weekly", owner: "Support Ops", viewers: 18 }
    ]
  },
  chat: {
    threads: [
      {
        id: "chat-17",
        contact: "Lauren Pierce",
        channel: "Website",
        updatedAt: "3m ago",
        snippet: "Let me pull your usage report…",
        unread: 2,
        status: "Awaiting reply",
        priority: "High",
        assignedTo: "Miles Coleman"
      },
      {
        id: "chat-21",
        contact: "ACME Robotics",
        channel: "WhatsApp",
        updatedAt: "12m ago",
        snippet: "AI escalated: human follow-up needed",
        unread: 0,
        status: "Operator",
        priority: "Standard",
        assignedTo: "Iris Shah"
      },
      {
        id: "chat-22",
        contact: "Nova Analytics",
        channel: "Messenger",
        updatedAt: "24m ago",
        snippet: "Great, I'll share the deck",
        unread: 0,
        status: "Closed",
        priority: "Low",
        assignedTo: "AI"
      }
    ],
    messages: {
      "chat-17": [
        { id: "m1", sender: "contact", content: "Our executive demo is tomorrow, can we accelerate onboarding?", timestamp: "2024-11-21T14:04:00Z" },
        { id: "m2", sender: "ai", content: "Absolutely! Let me summarise the pending steps and assign the right agent.", timestamp: "2024-11-21T14:05:00Z" },
