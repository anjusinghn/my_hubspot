import { mockData } from "./mockData.js";
import { customAlphabet } from "nanoid";

const nanoId = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 10);

const deepClone = (value) => JSON.parse(JSON.stringify(value));

export class DataStore {
  constructor(seed = mockData) {
    this.state = deepClone(seed);
  }

  getDashboard() {
    return deepClone(this.state.dashboard);
  }

  getContacts() {
    return deepClone(this.state.contacts);
  }

  upsertContact(contact) {
    const existingIndex = this.state.contacts.rows.findIndex((item) => item.id === contact.id);
    if (existingIndex >= 0) {
      this.state.contacts.rows[existingIndex] = { ...this.state.contacts.rows[existingIndex], ...contact };
      return deepClone(this.state.contacts.rows[existingIndex]);
    }

    const created = { ...contact, id: contact.id || `con-${nanoId()}` };
    this.state.contacts.rows.unshift(created);
    this.state.contacts.summary.total += 1;
    return deepClone(created);
  }

  getDealsBoard() {
    return deepClone(this.state.deals);
  }

  moveDeal(dealId, stage) {
    const board = this.state.deals;
    let movedDeal = null;

    board.deals = board.deals.map((deal) => {
      if (deal.id === dealId) {
        movedDeal = { ...deal, stage };
        return movedDeal;
      }
      return deal;
    });

    if (!movedDeal) {
      throw new Error(`Deal ${dealId} not found`);
    }

    return deepClone(movedDeal);
  }

  getReports() {
    return deepClone(this.state.reports);
  }

  getChatThreads() {
    return deepClone(this.state.chat.threads);
  }

  getChatMessages(threadId) {
    return deepClone(this.state.chat.messages[threadId] || []);
  }

  addChatMessage(threadId, message) {
    if (!this.state.chat.messages[threadId]) {
      this.state.chat.messages[threadId] = [];
    }

    const payload = {
      id: message.id || `msg-${nanoId()}`,
      sender: message.sender || "agent",
      content: message.content,
      timestamp: message.timestamp || new Date().toISOString(),
    };

    this.state.chat.messages[threadId].push(payload);

    const threadIndex = this.state.chat.threads.findIndex((thread) => thread.id === threadId);
    if (threadIndex >= 0) {
      this.state.chat.threads[threadIndex] = {
        ...this.state.chat.threads[threadIndex],
        snippet: payload.content.slice(0, 120),
        updatedAt: "just now",
        unread: 0,
        status: payload.sender === "contact" ? "Awaiting reply" : "Replied",
      };
    }

    return deepClone(payload);
  }

  getQuickReplies() {
    return deepClone(this.state.chat.quickReplies);
  }

  getScheduler() {
    return deepClone(this.state.scheduler);
  }

  updateAvailability(nextAvailability) {
    this.state.scheduler.availability = deepClone(nextAvailability);
    return this.getScheduler();
  }

  getHelpdesk() {
    return deepClone(this.state.helpdesk);
  }

  getKnowledge() {
    return deepClone(this.state.knowledge);
  }

  upsertKnowledgeArticle(article) {
    const existingIndex = this.state.knowledge.articles.findIndex((item) => item.id === article.id);
    if (existingIndex >= 0) {
      this.state.knowledge.articles[existingIndex] = {
        ...this.state.knowledge.articles[existingIndex],
        ...article,
      };
      return deepClone(this.state.knowledge.articles[existingIndex]);
    }

    const created = {
      id: article.id || `KB-${nanoId()}`,
      status: "Draft",
      updatedAt: new Date().toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      ...article,
    };

    this.state.knowledge.articles.unshift(created);
    return deepClone(created);
  }

  getSettings() {
    return deepClone(this.state.settings);
  }
}

export const store = new DataStore();
