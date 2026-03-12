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
