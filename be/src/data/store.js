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
