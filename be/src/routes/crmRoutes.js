import { Router } from "express";
import { store } from "../data/store.js";

const router = Router();

const filterContacts = (contacts, { owner, view, search }) => {
  const query = search?.toLowerCase();
  return contacts.rows.filter((row) => {
    const matchesOwner = !owner || owner === "All" || row.owner === owner;
    let matchesView = true;
    switch (view) {
      case "Active":
        matchesView = row.status === "Active";
        break;
      case "Renewals":
        matchesView = row.segments.includes("Renewal");
        break;
      case "Expansion":
        matchesView = row.segments.includes("Expansion");
        break;
