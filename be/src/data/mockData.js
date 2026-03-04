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
