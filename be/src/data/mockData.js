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
